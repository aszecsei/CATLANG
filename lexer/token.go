package lexer

// TokenType describes what kind of token the lexer finds
type TokenType int

const (
	tok_start TokenType = iota

	EOF
	ILLEGAL

	lit_start
	BOOL
	IDENT
	INTEGER
	STRING
	CHAR
	lit_end

	op_start
	LPAREN
	RPAREN
	COLON

	ADD
	SUB
	MUL
	QUO
	REM

	ASSIGN

	AND
	OR
	COMPOSE

	EQL
	NEQ
	LT
	GT
	LTE
	GTE
	op_end

	key_start
	LET
	CONST
	NEW
	DELETE
	TYPEOF
	IS
	AS
	IN
	FUNCTION
	RETURN
	STRUCT
	TYPE
	ENUM
	SOA
	IMPORT
	EXPORT
	FROM
	FOR
	WHILE
	IF
	ELSE
	key_end

	tok_end
)

var tok_strings = map[TokenType]string{
	EOF:     "EOF",
	ILLEGAL: "Illegal",
	BOOL:    "Boolean",
	IDENT:   "Identifier",
	INTEGER: "Integer",
	STRING:  "String",
	CHAR:    "Character",
	LPAREN:  "(",
	RPAREN:  ")",
	COLON:   ":",
	ADD:     "+",
	SUB:     "-",
	MUL:     "*",
	QUO:     "/",
	REM:     "%",
	ASSIGN:  "=",
	AND:     "&&",
	OR:      "||",
	EQL:     "==",
	NEQ:     "!=",
	LT:      "<",
	GT:      ">",
	LTE:     "<=",
	GTE:     ">=",
}

func (t TokenType) IsLiteral() bool {
	return t > lit_start && t < lit_end
}

func (t TokenType) IsOperator() bool {
	return t > op_start && t < op_end
}

func (t TokenType) IsKeyword() bool {
	return t > key_start && t < key_end
}

func Lookup(str string) TokenType {
	if str == "true" || str == "false" {
		return BOOL
	}
	for t, s := range tok_strings {
		if s == str {
			return t
		}
	}
	return IDENT
}

func (t TokenType) String() string {
	return tok_strings[t]
}

func (t TokenType) Valid() bool {
	return t > tok_start && t < tok_end
}
