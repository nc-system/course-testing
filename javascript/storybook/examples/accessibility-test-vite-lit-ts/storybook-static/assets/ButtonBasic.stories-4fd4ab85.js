import{i as p,s as b,x as f}from"./lit-element-e98f3997.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const g=t=>e=>typeof e=="function"?((o,r)=>(customElements.define(o,r),r))(t,e):((o,r)=>{const{kind:n,elements:s}=r;return{kind:n,elements:s,finisher(i){customElements.define(o,i)}}})(t,e);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var c;((c=window.HTMLSlotElement)===null||c===void 0?void 0:c.prototype.assignedElements)!=null;const v=""+new URL("lit-c8dae599.svg",import.meta.url).href;var B=Object.defineProperty,E=Object.getOwnPropertyDescriptor,_=(t,e,o,r)=>{for(var n=r>1?void 0:r?E(e,o):e,s=t.length-1,i;s>=0;s--)(i=t[s])&&(n=(r?i(e,o,n):i(n))||n);return r&&n&&B(e,o,n),n};const h=new URL(""+new URL("../vite.svg",import.meta.url).href,self.location).href;let l=class extends b{render(){return f` <button>
        <img src=${h} alt='Vite'>
        <slot>BUTTON BASIC 01</slot>
        <img src=${v} alt='Lit'>
      </button> `}};l.styles=p`
    :host {
      display: inline-block;
      margin: 0;
      padding: 0;
    }

    button {
      padding: 0.3rem 0.5rem;
      border-radius: 0.5rem;
      border-style: none;
      cursor: pointer;
      color: #ffffff;
      background-color: #9e9e9e;
      transition: 0.3s;
    }

    button:hover {
      background-color: #4dd0e1;
    }
  `;l=_([g("button-basic-01")],l);const O={component:"demo-button"},a={render:()=>f`<button-basic-01/>`};var d,u,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:"{\n  render: () => html`<button-basic-01/>`\n}",...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const y=["ButtonBasic01"];export{a as ButtonBasic01,y as __namedExportsOrder,O as default};
//# sourceMappingURL=ButtonBasic.stories-4fd4ab85.js.map
