(this["webpackJsonpproject-management-app"]=this["webpackJsonpproject-management-app"]||[]).push([[0],{33:function(e,n,t){e.exports=t(45)},38:function(e,n,t){},45:function(e,n,t){"use strict";t.r(n);var a=t(0),l=t.n(a),r=t(19),c=t.n(r),o=(t(38),t(7)),i=t(14),u=t(2),m=t(3);function p(){var e=Object(u.a)(["\n    /* background-color: pink; */\n    display: flex;\n    align-items: stretch;\n    & ul {\n        list-style: none;\n        padding-left: 0px;\n        display: flex;\n        /* background: yellow;   */\n        margin:0;\n        align-items: center;\n        & li {\n            margin: 0 20px;\n            &:last-child{\n                a{\n                    padding: 10px 6px;\n                    border-radius: 50%;\n                    background-color: green;\n                }\n            }\n        }\n    }\n"]);return p=function(){return e},e}var d=m.a.div(p()),s=function(){return l.a.createElement(d,null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(o.c,{to:"/project-management-app/create"},"New Project")),l.a.createElement("li",null,l.a.createElement(o.c,{to:"/project-management-app/"},"Log Out")),l.a.createElement("li",null,l.a.createElement(o.c,{to:"/project-management-app"},"MM"))))};function h(){var e=Object(u.a)(["\n    /* background-color: aqua; */\n    & ul {\n        list-style: none;\n        padding-left: 0px;\n        display: flex;\n        & li {\n            margin: 0 20px;\n            & a{\n                /* color: white; */\n            }\n        }\n    }\n"]);return h=function(){return e},e}var E=m.a.div(h()),g=function(){return l.a.createElement(E,null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(o.c,{to:"/project-management-app/signup"},"Signup")),l.a.createElement("li",null,l.a.createElement(o.c,{to:"/project-management-app/signin"},"Login"))))};function f(){var e=Object(u.a)(["\n    display: flex;\n    flex-grow: 2;\n    justify-content: center;\n"]);return f=function(){return e},e}function v(){var e=Object(u.a)(["\n    display: flex;\n    justify-content: center;\n    flex-grow: 1;\n    /* background-color: pink; */\n    & a {\n        font-size: 50px;\n    }\n"]);return v=function(){return e},e}function b(){var e=Object(u.a)(["\n    font-size: 20px;\n    display: flex;\n    background-color: orange;\n    padding: 5px 0px;\n    a{\n        text-decoration: none;\n    }\n"]);return b=function(){return e},e}var j=m.a.div(b()),y=m.a.div(v()),w=m.a.div(f()),x=function(){return l.a.createElement(j,null,l.a.createElement(y,null,l.a.createElement(o.b,{to:"/project-management-app"},"Project Manager App")),l.a.createElement(w,null,l.a.createElement(g,null),l.a.createElement(s,null)))},O=t(9),C=t(10),k=t(12),S=t(11);function N(){var e=Object(u.a)(["\n    flex-grow: 2;\n    border: 1px solid black;\n"]);return N=function(){return e},e}var P=m.a.div(N()),F=function(){return l.a.createElement(P,null,l.a.createElement("p",null,"notifications..."))},A=function(){return l.a.createElement("div",null,l.a.createElement("span",null,"Project Title1"),l.a.createElement("p",null,"Posted by: Shadow Ninja"),l.a.createElement("p",null,"16th November 2020"))};function T(){var e=Object(u.a)(["\n    flex-grow: 3;\n    border: 1px solid red;\n"]);return T=function(){return e},e}var D=m.a.div(T()),L=function(){return l.a.createElement(D,null,l.a.createElement(A,null),l.a.createElement(A,null))};function M(){var e=Object(u.a)(["\n    display: flex;\n"]);return M=function(){return e},e}var z=m.a.div(M()),B=function(e){Object(k.a)(t,e);var n=Object(S.a)(t);function t(){return Object(O.a)(this,t),n.apply(this,arguments)}return Object(C.a)(t,[{key:"render",value:function(){return l.a.createElement(z,null,l.a.createElement(L,null),l.a.createElement(F,null))}}]),t}(a.Component),I=function(e){var n=e.match.params.id;return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("span",null,"Project Title - ",n),l.a.createElement("p",null,"lorem ipsun bla bla bla bla bla bla bla ")),l.a.createElement("hr",null),l.a.createElement("div",null,l.a.createElement("p",null,"Posted by: Ninja Turtle 1"),l.a.createElement("p",null,"16th Nov 2020")))},J=t(17),U=function(e){Object(k.a)(t,e);var n=Object(S.a)(t);function t(){var e;Object(O.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(e=n.call.apply(n,[this].concat(l))).state={email:"",password:""},e.handleChange=function(n){e.setState(Object(J.a)({},n.target.id,n.target.value))},e.handleSubmit=function(n){n.preventDefault(),console.log(e.state)},e}return Object(C.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.handleSubmit}," ",l.a.createElement("h5",null,"Sign In"),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"email"},"Email:"),l.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"password"},"Password:"),l.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("button",null,"Login"))))}}]),t}(a.Component),W=function(e){Object(k.a)(t,e);var n=Object(S.a)(t);function t(){var e;Object(O.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(e=n.call.apply(n,[this].concat(l))).state={firstName:"",lastName:"",email:"",password:""},e.handleChange=function(n){e.setState(Object(J.a)({},n.target.id,n.target.value))},e.handleSubmit=function(n){n.preventDefault(),console.log(e.state)},e}return Object(C.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.handleSubmit}," ",l.a.createElement("h5",null,"Sign Up"),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"firstName"},"firstName:"),l.a.createElement("input",{type:"text",id:"firstName",onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"lastName"},"lastName:"),l.a.createElement("input",{type:"text",id:"lastName",onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"email"},"Email:"),l.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"password"},"Password:"),l.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("button",null,"Sign Up"))))}}]),t}(a.Component),q=function(e){Object(k.a)(t,e);var n=Object(S.a)(t);function t(){var e;Object(O.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(e=n.call.apply(n,[this].concat(l))).state={title:"",content:""},e.handleChange=function(n){e.setState(Object(J.a)({},n.target.id,n.target.value))},e.handleSubmit=function(n){n.preventDefault(),console.log(e.state)},e}return Object(C.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("h5",null,"Create New Project"),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"title"},"Title:"),l.a.createElement("input",{type:"text",id:"title",onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"content"},"Project Content:"),l.a.createElement("textarea",{id:"content",onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("button",null,"Create"))))}}]),t}(a.Component);var $=function(){return l.a.createElement(o.a,null,l.a.createElement("div",null,l.a.createElement(x,null),l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/project-management-app",component:B}),l.a.createElement(i.a,{path:"/project-management-app/project/:id",component:I}),l.a.createElement(i.a,{path:"/project-management-app/signin",component:U}),l.a.createElement(i.a,{path:"/project-management-app/signup",component:W}),l.a.createElement(i.a,{path:"/project-management-app/create",component:q}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G=t(18),H={},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H;arguments.length>1&&arguments[1];return e},Q={},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q;arguments.length>1&&arguments[1];return e},V=Object(G.b)({auth:K,project:R}),X=t(32),Y=Object(G.c)(V);c.a.render(l.a.createElement(X.a,{store:Y},l.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.9a2e6c4a.chunk.js.map