"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1110],{5160:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>d,toc:()=>u});var n=s(4848),i=s(8453),a=s(4865),o=s(9365);const r={title:"\u26a1 Quick Start",description:"Getting started with fhir-dosage-utils"},l=void 0,d={id:"quick-start",title:"\u26a1 Quick Start",description:"Getting started with fhir-dosage-utils",source:"@site/docs/quick-start.mdx",sourceDirName:".",slug:"/quick-start",permalink:"/fhir-dosage-utils/docs/quick-start",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/quick-start.mdx",tags:[],version:"current",frontMatter:{title:"\u26a1 Quick Start",description:"Getting started with fhir-dosage-utils"},sidebar:"tutorialSidebar",next:{title:"\ud83d\udca1 Demos",permalink:"/fhir-dosage-utils/docs/demo"}},c={},u=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Output examples",id:"output-examples",level:2}];function h(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["Getting started with ",(0,n.jsx)(t.code,{children:"fhir-dosage-utils"})]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,n.jsxs)(t.p,{children:["Install ",(0,n.jsx)(t.code,{children:"fhir-dosage-utils"})," using your desired package manager :"]}),"\n",(0,n.jsxs)(a.A,{groupId:"npm2yarn",children:[(0,n.jsx)(o.A,{value:"npm",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npm install fhir-dosage-utils\n"})})}),(0,n.jsx)(o.A,{value:"yarn",label:"Yarn",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"yarn add fhir-dosage-utils\n"})})}),(0,n.jsx)(o.A,{value:"pnpm",label:"pnpm",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"pnpm add fhir-dosage-utils\n"})})})]}),"\n",(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",metastring:'title="main.js"',children:'import FhirDosageUtils from "fhir-dosage-utils";\n\n// See https://jy95.github.io/fhir-dosage-utils/docs/api/config for more info about config\nconst config = {\n  language: "en",\n};\n\n// A FHIR Dosage example\nconst dosage = {\n  timing: {\n    repeat: {\n      frequency: 1,\n      period: 8,\n      periodUnit: "h",\n    },\n  },\n};\n\nlet dosageUtils = await FhirDosageUtils.build(config);\nlet dosageAsText = dosageUtils.fromDosageToText(dosage);\n// display "1 time every 8 hours"\nconsole.log(dosageAsText);\n'})}),"\n",(0,n.jsx)(t.h2,{id:"output-examples",children:"Output examples"}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["We have many examples available on ",(0,n.jsx)(t.a,{href:"demo/specs",children:"documentation"})," . Check them to see lib in action \ud83d\ude09"]})})]})}function g(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}}}]);