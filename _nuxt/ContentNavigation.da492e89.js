import{h as p,u as f}from"./index.b1735b62.js";import{J as v,E as g,f as d,T as l,g as _,C as h,K as C,M as r}from"./entry.c71cea35.js";import{_ as y}from"./nuxt-link.14e0b158.js";import{q as w,w as m,e as P,s as $,j as N,u as T}from"./query.ea10f8d8.js";import{u as j}from"./preview.31b95fe3.js";const E=async e=>{const{content:t}=v().public;typeof(e==null?void 0:e.params)!="function"&&(e=w(e));const a=e.params(),s=t.experimental.stripQueryParameters?m(`/navigation/${`${p(a)}.${t.integrity}`}/${P(a)}.json`):m(`/navigation/${p(a)}.${t.integrity}.json`);if($())return(await g(()=>import("./client-db.c1d50296.js"),["./client-db.c1d50296.js","./entry.c71cea35.js","./query.ea10f8d8.js","./index.b1735b62.js","./preview.31b95fe3.js","./index.288f722b.js","./_commonjsHelpers.de833af9.js"],import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:N(a),previewToken:j().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},x=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=l(e),a=_(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&h("dd-navigation").value){const{navigation:n}=T();return{navigation:n}}const{data:s}=await f(`content-navigation-${p(a.value)}`,()=>E(a.value));return{navigation:s}},render(e){const t=C(),{navigation:a}=e,s=o=>r(y,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),c=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):c(a)}}),D=x,S=D;export{S as default};
