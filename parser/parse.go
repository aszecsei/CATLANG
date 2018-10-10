package ast

import (
	"fmt"
	"io/ioutil"
	"os"
	"path/filepath"

	"github.com/aszecsei/catlang/ast"
	"github.com/aszecsei/catlang/lexer"
	"github.com/aszecsei/catlang/token"
)

func ParseFile(fset *token.FileSet, filename, src string) (*ast.File, error) {
	if src == "" {
		fi, err := os.Stat(filename)
		if err != nil {
			return nil, err
		}

		if ext := filepath.Ext(fi.Name()); ext != ".cat" {
			return nil, fmt.Errorf("unknown file extension, must be .cat")
		}
		b, err := ioutil.ReadFile(filename)
		if err != nil {
			return nil, err
		}
		src = string(b)
	}
	file := fset.Add(filepath.Base(filename), src)
	var p parser
	p.init(file, filename, src, ast.NewScope(nil))
	f := p.parseFile()

	if p.errors.Count() > 0 {
		return nil, p.errors
	}

	return f, nil
}

type parser struct {
	file    *token.File
	errors  token.ErrorList
	scanner lexer.Scanner
	listok  bool

	curScope *ast.Scope
	topScope *ast.Scope
}

/* Utility */

func (p *parser) addError(args ...interface{}) {
	p.errors.Add(p.file.Position(p.scanner.CurrentLexeme().Position), args...)
}

func (p *parser) expect(tok token.TokenType) token.Pos {
	cur := p.scanner.CurrentLexeme()
	if cur.Type != tok {
		p.addError("Expected '" + tok.String() + "' but got '" + cur.Literal + "'")
		return cur.Position
	}
	defer p.next()
	return cur.Position
}

func (p *parser) init(file *token.File, fname, src string, s *ast.Scope) {
	if s == nil {
		s = ast.NewScope(nil)
	}
	p.file = file
	p.scanner.Init(p.file, src)
	p.listok = false
	p.curScope = s
	p.topScope = s
	p.next()
}

func (p *parser) next() {
	p.scanner.Advance()
}

func (p *parser) openScope() {
	p.curScope = ast.NewScope(p.curScope)
}

func (p *parser) closeScope() {
	p.curScope = p.curScope.Parent
}

/* Parsing */

func (p *parser) parseFile() *ast.File {
	b := p.parseBlock()
	defer p.expect(token.EOF)
	return &ast.File{
		Block: b,
	}
}

func isDeclarationStarter(t token.TokenType) bool {
	return t == token.EXPORT ||
				 t == token.CONST ||
				 t == token.TYPEDEF ||
				 t == token.LET ||
				 t == token.FUNCTION ||
				 t == token.STRUCT ||
				 t == token.ENUM
}

func (p *parser) parseBlock() *ast.Block {
	elems := make([]ast.BlockElement, 0)
	begin := p.scanner.CurrentLexeme().Position
	for p.scanner.CurrentLexeme().Type != token.EOF || p.scanner.CurrentLexeme().Type != token.RCURLYB {
		cur := p.scanner.CurrentLexeme()
		var elem ast.BlockElement
		if isDeclarationStarter(cur.Type) {
			elem = p.parseDeclaration()
		} else {
			elem = p.parseStatement()
		}
		elems = append(elems, elem)
		p.expect(token.SEMICOLON)
	}
	return &ast.Block{
		Elements: elems,
		Opening: begin,
	}
}

func (p *parser) parseDeclaration() *ast.Declaration {
	cur := p.scanner.CurrentLexeme()
	d := &ast.Declaration{}
	if cur.Type == token.EXPORT {
		d.IsExported = true
		p.next()
	}
	d.Declarator = p.parseDeclarator()
	return d
}

