import React, { useEffect, useState } from "react"
import numWords from "num-words"
import capitalize from "capitalize"

// @react needs unique keys
const uuidv4 = require("uuid/v4")

// Pass in the local state name and an array of objects
const Mangle = (lsKey, items) => {
  // Check if data exists, then load it, or use default daentriesta.
  const [state, setState] = useState(
    JSON.parse(localStorage.getItem(lsKey)) || items
  )

  // Runs once at the beginning
  useEffect(() => {
    if (state) {
      setState(state)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // This should run each updated state
  useEffect(() => {
    localStorage.setItem(lsKey, JSON.stringify(state))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state])

  function adds() {
    const i = state.items.length
    const lasti = state.items[i - 1].id
    const newState = [
      ...state.items,
      {
        key: uuidv4(),
        id: lasti + 1,
        content: capitalize.words(numWords(lasti + 1)),
        isCompleted: false
      }
    ]
    setState({ items: newState })
  }

  function del(itemToDelete) {
    const newState = [...state.items]
    let newArr = newState.filter(function(item) {
      return item !== itemToDelete
    })
    setState({ items: newArr })
  }

  function toggle(itemToToggle) {
    const newState = [...state.items]
    let newArr = newState.filter(function(item) {
      if (item === itemToToggle) {
        item.isCompleted = !item.isCompleted
      }
      return item
    })
    setState({ items: newArr })
  }

  function clr() {
    setState(items)
  }

  return (
    <div>
      <span>
        <button onClick={() => clr()}>Reset</button>
        <button onClick={() => adds()}>+</button>
      </span>
      <div style={{ margin: "1rem" }}>
      </div>
        <div
          key={"div-king1"}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyItems: "center",
              alignItems: "center",
              alignContent: "center",
              justifyContent: "space-evenly",
              width: "auto",
            margin: "auto"
          }}
        >
          <h3>Items: </h3>
          <h3>ID: </h3>
          <h3>Number: </h3>
          <h3>Key: </h3>
          <h3>Completed: </h3>
        </div>
      {state.items &&
        state.items.map((item, index) => (
          <div
            key={item.key}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyItems: "center",
              alignItems: "center",
              alignContent: "center",
              justifyContent: "space-evenly",
              width: "auto",
              margin: "auto"
            }}
          >
            <p>
              <button onClick={() => del(item)}>-</button>
            </p>
            <p>{item.id}</p>
            <p>{item.content}</p>
            <p>{item.key}</p>
            <p>
              {item.isCompleted ? (
                <button
                  style={{
                    display: "flex",
                    color: "whitesmoke",
                    background: "#005500",
                    width: "auto"
                  }}
                  onClick={() => toggle(item)}
                >
                  COMPLETED
                </button>
              ) : (
                <button
                  style={{
                    display: "flex",
                    width: "auto"
                  }}
                  onClick={() => toggle(item)}
                >
                  NOT DONE
                </button>
              )}
            </p>
          </div>
        ))}
    </div>
  )
}

export default Mangle
