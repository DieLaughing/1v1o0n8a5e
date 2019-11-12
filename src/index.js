import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'
import * as serviceWorker from './serviceWorker'
/*import htm from 'htm'

const html = htm.bind(React.createElement)

ReactDOM.render(
  <BrowserRouter>
    {html`<${App} />`}
  </BrowserRouter>,
  document.getElementById('root')
)
*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
