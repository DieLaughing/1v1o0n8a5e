import React from "react"
import { Redirect } from "react-router-dom"
import AdobePicker from "../components/AdobePicker"
import DropList from "../components/DropList"
import ToDo from "../components/ToDo"
import Mangle from "./Mangle"
import numWords from "num-words"
import capitalize from "capitalize"
import JSONPretty from "react-json-pretty"
import styled from 'styled-components'

const JSONPrettyMon = require("../settings/one_dark_drop")

const uuidv4 = require("uuid/v4")

const HomeHeader = styled.div`
  background: transparent;
  z-index: 1;
  overflow: hidden;
  min-height: 3rem;
  padding-top: 1rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
  width: 35rem;
  font-family: "Electrolize", sans-serif;
  font-size: 2rem;
  margin: 1rem auto;
`

const tdList = num => {
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
    main: () => (
      <React.Fragment>
      {Object.entries(localStorage).map(([key, value]) => (
          <span key={key}>
            <HomeHeader>{key}: </HomeHeader>
            <JSONPretty
              id='json-pretty'
              data={value}
              theme={JSONPrettyMon}
              space='2'
              style={{width: '35vw', margin: '0 auto'}}
            ></JSONPretty>
          </span>
        ))
      }
      <footer style={{margin: '3rem'}}>{
        //This is the footer
        }</footer>
      </React.Fragment>
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
