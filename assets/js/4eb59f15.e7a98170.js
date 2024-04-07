"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9218],{4353:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>x,frontMatter:()=>c,metadata:()=>m,toc:()=>f});var a=s(4848),n=s(8453),r=s(1812);const i=JSON.parse('[{"sequence":1,"text":"7mg once daily","timing":{"repeat":{"frequency":1,"period":1,"periodUnit":"d"}},"doseAndRate":[{"type":{"coding":[{"system":"http://terminology.hl7.org/CodeSystem/dose-rate-type","code":"ordered","display":"Ordered"}]},"doseQuantity":{"value":7,"unit":"mg","system":"http://unitsofmeasure.org","code":"mg"}}]}]');var o=s(4865),d=s(9365),l=s(8264);const c={description:"Request for a Dosage that needs to be dispensed as different strength tablets - Warfarin - active",title:"medrx0331"},u=void 0,m={id:"examples/medicationrequest/medrx0331",title:"medrx0331",description:"Request for a Dosage that needs to be dispensed as different strength tablets - Warfarin - active",source:"@site/docs/examples/medicationrequest/medrx0331.mdx",sourceDirName:"examples/medicationrequest",slug:"/examples/medicationrequest/medrx0331",permalink:"/fhir-dosage-utils/docs/examples/medicationrequest/medrx0331",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/examples/medicationrequest/medrx0331.mdx",tags:[],version:"current",frontMatter:{description:"Request for a Dosage that needs to be dispensed as different strength tablets - Warfarin - active",title:"medrx0331"},sidebar:"tutorialSidebar",previous:{title:"medrx0321",permalink:"/fhir-dosage-utils/docs/examples/medicationrequest/medrx0321"},next:{title:"medrx0339",permalink:"/fhir-dosage-utils/docs/examples/medicationrequest/medrx0339"}},p={},f=[];function g(e){const t={a:"a",admonition:"admonition",p:"p",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["Source: ",(0,a.jsx)(t.a,{href:"https://www.hl7.org/fhir/medicationrequest0331.html",children:"HL7"}),' - "Request for a Dosage that needs to be dispensed as different strength tablets - Warfarin - active"']})}),"\n",(0,a.jsxs)(o.A,{children:[(0,a.jsx)(d.A,{value:"text",label:"Human readable text",default:!0,children:(0,a.jsx)(l.A,{dosages:i,config:{}})}),(0,a.jsx)(d.A,{value:"json",label:"Dosage",children:(0,a.jsx)(r.default,{language:"json",children:JSON.stringify(i,null,2)})})]})]})}function x(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(g,{...e})}):g(e)}},8264:(e,t,s)=>{s.d(t,{A:()=>o});var a=s(6540),n=s(6300),r=s(1812),i=s(4848);function o(e){let{dosages:t,config:s}=e;const[o,d]=(0,a.useState)(""),[l,c]=(0,a.useState)(s?.language||"en"),[u,m]=(0,a.useState)(null);(0,a.useEffect)((()=>{!async function(){const e=await n.A.build(s);m(e)}()}),[s]),(0,a.useEffect)((()=>{!async function(){if(u){const e=u.fromMultipleDosageToText(t);d(e)}}()}),[t,u]);return(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{style:{display:"flex"},children:[(0,i.jsxs)("select",{value:l,onChange:e=>c(e.target.value),style:{marginRight:"10px"},children:[(0,i.jsx)("option",{value:"en",children:"English"}),(0,i.jsx)("option",{value:"fr",children:"French"}),(0,i.jsx)("option",{value:"nl",children:"Dutch"}),(0,i.jsx)("option",{value:"de",children:"German"})]}),(0,i.jsx)("button",{onClick:async()=>{if(u){await u.changeLanguage(l);const e=u.fromMultipleDosageToText(t);d(e)}},children:"Confirm"})]}),(0,i.jsx)("p",{style:{marginTop:"10px"},children:(0,i.jsx)(r.default,{language:"markup",children:(p=o,p.replace(/&quot;/g,'"').replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(t)})).replace(/&#x([0-9A-Fa-f]+);/g,(function(e,t){return String.fromCharCode(parseInt(t,16))})))})})]});var p}}}]);