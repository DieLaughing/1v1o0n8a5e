import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import Sidebar from 'react-sidebar'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Router>
      <App />
    </Router>, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders the sidebar', () => {
  // I have no fucking clue what to do here and there isn't a fucking website or video that helps.
})
