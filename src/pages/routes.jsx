import React from 'react'
import { Redirect } from 'react-router-dom'
import AdobePicker from '../components/AdobePicker'
import DropList from '../components/DropList'
import ToDo from '../components/ToDo'

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
    main: () => <ToDo />,
  },
  {
    id: 4,
    path: '/projects',
    sidebar: 'Projects',
    main: () => DropList('ProjectList', {items:[{id:'1', content: 'one'},{id:'2', content: 'two'},{id:'3', content: 'three'},{id:'4', content: 'four'},{id:'5', content: 'five'},{id:'6', content: 'six'},{id:'7', content: 'seven'},{id:'8', content: 'eight'},{id:'9', content: 'nine'}]}
    ),
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
