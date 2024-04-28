"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4056],{1877:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>h,frontMatter:()=>u,metadata:()=>m,toc:()=>f});var s=i(4848),a=i(8453),n=i(1812);const l=JSON.parse('{"timing":{"repeat":{"timeOfDay":["15:00:00","12:12:12"]}}}');var r=i(4865),o=i(9365),c=i(816);const u={description:"Multiple items",title:"\u2795 Multiple items"},d=void 0,m={id:"specs/timeOfDay/multiple_items",title:"\u2795 Multiple items",description:"Multiple items",source:"@site/docs/specs/timeOfDay/multiple_items.mdx",sourceDirName:"specs/timeOfDay",slug:"/specs/timeOfDay/multiple_items",permalink:"/fhir-dosage-utils/docs/specs/timeOfDay/multiple_items",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/specs/timeOfDay/multiple_items.mdx",tags:[],version:"current",frontMatter:{description:"Multiple items",title:"\u2795 Multiple items"},sidebar:"tutorialSidebar",previous:{title:"\u231a timeOfDay",permalink:"/fhir-dosage-utils/docs/category/-timeofday"},next:{title:"\u274c Single item",permalink:"/fhir-dosage-utils/docs/specs/timeOfDay/single_item"}},p={},f=[];function g(e){return(0,s.jsxs)(r.A,{children:[(0,s.jsx)(o.A,{value:"text",label:"Human readable text",default:!0,children:(0,s.jsx)(c.A,{dosage:l})}),(0,s.jsx)(o.A,{value:"json",label:"Dosage",children:(0,s.jsx)(n.default,{language:"json",children:JSON.stringify(l,null,2)})})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g()}},816:(e,t,i)=>{i.d(t,{A:()=>r});var s=i(6540),a=i(6300),n=i(1812),l=i(4848);function r(e){let{dosage:t,config:i,i18nConfig:r}=e;const[o,c]=(0,s.useState)(""),[u,d]=(0,s.useState)(i?.language||"en"),[m,p]=(0,s.useState)(null);(0,s.useEffect)((()=>{!async function(){const e=await a.A.build(i,r);p(e)}()}),[i]),(0,s.useEffect)((()=>{!async function(){if(m){const e=m.fromDosageToText(t);c(e)}}()}),[t,m]);return(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{style:{display:"flex"},children:[(0,l.jsxs)("select",{value:u,onChange:e=>d(e.target.value),style:{marginRight:"10px"},children:[(0,l.jsx)("option",{value:"en",children:"English"}),(0,l.jsx)("option",{value:"fr",children:"French"}),(0,l.jsx)("option",{value:"nl",children:"Dutch"}),(0,l.jsx)("option",{value:"de",children:"German"})]}),(0,l.jsx)("button",{onClick:async()=>{if(m){await m.changeLanguage(u);const e=m.fromDosageToText(t);c(e)}},children:"Confirm"})]}),(0,l.jsx)("div",{style:{marginTop:"10px"},children:(0,l.jsx)(n.default,{language:"markup",children:(f=o,f.replace(/&quot;/g,'"').replace(/&amp;/g,"&").replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(t)})).replace(/&#x([0-9A-Fa-f]+);/g,(function(e,t){return String.fromCharCode(parseInt(t,16))})))})})]});var f}}}]);