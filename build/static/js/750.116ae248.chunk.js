"use strict";(self.webpackChunksmr=self.webpackChunksmr||[]).push([[750],{4750:function(e,s,a){a.r(s),a.d(s,{default:function(){return A}});var n=a(2791),t=a(885),r=a(5880),c=a(8014),l=a(1978),i=a(1523),o=a(7087),d=a(184),h=function(){var e=(0,n.useState)(!1),s=(0,t.Z)(e,2),a=s[0],h=s[1];return(0,d.jsxs)("nav",{className:"app__nav",children:[(0,d.jsx)("div",{className:"app__nav-logo",children:(0,d.jsx)("a",{href:"/",children:(0,d.jsx)(o.LazyLoadImage,{src:"https://firebasestorage.googleapis.com/v0/b/smsr-f0102.appspot.com/o/about%2Fsmlogo1.webp?alt=media&token=8ade8d82-3206-4e0c-ba1a-94a58c48fdad",alt:"logo.png",style:{height:"3rem",width:"3rem"}})})}),(0,d.jsx)("div",{className:"app__nav-links",children:(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{className:"app__flex",children:(0,d.jsx)(i.OL,{exact:!0,activeClassName:"active",to:"/",children:"Home"})}),(0,d.jsx)("li",{className:"app__flex",children:(0,d.jsx)(i.OL,{activeClassName:"active",to:"/about",children:"About"})}),(0,d.jsx)("li",{className:"app__flex",children:(0,d.jsx)(i.OL,{activeClassName:"active",to:"/product",children:"Product"})}),(0,d.jsx)("li",{className:"app__flex",children:(0,d.jsx)(i.OL,{activeClassName:"active",to:"/contact",children:"Contact"})})]})}),(0,d.jsxs)("div",{className:"app__nav-menu",children:[(0,d.jsx)(c.vHB,{className:"menu",fontSize:24,onClick:function(){return h(!0)}}),a&&(0,d.jsxs)(l.E.div,{className:"mobile-menu",scr:"true",whileInView:{x:[-300,0]},transition:{duration:.3,ease:"easeInOut"},children:[(0,d.jsx)(r.Fk5,{className:"close",onClick:function(){return h(!1)}}),(0,d.jsxs)("ul",{className:"app__nav-link",children:[(0,d.jsx)("li",{className:"app__flex",children:(0,d.jsx)("a",{href:"/",className:"nav-link",children:"Home"})}),(0,d.jsx)("li",{className:"app__flex",children:(0,d.jsx)("a",{href:"/about",className:"nav-link",children:"About"})}),(0,d.jsx)("li",{className:"app__flex",children:(0,d.jsx)("a",{href:"/product",className:"nav-link",children:"Product"})}),(0,d.jsx)("li",{className:"app__flex",children:(0,d.jsx)("a",{href:"/contact",className:"nav-link",children:"Contact"})})]})]})]})]})},u=a(5861),p=a(7757),x=a.n(p),m=a(3416),j=a(2576),f=a(4849),v=a(4266),_=a(4569),N=a.n(_),b=function(){var e=(0,n.useState)(!1),s=(0,t.Z)(e,2),a=s[0],r=s[1],c=(0,n.useState)(),l=(0,t.Z)(c,2),i=l[0],o=l[1],d=(0,n.useState)(!1),h=(0,t.Z)(d,2),p=h[0],m=h[1],j=(0,n.useRef)([]),f=(0,n.useCallback)(function(){var e=(0,u.Z)(x().mark((function e(s){var a,n,t,c,l=arguments;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=l.length>1&&void 0!==l[1]?l[1]:"GET",n=l.length>2&&void 0!==l[2]?l[2]:null,r(!0),t=new AbortController,j.current.push(t),e.prev=5,e.next=8,N()({method:a,url:s,data:n,signal:t.signal});case 8:return c=e.sent,r(!1),e.abrupt("return",c.data);case 13:throw e.prev=13,e.t0=e.catch(5),o(e.t0),m(!0),e.t0;case 18:return e.prev=18,r(!1),e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[5,13,18,21]])})));return function(s){return e.apply(this,arguments)}}(),[]);return(0,n.useEffect)((function(){var e=j.current;return function(){e.forEach((function(e){return e.abort()}))}}),[]),{isLoading:a,error:i,sendRequest:f,show:p}},k=function(){var e=(0,n.useState)(0),s=(0,t.Z)(e,2),a=s[0],r=s[1],c=b(),l=c.isLoading,i=c.error,o=c.sendRequest;return(0,n.useEffect)((function(){var e=function(){var e=(0,u.Z)(x().mark((function e(){var s;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o("https://api.countapi.xyz/hit/localhost/");case 3:s=e.sent,r(s.value),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[o]),(0,d.jsxs)("div",{className:"app__footer",children:[(0,d.jsxs)("footer",{className:"app__footer-data",children:[(0,d.jsxs)("div",{className:"connect",children:[(0,d.jsxs)("div",{className:"visitors",children:[(0,d.jsx)("h2",{style:{textDecoration:"underline"},children:"Let's get in touch"}),(0,d.jsxs)("span",{children:["Visits :",(0,d.jsx)(m.Z,{placement:"right",overlay:(0,d.jsx)(j.Z,{children:"Views"}),children:(0,d.jsxs)("span",{className:"visits",children:[l?(0,d.jsx)(f.Z,{animation:"grow",size:"sm"}):a,i&&(0,d.jsx)("span",{children:i})]})})]})]}),(0,d.jsxs)("ul",{className:"app__footer-links",children:[(0,d.jsx)("li",{className:"app-link",children:(0,d.jsx)("a",{href:"https://www.indiamart.com/smsteelropes/",target:"blank",children:"IndiaMart"})}),(0,d.jsx)("li",{className:"app-link",children:(0,d.jsx)("a",{href:"https://smsteelropes.com",target:"blank",children:"Website"})})]})]}),(0,d.jsxs)("div",{className:"app__footer-add",children:[(0,d.jsx)("h2",{style:{textDecoration:"underline"},children:"Contact Us"}),(0,d.jsx)("p",{children:"Location: G9, K-square, Kurund Village, Padgha, Bhiwandi, 421101"}),(0,d.jsxs)("p",{children:[(0,d.jsx)("span",{children:"Email: "})," ",(0,d.jsx)("a",{href:"mailto:contact@smsteelropes.com",children:"contact@smsteelropes.com"})]}),(0,d.jsxs)("p",{children:[(0,d.jsx)("span",{children:"Contact: "}),(0,d.jsx)("a",{href:"tel: +919820270934",children:"+919820270934"})]})]})]}),(0,d.jsx)(v.Z,{className:"app__footer-copy",children:(0,d.jsx)("div",{className:"copy",children:(0,d.jsxs)("h4",{children:["\xa9 2021 - ",(new Date).getFullYear()," S M Steel Ropes"]})})})]})},g=a(3853),C=a(9271),w=n.lazy((function(){return Promise.all([a.e(270),a.e(349),a.e(495)]).then(a.bind(a,3627))})),S=n.lazy((function(){return Promise.all([a.e(270),a.e(932),a.e(427)]).then(a.bind(a,3051))})),E=n.lazy((function(){return Promise.all([a.e(270),a.e(349),a.e(895)]).then(a.bind(a,9655))})),y=n.lazy((function(){return Promise.all([a.e(270),a.e(349),a.e(675)]).then(a.bind(a,8541))})),A=function(){return(0,d.jsx)(i.VK,{children:(0,d.jsxs)("div",{className:"app",children:[(0,d.jsx)(h,{}),(0,d.jsx)(n.Suspense,{fallback:(0,d.jsx)("div",{className:"cer",children:(0,d.jsx)(g.dAq,{className:"load",style:{fontSize:"3rem"}})}),children:(0,d.jsxs)(C.rs,{children:[(0,d.jsx)(C.AW,{exact:!0,path:"/",component:S}),(0,d.jsx)(C.AW,{path:"/about",component:E}),(0,d.jsx)(C.AW,{path:"/product",component:y}),(0,d.jsx)(C.AW,{path:"/contact",component:w})]})}),(0,d.jsx)(k,{}),{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BACKEND_URL:"https://localhost:3001/"}.REACT_APP_PRO_MODE]})})}}}]);
//# sourceMappingURL=750.116ae248.chunk.js.map