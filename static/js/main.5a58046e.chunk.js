(window.webpackJsonpecopolluters=window.webpackJsonpecopolluters||[]).push([[0],{25:function(e,t,a){e.exports=a.p+"static/media/hamburgerImpact.a004b6aa.png"},26:function(e,t,a){e.exports=a.p+"static/media/Greta.f6b174f9.png"},28:function(e,t,a){e.exports=a(39)},33:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(21),c=a.n(r),i=(a(33),a(1)),o=a(2),u=a(4),s=a(3),m=a(5),p=(a(8),a(7)),h=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"nav"},l.a.createElement(p.b,{to:"/"},l.a.createElement("div",null,"Home")),l.a.createElement(p.b,{to:"/impact"},l.a.createElement("div",null,"Impact")),l.a.createElement(p.b,{to:"/science"},l.a.createElement("div",null,"Science")),l.a.createElement(p.b,{to:"/about"},l.a.createElement("div",null,"About"))))}}]),t}(n.Component),b=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"header"},l.a.createElement("hr",null),l.a.createElement(h,null),l.a.createElement("p",null,"Ecopolluters N.G.O. - All Rights Reserved"))}}]),t}(n.Component),d=a(24),E=a.n(d),f=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this))).state={open:!1},e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handleClick",value:function(){this.setState({open:!this.state.open})}},{key:"render",value:function(){return l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"menu"},l.a.createElement("div",{className:"logo"},l.a.createElement(p.b,{to:"/",style:{textDecoration:"none"}},"Ecopolluters")),l.a.createElement("ul",{className:"desktop"},l.a.createElement("li",null,l.a.createElement(p.b,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(p.b,{to:"/impact"},"Impact")),l.a.createElement("li",null,l.a.createElement(p.b,{to:"/science"},"Science")),l.a.createElement("li",null,l.a.createElement(p.b,{to:"/about"},"About"))),l.a.createElement("div",{className:"hamburger"},l.a.createElement(E.a,{isOpen:this.state.open,menuClicked:this.handleClick.bind(this)}))),!0===this.state.open&&l.a.createElement("div",{className:"mobile"},l.a.createElement(h,null)),l.a.createElement("hr",null))}}]),t}(n.Component),O=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("form",{onSubmit:function(e){e.preventDefault()}},"When you eat",l.a.createElement("input",{type:"number",name:"amount",defaultValue:this.props.amount,min:"1",onChange:this.props.handleAmount}),l.a.createElement("select",{name:"select",defaultValue:this.props.select,onChange:this.props.handleSelect},l.a.createElement("option",{value:"200"}," hamburger (200 g) "),l.a.createElement("option",{value:"225"}," steak (225 g) "),l.a.createElement("option",{value:"1"}," g ")),"of beef, this is your impact:",l.a.createElement(p.b,{to:"/impact"},l.a.createElement("button",{type:"button",onClick:this.props.handleCalculation},"Calculate impact")))}}]),t}(n.Component),v=a(25),j=a.n(v),g=a(26),y=a.n(g),k=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Eat beef?"),l.a.createElement("h4",null,"Find out how beef is destroying the world"),l.a.createElement("img",{src:j.a,className:"intro",alt:"hamburgerImpact"}),l.a.createElement("h3",null,"This is what an hamburg causes"),l.a.createElement("p",null,"A cow dies for you"),l.a.createElement("p",null,"19.90 kg of Co2 is released in the air"),l.a.createElement("p",null,"290.24 l of water is wasted and polluted"),l.a.createElement("p",null,"65.24 mq of land is used to farm the cow"),l.a.createElement("div",null,l.a.createElement("h1",null,"What is your impact?"),l.a.createElement("p",null,"We have prepared kick-ass algorithm to tell you how bad you are"),l.a.createElement("img",{src:y.a,className:"greta",alt:"Greta"})))}}]),t}(n.Component),w=a(11);var C=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return w.a.initialize("UA-150607597-1"),w.a.pageview("/homepage"),l.a.createElement("div",null,l.a.createElement(f,null),l.a.createElement(k,null),l.a.createElement(O,this.props),l.a.createElement(p.b,{to:"/science"},l.a.createElement("p",null,"Check where we get all the data")))}}]),t}(n.Component),A=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h3",null," Total amount of beef: ",this.props.grams," grams"))}}]),t}(n.Component),S=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h3",null," Greeen house gasses: ",this.props.CO2.toFixed(2)," kg CO2eq "),l.a.createElement("p",null,"Driving an average petrol car (5 liters per 100km) for ",(this.props.CO2/.12).toFixed(2)," km"),l.a.createElement("p",null,"A person taking a plane for ",(this.props.CO2/1.5).toFixed(2)," minutes"))}}]),t}(n.Component),x=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h3",null," Land usage: ",this.props.land.toFixed(2)," square meters"),l.a.createElement("p",null,"Parking lots: ",(this.props.land/25).toFixed(2)," "),l.a.createElement("p",null,"Average 1 person flat in the world: ",(this.props.land/52.6).toFixed(2)))}}]),t}(n.Component),N=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h3",null," Water: ",this.props.water.toFixed(2)," liters "),l.a.createElement("p",null,"Oktoberfest beers: ",this.props.water.toFixed(2)),l.a.createElement("p",null,"Average American showers: ",(this.props.water/65.1).toFixed(2)," "))}}]),t}(n.Component),F=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(A,{grams:this.props.grams}),l.a.createElement("hr",null),l.a.createElement(S,{CO2:.09948*this.props.grams}),l.a.createElement("hr",null),l.a.createElement(N,{water:1.4512*this.props.grams}),l.a.createElement("hr",null),l.a.createElement(x,{land:.32621*this.props.grams}))}}]),t}(n.Component);var W=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return w.a.initialize("UA-150607597-1"),w.a.pageview("/impact"),l.a.createElement("div",null,l.a.createElement(f,null),l.a.createElement("h1",null,"Calculate your impact"),l.a.createElement(O,this.props),!0===this.props.calculation&&l.a.createElement(F,{grams:this.props.grams}))}}]),t}(n.Component);var G=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return w.a.initialize("UA-150607597-1"),w.a.pageview("/science"),l.a.createElement("div",null,l.a.createElement(f,null),l.a.createElement("h1",null," Science page"))}}]),t}(n.Component);var I=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return w.a.initialize("UA-150607597-1"),w.a.pageview("/about"),l.a.createElement("div",null,l.a.createElement(f,null),l.a.createElement("h3",null,"Our mission is to connect individuals with the environment by fighting ignorance"),l.a.createElement("p",null,"We believe in freedom of choice and accountability"),l.a.createElement("p",null,"We believe in science over mith and fake news"),l.a.createElement("p",null,"We believe in the power of awareness"),l.a.createElement("p",null,"We stand for the beauty of nature"))}}]),t}(n.Component),z=a(14),U=a(27),q=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).handleAmount=function(e){var t=e.target.value;a.setState({tempAmount:t})},a.handleSelect=function(e){var t=e.target.value;a.setState({tempSelect:t})},a.handleCalculation=function(e){var t=a.state.tempAmount*a.state.tempSelect;a.setState({amount:a.state.tempAmount,select:a.state.tempSelect,grams:t,calculation:!0})},a.state={amount:1,select:200,grams:200,calculation:!1,tempAmount:1,tempSelect:200,tempGrams:200},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(p.a,null,l.a.createElement(U.a,null,l.a.createElement(z.d,null,l.a.createElement(z.b,{exact:!0,path:"/",render:function(){return l.a.createElement(C,{amount:e.state.amount,select:e.state.select,grams:e.state.grams,calculation:e.state.calculation,handleAmount:e.handleAmount,handleSelect:e.handleSelect,handleCalculation:e.handleCalculation})}}),l.a.createElement(z.b,{exact:!0,path:"/impact",render:function(){return l.a.createElement(W,{amount:e.state.amount,select:e.state.select,grams:e.state.grams,calculation:e.state.calculation,handleAmount:e.handleAmount,handleSelect:e.handleSelect,handleCalculation:e.handleCalculation})}}),l.a.createElement(z.b,{exact:!0,path:"/science",render:function(){return l.a.createElement(G,null)}}),l.a.createElement(z.b,{exact:!0,path:"/about",render:function(){return l.a.createElement(I,null)}}),l.a.createElement(z.b,{render:function(){return l.a.createElement(z.a,{to:"/"})}})),l.a.createElement(b,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,a){}},[[28,1,2]]]);
//# sourceMappingURL=main.5a58046e.chunk.js.map