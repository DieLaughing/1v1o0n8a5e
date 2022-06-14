import { css } from 'styled-components'

export default css`
  body {
    color: #17171f;
    background-color: whitesmoke;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow: hidden;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
      padding: 50px auto;
  }
  ul {
    list-style-type: none;
    padding: 10px auto;
  }
  li {
    padding: 8px;
    margin: 10px;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    background: transparent; /*#1b1b25;*/
    &:before {
      content: '\u200B';
    }
  }
  a,
  link,
  .logo {
    transition: color 0.2s;
    color: #265c83;
  }
  a:link,
  a:visited {
    color: #265c83;
  }
  a:hover {
    color: #7fdbff;
  }
  a:active {
    transition: color 0.2s;
    color: #007be6;
  }
  .link {
    text-decoration: none;
  }
  .navselect,
  .navselect:active,
  .navselect:focus {
    color: #007be6;
  }
  input:hover,
  .logo:hover,
  .navselect:hover {
    transition: color 0.2s;
    color: #7fdbff;
  }
  label input[type="file"] {
        position: absolute;
        top: -1000px;
        overflow: hidden;
        color: rgba(0, 0, 0, 0);
  }
  .label {
    cursor: pointer;
    border: 1px solid #cccccc;
    border-radius: 5px;
    padding: 5px 15px;
    margin: 5px;
    background: #dddddd;
    display: inline-block;
  }
  .label:hover {
    background: #7fdbff;
  }
  .label:active {
    background: #9fa1a0;
  }
  .label:invalid + span {
    color: #000000;
  }
  .label:valid + span {
    color:  #265c83;
  }
  /* Text Pulse */
  @-webkit-keyframes text-pulse {
    50% {
      color: #7fdbff;
    }
  }
  @keyframes text-pulse {
    50% {
      color: #7fdbff;
    }
  }
  .text-pulse {
    display: inline-block;
    /*     vertical-align: middle; */
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    overflow: hidden;
    -webkit-transition-duration: 0.2s;
    transition-duration: 0.2s;
    -webkit-transition-property: color;
    transition-property: color;
  }
  .text-pulse:focus,
  .text-pulse:active,
  .dave {
    -webkit-animation-name: text-pulse;
    animation-name: text-pulse;
    -webkit-animation-duration: 2.25s;
    animation-duration: 2.25s;
    /* -webkit-animation-delay: .5s;
    animation-delay: .5s; */
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    color: #007be6;
  }
  .noselect {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                        supported by Chrome and Opera */
  }
  /* For non-natively-focusable elements. For natively focusable elements */
  /* Use .visually-hidden:not(:focus):not(:active) */
  .visually-hidden {
    border-width: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important;
    height: 1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    white-space: nowrap !important;
    width: 1px !important;
  }
  p,
  h3 {
    width: 10vw;
    border: 0;
    margin: 0;
  }
  button {
    margin-right: 10vw;
    margin-left: 0;
  }
  button::-moz-focus-inner {
    border: 0;
  }
  h1 {
    width: auto;
    text-align: center;
  }
`
