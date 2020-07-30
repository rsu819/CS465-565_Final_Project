(this["webpackJsonpreact-frontend"]=this["webpackJsonpreact-frontend"]||[]).push([[0],{27:function(e,t,a){},42:function(e,t,a){e.exports=a(55)},47:function(e,t,a){},51:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),l=a.n(c),o=(a(47),a(27),a(40)),u=a(5),i=a(11),s=a(12),h=a(15),m=a(14),p=a(59),b=a(60),f=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(p.a,{className:"navbar",expand:"md"},r.a.createElement(p.a.Brand,{href:"#"},"PlantsPlantsPlants"),r.a.createElement(p.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(p.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(b.a,{className:"ml-auto"},r.a.createElement(b.a.Link,{href:"plant-finder"},"Plant Finder"),r.a.createElement(b.a.Link,{href:"weather"},"Weather"),r.a.createElement(b.a.Link,{href:"about"},"About"))))}}]),a}(r.a.Component),d=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={apiResponse:""},n}return Object(s.a)(a,[{key:"callAPI",value:function(){var e=this;fetch("http://localhost:3000/about").then((function(e){return e.text()})).then((function(t){return e.setState({apiResponse:t})}))}},{key:"componentWillMount",value:function(){this.callAPI()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,this.state.apiResponse))}}]),a}(r.a.Component),v=a(18),E=(a(51),a(58)),j=a(57),O=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleChange=function(e){this.setState({value:e.target.value}),console.log(this.state.value)},n.handleSubmit=function(e,t){fetch("/search",{method:"GET",keyword:"".concat(this.state.value)}).then((function(e){return e.json()})),alert(t)},n.state={value:""},n.handleChange=n.handleChange.bind(Object(v.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(v.a)(n)),n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(E.a,{className:"searchform",onSubmit:this.handleSubmit,action:"/plants"},r.a.createElement(E.a.Group,{controlId:"formSearchPlants"},r.a.createElement(E.a.Label,{className:"title mt-5 p-5"},"Enter plant to care for:"),r.a.createElement(E.a.Control,{className:"search",type:"text",onChange:this.handleChange,placeholder:"search any plant...","aria-label":"enter search for plants",required:!0})),r.a.createElement(j.a,{className:"btn",type:"submit",variant:"primary"},"Search!"))}}]),a}(r.a.Component),y=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null," Search results for "))}}]),a}(r.a.Component);var k=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(o.a,null,r.a.createElement(f,null),r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/home",component:O,exact:!0}),r.a.createElement(u.a,{path:"/about",component:d,exact:!0}),r.a.createElement(u.a,{path:"/plants",component:y,exact:!0}))))};l.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.0f444c65.chunk.js.map