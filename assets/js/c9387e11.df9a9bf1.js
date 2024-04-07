"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3140],{459:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>g,contentTitle:()=>m,default:()=>x,frontMatter:()=>d,metadata:()=>f,toc:()=>p});var n=o(4848),a=o(8453),i=o(1812),s=o(3180);const r=JSON.parse('{"dateTimeFormatOptions":{"weekday":"long","year":"numeric","month":"long","day":"numeric"}}');var c=o(4865),l=o(9365),u=o(816);const d={description:"To control the formatting of dateTime objects",title:"\ud83c\udf89 dateTimeFormatOptions"},m=void 0,f={id:"custom/dateTimeFormatOptions",title:"\ud83c\udf89 dateTimeFormatOptions",description:"To control the formatting of dateTime objects",source:"@site/docs/custom/dateTimeFormatOptions.mdx",sourceDirName:"custom",slug:"/custom/dateTimeFormatOptions",permalink:"/fhir-dosage-utils/docs/custom/dateTimeFormatOptions",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/custom/dateTimeFormatOptions.mdx",tags:[],version:"current",frontMatter:{description:"To control the formatting of dateTime objects",title:"\ud83c\udf89 dateTimeFormatOptions"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udee0\ufe0f Customizations",permalink:"/fhir-dosage-utils/docs/demo/custom"},next:{title:"\ud83d\udcbb fromCodeableConceptToString",permalink:"/fhir-dosage-utils/docs/custom/fromCodeableConceptToString"}},g={},p=[];function h(e){return(0,n.jsxs)(c.A,{children:[(0,n.jsx)(l.A,{value:"text",label:"Human readable text",default:!0,children:(0,n.jsx)(u.A,{dosage:s,config:r})}),(0,n.jsx)(l.A,{value:"json",label:"Dosage",children:(0,n.jsx)(i.default,{language:"json",children:JSON.stringify(s,null,2)})}),(0,n.jsx)(l.A,{value:"config",label:"Configuration",children:(0,n.jsx)(i.default,{language:"json",children:JSON.stringify(r,null,2)})})]})}function x(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h()}},816:(e,t,o)=>{o.d(t,{A:()=>r});var n=o(6540),a=o(6300),i=o(1812),s=o(4848);function r(e){let{dosage:t,config:o}=e;const[r,c]=(0,n.useState)(""),[l,u]=(0,n.useState)(o?.language||"en"),[d,m]=(0,n.useState)(null);(0,n.useEffect)((()=>{!async function(){const e=await a.A.build(o);m(e)}()}),[o]),(0,n.useEffect)((()=>{!async function(){if(d){const e=d.fromDosageToText(t);c(e)}}()}),[t,d]);return(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{style:{display:"flex"},children:[(0,s.jsxs)("select",{value:l,onChange:e=>u(e.target.value),style:{marginRight:"10px"},children:[(0,s.jsx)("option",{value:"en",children:"English"}),(0,s.jsx)("option",{value:"fr",children:"French"}),(0,s.jsx)("option",{value:"nl",children:"Dutch"}),(0,s.jsx)("option",{value:"de",children:"German"})]}),(0,s.jsx)("button",{onClick:async()=>{if(d){await d.changeLanguage(l);const e=d.fromDosageToText(t);c(e)}},children:"Confirm"})]}),(0,s.jsx)("p",{style:{marginTop:"10px"},children:(0,s.jsx)(i.default,{language:"markup",children:(f=r,f.replace(/&quot;/g,'"').replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(t)})).replace(/&#x([0-9A-Fa-f]+);/g,(function(e,t){return String.fromCharCode(parseInt(t,16))})))})})]});var f}},3180:e=>{e.exports=JSON.parse('{"timing":{"event":["2024-01-01"]}}')}}]);