"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1616],{6634:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>h,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>d,toc:()=>p});var n=t(4848),o=t(8453),i=t(1812);const a=JSON.parse('{"timing":{"repeat":{"offset":15}}}');var f=t(4865),r=t(9365),u=t(816);const c={description:"offset, expressing minute(s)",title:"\ud83d\udd52 offset (Minutes)"},l=void 0,d={id:"specs/offsetWhen/offset/offset_minutes",title:"\ud83d\udd52 offset (Minutes)",description:"offset, expressing minute(s)",source:"@site/docs/specs/offsetWhen/offset/offset_minutes.mdx",sourceDirName:"specs/offsetWhen/offset",slug:"/specs/offsetWhen/offset/offset_minutes",permalink:"/fhir-dosage-utils/docs/specs/offsetWhen/offset/offset_minutes",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/specs/offsetWhen/offset/offset_minutes.mdx",tags:[],version:"current",frontMatter:{description:"offset, expressing minute(s)",title:"\ud83d\udd52 offset (Minutes)"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd52 offset (Hours)",permalink:"/fhir-dosage-utils/docs/specs/offsetWhen/offset/offset_hours"},next:{title:"\ud83d\udd52 when",permalink:"/fhir-dosage-utils/docs/category/-when"}},h={},p=[];function g(e){return(0,n.jsxs)(f.A,{children:[(0,n.jsx)(r.A,{value:"text",label:"Human readable text",default:!0,children:(0,n.jsx)(u.A,{dosage:a})}),(0,n.jsx)(r.A,{value:"json",label:"Dosage",children:(0,n.jsx)(i.default,{language:"json",children:JSON.stringify(a,null,2)})})]})}function m(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(g,{...e})}):g()}},816:(e,s,t)=>{t.d(s,{A:()=>f});var n=t(6540),o=t(6300),i=t(1812),a=t(4848);function f(e){let{dosage:s,config:t,i18nConfig:f}=e;const[r,u]=(0,n.useState)(""),[c,l]=(0,n.useState)(t?.language||"en"),[d,h]=(0,n.useState)(null);(0,n.useEffect)((()=>{!async function(){const e=await o.A.build(t,f);h(e)}()}),[t]),(0,n.useEffect)((()=>{!async function(){if(d){const e=d.fromDosageToText(s);u(e)}}()}),[s,d]);return(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{style:{display:"flex"},children:[(0,a.jsxs)("select",{value:c,onChange:e=>l(e.target.value),style:{marginRight:"10px"},children:[(0,a.jsx)("option",{value:"en",children:"English"}),(0,a.jsx)("option",{value:"fr",children:"French"}),(0,a.jsx)("option",{value:"nl",children:"Dutch"}),(0,a.jsx)("option",{value:"de",children:"German"})]}),(0,a.jsx)("button",{onClick:async()=>{if(d){await d.changeLanguage(c);const e=d.fromDosageToText(s);u(e)}},children:"Confirm"})]}),(0,a.jsx)("div",{style:{marginTop:"10px"},children:(0,a.jsx)(i.default,{language:"markup",children:(p=r,p.replace(/&quot;/g,'"').replace(/&#(\d+);/g,(function(e,s){return String.fromCharCode(s)})).replace(/&#x([0-9A-Fa-f]+);/g,(function(e,s){return String.fromCharCode(parseInt(s,16))})))})})]});var p}}}]);