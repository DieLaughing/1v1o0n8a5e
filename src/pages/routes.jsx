import React from 'react'
import { Redirect } from 'react-router-dom'
import AdobePicker from '../components/AdobePicker'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'
import DropList from '../components/DropList'
//import List from '../components/List'

export default [
  {
    id: 1,
    path: '/',
    exact: true,
    main: () => (<Redirect to='/home' />),
  },
  {
    id: 2,
    path: '/home',
    exact: true,
    sidebar: 'Home',
    main: () => (  
      <div>
        <h1 style={{ fontFamily: 'Electrolize', fontSize: '1.85em' }}>Home</h1>
        <br />
        This is the Home page. There are other pages like it, but this is the Home page.
      </div>
    ),
  },
  {
    id: 3,
    path: '/todo',
    sidebar: 'Todo',
    main: () => (
      <React.Fragment>
        <TodoForm/>
        <TodoList/>
      </React.Fragment>
    ),
  },
  {
    id: 4,
    path: '/projects',
    sidebar: 'Projects',
    main: () => DropList(),
  },
  {
    id: 5,
    path: '/color',
    sidebar: 'Color',
    main: () => <AdobePicker />,
  },
  {
    id: 6,
    path: '/about',
    sidebar: 'About',
    main: () => (
      <div>
        <h1 style={{ fontFamily: 'Electrolize', fontSize: '1.85em' }}>About</h1>
        <br />
        More blank pages. This is the 'About J. Adam Moore' page.
      </div>
    ),
  },
]
