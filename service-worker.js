if(!self.define){let e,s={};const t=(t,i)=>(t=new URL(t+".js",i).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(i,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let o={};const l=e=>t(e,n),a={module:{uri:n},exports:o,require:l};s[n]=Promise.all(i.map((e=>a[e]||l(e)))).then((e=>(r(...e),o)))}}define(["./workbox-d169e1d7"],(function(e){"use strict";e.setCacheNameDetails({prefix:"my-ase"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/my-ase/startsite/css/app.801c7219.css",revision:null},{url:"/my-ase/startsite/fonts/primeicons.310a7310.ttf",revision:null},{url:"/my-ase/startsite/fonts/primeicons.7f772274.woff",revision:null},{url:"/my-ase/startsite/fonts/primeicons.8ca441e1.eot",revision:null},{url:"/my-ase/startsite/fonts/primeicons.e1a53edb.woff2",revision:null},{url:"/my-ase/startsite/img/StartBild.af170e05.jpg",revision:null},{url:"/my-ase/startsite/img/primeicons.19e14e48.svg",revision:null},{url:"/my-ase/startsite/index.html",revision:"e9254c7cc9922f8cfd81ce215c0d3b03"},{url:"/my-ase/startsite/js/app.b70ed604.js",revision:null},{url:"/my-ase/startsite/js/chunk-vendors.29821ed8.js",revision:null},{url:"/my-ase/startsite/manifest.json",revision:"b370977481d092583465466b0676792c"},{url:"/my-ase/startsite/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
