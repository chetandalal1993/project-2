(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{27:function(a,e,t){a.exports=t.p+"static/media/hogwarts2.149f4998.png"},30:function(a,e,t){a.exports=t.p+"static/media/hat.f7acbc5a.png"},31:function(a,e,t){a.exports=t.p+"static/media/housescrest.c71cb81f.png"},32:function(a,e,t){a.exports=t.p+"static/media/errorpixie.af3e9ef5.png"},35:function(a,e,t){a.exports=t.p+"static/media/demiguise.a94c5452.png"},36:function(a,e,t){a.exports=t.p+"static/media/g2.17cfdbfa.png"},37:function(a,e,t){a.exports=t.p+"static/media/s2.e5bdac06.png"},38:function(a,e,t){a.exports=t.p+"static/media/r2.039b15c9.png"},39:function(a,e,t){a.exports=t.p+"static/media/h2.569d46c4.png"},40:function(a,e,t){a.exports=t.p+"static/media/peeku1.545c54f3.jpeg"},41:function(a,e,t){a.exports=t.p+"static/media/peeku2.99c1ca9b.jpeg"},42:function(a,e,t){a.exports=t.p+"static/media/peeku3.a1b74ab9.jpeg"},43:function(a,e,t){a.exports=t.p+"static/media/peeku4.04ab72fe.jpeg"},44:function(a,e,t){a.exports=t(76)},49:function(a,e,t){},50:function(a,e,t){},51:function(a,e,t){},75:function(a,e,t){a.exports=t.p+"static/media/HARRYP__.181ef9a7.TTF"},76:function(a,e,t){"use strict";t.r(e);var c=t(0),n=t.n(c),o=t(26),d=t.n(o),s=(t(49),t(50),t(4)),i=t(5),r=(t(51),t(27)),f=t.n(r),l=function(){return n.a.createElement("section",{className:"hero is-fullheight-with-navbar is-warning"},n.a.createElement("div",{className:"hero-body"},n.a.createElement("div",{className:"container"},n.a.createElement("p",{className:"hometitle"},"Peeku, Welcome To Hogwarts!"),n.a.createElement("img",{src:f.a,width:"600",alt:"hogwarts"}),n.a.createElement("p",{className:"homemsg"},"Sort Yourself Into a House with the Sorting Hat!"),n.a.createElement(s.b,{to:"/quiz",className:"Button"},n.a.createElement("button",{className:"startquizbutton button"},"Start Quiz")))))},u=t(6),h=t(7),m=t(8),b=t(9),p=t(30),g=t.n(p),v=t(31),y=t.n(v),k=function(a){Object(b.a)(t,a);var e=Object(m.a)(t);function t(){var a;Object(u.a)(this,t);for(var c=arguments.length,n=new Array(c),o=0;o<c;o++)n[o]=arguments[o];return(a=e.call.apply(e,[this].concat(n))).state={isOpen:!1},a.handleToggle=function(){a.setState({isOpen:!a.state.isOpen})},a}return Object(h.a)(t,[{key:"componentDidUpdate",value:function(a){this.props.location.pathname!==a.location.pathname&&this.setState({isOpen:!1})}},{key:"render",value:function(){var a=this.state.isOpen;return n.a.createElement("nav",{className:"navbar is-dark"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"navbar-brand"},n.a.createElement(s.b,{to:"/",className:"navbar-item"},n.a.createElement("img",{className:"navimg",src:y.a,height:"60",alt:"sorting hat"}),n.a.createElement("p",{className:"navtext"},"Home")),n.a.createElement("span",{onClick:this.handleToggle,className:"navbar-burger ".concat(a?"is-active":"")},n.a.createElement("span",null),n.a.createElement("span",null),n.a.createElement("span",null))),n.a.createElement("div",{className:"navbar-menu ".concat(a?"is-active":"")},n.a.createElement("div",{className:"navbar-end"},n.a.createElement(s.b,{to:"/quiz",className:"navbar-item"},n.a.createElement("img",{className:"navimg",src:g.a,height:"60",alt:"sorting hat"}),n.a.createElement("p",{className:"navtext"},"Sorting Hat"))))))}}]),t}(n.a.Component),O=Object(i.f)(k),w=(t(32),t(15)),E=t.n(w),j=t(33),q=t(11),N=(t(34),t(35)),x=t.n(N);function H(a){for(var e=0;e<a.questions.length;e++){var t=a.questions[e],c=Math.floor(Math.random()*a.questions.length);a.questions[e]=a.questions[c],a.questions[c]=t,t=a.quizOptions[e],a.quizOptions[e]=a.quizOptions[c],a.quizOptions[c]=t}return a}function S(a){return a.questions=a.questions.slice(3),a.quizOptions=a.quizOptions.slice(3),a}var _=function(a){Object(b.a)(t,a);var e=Object(m.a)(t);function t(){var a;Object(u.a)(this,t);for(var c=arguments.length,n=new Array(c),o=0;o<c;o++)n[o]=arguments[o];return(a=e.call.apply(e,[this].concat(n))).state={housesData:[],result:[],questions:["So Peeka, which is the best name in the world?","Puchka, which day is the hottest and sweetest?","Which is your favourite song, Peeka baby?","Okay Jhingalala. Who is your favourite?","Peeku Rani, what's your favourite quote?"],quizOptions:["mascot","colors","song","values","headOfHouse"]},a.state=H(a.state),a.state=S(a.state),a.nextQuestion=function(e){var t=Object(q.a)(a.state.questions.slice(1)),c=Object(q.a)(a.state.quizOptions.slice(1));a.setState({questions:t,quizOptions:c});var n=Object(q.a)(a.state.result);n.push(e.target.value),a.setState({result:n})},a}return Object(h.a)(t,[{key:"componentDidMount",value:function(){var a=Object(j.a)(E.a.mark((function a(){var e;return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:try{console.log("Yo"),'{"data":[{"_id":"5a05e2b252f721a3cf2ea33f","name":"Gryffindor","mascot":"Baby","headOfHouse":"Tumne to mujhe jaana hi kaha hai","houseGhost":"Nearly Headless Nick","founder":"Goderic Gryffindor","__v":0,"school":"Hogwarts School of Witchcraft and Wizardry","members":["5a0fa648ae5bc100213c2332","5a0fa67dae5bc100213c2333","5a0fa7dcae5bc100213c2338","5a107e1ae0686c0021283b19","5a10944f3dc2080021cd8755","5a10947c3dc2080021cd8756","5a1096b33dc2080021cd8762","5a1097653dc2080021cd8763","5a1098fd3dc2080021cd876e","5a109af13dc2080021cd877a","5a109bfc3dc2080021cd877f","5a109c3d3dc2080021cd8780","5a109cb83dc2080021cd8784","5a109cd33dc2080021cd8785","5a109e143dc2080021cd878d","5a109e1e3dc2080021cd878e","5a109e253dc2080021cd878f","5a109e543dc2080021cd8790","5a109f053dc2080021cd8793","5a1226520f5ae10021650d76","5a1226d70f5ae10021650d77","5a12292a0f5ae10021650d7e","5a12298d0f5ae10021650d7f","5a1229e10f5ae10021650d80","5a122cbe0f5ae10021650d89","5a1233ff0f5ae10021650d98","5a1234cb0f5ae10021650d9b","5a1237480f5ae10021650da3","5a1237c00f5ae10021650da5","5a1238070f5ae10021650da6","5a1238350f5ae10021650da7","5a12387a0f5ae10021650da8","5a1238b20f5ae10021650da9","5a1239130f5ae10021650daa","5a12393d0f5ae10021650dab","5a12395f0f5ae10021650dac","5a1239c80f5ae10021650dad","5a1239f10f5ae10021650dae","5a123b450f5ae10021650db7","5a123f130f5ae10021650dcc"],"values":"Seeta-Geeta","colors":"Day 0","song":"Jab tak rahega samose mein aalu"},{"_id":"5a05da69d45bd0a11bd5e06f","name":"Ravenclaw","mascot":"Phoolan Devi","headOfHouse":"Hotness is transient","houseGhost":"The Grey Lady","founder":"Rowena Ravenclaw","__v":0,"school":"Hogwarts School of Witchcraft and Wizardry","members":["5a0fa8a6ae5bc100213c233b","5a107ffee0686c0021283b21","5a108023e0686c0021283b22","5a108047e0686c0021283b23","5a1097d53dc2080021cd8769","5a1099cf3dc2080021cd8772","5a109a553dc2080021cd8777","5a109de83dc2080021cd878c","5a109e943dc2080021cd8791","5a109ebd3dc2080021cd8792","5a1225a20f5ae10021650d73","5a12260f0f5ae10021650d75","5a122a880f5ae10021650d82","5a122ac40f5ae10021650d83","5a122aef0f5ae10021650d84","5a12368a0f5ae10021650da0","5a123e450f5ae10021650dc8"],"values":"Laila","colors":"Day 1","song":"Peeku Peeku Peeku Aaja Aaja Aaja"},{"_id":"5a05dc8cd45bd0a11bd5e071","name":"Slytherin","mascot":"Palak Jain","headOfHouse":"Aur batao","houseGhost":"The Bloody Baron","founder":"Salazar Slytherin","__v":0,"members":["5a0fa6bbae5bc100213c2334","5a0fa6e8ae5bc100213c2335","5a0fa74eae5bc100213c2336","5a0fa772ae5bc100213c2337","5a107e4ae0686c0021283b1a","5a1093eb3dc2080021cd8753","5a10942a3dc2080021cd8754","5a1099353dc2080021cd876f","5a109aa03dc2080021cd8779","5a109d893dc2080021cd8789","5a109d9f3dc2080021cd878a","5a109dab3dc2080021cd878b","5a109f8b3dc2080021cd8795","5a109fa83dc2080021cd8796","5a109fde3dc2080021cd8797","5a1225640f5ae10021650d72","5a1225e30f5ae10021650d74","5a122c200f5ae10021650d88","5a1232600f5ae10021650d93","5a12327c0f5ae10021650d94","5a1233bc0f5ae10021650d97","5a1235060f5ae10021650d9c","5a1236eb0f5ae10021650da1","5a123a710f5ae10021650db1","5a123af40f5ae10021650db5"],"values":"Chhoti Peeku","colors":"Day 2","song":"O Peeku Rani Oye hoye Oye hoye"},{"_id":"5a05dc58d45bd0a11bd5e070","name":"Hufflepuff","mascot":"Babu","headOfHouse":"Kuchh bhi chalega mujhe","houseGhost":"The Fat Friar","founder":"Helga Hufflepuff","__v":0,"school":"Hogwarts School of Witchcraft and Wizardry","members":["5a0fa11a4d153d00212c47cc","5a0fa360ae5bc100213c232c","5a0fa365ae5bc100213c232d","5a0fa4daae5bc100213c232e","5a0fa842ae5bc100213c2339","5a0fa86dae5bc100213c233a","5a1096253dc2080021cd875f","5a1098bd3dc2080021cd876d","5a109c993dc2080021cd8783","5a1223720f5ae10021650d6f","5a1223ed0f5ae10021650d70","5a122f3d0f5ae10021650d8d","5a1232b10f5ae10021650d95","5a12333f0f5ae10021650d96","5a1234500f5ae10021650d99","5a1235790f5ae10021650d9d","5a123cb40f5ae10021650dbc"],"values":"Potentially Chhoti Peeku","colors":"Day 3","song":"Aaj unse milna hai hume"}],"status":200,"statusText":"","headers":{"content-type":"application/json; charset=utf-8"},"config":{"url":"https://www.potterapi.com/v1/houses?key=$2a$10$t6cqE4.0tqBOAAkoYBb3G.ZZ8B8aJ55eOn5wTyv.mfkWgHT7xJ75y","method":"get","headers":{"Accept":"application/json, text/plain, */*"},"transformRequest":[null],"transformResponse":[null],"timeout":0,"xsrfCookieName":"XSRF-TOKEN","xsrfHeaderName":"X-XSRF-TOKEN","maxContentLength":-1},"request":{}}',e=JSON.parse('{"data":[{"_id":"5a05e2b252f721a3cf2ea33f","name":"Gryffindor","mascot":"Baby","headOfHouse":"Tumne to mujhe jaana hi kaha hai","houseGhost":"Nearly Headless Nick","founder":"Goderic Gryffindor","__v":0,"school":"Hogwarts School of Witchcraft and Wizardry","members":["5a0fa648ae5bc100213c2332","5a0fa67dae5bc100213c2333","5a0fa7dcae5bc100213c2338","5a107e1ae0686c0021283b19","5a10944f3dc2080021cd8755","5a10947c3dc2080021cd8756","5a1096b33dc2080021cd8762","5a1097653dc2080021cd8763","5a1098fd3dc2080021cd876e","5a109af13dc2080021cd877a","5a109bfc3dc2080021cd877f","5a109c3d3dc2080021cd8780","5a109cb83dc2080021cd8784","5a109cd33dc2080021cd8785","5a109e143dc2080021cd878d","5a109e1e3dc2080021cd878e","5a109e253dc2080021cd878f","5a109e543dc2080021cd8790","5a109f053dc2080021cd8793","5a1226520f5ae10021650d76","5a1226d70f5ae10021650d77","5a12292a0f5ae10021650d7e","5a12298d0f5ae10021650d7f","5a1229e10f5ae10021650d80","5a122cbe0f5ae10021650d89","5a1233ff0f5ae10021650d98","5a1234cb0f5ae10021650d9b","5a1237480f5ae10021650da3","5a1237c00f5ae10021650da5","5a1238070f5ae10021650da6","5a1238350f5ae10021650da7","5a12387a0f5ae10021650da8","5a1238b20f5ae10021650da9","5a1239130f5ae10021650daa","5a12393d0f5ae10021650dab","5a12395f0f5ae10021650dac","5a1239c80f5ae10021650dad","5a1239f10f5ae10021650dae","5a123b450f5ae10021650db7","5a123f130f5ae10021650dcc"],"values":"Seeta-Geeta","colors":"Day 0","song":"Jab tak rahega samose mein aalu"},{"_id":"5a05da69d45bd0a11bd5e06f","name":"Ravenclaw","mascot":"Phoolan Devi","headOfHouse":"Hotness is transient","houseGhost":"The Grey Lady","founder":"Rowena Ravenclaw","__v":0,"school":"Hogwarts School of Witchcraft and Wizardry","members":["5a0fa8a6ae5bc100213c233b","5a107ffee0686c0021283b21","5a108023e0686c0021283b22","5a108047e0686c0021283b23","5a1097d53dc2080021cd8769","5a1099cf3dc2080021cd8772","5a109a553dc2080021cd8777","5a109de83dc2080021cd878c","5a109e943dc2080021cd8791","5a109ebd3dc2080021cd8792","5a1225a20f5ae10021650d73","5a12260f0f5ae10021650d75","5a122a880f5ae10021650d82","5a122ac40f5ae10021650d83","5a122aef0f5ae10021650d84","5a12368a0f5ae10021650da0","5a123e450f5ae10021650dc8"],"values":"Laila","colors":"Day 1","song":"Peeku Peeku Peeku Aaja Aaja Aaja"},{"_id":"5a05dc8cd45bd0a11bd5e071","name":"Slytherin","mascot":"Palak Jain","headOfHouse":"Aur batao","houseGhost":"The Bloody Baron","founder":"Salazar Slytherin","__v":0,"members":["5a0fa6bbae5bc100213c2334","5a0fa6e8ae5bc100213c2335","5a0fa74eae5bc100213c2336","5a0fa772ae5bc100213c2337","5a107e4ae0686c0021283b1a","5a1093eb3dc2080021cd8753","5a10942a3dc2080021cd8754","5a1099353dc2080021cd876f","5a109aa03dc2080021cd8779","5a109d893dc2080021cd8789","5a109d9f3dc2080021cd878a","5a109dab3dc2080021cd878b","5a109f8b3dc2080021cd8795","5a109fa83dc2080021cd8796","5a109fde3dc2080021cd8797","5a1225640f5ae10021650d72","5a1225e30f5ae10021650d74","5a122c200f5ae10021650d88","5a1232600f5ae10021650d93","5a12327c0f5ae10021650d94","5a1233bc0f5ae10021650d97","5a1235060f5ae10021650d9c","5a1236eb0f5ae10021650da1","5a123a710f5ae10021650db1","5a123af40f5ae10021650db5"],"values":"Chhoti Peeku","colors":"Day 2","song":"O Peeku Rani Oye hoye Oye hoye"},{"_id":"5a05dc58d45bd0a11bd5e070","name":"Hufflepuff","mascot":"Babu","headOfHouse":"Kuchh bhi chalega mujhe","houseGhost":"The Fat Friar","founder":"Helga Hufflepuff","__v":0,"school":"Hogwarts School of Witchcraft and Wizardry","members":["5a0fa11a4d153d00212c47cc","5a0fa360ae5bc100213c232c","5a0fa365ae5bc100213c232d","5a0fa4daae5bc100213c232e","5a0fa842ae5bc100213c2339","5a0fa86dae5bc100213c233a","5a1096253dc2080021cd875f","5a1098bd3dc2080021cd876d","5a109c993dc2080021cd8783","5a1223720f5ae10021650d6f","5a1223ed0f5ae10021650d70","5a122f3d0f5ae10021650d8d","5a1232b10f5ae10021650d95","5a12333f0f5ae10021650d96","5a1234500f5ae10021650d99","5a1235790f5ae10021650d9d","5a123cb40f5ae10021650dbc"],"values":"Potentially Chhoti Peeku","colors":"Day 3","song":"Aaj unse milna hai hume"}],"status":200,"statusText":"","headers":{"content-type":"application/json; charset=utf-8"},"config":{"url":"https://www.potterapi.com/v1/houses?key=$2a$10$t6cqE4.0tqBOAAkoYBb3G.ZZ8B8aJ55eOn5wTyv.mfkWgHT7xJ75y","method":"get","headers":{"Accept":"application/json, text/plain, */*"},"transformRequest":[null],"transformResponse":[null],"timeout":0,"xsrfCookieName":"XSRF-TOKEN","xsrfHeaderName":"X-XSRF-TOKEN","maxContentLength":-1},"request":{}}'),console.log(JSON.stringify(e)),this.setState({housesData:e.data})}catch(t){console.log(t),this.props.history.push("/notfound")}case 1:case"end":return a.stop()}}),a,this)})));return function(){return a.apply(this,arguments)}}()},{key:"render",value:function(){var a=this;return n.a.createElement("div",{className:"quiz"},n.a.createElement("p",{className:"questions"},this.state.questions[0]),n.a.createElement("div",{className:"options"},this.state.housesData.map((function(e){return"string"===typeof e[a.state.quizOptions[0]]?n.a.createElement("button",{key:e._id,onClick:a.nextQuestion,value:e.name},e[a.state.quizOptions[0]]):"object"===typeof e[a.state.quizOptions[0]]?n.a.createElement("button",{key:e._id,onClick:a.nextQuestion,value:e.name},e[a.state.quizOptions[0]].join(", ")):void 0}))),2===this.state.result.length&&n.a.createElement(s.b,{to:{pathname:"/result",state:{result:this.state.result}},className:"Result"},n.a.createElement("button",{className:"seeresult"},"See the Result")," ",n.a.createElement("img",{className:"demiguise",src:x.a,width:"200",alt:"result pixie"})))}}]),t}(n.a.Component),z=t(36),T=t.n(z),P=t(37),R=t.n(P),W=t(38),G=t.n(W),A=t(39),B=t.n(A),D=t(40),C=t.n(D),J=t(41),Y=t.n(J),F=t(42),M=t.n(F),$=t(43),I=t.n($),K=function(a){Object(b.a)(t,a);var e=Object(m.a)(t);function t(){var a;Object(u.a)(this,t);for(var c=arguments.length,n=new Array(c),o=0;o<c;o++)n[o]=arguments[o];return(a=e.call.apply(e,[this].concat(n))).state={finalImage:[{name:"Gryffindor",img1:T.a,img2:M.a,info:"You belong in Gryffindor,\nWhere hotness is transient,\n Your yawns and paad, frequent but cute,\n Makes Cheeku go in love every night."},{name:"Slytherin",img1:R.a,img2:C.a,info:"You belong in Slytherin,\n There you'll be called kamini,\nYou will never award enough points\nBut your smile will make up for all the kanjoosi."},{name:"Ravenclaw",img1:G.a,img2:Y.a,info:"You belong in sweet and innocent Ravenclaw,\nWho squats while holding ears,\nWho looks cute and hot always,\nBe it Day 0 or Day 3"},{name:"Hufflepuff",img1:B.a,img2:I.a,info:"You belong in Hufflepuff,\nWith soft soft gaal.. uff,\n They love infintely, yes the rumours are true\nJust look at you"}]},a.findWinner=function(a){return console.log(a),a.sort((function(e,t){return a.filter((function(a){return a===e})).length-a.filter((function(a){return a===t})).length})).pop()},a.findImage=function(e){return a.state.finalImage.filter((function(a){if(a.name===e)return a}))},a}return Object(h.a)(t,[{key:"render",value:function(){var a=["Gryffindor","Slytherin","Ravenclaw","Hufflepuff"][Math.floor(4*Math.random())],e=this.findImage(a);return n.a.createElement("div",{className:"result"},n.a.createElement("p",{className:"resultmessage"},a),n.a.createElement("table",null,n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("img",{src:"".concat(e[0].img1),align:"center",width:"200px",height:"100px",alt:"".concat(a)})),n.a.createElement("td",null,n.a.createElement("img",{src:"".concat(e[0].img2),align:"center",width:"200px",height:"100px",alt:"".concat(a)})))),n.a.createElement("p",{className:"houseinfo"},"".concat(e[0].info)))}}]),t}(n.a.Component);var L=function(){return n.a.createElement(s.a,null,n.a.createElement(O,null),n.a.createElement(i.c,null,n.a.createElement(i.a,{exact:!0,path:"/",component:l}),n.a.createElement(i.a,{path:"/quiz",component:_}),n.a.createElement(i.a,{path:"/result",component:K}),n.a.createElement(i.a,{path:"/*",component:l})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(75);d.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(a){a.unregister()})).catch((function(a){console.error(a.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.bad8a3d9.chunk.js.map