import React from "react"
import { Redirect } from "react-router-dom"
import AdobePicker from "../components/AdobePicker"
import DropList from "../components/DropList"
import ToDo from "../components/ToDo"
import Mangle from "./Mangle"
import numWords from "num-words"
import capitalize from "capitalize"

const uuidv4 = require("uuid/v4")

const tdList = num => {
  const arr = []
  for (let i = 0; i < num; i++) {
    arr[i] = { ...new Set() }
    arr[i].key = uuidv4()
    arr[i].id = i + 1
    arr[i].content = capitalize(numWords(i + 1))
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
    main: () => (
      <div>
        <h1 style={{ fontFamily: "Electrolize", fontSize: "1.85em" }}>Home</h1>
        <br />
        <pre id="json">
          {JSON.stringify(localStorage)}
        </pre>
      </div>
    )
  },
  {
    id: 3,
    path: "/todo",
    sidebar: "Todo",
    main: () => ToDo("ToDoList", tdList(5))
  },
  {
    id: 4,
    path: "/droplist",
    sidebar: "Drop List",
    main: () => DropList("DropList", tdList(9))
  },
  {
    id: 5,
    path: "/color",
    sidebar: "Color",
    main: () => <AdobePicker />
  },
  {
    id: 6,
    path: "/mangle",
    sidebar: "Mangle",
    main: () => Mangle("MangleList", tdList(7))
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
