(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{114:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return h}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),f=n,h=p["".concat(i,".").concat(f)]||p[f]||m[f]||a;return r?o.a.createElement(h,c(c({ref:t},s),{},{components:r})):o.a.createElement(h,c({ref:t},s))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},91:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),a=(r(0),r(114)),i={title:"Hello, World!",author:"Alic Szecsei",authorURL:"https://alic-szecsei.com/",authorImageURL:"https://alic-szecsei.com/img/profile2.png"},c={permalink:"/catlang/blog/2018/10/17/hello-world",editUrl:"https://github.com/aszecsei/catlang/edit/master/website/blog/2018-10-17-hello-world.md",source:"@site/blog/2018-10-17-hello-world.md",description:"While much of Catlang is progressing nicely (the grammar is almost entirely fleshed out!) there have been a few setbacks. Namely, we're switching from Go to Rust - which is a net positive, but requires re-writing some of the existing code.",date:"2018-10-17T00:00:00.000Z",formattedDate:"October 16, 2018",tags:[],title:"Hello, World!",readingTime:.81,truncated:!0,prevItem:{title:"Roadmap",permalink:"/catlang/blog/2018/12/16/roadmap"}},l=[{value:"Why Switch?",id:"why-switch",children:[]}],s={toc:l};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"While much of Catlang is progressing nicely (the grammar is almost entirely fleshed out!) there have been a few setbacks. Namely, we're switching from Go to Rust - which is a net positive, but requires re-writing some of the existing code."),Object(a.b)("h2",{id:"why-switch"},"Why Switch?"),Object(a.b)("p",null,"This mostly has to do with the AST. Go has some strange notions with regards to inheritance - namely, that interfaces are used exclusively. So in order to create a type of ",Object(a.b)("inlineCode",{parentName:"p"},"Declaration"),", we have to construct an interface ",Object(a.b)("inlineCode",{parentName:"p"},"Declaration")," which requires its members to implement a function ",Object(a.b)("inlineCode",{parentName:"p"},"declaration()"),'; then all "subclasses" of ',Object(a.b)("inlineCode",{parentName:"p"},"Declaration")," just implement that empty function."),Object(a.b)("p",null,"Not optimal, and as we progress further into the parser and IR, these shortcomings are going to become more and more of a problem. So we're cutting the problem off at the pass and using Rust; it has the features of Go that were very helpful (package management, unicode support) and keeps a more traditional, useful inheritance model."))}u.isMDXComponent=!0}}]);