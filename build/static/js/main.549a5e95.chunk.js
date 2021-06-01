(this.webpackJsonpchrisfiliatrault=this.webpackJsonpchrisfiliatrault||[]).push([[0],{39:function(e,a,t){e.exports=t(54)},44:function(e,a,t){},54:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(15),r=t.n(i),s=(t(44),t(35)),c=t(5),o={gradientColors:"#1b767c, #1b767c",firstName:"Chris",middleName:"",lastName:"Filiatrault",message:"Software Developer",icons:[{image:"fa-github",url:"https://github.com/Chris-Filiatrault"},{image:"fa-linkedin",url:"https://www.linkedin.com/in/chris-filiatrault/"}]},m={show:!0,heading:"About",imageLink:null,imageSize:375,message1:"Hi there! My name's Chris.",message2:"I have a long history of sport, studied Economics, speak Japanese and work as a Software Developer.",message3:"I built this website to learn more about web development and showcase a few of my projects."},u={show:!0,heading:"Skills",hardSkills:[{name:"HTML/CSS/JS",value:85},{name:"React",value:70},{name:"Source Control",value:80},{name:"iOS Development",value:90},{name:"OOP (Python, C#)",value:70},{name:"MarkLogic (NoSQL)",value:75},{name:"Statistics/Data Analysis",value:80},{name:"Japanese",value:90}],softSkills:[{name:"Problem Solving",value:85},{name:"Learning",value:95},{name:"Critial Thinking",value:90},{name:"Teamwork",value:85},{name:"Communication",value:90},{name:"Adaptability",value:75},{name:"Time Management",value:90},{name:"Emotional Awareness",value:85}]},d={show:!0,heading:"Get In Touch",message:"I'm currently looking for Software Developer positions in .NET or front end. To arrange a conversation, please feel free to reach out on "},g={show:!0,heading:"Projects",data:[{name:"Personal Website",description:"The source code for this website.",languages:"HTML, SCSS, JavaScript, Bootstrap, React",link:"https://github.com/Chris-Filiatrault/chris-filiatrault.github.io"},{name:"iShop",description:"A shopping list app for iOS & MacOS.",languages:"Swift",link:"https://github.com/Chris-Filiatrault/iShop"},{name:"Simple List",description:"A single-page iOS wlist app.",languages:"Swift",link:"https://github.com/Chris-Filiatrault/Simple-List"},{name:"Coding Assignment",description:"A .NET console application from a coding assignment.",languages:"C#",link:"https://github.com/Chris-Filiatrault/Coding-Assignment"}]},h=t(31),f=t.n(h),p=t(13),E=t(19),v=l.a.forwardRef((function(e,a){var t=e.gradient,n=e.title,i=e.message;e.icons;return l.a.createElement(E.a,{fluid:!0,id:"home",style:{background:"linear-gradient(136deg,".concat(t,")"),backgroundSize:"1200% 1200%"},className:"title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"},l.a.createElement("div",{id:"stars"}),l.a.createElement(p.a,{className:"text-center"},l.a.createElement("h1",{ref:a,className:"display-1"},n),l.a.createElement(f.a,{className:"lead typist",cursor:{show:!1}},i)))})),w=function(e){var a=e.heading,t=e.message1,n=e.message2,i=e.message3;return l.a.createElement("div",{id:"aboutme",className:"jumbotron jumbotron-fluid m-0"},l.a.createElement("div",{className:"container container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg"},l.a.createElement("h2",{className:"display-4 mb-5 text-center"},a),l.a.createElement("p",{className:"lead text-center"},t),l.a.createElement("p",{className:"lead text-center"},n),l.a.createElement("p",{className:"lead text-center"},i)))))},k=t(18),b=t(17),S=t(11),N=function(e){return l.a.createElement(b.a,{md:6},l.a.createElement(S.a.Link,{href:e.link,target:"_blank"},l.a.createElement(S.a,{className:"card shadow-lg p-3 mb-5 bg-white rounded"},l.a.createElement(S.a.Body,null,l.a.createElement(S.a.Title,{as:"h4"},e.name," "),l.a.createElement(S.a.Text,null,e.description),l.a.createElement("hr",null),l.a.createElement(S.a.Text,null,l.a.createElement("strong",null,"Languages: "),e.languages)))))},y=function(){return l.a.createElement(E.a,{fluid:!0,id:"projects",className:"bg-light m-0"},l.a.createElement(p.a,{className:""},l.a.createElement("h2",{className:"display-4 pb-5 text-center"},g.heading),l.a.createElement(k.a,null,g.data.map((function(e,a){return l.a.createElement(N,{name:e.name,description:e.description,languages:e.languages,link:e.link})})))))},x=function(e){return l.a.createElement("footer",{style:{backgroundColor:"#f5f5f5"},className:"mt-auto py-5 text-center "},l.a.createElement(p.a,null,e.children,l.a.createElement("div",{className:"p-5"},e.icons.map((function(e,a){return l.a.createElement("a",{key:"social-icon-".concat(a),target:"_blank",rel:"noopener noreferrer",href:e.url,"aria-label":"My ".concat(e.image.split("-")[1])},l.a.createElement("i",{className:"fab ".concat(e.image,"  fa-3x socialicons")}))})),l.a.createElement("p",null,"\xa9 Chris Filiatrault ",(new Date).getFullYear()))))},C=t(38),T=t(26),L=t(37),F=t(32);var A=function(e){var a=e.skill,t=e.value,n=e.isScrolled;return l.a.createElement("div",{style:{width:"95%"}},l.a.createElement("p",{className:"lead mb-1 mt-2"},a),l.a.createElement(F.a,{className:n?" progress-bar-animation":"progress",now:t}))};function P(e){var a=e.skills,t=e.isScrolled;return l.a.createElement(l.a.Fragment,null,a.map((function(e,a){return l.a.createElement(A,{key:"".concat(e,"-").concat(a),skill:e.name,value:e.value,isScrolled:t})})))}var M=function(e){var a=e.skills,t=e.isScrolled;return l.a.createElement(l.a.Fragment,null,l.a.createElement(b.a,{xs:12,md:6},l.a.createElement(P,{skills:a.slice(0,Math.floor(a.length/2)),isScrolled:t})),l.a.createElement(b.a,{xs:12,md:6},l.a.createElement(P,{skills:a.slice(Math.floor(a.length/2),a.length),isScrolled:t})))},O="undefined"!==typeof window?n.useLayoutEffect:n.useEffect,j="undefined"!==typeof window;function I(e){var a=e.element,t=e.useWindow;if(!j)return{x:0,y:0};var n=(a?a.current:document.body).getBoundingClientRect();return t?{x:window.scrollX,y:window.scrollY}:{x:n.left,y:n.top}}function R(e,a,t,l,i){var r=Object(n.useRef)(I({useWindow:l})),s=null,c=function(){var a=I({element:t,useWindow:l});e({prevPos:r.current,currPos:a}),r.current=a,s=null};O((function(){if(j){var e=function(){i?null===s&&(s=setTimeout(c,i)):c()};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e),s&&clearTimeout(s)}}}),a)}R.defaultProps={deps:[],element:!1,useWindow:!1,wait:null};var W=function(e){var a=e.heading,t=e.hardSkills,n=e.softSkills,i=l.a.useRef(),r=l.a.useState(!1),s=Object(C.a)(r,2),c=s[0],o=s[1];return R((function(e){e.prevPos;var a=e.currPos;!c&&a.y-400<0&&o(!0)}),[],i),l.a.createElement(E.a,{ref:i,fluid:!0,className:"bg-white m-0",id:"skills"},l.a.createElement(p.a,{className:"p-5 "},l.a.createElement("h2",{ref:i,className:"display-4 pb-5 text-center"},a),l.a.createElement(L.a,{className:"skills-tabs",defaultActiveKey:"hard-skills",id:"skills-tabs"},l.a.createElement(T.a,{tabClassName:"skills-tab lead",eventKey:"hard-skills",title:"Technical Skills"},l.a.createElement(k.a,{className:"pt-3 px-1"},l.a.createElement(M,{skills:t,isScrolled:c}))),l.a.createElement(T.a,{tabClassName:"skills-tab lead",eventKey:"soft-skills",title:"Soft Skills"},l.a.createElement(k.a,{className:"pt-3 px-1"},l.a.createElement(M,{skills:n,isScrolled:c}))))))},D=function(e){var a=e.heading,t=e.message;e.linkedIn;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{className:"display-4 pb-3 text-center"},a),l.a.createElement("p",{className:"lead text-center pb-3"},t," ",l.a.createElement("a",{href:"https://www.linkedin.com/in/chris-filiatrault/",target:"_blank"},"LinkedIn.")))},J=l.a.forwardRef((function(e,a){return l.a.createElement(l.a.Fragment,null,l.a.createElement(v,{gradient:o.gradientColors,title:"".concat(o.firstName," ").concat(o.middleName," ").concat(o.lastName),message:o.message,ref:a}),m.show&&l.a.createElement(w,{heading:m.heading,message1:m.message1,message2:m.message2,message3:m.message3,link:m.imageLink,imgSize:m.imageSize,resume:m.resume}),g.show&&l.a.createElement(y,null),u.show&&l.a.createElement(W,{heading:u.heading,hardSkills:u.hardSkills,softSkills:u.softSkills}),l.a.createElement(x,{icons:o.icons},d.show&&l.a.createElement(D,{heading:d.heading,message:d.message,email:d.email})))}));var B=function(){return l.a.createElement("div",{className:"container-flex"},l.a.createElement(s.a,null,l.a.createElement(c.c,null,l.a.createElement(c.a,{exact:!0,path:"/",component:J}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[39,1,2]]]);
//# sourceMappingURL=main.549a5e95.chunk.js.map