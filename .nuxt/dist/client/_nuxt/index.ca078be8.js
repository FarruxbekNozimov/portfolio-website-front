import{_ as m}from"./Header.088b9f3a.js";import{u as l}from"./fetch.e408e16d.js";import{w as p,f as c,j as b,k as h,l as s,t as o,u as e,F as f,r as u,m as _,o as r}from"./entry.4a3c0a3c.js";const y=s("h1",{class:"text-cyan-100 text-2xl"},[_(" I'm Farruxbek and "),s("span",{class:"text-cyan-500"},"Web Developer")],-1),g={class:"text-cyan-100 py-3"},v={class:"flex gap-5"},k={class:"my-5 grid grid-cols-2 gap-5 w-[50%]"},w={class:"pb-2 px-1 text-cyan-100 border-b border-cyan-500/50"},F=s("span",{class:"text-sm font-bold"},"Fullname : ",-1),z={class:"text-sm font-mono"},B={class:"pb-2 px-1 text-cyan-100 border-b border-cyan-500/50"},D=s("span",{class:"text-sm font-bold"},"Age : ",-1),A={class:"text-sm font-mono"},C=s("span",{class:"pb-2 px-1 text-cyan-100 border-b border-cyan-500/50"},[s("span",{class:"text-sm font-bold"},"Website : "),s("span",{class:"text-sm font-mono"},"farruxdev.uz")],-1),N={class:"pb-2 px-1 text-cyan-100 border-b border-cyan-500/50"},V=s("span",{class:"text-sm font-bold"},"Email : ",-1),E={class:"text-sm font-mono"},G=s("span",{class:"pb-2 px-1 text-cyan-100 border-b border-cyan-500/50"},[s("span",{class:"text-sm font-bold"},"Degree : "),s("span",{class:"text-sm font-mono"},"Junior")],-1),H={class:"pb-2 px-1 text-cyan-100 border-b border-cyan-500/50"},K=s("span",{class:"text-sm font-bold"},"Phone : ",-1),W={class:"text-sm font-mono"},Y={class:"pb-2 px-1 text-cyan-100 border-b border-cyan-500/50"},$=s("span",{class:"text-sm font-bold"},"City : ",-1),j={class:"text-sm font-mono"},q={class:"my-5 grid grid-cols-2 gap-5 w-[50%]"},I={class:"bg-red-500"},J={class:"text-cyan-500"},Q={__name:"index",async setup(L){let t,n;const{data:a}=([t,n]=p(()=>l("https://portfolio-farruxbeknozimov.vercel.app/api/about","$46HtYhc5ci")),t=await t,n(),t),{data:d}=([t,n]=p(()=>l("https://portfolio-farruxbeknozimov.vercel.app/api/skills","$Kq5BGKzzG6")),t=await t,n(),t);return(M,P)=>{const i=m;return r(),c("div",null,[b(i,null,{default:h(()=>[_("About Me")]),_:1}),y,s("p",g,o(e(a)[0].description),1),s("div",v,[s("div",k,[s("span",w,[F,s("span",z,o(e(a)[0].fullname),1)]),s("span",B,[D,s("span",A,o(new Date().getFullYear()-2007),1)]),C,s("span",N,[V,s("span",E,o(e(a)[0].email),1)]),G,s("span",H,[K,s("span",W,o(e(a)[0].phone),1)]),s("span",Y,[$,s("span",j,o(e(a)[0].phone),1)])]),s("div",q,[(r(!0),c(f,null,u(e(d),x=>(r(),c("h1",I,[s("span",J,o(x.title),1)]))),256))])])])}}};export{Q as default};
