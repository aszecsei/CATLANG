(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{106:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return d}));var n=r(3),a=r(7),o=(r(0),r(114)),i={title:"Roadmap",author:"Alic Szecsei",authorURL:"https://alic-szecsei.com/",authorImageURL:"https://alic-szecsei.com/img/profile2.png"},s={permalink:"/catlang/blog/2018/12/16/roadmap",editUrl:"https://github.com/aszecsei/catlang/edit/master/website/blog/2018-12-16-roadmap.md",source:"@site/blog/2018-12-16-roadmap.md",description:"We're fast approaching the release of version 0.1! The lexer and parser are mostly complete, barring a few additional features. In this post, I'll talk about how far the compiler has come - and where continued efforts are going.",date:"2018-12-16T00:00:00.000Z",formattedDate:"December 15, 2018",tags:[],title:"Roadmap",readingTime:2.95,truncated:!0,nextItem:{title:"Hello, World!",permalink:"/catlang/blog/2018/10/17/hello-world"}},l=[{value:"From Go To Rust",id:"from-go-to-rust",children:[]},{value:"The Rust Conversion",id:"the-rust-conversion",children:[]},{value:"The Lexer",id:"the-lexer",children:[]},{value:"The Parser",id:"the-parser",children:[]},{value:"Code Generation",id:"code-generation",children:[]},{value:"The Lexer",id:"the-lexer-1",children:[]},{value:"The Parser",id:"the-parser-1",children:[]},{value:"Code Generation",id:"code-generation-1",children:[]}],c={toc:l};function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"We're fast approaching the release of version 0.1! The lexer and parser are mostly complete, barring a few additional features. In this post, I'll talk about how far the compiler has come - and where continued efforts are going."),Object(o.b)("h1",{id:"progress"},"Progress"),Object(o.b)("h2",{id:"from-go-to-rust"},"From Go To Rust"),Object(o.b)("p",null,"After a brief false start in Go, catlang transitioned to use Rust. I put some effort into creating a small extension for Visual Studio Code to perform basic syntax highlighting. This helped when writing example code, as well as when ensuring that there wasn't much gap between the language grammar (written in EBNF) and the language specification detailed in this documentation."),Object(o.b)("p",null,"I also transitioned the language documentation from using LaTeX to using docusaurus; this has the benefit of automatic updates to GitHub pages, enabling new users to more easily learn the language while maintaining better formatting than I achieved in LaTeX."),Object(o.b)("h2",{id:"the-rust-conversion"},"The Rust Conversion"),Object(o.b)("p",null,"At first, I tried to convert line-by-line from my Go code to Rust. This ended up frustrating me a bit - occasional issues with the borrow checker caused me to have to re-consider data ownership. Error handling, in particular, became much more complex. This led to a secondary overhaul, late in development, when I worked to add further functionality for error handling. To help with this, I was able to adapt some ideas from the Rust compiler."),Object(o.b)("h2",{id:"the-lexer"},"The Lexer"),Object(o.b)("p",null,"Most of the lexer was straightforward, and didn't require much alteration. Perhaps the only complex aspect was the few 3-character tokens (such as ",Object(o.b)("inlineCode",{parentName:"p"},">>=")," and ",Object(o.b)("inlineCode",{parentName:"p"},"&&="),") and even this was easily resolved with nested conditionals."),Object(o.b)("h2",{id:"the-parser"},"The Parser"),Object(o.b)("p",null,"The parser was more complex - the EBNF grammar I'd written turned out at several points to not actually reflect the language documentation I'd been writing. There was something of a back-and-forth between the grammar and the parser, as I realized that aspects needed to be fixed. In addition, a rewrite was necessary partway through writing the expression parser, as I realized that all of the parsing I was doing was right-associative, and several operators (such as subtraction) needed to be left-associative instead."),Object(o.b)("p",null,"In addition, figuring out how to perform error handling in Rust caused a few issues. I wanted to be able to display problematic spans of code, and so needed both a ",Object(o.b)("inlineCode",{parentName:"p"},"peekable")," iterator (for the lexer) and a regular ",Object(o.b)("inlineCode",{parentName:"p"},"String")," for the error reporting. Because a structure in Rust cannot hold a reference to one of its own members, I had to set up these in separate parts of the code, and pass them through as separate arguments."),Object(o.b)("h2",{id:"code-generation"},"Code Generation"),Object(o.b)("p",null,"I ran into a few issues with building LLVM instructions - the ",Object(o.b)("inlineCode",{parentName:"p"},"llvm-sys")," package ran into linker errors on Windows, and so I had to pivot to generating C code instead. This has the beginning of functionality."),Object(o.b)("p",null,"The code generation features don't quite compile yet, and so are behind a separate ",Object(o.b)("inlineCode",{parentName:"p"},"c-codegen")," branch."),Object(o.b)("h1",{id:"future-work"},"Future Work"),Object(o.b)("h2",{id:"the-lexer-1"},"The Lexer"),Object(o.b)("p",null,"The lexer still needs some functionality for dealing with floating point numbers, and numbers with non-10 bases. Aside from this, the lexer is mostly complete."),Object(o.b)("h2",{id:"the-parser-1"},"The Parser"),Object(o.b)("p",null,"A few statements still need implementation efforts - loops, branching statements, inner blocks and imports, and so on."),Object(o.b)("p",null,"In addition, the created parse tree still needs to be knitted and type-checked."),Object(o.b)("h2",{id:"code-generation-1"},"Code Generation"),Object(o.b)("p",null,"While the C code generation works as a stopgap measure, determining the root cause of the ",Object(o.b)("inlineCode",{parentName:"p"},"llvm-sys")," linker errors would likely be a better way to proceed. In addition, no optimization features are currently included."))}d.isMDXComponent=!0},114:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),d=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=d(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(r),p=n,b=u["".concat(i,".").concat(p)]||u[p]||h[p]||o;return r?a.a.createElement(b,s(s({ref:t},c),{},{components:r})):a.a.createElement(b,s({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);