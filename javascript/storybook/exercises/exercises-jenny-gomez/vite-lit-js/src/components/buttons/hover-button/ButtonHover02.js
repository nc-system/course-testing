
import { LitElement, html, css } from 'lit'

export class ButtonHover02 extends LitElement {
  render() {
    return html`
            <div>
                <button class='button'><slot>Button Hover</slot></button>
            </div>
        `
  }

  static styles = css` 
        :host {
            display: inline-block;
            margin: 0;
            padding: 0;
            //box-sizing: border-box;
        }

        div {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 0;
        }

        .button {
            border: none;
            position: relative;
            display: inline-flex;
            border-radius: 0.5rem;
            padding: .625rem 1.8rem;
            background: #f4033f;
            color: #FFFFFF;
            cursor: pointer;
            text-decoration: none;
            letter-spacing: .063rem; 
            overflow: hidden;
        }

        .button slot {
            position: relative;
            z-index: 1;
        }

        .button::before {
            content: '';
            position: absolute;
            top: var(--y);
            left: var(--x);
            transform: translate(-50%,-50%);
            width: 0;
            height: 0;
            border-radius: 50%;
            background: #ca7760;
            transition: width 0.5s, height 0.5s;
        }

        .button:hover::before {
            width: 18.7rem;
            height: 18.7rem;
            background-color: #ca7760;
        }
    `

}

customElements.define('button-hover-02', ButtonHover02)
