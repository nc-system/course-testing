var F=Object.defineProperty;var f=(e,t,o)=>t in e?F(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var a=(e,t,o)=>(f(e,typeof t!="symbol"?t+"":t,o),o);import{s as p,x as s,i as g}from"./lit-element-e98f3997.js";var u;let h=(u=class extends p{render(){return s`
            <button><slot>Button Blue</slot></button>
        `}},a(u,"styles",g`
        :host {
            display: inline-block;
            margin: 1rem;
            padding: 0;
        }


        button {
            font-size: 1rem;
            padding: 1rem 1rem;
            border: none;
            cursor: pointer;
            background-color: #1565c0;
            color: #FFFF;
            outline: none;
            transition: .2s;
            border-radius: .8rem;

        }

        button:hover {
            background-color: #9e9e9e;
        }
    `),u);customElements.define("button-basic-blue",h);var c;let k=(c=class extends p{render(){return s`
            <button><slot>Button Red</slot></button>
        `}},a(c,"styles",g`
        :host {
            display: inline-block;
            margin: 1rem;
            padding: 0;
        }


        button {
            font-size: 1rem;
            padding: 1rem 1rem;
            border: none;
            cursor: pointer;
            background-color: red;
            color: #FFFF;
            outline: none;
            transition: .2s;
            border-radius: .8rem;

        }

        button:hover {
            background-color: #9e9e9e;
        }
    `),c);customElements.define("button-basic-red",k);const _={component:"demo-button"},r={render:()=>s`<button-basic-blue/>`},n={render:()=>s`<button-basic-red/>`};var i,d,l;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:"{\n  render: () => html`<button-basic-blue/>`\n}",...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var b,m,B;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:"{\n  render: () => html`<button-basic-red/>`\n}",...(B=(m=n.parameters)==null?void 0:m.docs)==null?void 0:B.source}}};const v=["ButtonBasicBlue","ButtonBasicRed"];export{r as ButtonBasicBlue,n as ButtonBasicRed,v as __namedExportsOrder,_ as default};
//# sourceMappingURL=ButtonBasic.stories-69051637.js.map
