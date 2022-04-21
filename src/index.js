//import React, { StrictMode } from "react"
import React from 'react'
import { render } from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { App } from "./components/App"
import * as serviceWorker from "./serviceWorker"
/*
import htm from "htm"

const html = htm.bind(React.createElement)

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      {html`
        <${App} />
      `}
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
)

ReactDOM.createBlockingRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </StrictMode>
  )

*/

render(
  //<StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>,
  //</StrictMode>,
  document.getElementById("root")
)
  
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
