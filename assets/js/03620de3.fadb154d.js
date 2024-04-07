"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2460],{4845:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>x,frontMatter:()=>u,metadata:()=>g,toc:()=>p});var a=t(4848),s=t(8453),i=t(1812);const r=JSON.parse('{"doseAndRate":[{"rateRange":{"high":{"value":5,"unit":"pills"}}}]}');var o=t(4865),l=t(9365),c=t(816);const u={description:"High only",title:"\u2696\ufe0f rateRange (High only)"},d=void 0,g={id:"specs/rateRange/high_only",title:"\u2696\ufe0f rateRange (High only)",description:"High only",source:"@site/docs/specs/rateRange/high_only.mdx",sourceDirName:"specs/rateRange",slug:"/specs/rateRange/high_only",permalink:"/fhir-dosage-utils/docs/specs/rateRange/high_only",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/specs/rateRange/high_only.mdx",tags:[],version:"current",frontMatter:{description:"High only",title:"\u2696\ufe0f rateRange (High only)"},sidebar:"tutorialSidebar",previous:{title:"\u2696\ufe0f rateRange",permalink:"/fhir-dosage-utils/docs/category/\ufe0f-raterange"},next:{title:"\u2696\ufe0f rateRange (Low & High)",permalink:"/fhir-dosage-utils/docs/specs/rateRange/low_and_high"}},h={},p=[];function f(e){const n={a:"a",admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o.A,{children:[(0,a.jsx)(l.A,{value:"text",label:"Human readable text",default:!0,children:(0,a.jsx)(c.A,{dosage:r})}),(0,a.jsx)(l.A,{value:"json",label:"Dosage",children:(0,a.jsx)(i.default,{language:"json",children:JSON.stringify(r,null,2)})})]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["Don't forget you can use ",(0,a.jsx)(n.a,{href:"/api/interface/Params",children:"fromFHIRQuantityUnitToString"})," option to fit your needs"]})})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(f,{...e})}):f(e)}},816:(e,n,t)=>{t.d(n,{A:()=>o});var a=t(6540),s=t(6300),i=t(1812),r=t(4848);function o(e){let{dosage:n,config:t}=e;const[o,l]=(0,a.useState)(""),[c,u]=(0,a.useState)(t?.language||"en"),[d,g]=(0,a.useState)(null);(0,a.useEffect)((()=>{!async function(){const e=await s.A.build(t);g(e)}()}),[t]),(0,a.useEffect)((()=>{!async function(){if(d){const e=d.fromDosageToText(n);l(e)}}()}),[n,d]);return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{style:{display:"flex"},children:[(0,r.jsxs)("select",{value:c,onChange:e=>u(e.target.value),style:{marginRight:"10px"},children:[(0,r.jsx)("option",{value:"en",children:"English"}),(0,r.jsx)("option",{value:"fr",children:"French"}),(0,r.jsx)("option",{value:"nl",children:"Dutch"}),(0,r.jsx)("option",{value:"de",children:"German"})]}),(0,r.jsx)("button",{onClick:async()=>{if(d){await d.changeLanguage(c);const e=d.fromDosageToText(n);l(e)}},children:"Confirm"})]}),(0,r.jsx)("p",{style:{marginTop:"10px"},children:(0,r.jsx)(i.default,{language:"markup",children:(h=o,h.replace(/&quot;/g,'"').replace(/&#(\d+);/g,(function(e,n){return String.fromCharCode(n)})).replace(/&#x([0-9A-Fa-f]+);/g,(function(e,n){return String.fromCharCode(parseInt(n,16))})))})})]});var h}}}]);