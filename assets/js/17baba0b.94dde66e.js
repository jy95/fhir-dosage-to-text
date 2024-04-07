"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3709],{2092:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>m,contentTitle:()=>d,default:()=>h,frontMatter:()=>u,metadata:()=>p,toc:()=>f});var n=i(4848),s=i(8453),a=i(1812);const o=JSON.parse('{"additionalInstruction":[{"text":"Instruction 1"},{"text":"Instruction 2"}]}');var l=i(4865),r=i(9365),c=i(816);const u={description:"Multiple items",title:"\u2795 Multiple items"},d=void 0,p={id:"specs/additionalInstruction/multiple_items",title:"\u2795 Multiple items",description:"Multiple items",source:"@site/docs/specs/additionalInstruction/multiple_items.mdx",sourceDirName:"specs/additionalInstruction",slug:"/specs/additionalInstruction/multiple_items",permalink:"/fhir-dosage-utils/docs/specs/additionalInstruction/multiple_items",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/specs/additionalInstruction/multiple_items.mdx",tags:[],version:"current",frontMatter:{description:"Multiple items",title:"\u2795 Multiple items"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcdd additionalInstruction",permalink:"/fhir-dosage-utils/docs/category/-additionalinstruction"},next:{title:"\u274c Single item",permalink:"/fhir-dosage-utils/docs/specs/additionalInstruction/single_item"}},m={},f=[];function g(t){const e={a:"a",admonition:"admonition",p:"p",...(0,s.R)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(l.A,{children:[(0,n.jsx)(r.A,{value:"text",label:"Human readable text",default:!0,children:(0,n.jsx)(c.A,{dosage:o})}),(0,n.jsx)(r.A,{value:"json",label:"Dosage",children:(0,n.jsx)(a.default,{language:"json",children:JSON.stringify(o,null,2)})})]}),"\n",(0,n.jsx)(e.admonition,{type:"tip",children:(0,n.jsxs)(e.p,{children:["Don't forget you can use ",(0,n.jsx)(e.a,{href:"/api/interface/Params",children:"fromCodeableConceptToString"})," option to fit your needs"]})})]})}function h(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(g,{...t})}):g(t)}},816:(t,e,i)=>{i.d(e,{A:()=>l});var n=i(6540),s=i(6300),a=i(1812),o=i(4848);function l(t){let{dosage:e,config:i}=t;const[l,r]=(0,n.useState)(""),[c,u]=(0,n.useState)(i?.language||"en"),[d,p]=(0,n.useState)(null);(0,n.useEffect)((()=>{!async function(){const t=await s.A.build(i);p(t)}()}),[i]),(0,n.useEffect)((()=>{!async function(){if(d){const t=d.fromDosageToText(e);r(t)}}()}),[e,d]);return(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{style:{display:"flex"},children:[(0,o.jsxs)("select",{value:c,onChange:t=>u(t.target.value),style:{marginRight:"10px"},children:[(0,o.jsx)("option",{value:"en",children:"English"}),(0,o.jsx)("option",{value:"fr",children:"French"}),(0,o.jsx)("option",{value:"nl",children:"Dutch"}),(0,o.jsx)("option",{value:"de",children:"German"})]}),(0,o.jsx)("button",{onClick:async()=>{if(d){await d.changeLanguage(c);const t=d.fromDosageToText(e);r(t)}},children:"Confirm"})]}),(0,o.jsx)("p",{style:{marginTop:"10px"},children:(0,o.jsx)(a.default,{language:"markup",children:(m=l,m.replace(/&quot;/g,'"').replace(/&#(\d+);/g,(function(t,e){return String.fromCharCode(e)})).replace(/&#x([0-9A-Fa-f]+);/g,(function(t,e){return String.fromCharCode(parseInt(e,16))})))})})]});var m}}}]);