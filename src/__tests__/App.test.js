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
  const {container} = renderWithRouter(<App />)
  // normally I'd use a data-testid, but just wanted to show this is also possible
  expect(container.innerHTML).toMatch('Test text')
})

/*test('rendering a component that uses withRouter', () => {
  const route = '/home'
  renderWithRouter(<App />, {route})
  expect(screen.getByTestId('app').textContent).toBe(route)
})
/*
it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})
*/