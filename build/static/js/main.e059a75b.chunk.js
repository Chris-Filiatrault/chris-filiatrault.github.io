(this.webpackJsonpchrisfiliatrault=this.webpackJsonpchrisfiliatrault||[]).push([[0],{29:function(e,a,t){e.exports=t(42)},34:function(e,a,t){},42:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(11),s=t.n(i),r=(t(34),{gradientColors:"#1b767c, #1b767c",firstName:"Chris",middleName:"",lastName:"Filiatrault",message:"Software Developer",icons:[{image:"fa-github",url:"https://github.com/Chris-Filiatrault"},{image:"fa-linkedin",url:"https://www.linkedin.com/in/chris-filiatrault/"}]}),c={show:!0,heading:"About",imageLink:null,imageSize:375,message1:"Hi there! My name's Chris.",message2:"I have a long history of sport, studied Economics, speak Japanese, work as a Software Developer and successfully manage a condition called Fibromyalgia.",message3:"I built this website to learn more about web development and showcase a few of my projects."},o={show:!0,heading:"Skills",hardSkills:[{name:"HTML/CSS/JS",value:85},{name:"React",value:70},{name:"Source Control",value:80},{name:"iOS Development",value:90},{name:"OOP (Python, C#)",value:70},{name:"MarkLogic (NoSQL)",value:75},{name:"Statistics/Data Analysis",value:80},{name:"Japanese",value:90}],softSkills:[{name:"Problem Solving",value:85},{name:"Learning",value:95},{name:"Critial Thinking",value:90},{name:"Teamwork",value:85},{name:"Communication",value:90},{name:"Adaptability",value:75},{name:"Time Management",value:90},{name:"Emotional Awareness",value:85}]},m={show:!0,heading:"Get In Touch",message:"I'm currently looking for Software Developer positions in .NET or front end. To arrange a conversation, please feel free to reach out on "},u={show:!0,heading:"Projects",data:[{name:"Personal Website",description:"The source code for this website.",languages:"HTML, SCSS, JavaScript, Bootstrap, React",link:"https://github.com/Chris-Filiatrault/chris-filiatrault.github.io"},{name:"iShop",description:"A shopping list app for iOS & MacOS.",languages:"Swift",link:"https://github.com/Chris-Filiatrault/iShop"},{name:"Simple List",description:"A single-page iOS list app.",languages:"Swift",link:"https://github.com/Chris-Filiatrault/Simple-List"},{name:"Coding Assignment",description:"A .NET console application from a coding assignment.",languages:"C#",link:"https://github.com/Chris-Filiatrault/Coding-Assignment"}]},d=t(21),g=t.n(d),h=t(8),f=t(15),p=l.a.forwardRef((function(e,a){var t=e.gradient,n=e.title,i=e.message;return l.a.createElement(f.a,{fluid:!0,id:"home",style:{background:"linear-gradient(136deg,".concat(t,")"),backgroundSize:"1200% 1200%"},className:"title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"},l.a.createElement("div",{id:"stars"}),l.a.createElement(h.a,{className:"text-center"},l.a.createElement("h1",{ref:a,className:"display-1"},n),l.a.createElement(g.a,{className:"lead typist",cursor:{show:!1}},l.a.createElement(g.a.Delay,{ms:"2000"}),i)))})),E=function(e){var a=e.heading,t=e.message1,n=e.message2,i=e.message3;return l.a.createElement("div",{id:"aboutme",className:"jumbotron jumbotron-fluid m-0"},l.a.createElement("div",{className:"container container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg"},l.a.createElement("h2",{className:"display-4 mb-5 text-center"},a),l.a.createElement("p",{className:"lead text-center"},t),l.a.createElement("p",{className:"lead text-center"},n),l.a.createElement("p",{className:"lead text-center"},i)))))},v=t(14),w=t(13),k=t(7),b=function(e){return l.a.createElement(w.a,{md:6},l.a.createElement(k.a.Link,{href:e.link,target:"_blank"},l.a.createElement(k.a,{className:"card shadow-lg p-3 mb-5 bg-white rounded"},l.a.createElement(k.a.Body,null,l.a.createElement(k.a.Title,{as:"h4"},e.name," "),l.a.createElement(k.a.Text,null,e.description),l.a.createElement("hr",null),l.a.createElement(k.a.Text,null,l.a.createElement("strong",null,"Languages: "),e.languages)))))},S=function(){return l.a.createElement(f.a,{fluid:!0,id:"projects",className:"bg-light m-0"},l.a.createElement(h.a,{className:""},l.a.createElement("h2",{className:"display-4 pb-5 text-center"},u.heading),l.a.createElement(v.a,null,u.data.map((function(e,a){return l.a.createElement(b,{name:e.name,description:e.description,languages:e.languages,link:e.link})})))))},N=function(e){return l.a.createElement("footer",{style:{backgroundColor:"#f5f5f5"},className:"mt-auto py-5 text-center "},l.a.createElement(h.a,null,e.children,l.a.createElement("div",{className:"p-5"},e.icons.map((function(e,a){return l.a.createElement("a",{key:"social-icon-".concat(a),target:"_blank",rel:"noopener noreferrer",href:e.url,"aria-label":"My ".concat(e.image.split("-")[1])},l.a.createElement("i",{className:"fab ".concat(e.image,"  fa-3x socialicons")}))})),l.a.createElement("p",null,"\xa9 Chris Filiatrault ",(new Date).getFullYear()))))},y=t(28),x=t(22),C=t(27),T=t(24);var L=function(e){var a=e.skill,t=e.value,n=e.isScrolled;return l.a.createElement("div",{style:{width:"95%"}},l.a.createElement("p",{className:"lead mb-1 mt-2"},a),l.a.createElement(T.a,{className:n?" progress-bar-animation":"progress",now:t}))};function F(e){var a=e.skills,t=e.isScrolled;return l.a.createElement(l.a.Fragment,null,a.map((function(e,a){return l.a.createElement(L,{key:"".concat(e,"-").concat(a),skill:e.name,value:e.value,isScrolled:t})})))}var A=function(e){var a=e.skills,t=e.isScrolled;return l.a.createElement(l.a.Fragment,null,l.a.createElement(w.a,{xs:12,md:6},l.a.createElement(F,{skills:a.slice(0,Math.floor(a.length/2)),isScrolled:t})),l.a.createElement(w.a,{xs:12,md:6},l.a.createElement(F,{skills:a.slice(Math.floor(a.length/2),a.length),isScrolled:t})))},P="undefined"!==typeof window?n.useLayoutEffect:n.useEffect,M="undefined"!==typeof window;function O(e){var a=e.element,t=e.useWindow;if(!M)return{x:0,y:0};var n=(a?a.current:document.body).getBoundingClientRect();return t?{x:window.scrollX,y:window.scrollY}:{x:n.left,y:n.top}}function j(e,a,t,l,i){var s=Object(n.useRef)(O({useWindow:l})),r=null,c=function(){var a=O({element:t,useWindow:l});e({prevPos:s.current,currPos:a}),s.current=a,r=null};P((function(){if(M){var e=function(){i?null===r&&(r=setTimeout(c,i)):c()};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e),r&&clearTimeout(r)}}}),a)}j.defaultProps={deps:[],element:!1,useWindow:!1,wait:null};var D=function(e){var a=e.heading,t=e.hardSkills,n=e.softSkills,i=l.a.useRef(),s=l.a.useState(!1),r=Object(y.a)(s,2),c=r[0],o=r[1];return j((function(e){e.prevPos;var a=e.currPos;!c&&a.y-400<0&&o(!0)}),[],i),l.a.createElement(f.a,{ref:i,fluid:!0,className:"bg-white m-0",id:"skills"},l.a.createElement(h.a,{className:"p-5 "},l.a.createElement("h2",{ref:i,className:"display-4 pb-5 text-center"},a),l.a.createElement(C.a,{className:"skills-tabs",defaultActiveKey:"hard-skills",id:"skills-tabs"},l.a.createElement(x.a,{tabClassName:"skills-tab lead",eventKey:"hard-skills",title:"Technical Skills"},l.a.createElement(v.a,{className:"pt-3 px-1"},l.a.createElement(A,{skills:t,isScrolled:c}))),l.a.createElement(x.a,{tabClassName:"skills-tab lead",eventKey:"soft-skills",title:"Soft Skills"},l.a.createElement(v.a,{className:"pt-3 px-1"},l.a.createElement(A,{skills:n,isScrolled:c}))))))},I=function(e){var a=e.heading,t=e.message;e.linkedIn;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{className:"display-4 pb-3 text-center"},a),l.a.createElement("p",{className:"lead text-center pb-3"},t," ",l.a.createElement("a",{href:"https://www.linkedin.com/in/chris-filiatrault/",target:"_blank"},"LinkedIn.")))},R=l.a.forwardRef((function(e,a){return l.a.createElement(l.a.Fragment,null,l.a.createElement(p,{gradient:r.gradientColors,title:"".concat(r.firstName," ").concat(r.middleName," ").concat(r.lastName),message:r.message,ref:a}),c.show&&l.a.createElement(E,{heading:c.heading,message1:c.message1,message2:c.message2,message3:c.message3,link:c.imageLink,imgSize:c.imageSize,resume:c.resume}),u.show&&l.a.createElement(S,null),o.show&&l.a.createElement(D,{heading:o.heading,hardSkills:o.hardSkills,softSkills:o.softSkills}),l.a.createElement(N,{icons:r.icons},m.show&&l.a.createElement(I,{heading:m.heading,message:m.message,email:m.email})))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[29,1,2]]]);
//# sourceMappingURL=main.e059a75b.chunk.js.map