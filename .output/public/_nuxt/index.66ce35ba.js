import c from"./Icon.9e180e3e.js";import{u as d}from"./fetch.e408e16d.js";import{w as i,f as s,l as e,F as _,r as p,u as m,o,j as u}from"./entry.4a3c0a3c.js";import"./config.d1de434d.js";const h={class:"w-full flex items-center justify-evenly py-10"},x={class:"md:w-[50%] w-full mb-5 text-white"},f=e("h1",{class:"text-5xl my-4"},"Hi, I am Farruxbek",-1),b=e("h3",{class:"text-3xl text-cyan-500"},"Software Engineer",-1),g=e("p",{class:"text-lg text-gray-400 mb-5 w-[80%]"}," Hello, I am Web Developer. I love coding. ",-1),w={class:"w-full flex gap-3 mb-5"},v=["href"],y=e("button",{class:"bg-cyan-500 px-5 py-2 rounded-lg"},"Download CV",-1),k=e("div",{class:"hidden md:block md:w-[50%] relative"},[e("img",{src:"https://buddy.works/guides/covers/test-nodejs-app/share-nodejs-logo.png",alt:"",class:"w-[300px] h-[300px] md:w-[400px] md:h-[400px] border-4 p-2 border-cyan-500 mx-auto object-cover rounded-full"})],-1),D={__name:"index",async setup(j){let t,a;const{data:l}=([t,a]=i(()=>d("https://portfolio-farruxbeknozimov.vercel.app/api/socials","$PslAyef5YX")),t=await t,a(),t);return console.log(l.value),(F,I)=>{const r=c;return o(),s("div",null,[e("div",h,[e("div",x,[f,b,g,e("div",w,[(o(!0),s(_,null,p(m(l),n=>(o(),s("a",{target:"_blank",href:n.link,class:"p-2 rounded-full flex items-center justify-center bg-slate-700 hover:bg-slate-500"},[u(r,{name:n.icon,class:"block text-white"},null,8,["name"])],8,v))),256))]),y]),k])])}}};export{D as default};
