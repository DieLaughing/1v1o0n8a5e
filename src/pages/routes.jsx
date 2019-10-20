import React from 'react'
import { Redirect } from 'react-router-dom'
import AdobePicker from '../components/AdobePicker'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'
import List from '../components/List'

const items = [{id:0,value: 'zero'},{id:1, value: 'one'},{id:2, value: 'two'},{id:3, value: 'three'},{id:4, value: 'four'},{id:5, value: 'five'},{id:6, value: 'six'},{id:7, value: 'seven'}]

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
    main: () => (
      <React.Fragment>
        <TodoForm/>
        <TodoList/>
      </React.Fragment>
    ),
  },
  {
    id: 3,
    path: '/projects',
    sidebar: 'Projects',
    main: () => List(items),
  },
  {
    id: 4,
    path: '/color',
    sidebar: 'Color',
    main: () => <AdobePicker />,
  },
  {
    id: 5,
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
