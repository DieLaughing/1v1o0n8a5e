import React from "react"
import { Redirect } from "react-router-dom"
import AdobePicker from "../components/AdobePicker"
import DropList from "../components/DropList"
import ToDo from "../components/ToDo"
import Mangle from "./Mangle"
import numWords from "num-words"
import capitalize from "capitalize"

const uuidv4 = require("uuid/v4")

const tdList = (num) => {
  const arr = []
    for(let i = 0; i<num; i++) {
      arr[i] = {...new Set()}
      arr[i].key = uuidv4()
      arr[i].id = i+1
      arr[i].content = capitalize(numWords(i+1))
      arr[i].isCompleted = false
    }
    return {items: arr}
  }
  
//{items: [{ id: 1, content: "One", isCompleted: true },{ id: 2, content: "two", isCompleted: false  },{ id: 3, content: "Three", isCompleted: false  },{ id: 4, content: "four", isCompleted: false  },{ id: 5, content: "Five", isCompleted: true  },{ id: 6, content: "six", isCompleted: false  },{ id: 7, content: "Seven", isCompleted: false  },{ id: 8, content: "eight", isCompleted: false  },{ id: 9, content: "Nine", isCompleted: true }]}

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
        This is the Home page. There are other pages like it, but this is the
        Home page.
      </div>
    )
  },
  {
    id: 3,
    path: "/todo",
    sidebar: "Todo",
    main: () => ToDo( "ToDoList", tdList(5) )
  },
  {
    id: 4,
    path: "/droplist",
    sidebar: "Drop List",
    main: () =>
      DropList("DropList", tdList(9))
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
    main: () => Mangle("MangleList", {items: [{key: 'key1', id: 1, content: "one"},{key: 'key2',id: 2, content: "two"},{key: 'key3',id: 3, content: "three"},{key: 'key4',id: 4, content: "four"},{key: 'key5',id: 5, content: "five"},{key: 'key6',id: 6, content: "six"},{key: 'key7',id: 7, content: "seven"},{key: 'key8',id: 8, content: "eight"}]})
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
