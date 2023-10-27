import{x as u}from"./lit-element-b7784047.js";import{H as v,L as b,a as S}from"./Header.stories-fcae48b7.js";import"./Button-ba318a4f.js";function e(){var A="/home/andres/NC/NC-SYS/COURSES/course-testing/javascript/storybook/examples/coverage-test-vite-lit-ts/src/stories/Page.ts",n="1419ebbed2590b5bb4c6a1129943c203d120e97d",o=window,t="__coverage__",h={path:"/home/andres/NC/NC-SYS/COURSES/course-testing/javascript/storybook/examples/coverage-test-vite-lit-ts/src/stories/Page.ts",statementMap:{0:{start:{line:4,column:20},end:{line:60,column:1}},1:{start:{line:4,column:70},end:{line:60,column:1}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:4,column:20},end:{line:4,column:21}},loc:{start:{line:4,column:70},end:{line:60,column:1}},line:4}},branchMap:{},s:{0:0,1:0},f:{0:0},b:{},inputSourceMap:{version:3,file:null,sources:["/home/andres/NC/NC-SYS/COURSES/course-testing/javascript/storybook/examples/coverage-test-vite-lit-ts/src/stories/Page.ts"],names:[],mappings:"AAAA,SAAS,YAAY;AACrB,SAAS,cAAc;AACvB,OAAO;AAaA,aAAM,OAAO,CAAC,EAAE,MAAM,SAAS,UAAU,gBAAgB,MAAiB;AAAA;AAAA,MAE3E,OAAO;AAAA,EACP;AAAA,EACA;AAAA,EACA;AAAA,EACA;AACF,CAAC,CAAC;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"1419ebbed2590b5bb4c6a1129943c203d120e97d"},a=o[t]||(o[t]={});(!a[A]||a[A].hash!==n)&&(a[A]=h);var i=a[A];return e=function(){return i},i}e();e().s[0]++;const f=({user:A,onLogin:n,onLogout:o,onCreateAccount:t})=>(e().f[0]++,e().s[1]++,u`
  <article>
    ${v({user:A,onLogin:n,onLogout:o,onCreateAccount:t})}

    <section class="storybook-page">
      <h2>Pages in Storybook</h2>
      <p>
        We recommend building UIs with a
        <a href="https://componentdriven.org" target="_blank" rel="noopener noreferrer">
          <strong>component-driven</strong> </a
        >process starting with atomic components and ending with pages.
      </p>
      <p>
        Render pages with mock data. This makes it easy to build and review page states without
        needing to navigate to them in your app. Here are some handy patterns for managing page data
        in Storybook:
      </p>
      <ul>
        <li>
          Use a higher-level connected component. Storybook helps you compose such data from the
          "args" of child component stories
        </li>
        <li>
          Assemble data in the page component from your services. You can mock these services out
          using Storybook.
        </li>
      </ul>
      <p>
        Get a guided tutorial on component-driven development at
        <a href="https://storybook.js.org/tutorials/" target="_blank" rel="noopener noreferrer">
          Storybook tutorials
        </a>
        . Read more in the
        <a href="https://storybook.js.org/docs" target="_blank" rel="noopener noreferrer"> docs </a>
        .
      </p>
      <div class="tip-wrapper">
        <span class="tip">Tip</span> Adjust the width of the canvas with the
        <svg width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path
              d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"
              id="a"
              fill="#999"
            />
          </g>
        </svg>
        Viewports addon in the toolbar
      </div>
    </section>
  </article>
`),y={title:"Example/Page",render:A=>f(A)},r={args:{...b.args}},s={args:{...S.args}};var c,g,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    // More on composing args: https://storybook.js.org/docs/web-components/writing-stories/args#args-composition
    ...HeaderStories.LoggedIn.args
  }
}`,...(p=(g=r.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var d,l,m;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...HeaderStories.LoggedOut.args
  }
}`,...(m=(l=s.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const O=["LoggedIn","LoggedOut"];export{r as LoggedIn,s as LoggedOut,O as __namedExportsOrder,y as default};
//# sourceMappingURL=Page.stories-7d35d7e6.js.map
