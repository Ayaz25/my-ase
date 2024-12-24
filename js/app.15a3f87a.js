(function(){"use strict";var e={6456:function(e,t,a){a.d(t,{A:function(){return Q}});var n=a(5130),l=a(6768);function o(e,t,a,n,o,r){const s=(0,l.g2)("router-view");return(0,l.uX)(),(0,l.Wv)(s)}var r={name:"App",components:{}},s=a(1241);const i=(0,s.A)(r,[["render",o]]);var u=i,c=a(8253),d=a(288),v=a(1387),p=(a(4114),a(8992),a(4520),a(1454),a(7550),a(4232)),f=a(144),m=a(7491),g=a(4419),b=a(4498),h=a(744),k=a(5236),y=a(7276),_=a(1427),L=a(4090),S=a(6064),A=a(8492),F=a(3830);const R={class:"title"},w={class:"field"},O={class:"field"},V={class:"field"},N={class:"field"},C={class:"dialog-footer"},K={class:"card accordion_container"},T={class:"accordion-content"},I={class:"m-0"},x={class:"m-0"},E={class:"m-0"},W={class:"m-0"},j={class:"m-0"},U=["onClick"],X={class:"gesamte_st_val"},M={class:"button-container"};var $={__name:"HomePage",setup(e){const t=(0,F.d)(),a=(0,f.KR)(""),n=(0,f.KR)(!1),o=(0,f.KR)(""),r=(0,f.KR)(""),s=(0,f.KR)(""),i=(0,f.KR)(""),u=(0,f.KR)([]),c=(0,f.KR)([]);function d(){n.value=!0}function $(){if(!o.value)return;const e=o.value,t=String(e.getDate()).padStart(2,"0"),a=String(e.getMonth()+1).padStart(2,"0"),n=e.getFullYear();return[t,a,n]}function J(e){if(!e.value)return;const t=e.value,a=String(t.getHours()).padStart(2,"0"),n=String(t.getMinutes()).padStart(2,"0");return[a,n]}function D(){const[e,l,o]=$()?$():[],[d,v]=J(r)?J(r):[],[p,f]=J(s)?J(s):[];let m=i.value;if(""===m&&(m="00"),void 0===!e||void 0===!l||void 0===!o||void 0===!d||void 0===!v||void 0===!p||void 0===f||void 0===m)return;const g=e+"."+l+"."+o,b=d+":"+v,h=p+":"+f,k=u.value.some((e=>e.datum===g));k?t.add({severity:"info",summary:"Info",detail:"Das Datum existiert schon",life:3e3}):(u.value.push({datum:g,startTime:b,endTime:h,pause:m,totalWorkTime:B(b,h,m)}),localStorage.setItem(a.value,JSON.stringify(u.value)),c.value=P(u.value),n.value=!1)}function P(e){if(0===e.length)return;const t={};for(let a=0;a<e.length;a++){const n=e[a],l=n.datum;t[z(l)]||(t[z(l)]=[]),t[z(l)].push(n)}return t}function z(e){const t=e.split(".");return`${t[1]}.${t[2]}`}function B(e,t,a){const[n,l]=e.split(":").map(Number),[o,r]=t.split(":").map(Number),s=60*n+l,i=60*o+r;let u=i-s;u-=a,u<0&&(u+=1440);const c=Math.floor(u/60),d=u%60;return`${c.toString().padStart(2,"0")}:${d.toString().padStart(2,"0")}`}function q(e){u.value=u.value.filter((t=>t.datum!==e)),u.value=[...u.value],localStorage.setItem(a.value,JSON.stringify(u.value)),c.value=P(u.value)}function H(e){const t=JSON.parse(JSON.stringify(e));let a=0;for(let o=0;o<t.length;o++){const[e,n]=t[o].totalWorkTime.split(":").map(Number);a+=60*e,a+=n}const n=Math.floor(a/60),l=a%60;return`${n.toString().padStart(2,"0")}:${l.toString().padStart(2,"0")}`}return(0,l.sV)((()=>{const e=(0,v.lq)();a.value=e.params.userName;let t=JSON.parse(localStorage.getItem(a.value));t&&(u.value=t),c.value=P(u.value)})),(e,t)=>((0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.Lk)("div",R,[(0,l.Lk)("h3",null,(0,p.v_)(a.value),1),t[6]||(t[6]=(0,l.Lk)("hr",{class:"divider"},null,-1))]),(0,l.bF)((0,f.R1)(_.A),{class:"dialog-font",header:"Zeitplanung",visible:n.value,"onUpdate:visible":t[5]||(t[5]=e=>n.value=e),modal:!0,closable:!0,style:{width:"250px",fontFamily:"sans-serif"}},{default:(0,l.k6)((()=>[(0,l.Lk)("div",w,[t[7]||(t[7]=(0,l.Lk)("label",{class:"dialog-font",for:"date"},"Datum",-1)),(0,l.bF)((0,f.R1)(L.A),{id:"date",modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=e=>o.value=e),dateFormat:"dd.mm.yy",showIcon:""},null,8,["modelValue"])]),(0,l.Lk)("div",O,[t[8]||(t[8]=(0,l.Lk)("label",{class:"dialog-font",for:"startTime"},"Startzeit",-1)),(0,l.bF)((0,f.R1)(L.A),{id:"startTime",modelValue:r.value,"onUpdate:modelValue":t[1]||(t[1]=e=>r.value=e),timeOnly:"",hourFormat:"24",icon:"pi pi-clock","show-icon":""},null,8,["modelValue"])]),(0,l.Lk)("div",V,[t[9]||(t[9]=(0,l.Lk)("label",{class:"dialog-font",for:"endTime"},"Endzeit",-1)),(0,l.bF)((0,f.R1)(L.A),{id:"endTime",modelValue:s.value,"onUpdate:modelValue":t[2]||(t[2]=e=>s.value=e),timeOnly:"",hourFormat:"24",icon:"pi pi-clock",showIcon:""},null,8,["modelValue"])]),(0,l.Lk)("div",N,[t[10]||(t[10]=(0,l.Lk)("label",{class:"dialog-font",for:"pause"},"Pause (Minuten)",-1)),(0,l.bF)((0,f.R1)(S.A),{id:"pause",modelValue:i.value,"onUpdate:modelValue":t[3]||(t[3]=e=>i.value=e),min:0,placeholder:"0"},null,8,["modelValue"])]),(0,l.Lk)("div",C,[(0,l.bF)((0,f.R1)(A.A),{position:"top-center",style:{width:"80%"}}),(0,l.bF)((0,f.R1)(k.A),{class:"save_button",label:"Speichern",onClick:D}),(0,l.bF)((0,f.R1)(k.A),{label:"Abbrechen",onClick:t[4]||(t[4]=t=>e.visible=!1),class:"p-button-text"})])])),_:1},8,["visible"]),(0,l.bF)((0,f.R1)(y.A),{class:"container"},{default:(0,l.k6)((()=>[t[13]||(t[13]=(0,l.Lk)("div",{class:"spacer"},null,-1)),(0,l.Lk)("div",K,[(0,l.bF)((0,f.R1)(m.A),{class:"accordion_body",value:"0"},{default:(0,l.k6)((()=>[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(c.value,((e,a)=>((0,l.uX)(),(0,l.Wv)((0,f.R1)(g.A),{key:a,value:a},{default:(0,l.k6)((()=>[(0,l.bF)((0,f.R1)(b.A),null,{default:(0,l.k6)((()=>[(0,l.eW)((0,p.v_)(a),1)])),_:2},1024),((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(e,((e,a)=>((0,l.uX)(),(0,l.Wv)((0,f.R1)(h.A),{key:a,style:{padding:"0.1px !important"}},{default:(0,l.k6)((()=>[(0,l.Lk)("div",T,[(0,l.Lk)("span",I,(0,p.v_)(e.datum),1),(0,l.Lk)("span",x,(0,p.v_)(e.startTime),1),(0,l.Lk)("span",E,(0,p.v_)(e.endTime),1),(0,l.Lk)("span",W,(0,p.v_)(e.pause),1),(0,l.Lk)("span",j,(0,p.v_)(e.totalWorkTime),1),(0,l.Lk)("span",{onClick:t=>q(e.datum),class:"pi pi-trash delete-icon",style:{width:"20px"}},null,8,U)]),t[11]||(t[11]=(0,l.Lk)("hr",{style:{width:"92%"}},null,-1))])),_:2},1024)))),128)),(0,l.Lk)("div",null,[t[12]||(t[12]=(0,l.Lk)("span",{class:"gesamte_st"},"Gesamte St. ",-1)),(0,l.Lk)("span",X,(0,p.v_)(H(e)),1)])])),_:2},1032,["value"])))),128))])),_:1})]),t[14]||(t[14]=(0,l.Lk)("div",{class:"spacer-bottom"},null,-1)),(0,l.Lk)("div",M,[(0,l.bF)((0,f.R1)(k.A),{onClick:d,label:"add",class:"add_button"})])])),_:1})],64))}};const J=(0,s.A)($,[["__scopeId","data-v-acfa5aa2"]]);var D=J,P=a.p+"img/StartBild.af170e05.jpg",z=a(6338),B={__name:"StartSite",setup(e){const t=(0,f.KR)(""),a=(0,F.d)();function n(){""===t.value?a.add({severity:"info",summary:"Info",detail:"Bitte geben Sie Ihre Name Ein",life:3e3}):Q.push({name:"homepage",params:{userName:t.value}})}return(e,a)=>((0,l.uX)(),(0,l.CE)(l.FK,null,[a[1]||(a[1]=(0,l.Lk)("h2",{class:"title"}," Arbeitsstundenerfassung ",-1)),a[2]||(a[2]=(0,l.Lk)("img",{class:"start_image",src:P},null,-1)),a[3]||(a[3]=(0,l.Lk)("h4",null,[(0,l.eW)(" Erfasse deine Arbeitszeiten mühelos "),(0,l.Lk)("br"),(0,l.eW)(" und behalte stets den Überblick ")],-1)),(0,l.bF)((0,f.R1)(z.A),{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=e=>t.value=e),placeholder:"Username",class:"user_input",type:"text"},null,8,["modelValue"]),(0,l.Lk)("div",null,[(0,l.bF)((0,f.R1)(A.A),{position:"top-center",style:{width:"80%"}}),(0,l.bF)((0,f.R1)(k.A),{onClick:n,label:"Start",class:"start_button"})])],64))}};const q=(0,s.A)(B,[["__scopeId","data-v-753b97fd"]]);var H=q,G=a(486),Y=a(4458);(0,Y.k)("/my-ase/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});const Z=(0,v.aE)({history:(0,v.LA)(),routes:[{path:"/my-ase",redirect:"/startsite"},{path:"/homepage/:userName",name:"homepage",component:D},{path:"/startsite",name:"startsite",component:H}]});(0,n.Ef)(u).use(Z).use(G.A).use(c.Ay,{theme:{preset:d.A}}).mount("#app");var Q=Z}},t={};function a(n){var l=t[n];if(void 0!==l)return l.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,n,l,o){if(!n){var r=1/0;for(c=0;c<e.length;c++){n=e[c][0],l=e[c][1],o=e[c][2];for(var s=!0,i=0;i<n.length;i++)(!1&o||r>=o)&&Object.keys(a.O).every((function(e){return a.O[e](n[i])}))?n.splice(i--,1):(s=!1,o<r&&(r=o));if(s){e.splice(c--,1);var u=l();void 0!==u&&(t=u)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[n,l,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.p="/my-ase/"}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var l,o,r=n[0],s=n[1],i=n[2],u=0;if(r.some((function(t){return 0!==e[t]}))){for(l in s)a.o(s,l)&&(a.m[l]=s[l]);if(i)var c=i(a)}for(t&&t(n);u<r.length;u++)o=r[u],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(c)},n=self["webpackChunkmy_ase"]=self["webpackChunkmy_ase"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[504],(function(){return a(6456)}));n=a.O(n)})();
//# sourceMappingURL=app.15a3f87a.js.map