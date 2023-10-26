import{u as C,a as k,c as _}from"./editor.aaa16b3b.js";import{f as x,s as d,z as w,A as M,o as D,c as E,a as o,x as b,u as g}from"./entry.3f0835e8.js";import"./github-light.56a48118.js";import"./register-yabal.6759da4f.js";import"./toggleHighContrast.c5d41b67.js";import"./yabal.2a6d3bf0.js";import"./_commonjsHelpers.de833af9.js";import"./editor.main.27bfa47c.js";const K={class:"flex-fill d-flex flex-column editor-container"},V={class:"border-bottom"},z={class:"d-flex m-2"},B={class:"screen-container m-2"},H=x({__name:"LazyEditor",setup(I){const h=C(),v=d(),l=d(),c=d(),a=k(),s=w(),p=d(!1);let r=()=>{},e;return M(()=>{if(!l.value)return;e=s.editor.create(v.value,{language:"yabal",theme:h.value?"vs-dark":"github-light"});const u=l.value.getContext("2d"),n=u.createImageData(108,108),i=new Worker("/runtime/worker.js");function f(t){const y=new TextEncoder().encode(t).buffer;i.postMessage(["program",y],[y])}e.addAction({id:"run",label:"Run program",keybindings:[s.KeyCode.F5,s.KeyMod.CtrlCmd|s.KeyCode.KeyR,s.KeyMod.CtrlCmd|s.KeyCode.Enter],contextMenuGroupId:"navigation",contextMenuOrder:1.5,run:function(t){f(t.getValue())}}),r=()=>{const t=e.getValue();p.value&&f(t)},a.value.code&&(e.setValue(a.value.code),r()),i.onmessage=t=>{if(t.data==="ready"){p.value=!0;const m=a.value.code;m&&f(m)}else n.data.set(t.data),u.putImageData(n,0,0)}}),_("resize",()=>{e==null||e.layout({width:c.value.clientWidth,height:c.value.clientHeight})},{onMount:!0}),_("yabal:update_editor",()=>{a.value.code&&(e.setValue(a.value.code),r())}),(u,n)=>(D(),E("div",K,[o("div",{class:"flex-fill overflow-hidden",ref_key:"editorContainer",ref:c},[o("div",{class:"editor",ref_key:"editorDiv",ref:v},null,512)],512),o("div",V,[o("div",z,[o("button",{type:"button",class:"btn btn-sm btn-outline-danger",onClick:n[0]||(n[0]=b(i=>g(a).visible=!1,["prevent"]))},"Close editor"),o("button",{type:"button",class:"btn btn-sm btn-primary ms-auto",onClick:n[1]||(n[1]=b(i=>g(r)(),["prevent"]))},"Run code")])]),o("div",B,[o("canvas",{ref_key:"canvas",ref:l,class:"screen",width:"64",height:"64"},null,512)])]))}});export{H as default};
