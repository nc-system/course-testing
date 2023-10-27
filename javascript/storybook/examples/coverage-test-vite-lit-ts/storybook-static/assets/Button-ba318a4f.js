import{w as i,x as l}from"./lit-element-b7784047.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const u={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},m=A=>(...t)=>({_$litDirective$:A,values:t});let d=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,n){this._$Ct=t,this._$AM=e,this._$Ci=n}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const c="important",b=" !"+c,p=m(class extends d{constructor(A){var t;if(super(A),A.type!==u.ATTRIBUTE||A.name!=="style"||((t=A.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(A){return Object.keys(A).reduce((t,e)=>{const n=A[e];return n==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(A,[t]){const{style:e}=A.element;if(this.ut===void 0)return this.ut=new Set(Object.keys(t)),this.render(t);for(const n of this.ut)t[n]==null&&(this.ut.delete(n),n.includes("-")?e.removeProperty(n):e[n]=null);for(const n in t){const o=t[n];if(o!=null){this.ut.add(n);const s=typeof o=="string"&&o.endsWith(b);n.includes("-")||s?e.setProperty(n,s?o.slice(0,-11):o,s?c:""):e[n]=o}}return i}});function r(){var A="/home/andres/NC/NC-SYS/COURSES/course-testing/javascript/storybook/examples/coverage-test-vite-lit-ts/src/stories/Button.ts",t="4932acda3c8b11098563ad4aaa482fe04bcc0830",e=window,n="__coverage__",o={path:"/home/andres/NC/NC-SYS/COURSES/course-testing/javascript/storybook/examples/coverage-test-vite-lit-ts/src/stories/Button.ts",statementMap:{0:{start:{line:4,column:22},end:{line:16,column:1}},1:{start:{line:5,column:15},end:{line:5,column:84}},2:{start:{line:6,column:2},end:{line:15,column:4}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:4,column:22},end:{line:4,column:23}},loc:{start:{line:4,column:78},end:{line:16,column:1}},line:4}},branchMap:{0:{loc:{start:{line:5,column:15},end:{line:5,column:84}},type:"cond-expr",locations:[{start:{line:5,column:25},end:{line:5,column:52}},{start:{line:5,column:55},end:{line:5,column:84}}],line:5},1:{loc:{start:{line:9,column:56},end:{line:9,column:72}},type:"binary-expr",locations:[{start:{line:9,column:56},end:{line:9,column:60}},{start:{line:9,column:64},end:{line:9,column:72}}],line:9}},s:{0:0,1:0,2:0},f:{0:0},b:{0:[0,0],1:[0,0]},inputSourceMap:{version:3,file:null,sources:["/home/andres/NC/NC-SYS/COURSES/course-testing/javascript/storybook/examples/coverage-test-vite-lit-ts/src/stories/Button.ts"],names:[],mappings:"AAAA,SAAS,YAAY;AACrB,SAAS,gBAAgB;AACzB,OAAO;AA2BA,aAAM,SAAS,CAAC,EAAE,SAAS,iBAAiB,MAAM,OAAO,QAAQ,MAAmB;AACzF,QAAM,OAAO,UAAU,8BAA8B;AAErD,SAAO;AAAA;AAAA;AAAA,cAGK,CAAC,oBAAoB,qBAAqB,QAAQ,QAAQ,IAAI,IAAI,EAAE,KAAK,GAAG,CAAC;AAAA,cAC7E,SAAS,EAAE,gBAAgB,CAAC,CAAC;AAAA,eAC5B,OAAO;AAAA;AAAA,QAEd,KAAK;AAAA;AAAA;AAGb;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"4932acda3c8b11098563ad4aaa482fe04bcc0830"},s=e[n]||(e[n]={});(!s[A]||s[A].hash!==t)&&(s[A]=o);var a=s[A];return r=function(){return a},a}r();r().s[0]++;const C=({primary:A,backgroundColor:t,size:e,label:n,onClick:o})=>{r().f[0]++;const s=(r().s[1]++,A?(r().b[0][0]++,"storybook-button--primary"):(r().b[0][1]++,"storybook-button--secondary"));return r().s[2]++,l`
    <button
      type="button"
      class=${["storybook-button",`storybook-button--${r().b[1][0]++,e||(r().b[1][1]++,"medium")}`,s].join(" ")}
      style=${p({backgroundColor:t})}
      @click=${o}
    >
      ${n}
    </button>
  `};export{C as B};
//# sourceMappingURL=Button-ba318a4f.js.map
