import { css } from 'styled-components'

export default css`
  body {
    color: #17171f;
    background-color: whitesmoke;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow: hidden;
  }
  code {font-family:source-code-pro,Menlo,Monaco,Consolas,'Courier New',monospace;}
  ul {list-style-type:none;padding:10px auto;}
  li {padding:8px;margin:10px;-moz-border-radius:3px;-webkit-border-radius:3px;border-radius:3px;background:transparent;/*#1b1b25;*/
  &:before {content:"\u200B";}}
  a, link, input, .logo {transition: color .2s;color: #265C83;}
  a:link, a:visited {color: #265C83;}
  a:hover {color: #7FDBFF;}
  a:active {transition: color .2s;color: #007BE6;}
  .link {text-decoration: none;}
  .navselect, .navselect:active, .navselect:focus {color:#007BE6;}
  input:hover, .logo:hover, .navselect:hover {transition: color .2s;color: #7FDBFF;}
  /* Text Pulse */
  @-webkit-keyframes text-pulse { 50% { color: #7FDBFF; } }
  @keyframes text-pulse { 50% { color: #7FDBFF; } }
  .text-pulse {
    display: inline-block;
/*     vertical-align: middle; */
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    overflow: hidden;
    -webkit-transition-duration: .2s;
    transition-duration: .2s;
    -webkit-transition-property: color;
    transition-property: color;
  }
  .text-pulse:focus, .text-pulse:active {
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
    color: #007BE6;
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
`