func (p *parser) parseDeclarator() ast.Decl {
	cur := p.scanner.CurrentLexeme()
	switch cur.Type {
	case token.CONST:
		return p.parseConstDeclarator()
	case token.TYPEDEF:
		return p.parseTypeDeclarator()
	case token.LET:
		return p.parseVariableDeclarator()
	case token.FUNCTION:
		return p.parseFunctionDeclarator()
	case token.STRUCT:
		return p.parseStructDeclarator()
	case token.ENUM:
		return p.parseEnumDeclarator()
	default:
		p.addError("Expected a declarator; got '" + cur.Literal + "'")
		return nil
	}
}

func (p *parser) parseConstDeclarator() *ast.ConstantDeclarator {
	constPos := p.expect(token.CONST)
	ident := p.parseIdentifier()
	equalsPos := p.expect(token.ASSIGN)
	expr := p.parseExpression()

	return &ast.ConstantDeclarator{
		ConstPos: constPos,
		Declarator: ast.Declarator{
			Name: ident,
		},
		EqualsPos: equalsPos,
		Value: expr,
	}
}

func (p *parser) parseTypeDeclarator() *ast.TypeDeclarator {
	typedefPos := p.expect(token.TYPEDEF)
	ident := p.parseIdentifier()
	equalsPos := p.expect(token.ASSIGN)
	assignedType := p.parseType()

	return &ast.TypeDeclarator{
		TypedefPos: typedefPos,
		Declarator: ast.Declarator{
			Name: ident,
		},
		EqualsPos: equalsPos,
		Type: assignedType,
	}
}

func (p *parser) parseVariableDeclarator() *ast.VariableDeclarator {
	letPos := p.expect(token.LET)
	ident := p.parseIdentifier()
	var colonPos token.Pos
	var varType ast.Type

	// Optional type specification
	if p.scanner.CurrentLexeme().Type == token.COLON {
		colonPos = p.expect(token.COLON)
		varType = p.parseType()
	} else {
		colonPos = token.NoPos
		varType = nil
	}

	var equalsPos token.Pos
	var value ast.Expr
	// Optional value initialization
	if p.scanner.CurrentLexeme().Type == token.ASSIGN {
		equalsPos = p.expect(token.ASSIGN)
		value = p.parseExpression()
	} else {
		equalsPos = token.NoPos
		value = nil
	}

	return &ast.VariableDeclarator{
		LetPos: letPos,
		Declarator: ast.Declarator{
			Name: ident,
		},
		ColonPos: colonPos,
		Type: varType,
		EqualsPos: equalsPos,
		Value: value,
	}
}

func (p *parser) parseFunctionDeclarator() *ast.FunctionDeclarator {
	funcPos := p.expect(token.FUNCTION)
	functionName := p.parseIdentifier()
	params := p.parseFormalParameterList()
	openCurl := p.expect(token.LCURLYB)
	block := p.parseBlock()
	closeCurl := p.expect(token.RCURLYB)

	return &ast.FunctionDeclarator{
		FunctionPos: funcPos,
		Declarator: ast.Declarator{
			Name: functionName,
		},
		Params: params,
		OpenBlock: openCurl,
		Block: block,
		CloseBlock: closeCurl,
	}
}

func (p *parser) parseFormalParameterList() *ast.FormalParameterList {
	open := p.expect(token.LPAREN)
	params := make([]*ast.Parameter, 0)
	for p.scanner.CurrentLexeme().Type != token.RPAREN {
		param := p.parseParameter()
		if p.scanner.CurrentLexeme().Type != token.RPAREN {
			p.expect(token.COMMA)
		}
		params = append(params, param)
	}
	close := p.expect(token.RPAREN)
	
	return &ast.FormalParameterList{
		Open: open,
		Parameters: params,
		Close: close,
	}
}

// TODO: Constant parameters
func (p *parser) parseParameter() *ast.Parameter {
	name := p.parseIdentifier()
	colonPos := p.expect(token.COLON)
	paramType := p.parseType()

	return &ast.Parameter{
		Name: name,
		ColonPos: colonPos,
		Type: paramType,
	}
}

