(this["webpackJsonpreact-frontend"]=this["webpackJsonpreact-frontend"]||[]).push([[0],{35:function(e,t,a){e.exports=a(50)},40:function(e,t,a){},41:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),l=a.n(c),o=(a(40),a(41),a(33)),u=a(3),i=a(15),s=a(16),m=a(20),p=a(18),h=a(53),f=a(54),b=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(h.a,{className:"navbar",expand:"md"},r.a.createElement(h.a.Brand,{href:"#"},"PlantsPlantsPlants"),r.a.createElement(h.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(h.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(f.a,{className:"ml-auto"},r.a.createElement(f.a.Link,{href:"plant-finder"},"Plant Finder"),r.a.createElement(f.a.Link,{href:"weather"},"Weather"),r.a.createElement(f.a.Link,{href:"about"},"About"))))}}]),a}(r.a.Component),E=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={apiResponse:""},n}return Object(s.a)(a,[{key:"callAPI",value:function(){var e=this;fetch("http://localhost:3000/about").then((function(e){return e.text()})).then((function(t){return e.setState({apiResponse:t})}))}},{key:"componentWillMount",value:function(){this.callAPI()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,this.state.apiResponse))}}]),a}(r.a.Component);var v=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(o.a,null,r.a.createElement(b,null),r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/about",component:E,exact:!0}))),r.a.createElement("h1",{className:"m-2"},"hello world!"))};l.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.bcd6e444.chunk.js.map