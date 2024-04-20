"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9301],{9480:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>u,default:()=>m,frontMatter:()=>d,metadata:()=>f,toc:()=>p});var a=t(4848),o=t(8453),i=t(1812),r=t(7622),s=t(4865),c=t(9365),l=t(816);const d={description:"Options for the i18next instances",title:"\ud83c\udf10 i18nConfig"},u=void 0,f={id:"custom/i18nConfig",title:"\ud83c\udf10 i18nConfig",description:"Options for the i18next instances",source:"@site/docs/custom/i18nConfig.mdx",sourceDirName:"custom",slug:"/custom/i18nConfig",permalink:"/fhir-dosage-utils/docs/custom/i18nConfig",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/custom/i18nConfig.mdx",tags:[],version:"current",frontMatter:{description:"Options for the i18next instances",title:"\ud83c\udf10 i18nConfig"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udccf fromFHIRQuantityUnitToString",permalink:"/fhir-dosage-utils/docs/custom/fromFHIRQuantityUnitToString"},next:{title:"\ud83d\uddfa\ufe0f Real word examples",permalink:"/fhir-dosage-utils/docs/demo/examples"}},h={},p=[];function g(e){const n={code:"code",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(s.A,{children:[(0,a.jsx)(c.A,{value:"text",label:"Human readable text",default:!0,children:(0,a.jsx)(l.A,{dosage:r})}),(0,a.jsx)(c.A,{value:"json",label:"Dosage",children:(0,a.jsx)(i.default,{language:"json",children:JSON.stringify(r,null,2)})}),(0,a.jsx)(c.A,{value:"config",label:"i18nConfig",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import LocalStorageBackend from 'i18next-localstorage-backend'; // load from local storage\nimport HttpApi from 'i18next-http-backend'; // have a own http fallback\n\n{\n    backend: {\n        backends: [\n            LocalStorageBackend,  // primary\n            HttpApi  // fallback\n        ],\n        backendOptions: [{\n            projectId: 'myLocizeProjectId'\n        }, {\n            loadPath: '/locales/{{lng}}/{{ns}}.json' // http api load path for my own fallback\n        }],\n        // cacheHitMode: 'none' // (default)\n        // cacheHitMode: 'refresh' // tries to refresh the cache by loading from the next backend and updates the cache\n        // cacheHitMode: 'refreshAndUpdateStore' // tries to refresh the cache by loading from the next backend, updates the cache and also update the i18next resource store\n        // reloadInterval: 60 * 60 * 1000 // can be used to reload resources in a specific interval (useful in server environments)\n        // refreshExpirationTime: 7 * 24 * 60 * 60 * 1000 // In case of caching with 'refresh' or 'refreshAndUpdateStore', it will only fetch from the next backend if the cached namespace is expired. Only supported if the backend returns the saved timestamp, like i18next-fs-backend, i18next-localstorage-backend\n    }\n}\n"})})})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(g,{...e})}):g(e)}},816:(e,n,t)=>{t.d(n,{A:()=>s});var a=t(6540),o=t(6300),i=t(1812),r=t(4848);function s(e){let{dosage:n,config:t,i18nConfig:s}=e;const[c,l]=(0,a.useState)(""),[d,u]=(0,a.useState)(t?.language||"en"),[f,h]=(0,a.useState)(null);(0,a.useEffect)((()=>{!async function(){const e=await o.A.build(t,s);h(e)}()}),[t]),(0,a.useEffect)((()=>{!async function(){if(f){const e=f.fromDosageToText(n);l(e)}}()}),[n,f]);return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{style:{display:"flex"},children:[(0,r.jsxs)("select",{value:d,onChange:e=>u(e.target.value),style:{marginRight:"10px"},children:[(0,r.jsx)("option",{value:"en",children:"English"}),(0,r.jsx)("option",{value:"fr",children:"French"}),(0,r.jsx)("option",{value:"nl",children:"Dutch"}),(0,r.jsx)("option",{value:"de",children:"German"})]}),(0,r.jsx)("button",{onClick:async()=>{if(f){await f.changeLanguage(d);const e=f.fromDosageToText(n);l(e)}},children:"Confirm"})]}),(0,r.jsx)("div",{style:{marginTop:"10px"},children:(0,r.jsx)(i.default,{language:"markup",children:(p=c,p.replace(/&quot;/g,'"').replace(/&#(\d+);/g,(function(e,n){return String.fromCharCode(n)})).replace(/&#x([0-9A-Fa-f]+);/g,(function(e,n){return String.fromCharCode(parseInt(n,16))})))})})]});var p}},7622:e=>{e.exports=JSON.parse('{"timing":{"repeat":{"boundsDuration":{"system":"http://hl7.org/fhir/ValueSet/duration-units","value":3,"code":"d"}}}}')}}]);