import React from 'react'
import {Router} from 'react-router-dom'
import {createMemoryHistory} from 'history'
import {render} from '@testing-library/react'
import App from '../components/App'

// this is a handy function that I would utilize for any component
// that relies on the router being in context
function renderWithRouter(
  ui,
  {route = '/', history = createMemoryHistory({initialEntries: [route]})} = {},
) {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history,
  }
}

test('does it render with a <Router>', () => {
  const route = '/home'
  const {container} = renderWithRouter(<App />, {route})
  // normally I'd use a data-testid, but just wanted to show this is also possible
  expect(container).toContainHTML(route)
})