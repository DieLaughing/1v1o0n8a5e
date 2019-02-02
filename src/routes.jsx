import React from 'react'
import { Redirect } from 'react-router-dom'
//import { projectList } from './projectList'
import TodoList from './TodoList'
import Colorwheel from './Colorwheel'

export default [
  {
    id: 0,
    path: '/',
    exact: true,
    main: () => (<Redirect to='/home' />),
  },
  {
    id: 1,
    path: '/home',
    exact: true,
    sidebar: 'Home',
    main: () => (  
      <div>
        <h1 style={{ fontFamily: 'Electrolize', fontSize: '1.85em' }}>Home</h1>
        <br />
        Test test here. This is the Home page.
      </div>
    ),
  },
  {
    id: 2,
    path: '/todo',
    sidebar: 'Todo',
    main: () => (<TodoList/>),
  },
  {
    id: 3,
    path: '/projects',
    sidebar: 'Projects',
    main: () => Colorwheel(),
  },
  {
    id: 4,
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
