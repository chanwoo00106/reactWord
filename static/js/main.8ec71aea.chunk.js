(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{110:function(e,t,c){"use strict";c.r(t);var n,i=c(21),a=c(2),r=c(0),s=c(17),j=c.n(s),d=(c(83),c(4)),o=c(74),l=(c(84),c(9)),b=c(1),h=function(e){var t=e.data,c=Object(l.f)();return Object(b.jsx)("div",{className:"row",children:t.map((function(e,t){return Object(b.jsxs)("div",{className:"col-md-4",onClick:function(){return c.push("/detail/".concat(e.id))},children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes".concat(t+1,".jpg"),alt:"\uc2e0\ubc1c",width:"100%"}),Object(b.jsx)("h4",{children:e.title})]}),Object(b.jsxs)("p",{children:[e.content," & ",e.price]})]},e.id)}))})},O=c(67),u=c(120),x=c(68),p=(c(90),function(e){var t=e.tab,c=(e.switchs,e.setSwitch);return Object(r.useEffect)((function(){c(!0)})),0===t?Object(b.jsx)("div",{children:"000"}):1===t?Object(b.jsx)("div",{children:"111"}):2===t?Object(b.jsx)("div",{children:"222"}):void 0}),f=c(121),m=c(34),v=x.a.div(n||(n=Object(O.a)(["\n    padding-top: 20px;\n\n    h4 {\n        font-size: 25px;\n        color: ","\n    }\n"])),(function(e){return e.color})),g=Object(m.b)((function(e){return{state:e}}))((function(e){var t=e.data,c=(e.state,e.dispatch),n=Object(l.f)(),i=Number(Object(l.g)().id),a=Object(r.useState)(!0),s=Object(d.a)(a,2),j=s[0],o=s[1],h=Object(r.useState)(0),O=Object(d.a)(h,2),x=O[0],m=O[1],g=Object(r.useState)(!1),k=Object(d.a)(g,2),N=k[0],w=k[1];Object(r.useEffect)((function(){var e=setTimeout((function(){o(!1)}),2e3);return function(){clearTimeout(e)}}),[]);var y=t.find((function(e){return e.id===i}));return y?Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(v,{children:Object(b.jsx)("h4",{className:"red",children:"Detail"})}),j&&Object(b.jsx)("div",{className:"my-alert2",children:Object(b.jsx)("p",{children:"\uc7ac\uace0\uac00 \uc5bc\ub9c8 \ub0a8\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4."})}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-md-6",children:Object(b.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes".concat(i+1,".jpg"),alt:"\uc2e0\ubc1c",width:"100%"})}),Object(b.jsxs)("div",{className:"col-md-6 mt-4",children:[Object(b.jsx)("h4",{className:"pt-5",children:y.title}),Object(b.jsx)("p",{children:y.content}),Object(b.jsxs)("p",{children:[y.price,"\uc6d0"]}),Object(b.jsx)("p",{children:"\uc7ac\uace0 : "}),Object(b.jsx)("button",{className:"btn btn-danger",onClick:function(){c({type:"add",payload:{id:i,name:y.title,count:1,price:y.price}}),n.push("/cart")},children:"\uc8fc\ubb38\ud558\uae30"}),Object(b.jsx)("button",{className:"btn btn-danger",onClick:function(){return n.goBack()},children:"\ub4a4\ub85c\uac00\uae30"})]})]}),Object(b.jsxs)(u.a,{variant:"tabs",defaultActiveKey:"link-0",children:[Object(b.jsx)(u.a.Item,{children:Object(b.jsx)(u.a.Link,{eventKey:"link-0",onClick:function(){w(!1),m(0)},children:"Option 1"})}),Object(b.jsx)(u.a.Item,{children:Object(b.jsx)(u.a.Link,{eventKey:"link-1",onClick:function(){w(!1),m(1)},children:"Option 2"})}),Object(b.jsx)(u.a.Item,{children:Object(b.jsx)(u.a.Link,{eventKey:"link-2",onClick:function(){w(!1),m(2)},children:"Option 3"})})]}),Object(b.jsx)(f.a,{in:N,classNames:"wow",timeout:500,children:Object(b.jsx)(p,{tab:x,switchs:N,setSwitch:w})})]}):Object(b.jsx)("div",{children:"\ucc3e\uc73c\uc2e0 \uc0c1\ud488\uc740 \uc5c6\ub294 \uc0c1\ud488\uc785\ub2c8\ub2e4."})})),k=[{id:0,title:"White and Black",content:"Born in France",price:12e4},{id:1,title:"Red Knit",content:"Born in Seoul",price:11e4},{id:2,title:"Grey Yordan",content:"Born in the States",price:13e4}],N=c(119),w=c(116),y=c(118),S=c(24),I=function(){return Object(b.jsx)(N.a,{bg:"light",expand:"lg",children:Object(b.jsxs)(w.a,{children:[Object(b.jsx)(N.a.Brand,{href:"#home",children:"Shop"}),Object(b.jsx)(N.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(b.jsx)(N.a.Collapse,{id:"basic-navbar-nav",children:Object(b.jsxs)(u.a,{className:"me-auto",children:[Object(b.jsx)(u.a.Link,{as:S.b,to:"/",children:"Home"}),Object(b.jsx)(u.a.Link,{as:S.b,to:"/detail",children:"Detail"}),Object(b.jsxs)(y.a,{title:"Dropdown",id:"basic-nav-dropdown",children:[Object(b.jsx)(y.a.Item,{href:"#action/3.1",children:"Action"}),Object(b.jsx)(y.a.Item,{href:"#action/3.2",children:"Another action"}),Object(b.jsx)(y.a.Item,{href:"#action/3.3",children:"Something"}),Object(b.jsx)(y.a.Divider,{}),Object(b.jsx)(y.a.Item,{href:"#action/3.4",children:"Separated link"})]})]})})]})})},C=c(75),B=c.n(C),L=c(117);var K=Object(m.b)((function(e){return{data:e}}))((function(e){var t=e.data,c=e.dispatch;return Object(b.jsx)("div",{children:Object(b.jsxs)(L.a,{striped:!0,bordered:!0,hover:!0,children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"#"}),Object(b.jsx)("th",{children:"\uc0c1\ud488\uba85"}),Object(b.jsx)("th",{children:"\uc218\ub7c9"}),Object(b.jsx)("th",{children:"\uac00\uaca9"}),Object(b.jsx)("th",{children:"\ubcc0\uacbd"})]})}),Object(b.jsx)("tbody",{children:t.map((function(e,t){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.id}),Object(b.jsx)("td",{children:e.name}),Object(b.jsx)("td",{children:e.count}),Object(b.jsx)("td",{children:e.price}),Object(b.jsxs)("td",{children:[Object(b.jsx)("button",{onClick:function(){return c({type:"up",id:e.id})},children:"+"}),Object(b.jsx)("button",{onClick:function(){return c({type:"down",id:e.id})},children:"-"})]})]},t)}))})]})})}));var A=function(){var e=Object(r.useState)(k),t=Object(d.a)(e,2),c=t[0],n=t[1],a=Object(r.useState)(!0),s=Object(d.a)(a,2),j=s[0],O=s[1];return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(I,{}),Object(b.jsxs)(l.c,{children:[Object(b.jsxs)(l.a,{exact:!0,path:"/",children:[Object(b.jsxs)("div",{className:"background",children:[Object(b.jsx)("h1",{children:"20% Season Off"}),Object(b.jsx)("p",{children:"This is a sample hero unit, a simple Jumbotron-style components for calling extra attention to featured content or information."}),Object(b.jsx)("p",{children:Object(b.jsx)(o.a,{variant:"primary",children:"Learn more"})})]}),Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(h,{data:c}),j&&Object(b.jsx)("button",{className:"btn btn-primary",onClick:function(){B.a.get("https://codingapple1.github.io/shop/data2.json").then((function(e){n([].concat(Object(i.a)(c),Object(i.a)(e.data))),O(!1)})).catch((function(e){console.error(e)}))},children:"\ub354\ubcf4\uae30"})]})]}),Object(b.jsx)(l.a,{path:"/cart",children:Object(b.jsx)(K,{})}),Object(b.jsx)(l.a,{path:"/detail/:id",children:Object(b.jsx)(g,{data:c})})]})]})},D=c(76),T=[{id:0,name:"\uae40\uc131\ud6c8(\ucf54\ub178)",count:1,price:1e3}],E=1;var J=Object(D.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"add":var c=t.payload,n=e.findIndex((function(e){return e.name===c.name&&e.price===c.price}));return n>=0?(e[n].count++,e):(e.push(Object(a.a)({id:E++},c)),e);case"up":var r=e.findIndex((function(e){return e.id===t.id})),s=Object(i.a)(e);return s[r].count++,s;case"down":var j=e.findIndex((function(e){return e.id===t.id})),d=Object(i.a)(e);return d[j].count--,d;default:return e}}));j.a.render(Object(b.jsx)(S.a,{children:Object(b.jsx)(m.a,{store:J,children:Object(b.jsx)(A,{})})}),document.getElementById("root"))},83:function(e,t,c){},84:function(e,t,c){},90:function(e,t,c){}},[[110,1,2]]]);
//# sourceMappingURL=main.8ec71aea.chunk.js.map