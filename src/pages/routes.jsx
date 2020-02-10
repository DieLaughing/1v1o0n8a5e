import React from "react"
import { Redirect } from "react-router-dom"
import Home from './Home'
import ThemePicker from "../components/ThemePicker"
import DropList from "./DropList"
import ToDo from "./ToDo"
import Mangle from "./Mangle"
import numWords from "num-words"
import capitalize from "capitalize"

const uuidv4 = require("uuid/v4")

const mockList = num => {
  const arr = []
  for (let i = 0; i < num; i++) {
    arr[i] = { ...new Set() }
    arr[i].key = uuidv4()
    arr[i].id = i + 1
    arr[i].content = capitalize.words(numWords(i + 1))
    arr[i].isCompleted = false
  }
  return { items: arr }
}

export default [
  {
    id: 1,
    path: "/",
    exact: true,
    main: () => <Redirect to='/home' />
  },
  {
    id: 2,
    path: "/home",
    exact: true,
    sidebar: "Home",
    main: () => <Home />
  },
  {
    id: 3,
    path: "/todo",
    sidebar: "Todo",
    main: () => ToDo("ToDoList", mockList(5))
  },
  {
    id: 4,
    path: "/droplist",
    sidebar: "Drop List",
    main: () => DropList("DropList", mockList(9))
  },
  {
    id: 5,
    path: "/color",
    sidebar: "Color",
    main: () => <ThemePicker />
  },
  {
    id: 6,
    path: "/mangle",
    sidebar: "Mangle",
    main: () => Mangle("MangleList", mockList(7))
  },
  {
    id: 7,
    path: "/about",
    sidebar: "About",
    main: () => (
      <div>
        <h1 style={{ fontFamily: "Electrolize", fontSize: "1.85em" }}>About</h1>
        <br />
        More blank pages. This is the 'About J. Adam Moore' page.
      </div>
    )
  }
]
