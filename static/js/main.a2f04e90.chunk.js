(this.webpackJsonppracticalaptop1=this.webpackJsonppracticalaptop1||[]).push([[0],{39:function(e,a,t){},40:function(e,a,t){"use strict";t.r(a);var c=t(1),s=t(0),n=t(13),r=t.n(n),i=t(9),o=function(){return Object(c.jsxs)("header",{className:"header__header p-content",children:[Object(c.jsx)("h1",{children:"Where in the world?"}),Object(c.jsx)("div",{className:"header__btn-modo",children:Object(c.jsxs)("h4",{children:[Object(c.jsx)("i",{className:"far fa-moon"}),"Dark Mode"]})})]})},l=t(15),j=t(5),u=t(27),p=t(20),b=t.n(p),d=t(25),O="LISTAR_PAISES",h="FILTRAR_PAISES",f="FILTRAR_PAISES_EXITO",x="BUSCAR_PAISES",m="VER_PAIS",v=function(){return{type:h}},_=t(16),g=function(e){var a=e.pais,t=Object(i.b)();return Object(c.jsxs)(_.b,{to:"/pais",className:"listado__pais",onClick:function(){return t(function(e){return function(a){a({type:m,payload:e})}}(a))},children:[Object(c.jsx)("img",{src:a.flag,alt:"Imagen"}),Object(c.jsxs)("div",{className:"pais-cuerpo",children:[Object(c.jsx)("h2",{children:a.name}),Object(c.jsxs)("p",{children:[Object(c.jsx)("strong",{children:"Poblaci\xf3n: "}),a.population]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("strong",{children:"Region: "}),a.region]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("strong",{children:"Capital: "}),a.capital]})]})]})},y=function(){var e=Object(s.useState)({select:"",search:""}),a=Object(u.a)(e,2),t=a[0],n=a[1],r=function(e){return n(Object(j.a)(Object(j.a)({},t),{},Object(l.a)({},e.target.name,e.target.value)))},o=Object(i.b)();Object(s.useEffect)((function(){o(function(){var e=Object(d.a)(b.a.mark((function e(a){var t,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://restcountries.eu/rest/v2/all?".concat("fields=name;capital;currencies;region;nativeName;subregion;topLevelDomain;borders;population;languages;flag"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,a({type:O,payload:c});case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}())}),[]),Object(s.useEffect)((function(){var e;o((e=t.select,function(a){a(e?{type:f,payload:e}:v())}))}),[t.select]),Object(s.useEffect)((function(){var e;o((e=t.search,console.log(e),function(a){a({type:x,payload:e})}))}),[t.search]);var p=Object(i.c)((function(e){return e.paises})),h=p.paisesFiltrados,m=p.paisesBuscar;return Object(c.jsxs)("main",{className:"listado__main",children:[Object(c.jsxs)("div",{className:"listado__acciones",children:[Object(c.jsx)("form",{children:Object(c.jsxs)("div",{className:"listado__cont-input",children:[Object(c.jsx)("label",{htmlFor:"search",children:Object(c.jsx)("i",{className:"fas fa-search"})}),Object(c.jsx)("input",{id:"search",type:"search",placeholder:"Buscar un pa\xeds...",name:"search",value:t.search,onChange:r})]})}),Object(c.jsxs)("select",{name:"select",className:"listado__select",value:t.select,onChange:r,children:[Object(c.jsx)("option",{value:"",children:"Filter by Region"}),Object(c.jsx)("option",{value:"Africa",children:"Africa"}),Object(c.jsx)("option",{value:"Americas",children:"Am\xe9rica"}),Object(c.jsx)("option",{value:"Asia",children:"Asia"}),Object(c.jsx)("option",{value:"Europe",children:"Europe"}),Object(c.jsx)("option",{value:"Oceania",children:"Oceania"})]})]}),Object(c.jsx)("div",{className:"listado__paises",children:0===m.length?h.map((function(e,a){return a>0&&a<16?Object(c.jsx)(g,{pais:e},e.name):null})):m.map((function(e,a){return a>0&&a<16?Object(c.jsx)(g,{pais:e},e.name):null}))})]})},E=t(10),N=t(26),S={paises:[],paisesFiltrados:[],paisesBuscar:[],verPais:{}};var A=Object(E.c)({paises:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case O:return Object(j.a)(Object(j.a)({},e),{},{paises:a.payload,paisesFiltrados:a.payload});case h:return Object(j.a)(Object(j.a)({},e),{},{paisesFiltrados:e.paises});case f:return Object(j.a)(Object(j.a)({},e),{},{paisesBuscar:[],paisesFiltrados:e.paises.filter((function(e){return e.region===a.payload}))});case x:return Object(j.a)(Object(j.a)({},e),{},{paisesBuscar:e.paisesFiltrados.filter((function(e){return-1!==e.name.toLowerCase().search(a.payload.toLowerCase())}))});case m:return Object(j.a)(Object(j.a)({},e),{},{verPais:a.payload});default:return e}}}),w=Object(E.e)(A,Object(E.d)(Object(E.a)(N.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),I=t(3),R=function(){var e=Object(i.c)((function(e){return e.paises.verPais}));return Object(c.jsx)("main",{children:Object(c.jsxs)("div",{className:"cont-info",children:[Object(c.jsx)("img",{src:e.flag,alt:"img"}),Object(c.jsx)("div",{class:"info",children:Object(c.jsx)("h2",{children:e.name})})]})})},F=function(){return Object(c.jsxs)(_.a,{children:[Object(c.jsx)(o,{}),Object(c.jsx)(I.c,{children:Object(c.jsxs)(i.a,{store:w,children:[Object(c.jsx)(I.a,{path:"/",exact:!0,component:y}),Object(c.jsx)(I.a,{exact:!0,path:"/pais",component:R})]})})]})},P=(t(39),document.querySelector("#root"));r.a.render(Object(c.jsx)(F,{}),P)}},[[40,1,2]]]);
//# sourceMappingURL=main.a2f04e90.chunk.js.map