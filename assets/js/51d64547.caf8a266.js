(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{114:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),d=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,b=u["".concat(r,".").concat(m)]||u[m]||p[m]||o;return n?i.a.createElement(b,l(l({ref:t},s),{},{components:n})):i.a.createElement(b,l({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),i=n(7),o=(n(0),n(114)),r={id:"what-and-why",title:"Introduction",sidebar_label:"Introduction",slug:"/"},l={unversionedId:"what-and-why",id:"what-and-why",isDocsHomePage:!1,title:"Introduction",description:"Catlang is a systems programming language with a C-like syntax that compiles to native code. It is statically typed, and does not include automatic memory management.",source:"@site/docs/what-and-why.md",slug:"/",permalink:"/catlang/docs/",editUrl:"https://github.com/aszecsei/catlang/edit/master/website/docs/what-and-why.md",version:"current",sidebar_label:"Introduction",sidebar:"docs",next:{title:"Installation",permalink:"/catlang/docs/installation"}},c=[{value:"Phases of Compilation",id:"phases-of-compilation",children:[{value:"Lexical Analysis",id:"lexical-analysis",children:[]},{value:"Syntax Analysis",id:"syntax-analysis",children:[]},{value:"Semantic Analysis",id:"semantic-analysis",children:[]},{value:"Optimization",id:"optimization",children:[]},{value:"Code Generation",id:"code-generation",children:[]}]},{value:"Memory Model",id:"memory-model",children:[]},{value:"Object Model",id:"object-model",children:[]},{value:"Why Catlang?",id:"why-catlang",children:[]}],s={toc:c};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Catlang is a systems programming language with a C-like syntax that compiles to native code. It is statically typed, and does not include automatic memory management."),Object(o.b)("p",null,"It has been designed for both speed and kindness."),Object(o.b)("h2",{id:"phases-of-compilation"},"Phases of Compilation"),Object(o.b)("h3",{id:"lexical-analysis"},"Lexical Analysis"),Object(o.b)("h3",{id:"syntax-analysis"},"Syntax Analysis"),Object(o.b)("h3",{id:"semantic-analysis"},"Semantic Analysis"),Object(o.b)("h3",{id:"optimization"},"Optimization"),Object(o.b)("h3",{id:"code-generation"},"Code Generation"),Object(o.b)("h2",{id:"memory-model"},"Memory Model"),Object(o.b)("h2",{id:"object-model"},"Object Model"),Object(o.b)("h2",{id:"why-catlang"},"Why Catlang?"),Object(o.b)("p",null,'My goal with Catlang is to produce a programming language well-suited for low-level programming (such as game development) which includes many of the features common in more modern programming languages. I hardly propose that Catlang is a universal fix, but it seems like an engaging venture for my specific uses (and personal opinions about what a "good programming language" looks like).'),Object(o.b)("p",null,"A few notes about specific opinions I hold: ",Object(o.b)("em",{parentName:"p"},"kind")," type-safety is important. Compilers should be able to infer as much as possible. Functions should be first-class; purely functional languages are too rigid, especially when performance is critical, but enabling programmers to use ",Object(o.b)("em",{parentName:"p"},"aspects")," of functional languages seems the best of both worlds."))}d.isMDXComponent=!0}}]);