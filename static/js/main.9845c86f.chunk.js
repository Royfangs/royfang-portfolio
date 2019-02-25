(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a.p+"static/media/portfolio.75a61a21.jpg"},31:function(e,t,a){e.exports=a.p+"static/media/expensify.20bb2b72.png"},32:function(e,t,a){e.exports=a.p+"static/media/smart-brain.35fb6e1d.png"},33:function(e,t,a){e.exports=a.p+"static/media/mtg-searche.89921d10.png"},34:function(e,t,a){e.exports=a.p+"static/media/grace.9a9f6610.png"},35:function(e,t,a){e.exports=a.p+"static/media/nodejs-shop-example.2ca8e6e2.png"},37:function(e,t,a){e.exports=a(93)},42:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){},57:function(e,t,a){},59:function(e,t,a){},61:function(e,t,a){},63:function(e,t,a){},83:function(e,t,a){},85:function(e,t,a){},87:function(e,t,a){},89:function(e,t,a){},91:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(28),r=a.n(c),i=a(95),l=(a(42),a(6)),s=a(7),m=a(9),u=a(8),p=a(10),f=a(98),d=a(94),g=a(96),h=a(14),b=a(29),v=a(19),E=(a(46),a(48),a(97)),N=function(e){return o.a.createElement("li",null,o.a.createElement(E.a,{className:"NavigationItem",activeClassName:"NavigationItem--active",to:e.link,exact:e.exact},e.children))},_=function(e){var t=e.NavigationFixed?"Navigation Navigation--fixed":"Navigation";return o.a.createElement("ul",{className:t},o.a.createElement(N,{link:"/",exact:!0},"About"),o.a.createElement(N,{link:"/Portfolio"},"Portfolio"),o.a.createElement(N,{link:"/contact"},"Contact"))},j=(a(53),function(){return o.a.createElement("div",null,o.a.createElement("p",{className:"AboutIntro"},"Hi, my name is Roy Fang, I'm a self-taught Front-End Developer from Taiwan, enjoy coding. Loving to dig Front-End related knowledge. I have serious passion on web developing."))}),y=(a(55),a(30)),x=a.n(y),k=function(){return o.a.createElement("div",{className:"AboutImage"},o.a.createElement("img",{className:"AboutImage__photo",src:x.a,alt:"photo"}))},O=a(11),C=(a(57),function(e){var t=e.toolbox,a=Object.keys(t).map(function(e){return o.a.createElement("li",{className:"About__Toolbox-icon",key:e},o.a.createElement(O.a,{className:e,icon:["fab",t[e]]}))});return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{className:"About__Sub-heading"},"Tool box"),o.a.createElement("ul",{className:"About__Toolbox"},a))}),w=(a(59),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={toolbox:{html5:"html5",css3:"css3-alt",js:"js",react:"react",nodejs:"node-js"}},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"About"},o.a.createElement("h1",{className:"About__heading"},"About me"),o.a.createElement("div",{className:"About__area"},o.a.createElement(k,null),o.a.createElement(j,null)),o.a.createElement(C,{toolbox:this.state.toolbox}))}}]),t}(n.Component)),P=(a(61),a(63),function(e){var t=e.projects;return Object.keys(t).map(function(e){return console.log(t[e].name),o.a.createElement("div",{className:"Portfolio__card ".concat(t[e].backgroundPosition),style:{backgroundImage:"url(".concat(t[e].image,")")},key:e},o.a.createElement("div",{className:"Portfolio__hover-layer"},o.a.createElement("h3",{className:"Portfolio__subtitle"},t[e].name),o.a.createElement("div",{className:"Portfolio__icon-box"},t[e].tools.map(function(e){return o.a.createElement(O.a,{className:"Portfolio__icon ".concat(e),key:e,icon:["fab",e]})})),o.a.createElement("a",{className:"Portfolio__link",href:t[e].url},"view site")))})}),F=a(31),A=a.n(F),S=a(32),I=a.n(S),H=a(33),T=a.n(H),M=a(34),R=a.n(M),B=a(35),G=a.n(B),q=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={projects:{grace:{name:"GRACE",tools:["html5","css3-alt","js"],url:"https://royfangs.github.io/grace/",image:R.a,backgroundPosition:"Portfolio__card--background-position-top"},expensify:{name:"Expensify",tools:["js","react","node-js"],url:"https://expensify-app-1217.herokuapp.com/",image:A.a,backgroundPosition:"Portfolio__card--background-position-top"},smartBrain:{name:"Smart-Brain",tools:["js","react","node-js"],url:"https://face-recognition-appli.herokuapp.com/",image:I.a,backgroundPosition:"Portfolio__card--background-position-top"},mtgSearcher:{name:"MTG Searcher",tools:["html5","css3-alt","js"],url:"https://royfangs.github.io/MTG-searcher/",image:T.a,backgroundPosition:"Portfolio__card--background-position-top"},nodeShop:{name:"Online Shop",tools:["html5","css3-alt","js","node-js"],url:"https://nodejs-shop-example.herokuapp.com/",image:G.a,backgroundPosition:"Portfolio__card--background-position-top"}}},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"Portfolio"},o.a.createElement("h1",{className:"Portfolio__heading"},"Projects"),o.a.createElement("div",{className:"Portfolio__projects"},o.a.createElement(P,{projects:this.state.projects})))}}]),t}(n.Component),L=a(17),Y=a(36),D=a.n(Y).a.create({baseURL:"https://portfolio-2227a.firebaseio.com/"}),J=(a(83),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={comment:{name:"",email:"",message:""}},a.nameChangeHandler=function(e){a.setState({comment:Object(L.a)({},a.state.comment,{name:e.target.value})}),console.log(e.target.value)},a.emailChangeHandler=function(e){a.setState({comment:Object(L.a)({},a.state.comment,{email:e.target.value})})},a.messageChangeHandler=function(e){a.setState({comment:Object(L.a)({},a.state.comment,{message:e.target.value})})},a.postComment=function(){var e={name:a.state.comment.name,email:a.state.comment.email,message:a.state.comment.message};(e.name||e.email)&&D.post("/comment.json",e).then(function(e){return console.log(e)}).catch(function(e){return console.log(e)})},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"Contact"},o.a.createElement("h1",{className:"Contact__heading"},"Contact"),o.a.createElement(O.a,{className:"Contact__icon",icon:"envelope"}),o.a.createElement("h3",{className:"Contact__subtitle"},"If you have any questions or want to collaborate, welcome to send message."),o.a.createElement("form",{className:"Contact__form"},o.a.createElement("input",{className:"Contact__input",type:"text",name:"name",placeholder:"Name",onChange:function(t){return e.nameChangeHandler(t)},required:!0}),o.a.createElement("input",{className:"Contact__input",type:"email",name:"email",placeholder:"Email",onChange:function(t){return e.emailChangeHandler(t)},required:!0}),o.a.createElement("textarea",{className:"Contact__input",name:"message",cols:"30",rows:"10",placeholder:"Your message",onChange:function(t){return e.messageChangeHandler(t)}}),o.a.createElement("button",{className:"Contact__button",type:"button",onClick:this.postComment},"Submit")))}}]),t}(n.Component)),W=(a(85),a(87),function(e){var t=e.mediaIcons.map(function(e){return o.a.createElement("li",{className:"Media-icon",key:e.name},o.a.createElement("a",{href:e.url},o.a.createElement(O.a,{className:e.name,icon:["fab",e.name]})))});return o.a.createElement(o.a.Fragment,null,t)}),U=(a(89),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={icons:[{name:"github",url:"https://github.com/Royfangs"}]},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("ul",{className:"SocialMedia"},o.a.createElement(W,{mediaIcons:this.state.icons}))}}]),t}(n.Component)),$=function(){return o.a.createElement("footer",{className:"Footer"},o.a.createElement(U,null),o.a.createElement("div",{className:"Footer__copyright"},"\xa9 2019 ROY FANG"))};a(91);h.b.add(b.a,v.b,v.a);var z=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={NavigationFixed:!1},a.NavigationFixed=function(){var e=window.scrollY;e>=80&&!1===a.state.NavigationFixed?a.setState(function(e){return{NavigationFixed:!e.NavigationFixed}}):e<80&&!0===a.state.NavigationFixed&&a.setState(function(e){return{NavigationFixed:!e.NavigationFixed}})},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.NavigationFixed)}},{key:"render",value:function(){return o.a.createElement(n.Fragment,null,o.a.createElement(_,null),this.state.NavigationFixed?o.a.createElement(_,{NavigationFixed:this.state.NavigationFixed}):null,o.a.createElement("div",{className:"App"},o.a.createElement(f.a,null,o.a.createElement(d.a,{path:"/",exact:!0,component:w}),o.a.createElement(d.a,{path:"/portfolio",component:q}),o.a.createElement(d.a,{path:"/contact",component:J}),o.a.createElement(g.a,{to:"/"}))),o.a.createElement($,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(i.a,null,o.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[37,2,1]]]);
//# sourceMappingURL=main.9845c86f.chunk.js.map