func (p *parser) parseStructDeclarator() *ast.StructDeclarator {
	structPos := p.expect(token.STRUCT)
	name := p.parseIdentifier()
	members := p.parseStructMembers()

	return &ast.StructDeclarator{
		StructPos: structPos,
		Declarator: ast.Declarator{
			Name: name,
		},
		Members: members,
	}
}

func (p *parser) parseStructMembers() *ast.StructMemberList {
	openCurl := p.expect(token.LCURLYB)
	members := make([]*ast.StructMember, 0)
	for p.scanner.CurrentLexeme().Type != token.RCURLYB {
		member := p.parseStructMember()
		members = append(members, member)
		p.expect(token.SEMICOLON)
	}
	closeCurl := p.expect(token.RCURLYB)

	return &ast.StructMemberList{
		Open: openCurl,
		Members: members,
		Close: closeCurl,
	}
}

func (p *parser) parseStructMember() *ast.StructMember {
	name := p.parseIdentifier()
	colonPos := p.expect(token.COLON)

	isOwned := false
	if p.scanner.CurrentLexeme().Type == token.OWNED {
		isOwned = true
		p.expect(token.OWNED)
	}

	memberType := p.parseType()

	var initialValue ast.Expr
	initialValue = nil
	if p.scanner.CurrentLexeme().Type == token.ASSIGN {
		p.expect(token.ASSIGN)
		initialValue = p.parseExpression()
	}

	return &ast.StructMember{
		Name: name,
		ColonPos: colonPos,
		IsOwned: isOwned,
		Type: memberType,
		InitialValue: initialValue,
	}
}

func (p *parser) parseEnumDeclarator() *ast.EnumDeclarator {
	enumPos := p.expect(token.ENUM)
	ident := p.parseIdentifier()
	values := p.parseEnumValueList()

	return &ast.EnumDeclarator{
		EnumPos: enumPos,
		Declarator: ast.Declarator{
			Name: ident,
		},
		Values: values,
	}
}

func (p *parser) parseEnumValueList() *ast.EnumValueList {
	openPos := p.expect(token.LCURLYB)
	values := make([]*ast.Ident, 0)
	for p.scanner.CurrentLexeme().Type != token.RCURLYB {
		v := p.parseIdentifier()
		values = append(values, v)
	}
	closePos := p.expect(token.RCURLYB)

	return &ast.EnumValueList{
		Open: openPos,
		Values: values,
		Close: closePos,
	}
}

func (p *parser) parseStatement() ast.Stmt {
	switch p.scanner.CurrentLexeme().Type {
	case token.IMPORT:
		return p.parseImport()
	case token.LCURLYB:
		return p.parseInnerBlock()
	case token.IF:
		return p.parseIf()
	case token.FOR:
		// TODO: Determine for loop vs for-in loop
		return p.parseFor()
	case token.WHILE:
		return p.parseWhile()
	case token.DO:
		return p.parseDoWhile()
	case token.BREAK:
		return p.parseJumpStatement()
	case token.CONTINUE:
		return p.parseJumpStatement()
	case token.RETURN:
		return p.parseJumpStatement()
	default:
		return p.parseExpression()
	}
}

func (p *parser) parseImport() *ast.ImportStatement {
	importPos := p.expect(token.IMPORT)
	imports := p.parseImportList()
	fromPos := p.expect(token.FROM)
	path := p.parseStringLiteral()

	return &ast.ImportStatement{
		Import: importPos,
		ImportList: imports,
		From: fromPos,
		Path: path,
	}
}

func (p *parser) parseImportList() *ast.ImportList {
	vals := make([]*ast.ImportIdent, 0)
	v := p.parseImportIdent()
	vals = append(vals, v)
	for p.scanner.CurrentLexeme().Type == token.COMMA {
		p.expect(token.COMMA)
		x := p.parseImportIdent()
		vals = append(vals, x)
	}

	return &ast.ImportList{
		Names: vals,
	}
}

