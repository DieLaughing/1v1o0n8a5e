import React, { useReducer } from "react"
import numWords from 'num-words'
import capitalize from 'capitalize'

function init(list) {
  return list || {
    items: [
      { id: 1, content: "one" },
      { id: 2, content: "two" },
      { id: 3, content: "three" },
      { id: 4, content: "four" },
      { id: 5, content: "five" },
      { id: 6, content: "six" },
      { id: 7, content: "seven" },
      { id: 8, content: "eight" }
    ]
  }
}

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      console.log("Add button pressed")
      const len = Array.from(state.items).length + 1
      const newList = Array.from(state.items).concat({
        id: len,
        content: numWords(len)
      })
      return { items: newList }
    case "DELETE":
      console.log("Delete button pressed")
      const oldList = Array.from(state.items)
      oldList.pop()
      const fixedList = oldList
      return { items: fixedList }
    case "CLEAR":
      console.log("RESET button pressed")
      return init(action.payload)
    default:
      throw new Error()
  }
}

function Mangle(lsKey, items) {
  // Check if data exists, then load it, or use default data.
  const list = JSON.parse(localStorage.getItem(lsKey)) || items
  const [state, dispatch] = useReducer(reducer, list, init)

  return (
    <>
      Items:{" "}
      {state.items &&
        Array.from(state.items).map((item, index) => {
          return (
            <div key={item.id}>
              {index}: {capitalize(item.content)}
            </div>
          )
        })}
      <button onClick={() => dispatch({ type: "CLEAR", payload: init()})}>Reset</button>
      <button onClick={() => dispatch({ type: "DELETE" })}>-</button>
      <button onClick={() => dispatch({ type: "ADD" })}>+</button>
    </>
  )
}

export default Mangle
