(this["webpackJsonppratvar.github.io"]=this["webpackJsonppratvar.github.io"]||[]).push([[0],{27:function(e,t,a){e.exports=a(28)},28:function(e,t,a){"use strict";a.r(t);var n=a(15),r=a(18),l=a(19),o=a(21),c=a(20),s=(a(29),a(0)),i=a.n(s),u=a(9),m=a.n(u),d=a(39),h=a(38);document.body.classList.toggle("light-theme"),window.addEventListener("DOMContentLoaded",(function(){var e=new IntersectionObserver((function(e){e.forEach((function(e){var t=e.target.getAttribute("id");e.intersectionRatio>.5?document.querySelector('nav li a[href="#'.concat(t,'"]')).parentElement.classList.add("active"):document.querySelector('nav li a[href="#'.concat(t,'"]')).parentElement.classList.remove("active")}))}),{threshold:.5});document.querySelectorAll("section[id]").forEach((function(t){e.observe(t)}))}));for(var p=document.querySelectorAll(".project-link > a"),f=function(e){p[e].onfocus=function(){p[e].parentElement.classList.toggle("focused")},p[e].onblur=function(){p[e].parentElement.classList.toggle("focused")}},b=0;b<p.length;b++)f(b);var E=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=i.a.createElement("i",{className:"fa fa-moon"});return i.a.createElement("div",null,i.a.createElement(d.a,{control:i.a.createElement(h.a,{onChange:function(){document.body.classList.toggle("light-theme")},defaultChecked:!0}),label:e,labelPlacement:"start"}))}}]),a}(i.a.Component),g=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var l;return Object(r.a)(this,a),(l=t.call(this,e)).state={status:""},l.submitForm=l.submitForm.bind(Object(n.a)(l)),l}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.status;return i.a.createElement("form",{onSubmit:this.submitForm,action:"https://formspree.io/f/xleogqql",method:"POST"},i.a.createElement("h2",null,"Interested in working together?",i.a.createElement("br",null),i.a.createElement("span",null,i.a.createElement("b",null,"Send me a message!"))),i.a.createElement("label",{htmlFor:"name"},"Name"),i.a.createElement("input",{type:"text",name:"name",id:"name",placeholder:"Name"}),i.a.createElement("label",{htmlFor:"email"},"Email"),i.a.createElement("input",{type:"email",name:"email",id:"email",placeholder:"Email"}),i.a.createElement("label",{htmlFor:"message"},"Message"),i.a.createElement("textarea",{name:"message",id:"message",placeholder:"Message"}),"SUCCESS"===e?i.a.createElement("p",null,"Thanks!"):i.a.createElement("button",null,"Submit"),"ERROR"===e&&i.a.createElement("p",null,"Ooops! There was an error."))}},{key:"submitForm",value:function(e){var t=this;e.preventDefault();var a=e.target,n=new FormData(a),r=new XMLHttpRequest;r.open(a.method,a.action),r.setRequestHeader("Accept","application/json"),r.onreadystatechange=function(){r.readyState===XMLHttpRequest.DONE&&(200===r.status?(a.reset(),t.setState({status:"SUCCESS"})):t.setState({status:"ERROR"}))},r.send(n)}}]),a}(i.a.Component);m.a.render(i.a.createElement(E,null),document.querySelector("#darkmodetoggle")),m.a.render(i.a.createElement(g,null),document.querySelector("#contact-form"))},29:function(e,t,a){}},[[27,1,2]]]);
//# sourceMappingURL=main.0d0423bc.chunk.js.map