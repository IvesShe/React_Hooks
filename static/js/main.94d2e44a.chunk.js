(this["webpackJsonpreact-hooks"]=this["webpackJsonpreact-hooks"]||[]).push([[0],{32:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),j=c(10),o=c.n(j),s=c(17),i=c(18),u=c(21),b=c(20),l=c(4),O=c(0);var d=function(){var e=r.a.useState(0),t=Object(l.a)(e,2),c=t[0],n=t[1],j=r.a.useState("Tom"),s=Object(l.a)(j,2),i=s[0],u=s[1],b=r.a.useRef();return r.a.useEffect((function(){var e=setInterval((function(){n((function(e){return e+1}))}),1e3);return function(){clearInterval(e)}}),[]),Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:"\u6211\u662fHooks\u7d44\u4ef6"}),Object(O.jsxs)("h2",{children:["\u7576\u524d\u6c42\u548c\u70ba ",c," "]}),Object(O.jsxs)("h2",{children:["\u6211\u7684\u540d\u5b57\u662f ",i," "]}),Object(O.jsx)("button",{onClick:function(){n((function(e){return e+1}))},children:"\u9ede\u6211+1"}),Object(O.jsx)("button",{onClick:function(){u("Jack")},children:"\u9ede\u6211\u6539\u540d"}),Object(O.jsx)("button",{onClick:function(){o.a.unmountComponentAtNode(document.getElementById("root"))},children:"\u5378\u8f09\u7d44\u4ef6"}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"text",ref:b}),Object(O.jsx)("button",{onClick:function(){alert(b.current.value)},children:"\u9ede\u64ca\u63d0\u793a\u6578\u64da"})]})},a=c(11),x=c(2),h=Object(n.createContext)();function f(){var e=Object(n.useContext)(h);return Object(O.jsx)("h2",{children:e})}function v(){return Object(n.useEffect)((function(){return console.log("userEffect => Index "),function(){console.log("userEffect => Index Exit")}}),[]),Object(O.jsx)("h2",{children:"ives.com"})}function p(){return Object(n.useEffect)((function(){console.log("userEffect => List ")})),Object(O.jsx)("h2",{children:"List Page"})}function m(){var e=Object(n.useState)(0),t=Object(l.a)(e,2),c=t[0],r=t[1];return Object(n.useEffect)((function(){return console.log("userEffect => You clicked ".concat(c," times ")),function(){console.log("=====================")}}),[c]),Object(O.jsxs)("div",{children:["\b",Object(O.jsx)("h2",{children:"\u6211\u662fAdvance\u7d44\u4ef6"}),Object(O.jsxs)("p",{children:["You Clicked ",c," times "]}),Object(O.jsx)("button",{onClick:function(){r(c+1)},children:"Click me"}),Object(O.jsx)(h.Provider,{value:c,children:Object(O.jsx)(f,{})}),Object(O.jsxs)(a.a,{children:[Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:Object(O.jsx)(a.b,{to:"/",children:"\u9996\u9801"})}),Object(O.jsx)("li",{children:Object(O.jsx)(a.b,{to:"/list/",children:"\u5217\u8868"})})]}),Object(O.jsx)(x.a,{path:"/",exact:!0,component:v}),Object(O.jsx)(x.a,{path:"/list",component:p})]})]})}function C(){var e=Object(n.useReducer)((function(e,t){switch(t){case"add":return e+1;case"sub":return e-1;default:return e}}),0),t=Object(l.a)(e,2),c=t[0],r=t[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:"\u6211\u662fReducerDemo\u7d44\u4ef6"}),Object(O.jsxs)("h2",{children:["\u73fe\u5728\u7684\u5206\u6578\u662f",c]}),Object(O.jsx)("button",{onClick:function(){r("add")},children:"Increment"}),Object(O.jsx)("button",{onClick:function(){r("sub")},children:"Decrement"})]})}var k=Object(n.createContext)({}),g="UPDATE_COLOR",y=function(e,t){switch(t.type){case g:return t.color;default:return e}},E=function(e){var t=Object(n.useReducer)(y,"blue"),c=Object(l.a)(t,2),r=c[0],j=c[1];return Object(O.jsx)(k.Provider,{value:{color:r,dispatch:j},children:e.children})};function R(){var e=Object(n.useContext)(k).dispatch;return Object(O.jsxs)("div",{children:[Object(O.jsx)("button",{onClick:function(){e({type:g,color:"red"})},children:"\u7d05\u8272"}),Object(O.jsx)("button",{onClick:function(){e({type:g,color:"yellow"})},children:"\u9ec3\u8272"})]})}function w(){var e=Object(n.useContext)(k).color;return Object(O.jsx)("div",{style:{color:e},children:"\u5b57\u9ad4\u984f\u8272\u70bablue"})}function P(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:"\u6211\u662fShowArea\u7d44\u4ef6"}),Object(O.jsxs)(E,{children:[Object(O.jsx)(w,{}),Object(O.jsx)(R,{})]})]})}function S(){var e=Object(n.useState)("Person01 Ready"),t=Object(l.a)(e,2),c=t[0],r=t[1],j=Object(n.useState)("Person02 Ready"),o=Object(l.a)(j,2),s=o[0],i=o[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:"\u6211\u662fMemo\u7d44\u4ef6"}),Object(O.jsx)("button",{onClick:function(){r((new Date).getTime())},children:"Person01"}),Object(O.jsx)("button",{onClick:function(){i((new Date).getTime()+", person02 gogo")},children:"Person02"}),Object(O.jsx)(I,{name:c,children:s})]})}function I(e){var t=e.name,c=e.children;var r=Object(n.useMemo)((function(){return console.log("person01 go"),t+", person01 go"}),[t]);return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{children:r}),Object(O.jsx)("div",{children:c})]})}function D(){var e=Object(n.useRef)(null),t=Object(n.useState)("ives"),c=Object(l.a)(t,2),r=c[0],j=c[1],o=Object(n.useRef)();return Object(n.useEffect)((function(){o.current=r,console.log("textRef.current:",o.current)})),Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:"\u6211\u662fRef\u7d44\u4ef6"}),Object(O.jsx)("input",{ref:e,type:"text"}),Object(O.jsx)("button",{onClick:function(){e.current.value="Hello,ives",console.log(e)},children:"\u5728input\u4e0a\u5c55\u793a\u6587\u5b57"}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{value:r,onChange:function(e){j(e.target.value)}})]})}var A=function(e){Object(u.a)(c,e);var t=Object(b.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(i.a)(c,[{key:"render",value:function(){return Object(O.jsxs)(n.Fragment,{children:[Object(O.jsx)(d,{x:101}),Object(O.jsx)("hr",{}),Object(O.jsx)(m,{}),Object(O.jsx)("hr",{}),Object(O.jsx)(C,{}),Object(O.jsx)("hr",{}),Object(O.jsx)(P,{}),Object(O.jsx)("hr",{}),Object(O.jsx)(S,{}),Object(O.jsx)("hr",{}),Object(O.jsx)(D,{})]})}}]),c}(n.Component);o.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(A,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.94d2e44a.chunk.js.map