func (p *parser) parseImportIdent() *ast.ImportIdent {
	old := p.parseIdentifier()
	asPos := token.NoPos
	var newName *ast.Ident
	newName = nil
	if old.Name == "*" || p.scanner.CurrentLexeme().Type == token.AS {
		asPos = p.expect(token.AS)
		newName = p.parseIdentifier()
	}
	return &ast.ImportIdent{
		OldName: old,
		As: asPos,
		NewName: newName,
	}
}

func (p *parser) parseInnerBlock() *ast.InnerBlock {
	open := p.expect(token.LCURLYB)
	block := p.parseBlock()
	close := p.expect(token.RCURLYB)

	return &ast.InnerBlock{
		Open: open,
		Block: block,
		Close: close,
	}
}

func (p *parser) parseIf() *ast.If {
	ifPos := p.expect(token.IF)
	p.expect(token.LPAREN)
	condition := p.parseExpression()
	p.expect(token.RPAREN)
	p.expect(token.LCURLYB)
	block := p.parseBlock()
	p.expect(token.RCURLYB)
	var elseCond ast.Cond
	elseCond = nil
	if p.scanner.CurrentLexeme().Type == token.ELSE {
		if p.scanner.NextLexeme().Type == token.IF {
			// else if
			p.expect(token.ELSE)
			elseCond = p.parseIf()
		} else {
			// final else
			elseCond = p.parseElse()
		}
	}

	return &ast.If{
		If: ifPos,
		Cond: condition,
		Then: block,
		Else: elseCond,
	}
}

func (p *parser) parseElse() *ast.Else {
	elsePos := p.expect(token.ELSE)
	p.expect(token.LCURLYB)
	block := p.parseBlock()
	p.expect(token.RCURLYB)
	
	return &ast.Else{
		Else: elsePos,
		Block: block,
	}
}

func (p *parser) parseFor() *ast.ForLoop {
	forPos := p.expect(token.FOR)
	p.expect(token.LPAREN)

	var initial, condition, step ast.Expr
	initial = nil
	condition = nil
	step = nil

	if p.scanner.CurrentLexeme().Type != token.SEMICOLON {
		initial = p.parseExpression()
	}
	p.expect(token.SEMICOLON)
	if p.scanner.CurrentLexeme().Type != token.SEMICOLON {
		condition = p.parseExpression()
	}
	p.expect(token.SEMICOLON)
	if p.scanner.CurrentLexeme().Type != token.SEMICOLON {
		step = p.parseExpression()
	}
	p.expect(token.SEMICOLON)

	p.expect(token.RPAREN)
	p.expect(token.LCURLYB)
	block := p.parseBlock()
	p.expect(token.RCURLYB)

	return &ast.ForLoop{
		For: forPos,
		Initial: initial,
		Condition: condition,
		Step: step,
		Block: block,
	}
}

func (p *parser) parseWhile() *ast.WhileLoop {
	// TODO
	return nil
}

func (p *parser) parseDoWhile() *ast.DoWhileLoop {
	// TODO
	return nil
}

func (p *parser) parseJumpStatement() *ast.JumpStatement {
	// TODO
	return nil
}

func (p *parser) parseExpression() ast.Expr {
	// TODO
	return nil
}

func (p *parser) parseType() ast.Type {
	// TODO
	return nil
}

func (p *parser) parseStringLiteral() *ast.StringLiteral {
	lit := p.scanner.CurrentLexeme().Literal
	pos := p.expect(token.STRING)
	return &ast.StringLiteral{
		BasicLiteral: ast.BasicLiteral{
			LitPos: pos,
			Kind: token.STRING,
			Lit: lit,
		},
		Value: lit,
	}
}

func (p *parser) parseIdentifier() *ast.Ident {
	name := p.scanner.CurrentLexeme().Literal
	return &ast.Ident{
		NamePos: p.expect(token.IDENT),
		Name: name,
	}
}