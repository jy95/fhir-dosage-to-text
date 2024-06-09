"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3970],{790:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>p,contentTitle:()=>u,default:()=>x,frontMatter:()=>l,metadata:()=>f,toc:()=>g});var t=a(4848),d=a(8453),n=a(1812);const i={asNeeded:!0};var o=a(4865),c=a(9365),r=a(816);const l={description:"asNeeded",title:"\ud83d\udccc asNeeded"},u=void 0,f={id:"specs/asNeeded/asNeeded",title:"\ud83d\udccc asNeeded",description:"asNeeded",source:"@site/docs/specs/asNeeded/asNeeded.mdx",sourceDirName:"specs/asNeeded",slug:"/specs/asNeeded/",permalink:"/fhir-dosage-utils/docs/specs/asNeeded/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/specs/asNeeded/asNeeded.mdx",tags:[],version:"current",frontMatter:{description:"asNeeded",title:"\ud83d\udccc asNeeded"},sidebar:"tutorialSidebar",previous:{title:"\u2753 asNeeded",permalink:"/fhir-dosage-utils/docs/category/-asneeded"},next:{title:"\u2705 asNeededBoolean",permalink:"/fhir-dosage-utils/docs/specs/asNeeded/asNeededBoolean"}},p={},g=[];function h(e){return(0,t.jsxs)(o.A,{children:[(0,t.jsx)(c.A,{value:"text",label:"Human readable text",default:!0,children:(0,t.jsx)(r.A,{dosage:i})}),(0,t.jsx)(c.A,{value:"json",label:"Dosage",children:(0,t.jsx)(n.default,{language:"json",children:JSON.stringify(i,null,2)})})]})}function x(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h()}},816:(e,s,a)=>{a.d(s,{A:()=>c});var t=a(6540),d=a(6300),n=a(2376),i=a(1812),o=a(4848);function c(e){let{dosage:s,config:a,i18nConfig:c}=e;const[r,l]=(0,t.useState)(""),[u,f]=(0,t.useState)(a?.language||"en"),[p,g]=(0,t.useState)(null);(0,t.useEffect)((()=>{!async function(){const e=await d.A.build(a,c);g(e)}()}),[a]),(0,t.useEffect)((()=>{!async function(){if(p){const e=p.fromDosageToText(s);l(e)}}()}),[s,p]);return(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{style:{display:"flex"},children:[(0,o.jsxs)("select",{value:u,onChange:e=>f(e.target.value),style:{marginRight:"10px"},children:[(0,o.jsx)("option",{value:"en",children:"English"}),(0,o.jsx)("option",{value:"fr",children:"French"}),(0,o.jsx)("option",{value:"nl",children:"Dutch"}),(0,o.jsx)("option",{value:"de",children:"German"})]}),(0,o.jsx)("button",{onClick:async()=>{if(p){await p.changeLanguage(u);const e=p.fromDosageToText(s);l(e)}},children:"Confirm"})]}),(0,o.jsx)("div",{style:{marginTop:"10px"},children:(0,o.jsx)(i.default,{language:"markup",children:(h=r,(0,n.decode)(h))})})]});var h}}}]);