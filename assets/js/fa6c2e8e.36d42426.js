(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),l=(n(0),n(114)),i={id:"types",title:"Types",sidebar_label:"Types"},b={unversionedId:"types",id:"types",isDocsHomePage:!1,title:"Types",description:"Catlang is statically-typed; every expression has a type.",source:"@site/docs/types.md",slug:"/types",permalink:"/catlang/docs/types",editUrl:"https://github.com/aszecsei/catlang/edit/master/website/docs/types.md",version:"current",sidebar_label:"Types",sidebar:"docs",previous:{title:"Syntax",permalink:"/catlang/docs/syntax"},next:{title:"Arrays",permalink:"/catlang/docs/arrays"}},o=[{value:"Basic Data Types",id:"basic-data-types",children:[{value:"Integer Numbers",id:"integer-numbers",children:[]},{value:"Booleans",id:"booleans",children:[]},{value:"Floating-Point",id:"floating-point",children:[]},{value:"Unvalued",id:"unvalued",children:[]},{value:"Miscellaneous",id:"miscellaneous",children:[]}]},{value:"Derived Data Types",id:"derived-data-types",children:[{value:"Pointer",id:"pointer",children:[]},{value:"Static Array",id:"static-array",children:[]},{value:"Dynamic Array",id:"dynamic-array",children:[]},{value:"Functions",id:"functions",children:[]}]},{value:"User-Defined Types",id:"user-defined-types",children:[]},{value:"Type Conversions",id:"type-conversions",children:[{value:"Integer Promotions",id:"integer-promotions",children:[]},{value:"Usual Arithmetic Conversions",id:"usual-arithmetic-conversions",children:[]}]},{value:"Aliased Types",id:"aliased-types",children:[{value:"size_t",id:"size_t",children:[]},{value:"ptrdiff_t",id:"ptrdiff_t",children:[]},{value:"Strings",id:"strings",children:[]}]},{value:"Type Modifiers",id:"type-modifiers",children:[{value:"Const Types",id:"const-types",children:[]},{value:"Volatile Types",id:"volatile-types",children:[]}]},{value:"Type Definitions",id:"type-definitions",children:[]},{value:"Any",id:"any",children:[]},{value:"Optionals",id:"optionals",children:[]},{value:"Tuples",id:"tuples",children:[]},{value:"Type Inference",id:"type-inference",children:[{value:"Best Common Type",id:"best-common-type",children:[]},{value:"Contextual Typing",id:"contextual-typing",children:[]}]}],c={toc:o};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Catlang is statically-typed; every expression has a type."),Object(l.b)("h2",{id:"basic-data-types"},"Basic Data Types"),Object(l.b)("h3",{id:"integer-numbers"},"Integer Numbers"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Keyword"),Object(l.b)("th",{parentName:"tr",align:null},"Default Value"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"s8")),Object(l.b)("td",{parentName:"tr",align:null},"0"),Object(l.b)("td",{parentName:"tr",align:null},"signed 8 bits")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"u8")),Object(l.b)("td",{parentName:"tr",align:null},"0"),Object(l.b)("td",{parentName:"tr",align:null},"unsigned 8 bits")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"s16")),Object(l.b)("td",{parentName:"tr",align:null},"0"),Object(l.b)("td",{parentName:"tr",align:null},"signed 16 bits")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"u16")),Object(l.b)("td",{parentName:"tr",align:null},"0"),Object(l.b)("td",{parentName:"tr",align:null},"unsigned 16 bits")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"s32")),Object(l.b)("td",{parentName:"tr",align:null},"0"),Object(l.b)("td",{parentName:"tr",align:null},"signed 32 bits")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"u32")),Object(l.b)("td",{parentName:"tr",align:null},"0"),Object(l.b)("td",{parentName:"tr",align:null},"unsigned 32 bits")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"s64")),Object(l.b)("td",{parentName:"tr",align:null},"0"),Object(l.b)("td",{parentName:"tr",align:null},"signed 64 bits")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"u64")),Object(l.b)("td",{parentName:"tr",align:null},"0"),Object(l.b)("td",{parentName:"tr",align:null},"unsigned 64 bits")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"s128")),Object(l.b)("td",{parentName:"tr",align:null},"0"),Object(l.b)("td",{parentName:"tr",align:null},"signed 128 bits")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"u128")),Object(l.b)("td",{parentName:"tr",align:null},"0"),Object(l.b)("td",{parentName:"tr",align:null},"unsigned 128 bits")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"char")),Object(l.b)("td",{parentName:"tr",align:null},"'xFF'"),Object(l.b)("td",{parentName:"tr",align:null},"unsigned 8 bit (UTF-8 code unit)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"short")),Object(l.b)("td",{parentName:"tr",align:null},"0"),Object(l.b)("td",{parentName:"tr",align:null},"equivalent to ",Object(l.b)("inlineCode",{parentName:"td"},"s16"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"int")),Object(l.b)("td",{parentName:"tr",align:null},"0"),Object(l.b)("td",{parentName:"tr",align:null},"equivalent to ",Object(l.b)("inlineCode",{parentName:"td"},"s32"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"long")),Object(l.b)("td",{parentName:"tr",align:null},"0"),Object(l.b)("td",{parentName:"tr",align:null},"equivalent to ",Object(l.b)("inlineCode",{parentName:"td"},"s64"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"c_short")),Object(l.b)("td",{parentName:"tr",align:null},"0"),Object(l.b)("td",{parentName:"tr",align:null},"for ABI compatibility with C")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"c_ushort")),Object(l.b)("td",{parentName:"tr",align:null},"0"),Object(l.b)("td",{parentName:"tr",align:null},"for ABI compatibility with C")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"c_int")),Object(l.b)("td",{parentName:"tr",align:null},"0"),Object(l.b)("td",{parentName:"tr",align:null},"for ABI compatibility with C")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"c_uint")),Object(l.b)("td",{parentName:"tr",align:null},"0"),Object(l.b)("td",{parentName:"tr",align:null},"for ABI compatibility with C")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"c_long")),Object(l.b)("td",{parentName:"tr",align:null},"0"),Object(l.b)("td",{parentName:"tr",align:null},"for ABI compatibility with C")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"c_ulong")),Object(l.b)("td",{parentName:"tr",align:null},"0"),Object(l.b)("td",{parentName:"tr",align:null},"for ABI compatibility with C")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"c_longlong")),Object(l.b)("td",{parentName:"tr",align:null},"0"),Object(l.b)("td",{parentName:"tr",align:null},"for ABI compatibility with C")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"c_ulonglong")),Object(l.b)("td",{parentName:"tr",align:null},"0"),Object(l.b)("td",{parentName:"tr",align:null},"for ABI compatibility with C")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"c_longdouble")),Object(l.b)("td",{parentName:"tr",align:null},"0"),Object(l.b)("td",{parentName:"tr",align:null},"for ABI compatibility with C")))),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"Unless a type is specified, numbers are assumed to be the smallest type that can store the literal."),Object(l.b)("pre",{parentName:"div"},Object(l.b)("code",{parentName:"pre",className:"language-catlang"},"const a = 128; // u8\nconst b = 128.0; // f32\nconst c = 123.; // f32\nconst d: f64 = 128; // f64\nconst e = 128 as f32; // f32\n")))),Object(l.b)("h3",{id:"booleans"},"Booleans"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Keyword"),Object(l.b)("th",{parentName:"tr",align:null},"Default Value"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"bool")),Object(l.b)("td",{parentName:"tr",align:null},"false"),Object(l.b)("td",{parentName:"tr",align:null},"boolean value")))),Object(l.b)("h3",{id:"floating-point"},"Floating-Point"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Keyword"),Object(l.b)("th",{parentName:"tr",align:null},"Default Value"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"f32")),Object(l.b)("td",{parentName:"tr",align:null},"0"),Object(l.b)("td",{parentName:"tr",align:null},"32-bit floating point")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"f64")),Object(l.b)("td",{parentName:"tr",align:null},"0"),Object(l.b)("td",{parentName:"tr",align:null},"64-bit floating point")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"float")),Object(l.b)("td",{parentName:"tr",align:null},"0"),Object(l.b)("td",{parentName:"tr",align:null},"equivalent to ",Object(l.b)("inlineCode",{parentName:"td"},"f32"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"double")),Object(l.b)("td",{parentName:"tr",align:null},"0"),Object(l.b)("td",{parentName:"tr",align:null},"equivalent to ",Object(l.b)("inlineCode",{parentName:"td"},"f64"))))),Object(l.b)("h3",{id:"unvalued"},"Unvalued"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Keyword"),Object(l.b)("th",{parentName:"tr",align:null},"Default Value"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"null")),Object(l.b)("td",{parentName:"tr",align:null},"N/A"),Object(l.b)("td",{parentName:"tr",align:null},"null has no value")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"c_void")),Object(l.b)("td",{parentName:"tr",align:null},"N/A"),Object(l.b)("td",{parentName:"tr",align:null},"for ABI compatibility with C")))),Object(l.b)("h3",{id:"miscellaneous"},"Miscellaneous"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Keyword"),Object(l.b)("th",{parentName:"tr",align:null},"Default Value"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"type")),Object(l.b)("td",{parentName:"tr",align:null},"N/A"),Object(l.b)("td",{parentName:"tr",align:null},"represents a type")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"any")),Object(l.b)("td",{parentName:"tr",align:null},"N/A"),Object(l.b)("td",{parentName:"tr",align:null},"escape the type system")))),Object(l.b)("h2",{id:"derived-data-types"},"Derived Data Types"),Object(l.b)("h3",{id:"pointer"},"Pointer"),Object(l.b)("p",null,"Pointer types are prefixed with a ",Object(l.b)("inlineCode",{parentName:"p"},"*"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-catlang"},"let i: *int = @myInt;\n")),Object(l.b)("p",null,"Pointers cannot be ",Object(l.b)("inlineCode",{parentName:"p"},"null"),". To use a null pointer, it must be of type ",Object(l.b)("inlineCode",{parentName:"p"},"*T?"),". The size of an optional pointer is guaranteed to be the same as the size of the pointer, and the value of the null pointer is guaranteed to be 0."),Object(l.b)("p",null,"To retrieve the pointer to an object, use the ",Object(l.b)("inlineCode",{parentName:"p"},"@")," operator. To dereference a pointer, use the ",Object(l.b)("inlineCode",{parentName:"p"},"*")," operator."),Object(l.b)("p",null,"Functions can be called on pointers the same way they can on standard objects - there's no need for C++'s arrow operator."),Object(l.b)("h3",{id:"static-array"},"Static Array"),Object(l.b)("p",null,"See ",Object(l.b)("a",{parentName:"p",href:"arrays"},"Arrays"),"."),Object(l.b)("h3",{id:"dynamic-array"},"Dynamic Array"),Object(l.b)("p",null,"See ",Object(l.b)("a",{parentName:"p",href:"arrays"},"Arrays"),"."),Object(l.b)("h3",{id:"functions"},"Functions"),Object(l.b)("p",null,"See ",Object(l.b)("a",{parentName:"p",href:"functions"},"Functions"),"."),Object(l.b)("h2",{id:"user-defined-types"},"User-Defined Types"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"enums"},"Enums")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"structs"},"Structs")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"unions"},"Unions")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"interfaces"},"Interfaces"))),Object(l.b)("h2",{id:"type-conversions"},"Type Conversions"),Object(l.b)("h3",{id:"integer-promotions"},"Integer Promotions"),Object(l.b)("p",null,"Integer promotions are conversions of the following types:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"from"),Object(l.b)("th",{parentName:"tr",align:null},"to"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"bool")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"s32"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"s8")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"s32"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"u8")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"s32"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"s16")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"s32"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"u16")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"s32"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"char")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"s32"))))),Object(l.b)("p",null,"If an enum has as a base type one of the types in the left column, it is converted to the type in the right column."),Object(l.b)("h3",{id:"usual-arithmetic-conversions"},"Usual Arithmetic Conversions"),Object(l.b)("p",null,"The usual arithmetic conversions convert operands of binary operators to a common type. The operands must already be of arithmetic types. The following rules are applied in order, looking at the base type:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"If either operand is ",Object(l.b)("inlineCode",{parentName:"li"},"f64"),", the other operand is converted to ",Object(l.b)("inlineCode",{parentName:"li"},"f64"),"."),Object(l.b)("li",{parentName:"ol"},"Else if either operand is ",Object(l.b)("inlineCode",{parentName:"li"},"f32"),", the other operand is converted to ",Object(l.b)("inlineCode",{parentName:"li"},"f32"),"."),Object(l.b)("li",{parentName:"ol"},"Else the integer promotions are done on each operand, followed by:",Object(l.b)("ol",{parentName:"li"},Object(l.b)("li",{parentName:"ol"},"If both are the same type, no more conversions are done."),Object(l.b)("li",{parentName:"ol"},"If both are signed or both are unsigned, the smaller type is converted to the larger."),Object(l.b)("li",{parentName:"ol"},"If the signed type is larger than the unsigned type, the unsigned type is converted to the signed type."),Object(l.b)("li",{parentName:"ol"},"The signed type is converted to the unsigned type.")))),Object(l.b)("h2",{id:"aliased-types"},"Aliased Types"),Object(l.b)("h3",{id:"size_t"},"size_t"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"size_t")," is an alias to one of the unsigned integral basic types, and represents a type that is large enough to represent an offset into all addressable memory."),Object(l.b)("h3",{id:"ptrdiff_t"},"ptrdiff_t"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"ptrdiff_t")," is an alias to the signed integral basic type the same size as ",Object(l.b)("inlineCode",{parentName:"p"},"size_t"),"."),Object(l.b)("h3",{id:"strings"},"Strings"),Object(l.b)("p",null,"Catlang uses the C-style convention that character literals are wrapped with single quotes, while string literals are wrapped with double quotes:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-catlang"},"const a = 'a'; // char\nconst b = \"a\"; // string\nconst c = \"abc\"; // string\nconst d = 'abc'; // ERROR!\n")),Object(l.b)("p",null,"A notable feature of the language is string interpolation:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-catlang"},'let name = "";\nprint("Enter your name: ");\nreadLine(name);\nprint("Hello, ${name}!\\n");\n')),Object(l.b)("h2",{id:"type-modifiers"},"Type Modifiers"),Object(l.b)("h3",{id:"const-types"},"Const Types"),Object(l.b)("p",null,"Types can be marked as const to indicate that they are immutable. This attribute is applied to any ",Object(l.b)("inlineCode",{parentName:"p"},"const")," declarations; for example, in"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-catlang"},"const x: int = 0;\n")),Object(l.b)("p",null,"The type of ",Object(l.b)("inlineCode",{parentName:"p"},"x")," is ",Object(l.b)("inlineCode",{parentName:"p"},"const int"),". This normally has no impact when passing ",Object(l.b)("inlineCode",{parentName:"p"},"x")," to functions, as pass-by-value copying means that the ",Object(l.b)("inlineCode",{parentName:"p"},"const")," attribute can be safely removed:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-catlang"},"function timesTwo(a: int) -> int {\n  return a * 2;\n}\n\nconst x: int = 16;\nlet y = timesTwo(x);\n")),Object(l.b)("p",null,"However, if a pointer to ",Object(l.b)("inlineCode",{parentName:"p"},"x")," were to be passed, that type would be ",Object(l.b)("inlineCode",{parentName:"p"},"*const int"),", which would restrict modifications to ",Object(l.b)("inlineCode",{parentName:"p"},"x"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-catlang"},"function timesTwo(a: *int) -> {\n  *a *= 2;\n}\n\nconst x: int = 16;\ntimesTwo(@x); // ERROR!\n")),Object(l.b)("h3",{id:"volatile-types"},"Volatile Types"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"volatile")," type modifier indicates to the compiler that variables of this type may be modified by external sources, most commonly via memory-mapped I/O or multithreading."),Object(l.b)("h2",{id:"type-definitions"},"Type Definitions"),Object(l.b)("p",null,"Catlang allows users to write shorthands to refer to complex types. For example:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-catlang"},"type number = s8 | u8 | s16 | u16 | s32 | u32 | s64 | u64 | f32 | f64;\nconst genericFunction = (input: number) -> {\n  return input * 2;\n}\n")),Object(l.b)("h2",{id:"any"},"Any"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"any")," type is the equivalent of C's ",Object(l.b)("inlineCode",{parentName:"p"},"void*")," type. It can be used to escape Catlang's type system - ",Object(l.b)("inlineCode",{parentName:"p"},"any")," types can be cast to any type without any analysis. Note that this will ",Object(l.b)("em",{parentName:"p"},"not")," perform any transformations on numeric types - a ",Object(l.b)("inlineCode",{parentName:"p"},"float")," cast to ",Object(l.b)("inlineCode",{parentName:"p"},"any")," and then cast to ",Object(l.b)("inlineCode",{parentName:"p"},"int")," will be an integer representation of the bits of that float, which is unlikely to be the desired behavior of such a casting operation. Be very careful when using this feature!"),Object(l.b)("h2",{id:"optionals"},"Optionals"),Object(l.b)("p",null,'Catlang includes an "optional" type, equivalent to ',Object(l.b)("inlineCode",{parentName:"p"},"type | null"),", to help avoid null-pointer exceptions. Any function that requires a non-Optional value must be enclosed in a conditional to ensure that the Optional value exists, or an error will be thrown."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-catlang"},'const myPrint = (num: ?int) -> {\n  if (num) {\n    print(num);\n  } else {\n    print("Nope!");\n  }\n}\n')),Object(l.b)("p",null,"If a user wishes to force-unwrap an optional value, they can use the null-forgiving (",Object(l.b)("inlineCode",{parentName:"p"},"!"),") operation to do so. This is not recommended as it may lead to null-pointer exceptions."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-catlang"},"const myPrint = (num: ?int) -> {\n  print(num!);\n}\n")),Object(l.b)("p",null,"To reduce if-statements, null-coalescing and null-conditional operators are provided."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-catlang"},"const myPrint = (obj: ?MyStruct) -> {\n   // This:\n  if (obj) {\n    obj.DoMethod();\n  }\n  // is equivalent to this using the null-conditional operator:\n  obj?.DoMethod();\n\n  // And this:\n  if (!obj) {\n    obj = defaultValue;\n  }\n  // is equivalent to this using the null coalescing assignment operator\n  obj ??= defaultValue;\n}\n")),Object(l.b)("h2",{id:"tuples"},"Tuples"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"TODO")),Object(l.b)("h2",{id:"type-inference"},"Type Inference"),Object(l.b)("p",null,"Catlang does its best to infer type information where appropriate. For example, in this code"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-catlang"},"let x = 3;\n")),Object(l.b)("p",null,"The type of the ",Object(l.b)("inlineCode",{parentName:"p"},"x")," variable is inferred to be ",Object(l.b)("inlineCode",{parentName:"p"},"s32"),". This kind of inference takes place when initializing variables, creating arrays, and determining function return types."),Object(l.b)("p",null,"In most cases, type inference is straightforward. In the following sections, we'll explore some of the nuances in how type inference occurs."),Object(l.b)("h3",{id:"best-common-type"},"Best Common Type"),Object(l.b)("p",null,'When multiple types are in use, Catlang attempts to find a "best common type" for those types. This usually creates the smallest type union possible to encompass all values used. For example, in this code'),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-catlang"},"let x = [] { 1, 2, null };\n")),Object(l.b)("p",null,"The type of the ",Object(l.b)("inlineCode",{parentName:"p"},"x")," variable would be inferred to be ",Object(l.b)("inlineCode",{parentName:"p"},"[](int | null)")," - or, equivalently, ",Object(l.b)("inlineCode",{parentName:"p"},"[](?int)"),"."),Object(l.b)("h3",{id:"contextual-typing"},"Contextual Typing"),Object(l.b)("p",null,"In some cases, type inference can occur in the opposite direction - that is, the declared type influences the type of the expression. For example:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-catlang"},"function floatMap(fun: (f32) -> float, arr: []f32) -> []f32 {\n  let res = new [arr.length]f32;\n  for (i = 0; i < arr.length; ++i) {\n    res[i] = fun(arr[i]);\n  }\n  return res;\n}\n\nfloatMap((f) -> {\n  return f * 2;\n}, [] { 2.4, 3 })\n")),Object(l.b)("p",null,"Catlang is able to infer two things that it normally would not do: first, that the argument ",Object(l.b)("inlineCode",{parentName:"p"},"f")," in the anonymous function argument is a ",Object(l.b)("inlineCode",{parentName:"p"},"f32")," type, and second, that the value ",Object(l.b)("inlineCode",{parentName:"p"},"3")," in the array argument should be considered ",Object(l.b)("inlineCode",{parentName:"p"},"f32")," type."),Object(l.b)("p",null,"Without the contextual information provided, Catlang would throw an error regarding the lack of type information for the ",Object(l.b)("inlineCode",{parentName:"p"},"f")," argument, and would interpret the array as being of type ",Object(l.b)("inlineCode",{parentName:"p"},"[](int | float)"),"."))}p.isMDXComponent=!0},114:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,u=d["".concat(i,".").concat(m)]||d[m]||s[m]||l;return n?r.a.createElement(u,b(b({ref:t},c),{},{components:n})):r.a.createElement(u,b({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:a,i[1]=b;for(var c=2;c<l;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);