(window.webpackJsonpecopolluters=window.webpackJsonpecopolluters||[]).push([[0],{28:function(e,t,a){e.exports=a.p+"static/media/hamburgerImpact.a004b6aa.png"},29:function(e,t,a){e.exports=a.p+"static/media/Greta.f6b174f9.png"},31:function(e,t,a){e.exports=a(47)},36:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),l=a.n(c),i=(a(36),a(1)),o=a(2),s=a(4),u=a(3),m=a(5),p=(a(9),a(7)),h=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e="page",t="page",a="page",n="page";switch(this.props.page){case"Home":e+=" current";break;case"Impact":t+=" current";break;case"Science":a+=" current";break;case"About":n+=" current"}return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"nav"},r.a.createElement(p.b,{to:"/"},r.a.createElement("div",{className:e},"Home")),r.a.createElement(p.b,{to:"/impact"},r.a.createElement("div",{className:t},"Impact")),r.a.createElement(p.b,{to:"/science"},r.a.createElement("div",{className:a},"Science")),r.a.createElement(p.b,{to:"/about"},r.a.createElement("div",{className:n},"About"))))}}]),t}(n.Component),b=a(21),d=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"header footer"},r.a.createElement(b.SocialIcon,{className:"icon",url:"https://www.facebook.com/Ecopolluters-112149543528301/?eid=ARBpbIuZygo64Yd0W9hgh_6osBi68vc9NuK8dUm3DgKvpJfs4YslZcF-gwN_hRdpFJtxOLnTg5AcGCNQ",style:{height:75,width:75}}),r.a.createElement(b.SocialIcon,{className:"icon",url:"https://www.linkedin.com/company/28890458",style:{height:75,width:75}}),r.a.createElement(h,null),r.a.createElement("p",null,"ecopolluters N.G.O. - All Rights Reserved"))}}]),t}(n.Component),E=a(27),f=a.n(E),O=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={open:!1},e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handleClick",value:function(){this.setState({open:!this.state.open})}},{key:"render",value:function(){var e="",t="",a="",n="";switch(this.props.page){case"Home":e+=" current";break;case"Impact":t+=" current";break;case"Science":a+=" current";break;case"About":n+=" current"}return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"menu"},r.a.createElement("div",{className:"logo"},r.a.createElement(p.b,{to:"/",style:{textDecoration:"none"}},"ecopolluters")),r.a.createElement("ul",{className:"desktop"},r.a.createElement(p.b,{to:"/"},r.a.createElement("li",{className:e},"Home")),r.a.createElement(p.b,{to:"/impact"},r.a.createElement("li",{className:t},"Impact")),r.a.createElement(p.b,{to:"/science"},r.a.createElement("li",{className:a},"Science")),r.a.createElement(p.b,{to:"/about"},r.a.createElement("li",{className:n},"About"))),r.a.createElement("div",{className:"hamburger"},r.a.createElement(f.a,{isOpen:this.state.open,menuClicked:this.handleClick.bind(this)}))),!0===this.state.open&&r.a.createElement("div",{className:"mobile"},r.a.createElement(h,this.props)))}}]),t}(n.Component),v=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:function(e){e.preventDefault()}},"When you eat",r.a.createElement("input",{type:"number",name:"amount",defaultValue:this.props.amount,min:"1",onChange:this.props.handleAmount}),r.a.createElement("select",{name:"select",defaultValue:this.props.select,onChange:this.props.handleSelect},r.a.createElement("option",{value:"200"}," hamburger (200 g) "),r.a.createElement("option",{value:"225"}," steak (225 g) "),r.a.createElement("option",{value:"1"}," g ")),"of beef, this is your impact:",r.a.createElement(p.b,{to:"/impact"},r.a.createElement("button",{type:"button",onClick:this.props.handleCalculation},"Calculate impact")))}}]),t}(n.Component),g=a(28),j=a.n(g),y=a(29),w=a.n(y),k=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Eat beef?"),r.a.createElement("h4",null,"Find out how beef is destroying the world"),r.a.createElement("img",{src:j.a,className:"intro",alt:"hamburgerImpact"}),r.a.createElement("h3",null,"This is what an hamburg causes"),r.a.createElement("p",null,"A cow dies for you"),r.a.createElement("p",null,"19.90 kg of Co2 is released in the air"),r.a.createElement("p",null,"290.24 l of water is wasted and polluted"),r.a.createElement("p",null,"65.24 mq of land is used to farm the cow"),r.a.createElement("div",null,r.a.createElement("h1",null,"What is your impact?"),r.a.createElement("p",null,"We have prepared kick-ass algorithm to tell you how bad you are"),r.a.createElement("img",{src:w.a,className:"greta",alt:"Greta"})))}}]),t}(n.Component),C=a(11);var A=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return C.a.initialize("UA-150607597-1"),C.a.pageview("/homepage"),r.a.createElement("div",null,r.a.createElement(O,{page:"Home"}),r.a.createElement(k,null),r.a.createElement(v,this.props),r.a.createElement(p.b,{to:"/science"},r.a.createElement("p",null,"Check where we get all the data")))}}]),t}(n.Component),N=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null," Total amount of beef: ",this.props.grams," grams"))}}]),t}(n.Component),S=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null," Greeen house gasses: ",this.props.CO2.toFixed(2)," kg CO2eq "),r.a.createElement("p",null,"Driving an average petrol car (5 liters per 100km) for ",(this.props.CO2/.12).toFixed(2)," km"),r.a.createElement("p",null,"A person taking a plane for ",(this.props.CO2/1.5).toFixed(2)," minutes"))}}]),t}(n.Component),x=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null," Land usage: ",this.props.land.toFixed(2)," square meters"),r.a.createElement("p",null,"Parking lots: ",(this.props.land/25).toFixed(2)," "),r.a.createElement("p",null,"Average 1 person flat in the world: ",(this.props.land/52.6).toFixed(2)))}}]),t}(n.Component),F=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null," Water: ",this.props.water.toFixed(2)," liters "),r.a.createElement("p",null,"Oktoberfest beers: ",this.props.water.toFixed(2)),r.a.createElement("p",null,"Average American showers: ",(this.props.water/65.1).toFixed(2)," "))}}]),t}(n.Component),I=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(N,{grams:this.props.grams}),r.a.createElement("hr",null),r.a.createElement(S,{CO2:.09948*this.props.grams}),r.a.createElement("hr",null),r.a.createElement(F,{water:1.4512*this.props.grams}),r.a.createElement("hr",null),r.a.createElement(x,{land:.32621*this.props.grams}))}}]),t}(n.Component);var W=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return C.a.initialize("UA-150607597-1"),C.a.pageview("/impact"),r.a.createElement("div",null,r.a.createElement(O,{page:"Impact"}),r.a.createElement("h1",null,"Calculate your impact"),r.a.createElement(v,this.props),!0===this.props.calculation&&r.a.createElement(I,{grams:this.props.grams}))}}]),t}(n.Component);var G=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return C.a.initialize("UA-150607597-1"),C.a.pageview("/science"),r.a.createElement("div",null,r.a.createElement(O,{page:"Science"}),r.a.createElement("p",null,"Main scientific article:"),r.a.createElement("p",null,'"Reducing food\u2019s environmental impacts through producers and consumers"'),r.a.createElement("p",null,"By J. Poore and T. Nemecek"))}}]),t}(n.Component);var B=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return C.a.initialize("UA-150607597-1"),C.a.pageview("/about"),r.a.createElement("div",null,r.a.createElement(O,{page:"About"}),r.a.createElement("h3",null,"Our mission is to connect individuals with the environment by fighting ignorance"),r.a.createElement("p",null,"We believe in freedom of choice and accountability"),r.a.createElement("p",null,"We believe in science over myths and fake news"),r.a.createElement("p",null,"We believe in the power of awareness"),r.a.createElement("p",null,"We stand for the beauty of nature"))}}]),t}(n.Component),H=a(14),J=a(30),R=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleAmount=function(e){var t=e.target.value;a.setState({tempAmount:t})},a.handleSelect=function(e){var t=e.target.value;a.setState({tempSelect:t})},a.handleCalculation=function(e){var t=a.state.tempAmount*a.state.tempSelect;a.setState({amount:a.state.tempAmount,select:a.state.tempSelect,grams:t,calculation:!0})},a.state={amount:1,select:200,grams:200,calculation:!1,tempAmount:1,tempSelect:200,tempGrams:200},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(p.a,null,r.a.createElement(J.a,null,r.a.createElement(H.d,null,r.a.createElement(H.b,{exact:!0,path:"/",render:function(){return r.a.createElement(A,{amount:e.state.amount,select:e.state.select,grams:e.state.grams,calculation:e.state.calculation,handleAmount:e.handleAmount,handleSelect:e.handleSelect,handleCalculation:e.handleCalculation})}}),r.a.createElement(H.b,{exact:!0,path:"/impact",render:function(){return r.a.createElement(W,{amount:e.state.amount,select:e.state.select,grams:e.state.grams,calculation:e.state.calculation,handleAmount:e.handleAmount,handleSelect:e.handleSelect,handleCalculation:e.handleCalculation})}}),r.a.createElement(H.b,{exact:!0,path:"/science",render:function(){return r.a.createElement(G,null)}}),r.a.createElement(H.b,{exact:!0,path:"/about",render:function(){return r.a.createElement(B,null)}}),r.a.createElement(H.b,{render:function(){return r.a.createElement(H.a,{to:"/"})}})),r.a.createElement(d,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){}},[[31,1,2]]]);
//# sourceMappingURL=main.cc117025.chunk.js.map