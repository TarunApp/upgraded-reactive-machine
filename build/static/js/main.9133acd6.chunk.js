(this["webpackJsonpupgraded-reactive-machine"]=this["webpackJsonpupgraded-reactive-machine"]||[]).push([[0],{12:function(e,t,n){},25:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(18),r=n.n(s),i=(n(25),n(12),n(8)),o=n(0),l=function(e){return Object(o.jsxs)("nav",{className:"nav",children:[Object(o.jsx)(i.b,{className:"box-shadow-xxl",to:"/about",children:"About"}),Object(o.jsx)(i.b,{className:"box-shadow-xxl",to:"/projects",children:"Projects"}),Object(o.jsx)("a",{className:"box-shadow-xxl",href:"https://github.com/TarunApp",target:"_blank",rel:"noreferrer",children:"GitHub"}),Object(o.jsx)(i.b,{className:"box-shadow-xxl",to:"/blog",children:"Blog"})]})},j=n(11),b=function(e){var t=Object(c.useState)({}),n=Object(j.a)(t,2);n[0],n[1];return Object(o.jsx)("div",{className:"main-header",children:Object(o.jsxs)("div",{className:"main-landing",children:[Object(o.jsx)("h1",{children:"Hello!"}),Object(o.jsx)("p",{children:"Feel free to check out my webpage!"}),Object(o.jsxs)("div",{className:"contact box-shadow-m",children:[Object(o.jsx)("h1",{children:"Contact"}),Object(o.jsx)("ul",{children:Object(o.jsx)("li",{children:"Email: asdjk@test.com"})})]})]})})},u=function(e){return Object(o.jsxs)("div",{className:"card box-shadow-m",children:[Object(o.jsx)("h1",{children:e.name}),Object(o.jsxs)("div",{className:"card-flex",children:[Object(o.jsxs)("div",{className:"card-one",children:[Object(o.jsx)("h2",{className:"card-tag",children:"Project Details"}),Object(o.jsx)("ul",{style:{display:"inline"},children:Object(o.jsx)("li",{className:"lang",children:e.languages})})]}),Object(o.jsx)("div",{className:"card-content",children:Object(o.jsx)("a",{href:"https://github.com",children:"GitHub"})})]})]})},d=function(e){var t=Object(c.useState)(""),n=Object(j.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)([]),i=Object(j.a)(r,2),l=i[0],b=i[1];Object(c.useEffect)((function(){fetch("https://api.github.com/users/TarunApp/repos").then((function(e){return e.json()})).then((function(e){console.log(e),b(e)}))}),[]);return Object(o.jsxs)("div",{className:"projects",children:[Object(o.jsx)("label",{htmlFor:"search",children:Object(o.jsxs)("h2",{children:["Search: ",a]})}),Object(o.jsx)("input",{className:"search",name:"search",onChange:function(e){s(e.target.value)},value:a,type:"text"}),l.length>0?""==a?l.map((function(e){return Object(o.jsx)(u,{name:e.name,languages:e.language})})):l.filter((function(e){return e.name.includes(a)})).map((function(e){return Object(o.jsx)(u,{name:e.name,languages:e.language})})):Object(o.jsx)("p",{children:"loading"})]})},h=n(2),m=n(6);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}const x={};function O({components:e,...t}){return Object(m.a)("wrapper",p({},x,t,{components:e,mdxType:"MDXLayout"}),Object(m.a)("h1",null,"First Post"),Object(m.a)("p",null,"Hello World!"),Object(m.a)("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing, elit. Reiciendis ullam reprehenderit quibusdam eveniet voluptatem, blanditiis quia fugiat iusto cum eos harum nesciunt? Hic saepe, cum possimus eveniet harum quam tenetur."),Object(m.a)("div",{style:{background:"white",padding:"10px",wordSpacing:"-10px"}},Object(m.a)("code",null,Object(m.a)("p",null,'console.log("asdjke")'),Object(m.a)("p",null,"// test"))))}function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}O.isMDXComponent=!0;const f={};function v({components:e,...t}){return Object(m.a)("wrapper",g({},f,t,{components:e,mdxType:"MDXLayout"}),Object(m.a)("h1",null,"Hello World!"))}v.isMDXComponent=!0;var N=[{name:"FirstPost",content:O},{name:"Test",content:v}],y=function(){return Object(o.jsx)("div",{className:"main-landing",children:Object(o.jsxs)("div",{className:"contact box-shadow-m",children:[Object(o.jsx)("h1",{className:"padding-top-s",children:"Blog"}),Object(o.jsx)("p",{children:"Writing Stuffs"}),Object(o.jsx)("ul",{children:N.map((function(e){return Object(o.jsx)("li",{children:Object(o.jsx)(i.b,{to:"/"+"".concat(e.name),children:e.name})})}))})]})})},w=n(20),k=(n(32),function(e){return function(t){var n=Object.assign({},t);return Object(o.jsx)("div",{className:"blog main-landing margin-top-xl",children:Object(o.jsx)("div",{children:Object(o.jsx)(e,Object(w.a)({},n))})})}});var C=function(){return document.body.style.backgroundColor="#CBC5EA",Object(o.jsx)(i.a,{children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("header",{children:Object(o.jsx)(l,{})}),Object(o.jsxs)(h.d,{children:[Object(o.jsx)(h.b,{exact:!0,path:"/about",component:b}),Object(o.jsx)(h.b,{exact:!0,path:"/projects",component:d}),Object(o.jsx)(h.b,{exact:!0,path:"/blog",component:y}),Object(o.jsx)(h.b,{exact:!0,path:"/",component:b}),N.map((function(e){return Object(o.jsx)(h.b,{exact:!0,path:"/"+"".concat(e.name),component:k(e.content)})})),Object(o.jsx)(h.b,{render:function(){return Object(o.jsx)(h.a,{to:"/"})}})]})]})})};r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(C,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.9133acd6.chunk.js.map