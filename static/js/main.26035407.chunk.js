(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{27:function(e,t,a){e.exports=a.p+"static/media/hogwarts2.149f4998.png"},30:function(e,t,a){e.exports=a.p+"static/media/hat.f7acbc5a.png"},31:function(e,t,a){e.exports=a.p+"static/media/housescrest.c71cb81f.png"},32:function(e,t,a){e.exports=a.p+"static/media/errorpixie.af3e9ef5.png"},35:function(e,t,a){e.exports=a.p+"static/media/demiguise.a94c5452.png"},36:function(e,t,a){e.exports=a.p+"static/media/g2.17cfdbfa.png"},37:function(e,t,a){e.exports=a.p+"static/media/s2.e5bdac06.png"},38:function(e,t,a){e.exports=a.p+"static/media/r2.039b15c9.png"},39:function(e,t,a){e.exports=a.p+"static/media/h2.569d46c4.png"},40:function(e,t,a){e.exports=a(72)},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},71:function(e,t,a){e.exports=a.p+"static/media/HARRYP__.181ef9a7.TTF"},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(26),i=a.n(s),o=(a(45),a(46),a(4)),c=a(5),l=(a(47),a(27)),u=a.n(l),m=function(){return r.a.createElement("section",{className:"hero is-fullheight-with-navbar is-warning"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container"},r.a.createElement("p",{className:"hometitle"},"Welcome To Hogwarts!"),r.a.createElement("img",{src:u.a,width:"600",alt:"hogwarts"}),r.a.createElement("p",{className:"homemsg"},"Sort Yourself Into a House with the Sorting Hat!"),r.a.createElement(o.b,{to:"/quiz",className:"Button"},r.a.createElement("button",{className:"startquizbutton button"},"Start Quiz")))))},p=a(6),h=a(7),f=a(8),d=a(9),g=a(30),v=a.n(g),b=a(31),E=a.n(b),y=function(e){Object(d.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={isOpen:!1},e.handleToggle=function(){e.setState({isOpen:!e.state.isOpen})},e}return Object(h.a)(a,[{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&this.setState({isOpen:!1})}},{key:"render",value:function(){var e=this.state.isOpen;return r.a.createElement("nav",{className:"navbar is-dark"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement(o.b,{to:"/",className:"navbar-item"},r.a.createElement("img",{className:"navimg",src:E.a,height:"60",alt:"sorting hat"}),r.a.createElement("p",{className:"navtext"},"Home")),r.a.createElement("span",{onClick:this.handleToggle,className:"navbar-burger ".concat(e?"is-active":"")},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))),r.a.createElement("div",{className:"navbar-menu ".concat(e?"is-active":"")},r.a.createElement("div",{className:"navbar-end"},r.a.createElement(o.b,{to:"/quiz",className:"navbar-item"},r.a.createElement("img",{className:"navimg",src:v.a,height:"60",alt:"sorting hat"}),r.a.createElement("p",{className:"navtext"},"Sorting Hat"))))))}}]),a}(r.a.Component),w=Object(c.f)(y),N=a(32),O=a.n(N),x=function(){return r.a.createElement("section",{className:"hero is-fullheight-with-navbar is-warning"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"errorpixie"},r.a.createElement("img",{className:"pixie",src:O.a,width:"400",alt:"error pixie"})),r.a.createElement("p",{className:"error title is-1 has-text-centered"},"Oops something went wrong. Please try again!"))))},k=a(15),j=a.n(k),q=a(33),S=a(11),W=a(34),z=a.n(W),T=a(35),H=a.n(T),A=function(e){Object(d.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={housesData:[],result:[],questions:["Which animal do you most identify with?","Which colour combination are you most drawn to?","Which values do you most relate to?","Which professor do you most admire?"],quizOptions:["mascot","colors","values","headOfHouse"]},e.nextQuestion=function(t){var a=Object(S.a)(e.state.questions.slice(1)),n=Object(S.a)(e.state.quizOptions.slice(1));e.setState({questions:a,quizOptions:n});var r=Object(S.a)(e.state.result);r.push(t.target.value),e.setState({result:r})},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=Object(q.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z.a.get("".concat("https://www.potterapi.com/v1","/houses").concat("?key=$2a$10$t6cqE4.0tqBOAAkoYBb3G.ZZ8B8aJ55eOn5wTyv.mfkWgHT7xJ75y"));case 3:t=e.sent,this.setState({housesData:t.data}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),this.props.history.push("/notfound");case 11:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"quiz"},r.a.createElement("p",{className:"questions"},this.state.questions[0]),r.a.createElement("div",{className:"options"},this.state.housesData.map((function(t){return"string"===typeof t[e.state.quizOptions[0]]?r.a.createElement("button",{key:t._id,onClick:e.nextQuestion,value:t.name},t[e.state.quizOptions[0]]):"object"===typeof t[e.state.quizOptions[0]]?r.a.createElement("button",{key:t._id,onClick:e.nextQuestion,value:t.name},t[e.state.quizOptions[0]].join(", ")):void 0}))),4===this.state.result.length&&r.a.createElement(o.b,{to:{pathname:"/result",state:{result:this.state.result}},className:"Result"},r.a.createElement("button",{className:"seeresult"},"See the Result")," ",r.a.createElement("img",{className:"demiguise",src:H.a,width:"200",alt:"result pixie"})))}}]),a}(r.a.Component),Y=a(36),B=a.n(Y),C=a(37),I=a.n(C),R=a(38),D=a.n(R),G=a(39),J=a.n(G),Q=function(e){Object(d.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={finalImage:[{name:"Gryffindor",img:B.a,info:"You belong in Gryffindor,\nWhere dwell the brave at heart,\nTheir daring, nerve, and chivalry\n Set Gryffindors apart."},{name:"Slytherin",img:I.a,info:"You belong in Slytherin,\n There you'll make your real friends,\nThose cunning folks use any means\nTo achieve their ends."},{name:"Ravenclaw",img:D.a,info:"You belong in wise old Ravenclaw,\nif you've a ready mind,\nWhere those of wit and learning,\nWill always find their kind"},{name:"Hufflepuff",img:J.a,info:"You belong in Hufflepuff,\nWhere they are just and loyal,\nThose patient Hufflepuffs are true\nAnd unafraid of toil"}]},e.findWinner=function(e){return e.sort((function(t,a){return e.filter((function(e){return e===t})).length-e.filter((function(e){return e===a})).length})).pop()},e.findImage=function(t){return e.state.finalImage.filter((function(e){if(e.name===t)return e}))},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this.findWinner(this.props.location.state.result),t=this.findImage(e);return r.a.createElement("div",{className:"result"},r.a.createElement("p",{className:"resultmessage"},e),r.a.createElement("img",{src:"".concat(t[0].img),width:"200",alt:"".concat(e)}),r.a.createElement("p",{className:"houseinfo"},"".concat(t[0].info)))}}]),a}(r.a.Component);var $=function(){return r.a.createElement(o.a,null,r.a.createElement(w,null),r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/",component:m}),r.a.createElement(c.a,{path:"/quiz",component:A}),r.a.createElement(c.a,{path:"/result",component:Q}),r.a.createElement(c.a,{path:"/*",component:x})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(71);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.26035407.chunk.js.map