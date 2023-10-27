import{x as i}from"./lit-element-b7784047.js";import{B as l}from"./Button-ba318a4f.js";function e(){var A="/home/andres/NC/NC-SYS/COURSES/course-testing/javascript/storybook/examples/coverage-test-vite-lit-ts/src/stories/Header.ts",n="d38e388880dd56436f8a80c44add2f3ede08d088",r=window,s="__coverage__",C={path:"/home/andres/NC/NC-SYS/COURSES/course-testing/javascript/storybook/examples/coverage-test-vite-lit-ts/src/stories/Header.ts",statementMap:{0:{start:{line:4,column:22},end:{line:41,column:1}},1:{start:{line:4,column:72},end:{line:41,column:1}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:4,column:22},end:{line:4,column:23}},loc:{start:{line:4,column:72},end:{line:41,column:1}},line:4}},branchMap:{0:{loc:{start:{line:27,column:10},end:{line:37,column:4}},type:"cond-expr",locations:[{start:{line:27,column:17},end:{line:27,column:79}},{start:{line:27,column:82},end:{line:37,column:4}}],line:27}},s:{0:0,1:0},f:{0:0},b:{0:[0,0]},inputSourceMap:{version:3,file:null,sources:["/home/andres/NC/NC-SYS/COURSES/course-testing/javascript/storybook/examples/coverage-test-vite-lit-ts/src/stories/Header.ts"],names:[],mappings:"AAAA,SAAS,YAAY;AAErB,SAAS,cAAc;AACvB,OAAO;AAaA,aAAM,SAAS,CAAC,EAAE,MAAM,SAAS,UAAU,gBAAgB,MAAmB;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA,UAuB3E,OACE,OAAO,EAAE,MAAM,SAAS,SAAS,UAAU,OAAO,UAAU,CAAC,IAC7D,OAAO,OAAO;AAAA,EACZ,MAAM;AAAA,EACN,SAAS;AAAA,EACT,OAAO;AACT,CAAC,CAAC;AAAA,cACA,OAAO;AAAA,EACP,SAAS;AAAA,EACT,MAAM;AAAA,EACN,SAAS;AAAA,EACT,OAAO;AACT,CAAC,CAAC,EAAE;AAAA;AAAA;AAAA;AAAA;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"d38e388880dd56436f8a80c44add2f3ede08d088"},t=r[s]||(r[s]={});(!t[A]||t[A].hash!==n)&&(t[A]=C);var c=t[A];return e=function(){return c},c}e();e().s[0]++;const S=({user:A,onLogin:n,onLogout:r,onCreateAccount:s})=>(e().f[0]++,e().s[1]++,i`
  <header>
    <div class="storybook-header">
      <div>
        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path
              d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
              fill="#FFF"
            />
            <path
              d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
              fill="#555AB9"
            />
            <path
              d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
              fill="#91BAF8"
            />
          </g>
        </svg>
        <h1>Acme</h1>
      </div>
      <div>
        ${A?(e().b[0][0]++,l({size:"small",onClick:r,label:"Log out"})):(e().b[0][1]++,i`${l({size:"small",onClick:n,label:"Log in"})}
            ${l({primary:!0,size:"small",onClick:s,label:"Sign up"})}`)}
      </div>
    </div>
  </header>
`),h={title:"Example/Header",tags:["autodocs"],render:A=>S(A)},a={args:{user:{name:"Jane Doe"}}},o={};var d,m,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    user: {
      name: 'Jane Doe'
    }
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,v,p;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(p=(v=o.parameters)==null?void 0:v.docs)==null?void 0:p.source}}};const O=["LoggedIn","LoggedOut"],M=Object.freeze(Object.defineProperty({__proto__:null,LoggedIn:a,LoggedOut:o,__namedExportsOrder:O,default:h},Symbol.toStringTag,{value:"Module"}));export{S as H,a as L,o as a,M as b};
//# sourceMappingURL=Header.stories-fcae48b7.js.map
