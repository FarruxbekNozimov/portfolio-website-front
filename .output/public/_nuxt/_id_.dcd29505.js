import _ from"./Icon.f2edd3f3.js";import{p as i,w as p,f as m,l as t,j as d,m as u,t as x,u as c,o as f}from"./entry.f7c62f20.js";import{u as h}from"./fetch.092e3ec0.js";import"./config.1880ebe2.js";const b={class:"h-full text-white text-center"},w={class:"w-full flex items-center justify-between"},y={class:"flex items-center gap-2 text-xl border border-cyan-500 px-4 rounded-lg p-1"},v={class:"p-5 w-full bg-slate-800 rounded-lg my-5 text-cyan-500"},g={class:"text-3xl mb-10"},k=["html"],C={__name:"[id]",async setup(B){let e,s;const{params:r}=i(),{data:o}=([e,s]=p(()=>h(`https://portfolio-farruxbeknozimov.vercel.app/api/posts/${r.id}`,"$b6624wP6pv")),e=await e,s(),e);return console.log(o.value),(N,V)=>{var a,n;const l=_;return f(),m("div",b,[t("div",w,[t("button",y,[d(l,{name:"material-symbols:arrow-back-rounded"}),u(" Back ")])]),t("div",v,[t("h1",g,x((a=c(o))==null?void 0:a.title),1),t("p",{html:(n=c(o))==null?void 0:n.content},null,8,k)])])}}};export{C as default};