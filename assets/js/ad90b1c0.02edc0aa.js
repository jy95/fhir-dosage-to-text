"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[513],{2223:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>g,contentTitle:()=>d,default:()=>x,frontMatter:()=>l,metadata:()=>p,toc:()=>f});var n=a(4848),i=a(8453),r=a(1812);const s=JSON.parse('{"doseAndRate":[{"rateQuantity":{"value":3,"unit":"pills"}}]}');var o=a(4865),u=a(9365),c=a(816);const l={description:"rateQuantity",title:"\u23f2\ufe0f rateQuantity"},d=void 0,p={id:"specs/rateQuantity/rateQuantity",title:"\u23f2\ufe0f rateQuantity",description:"rateQuantity",source:"@site/docs/specs/rateQuantity/rateQuantity.mdx",sourceDirName:"specs/rateQuantity",slug:"/specs/rateQuantity/",permalink:"/fhir-dosage-utils/docs/specs/rateQuantity/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/specs/rateQuantity/rateQuantity.mdx",tags:[],version:"current",frontMatter:{description:"rateQuantity",title:"\u23f2\ufe0f rateQuantity"},sidebar:"tutorialSidebar",previous:{title:"\u23f2\ufe0f rateQuantity",permalink:"/fhir-dosage-utils/docs/category/\ufe0f-ratequantity"},next:{title:"\u2696\ufe0f rateRange",permalink:"/fhir-dosage-utils/docs/category/\ufe0f-raterange"}},g={},f=[];function h(t){const e={a:"a",admonition:"admonition",p:"p",...(0,i.R)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.A,{children:[(0,n.jsx)(u.A,{value:"text",label:"Human readable text",default:!0,children:(0,n.jsx)(c.A,{dosage:s})}),(0,n.jsx)(u.A,{value:"json",label:"Dosage",children:(0,n.jsx)(r.default,{language:"json",children:JSON.stringify(s,null,2)})})]}),"\n",(0,n.jsx)(e.admonition,{type:"tip",children:(0,n.jsxs)(e.p,{children:["Don't forget you can use ",(0,n.jsx)(e.a,{href:"/api/interface/Params",children:"fromFHIRQuantityUnitToString"})," option to fit your needs"]})})]})}function x(t={}){const{wrapper:e}={...(0,i.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(h,{...t})}):h(t)}},816:(t,e,a)=>{a.d(e,{A:()=>o});var n=a(6540),i=a(6300),r=a(1812),s=a(4848);function o(t){let{dosage:e,config:a,i18nConfig:o}=t;const[u,c]=(0,n.useState)(""),[l,d]=(0,n.useState)(a?.language||"en"),[p,g]=(0,n.useState)(null);(0,n.useEffect)((()=>{!async function(){const t=await i.A.build(a,o);g(t)}()}),[a]),(0,n.useEffect)((()=>{!async function(){if(p){const t=p.fromDosageToText(e);c(t)}}()}),[e,p]);return(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{style:{display:"flex"},children:[(0,s.jsxs)("select",{value:l,onChange:t=>d(t.target.value),style:{marginRight:"10px"},children:[(0,s.jsx)("option",{value:"en",children:"English"}),(0,s.jsx)("option",{value:"fr",children:"French"}),(0,s.jsx)("option",{value:"nl",children:"Dutch"}),(0,s.jsx)("option",{value:"de",children:"German"})]}),(0,s.jsx)("button",{onClick:async()=>{if(p){await p.changeLanguage(l);const t=p.fromDosageToText(e);c(t)}},children:"Confirm"})]}),(0,s.jsx)("div",{style:{marginTop:"10px"},children:(0,s.jsx)(r.default,{language:"markup",children:(f=u,f.replace(/&quot;/g,'"').replace(/&amp;/g,"&").replace(/&#(\d+);/g,(function(t,e){return String.fromCharCode(e)})).replace(/&#x([0-9A-Fa-f]+);/g,(function(t,e){return String.fromCharCode(parseInt(e,16))})))})})]});var f}}}]);