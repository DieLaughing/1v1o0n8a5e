import React, { useEffect, useState } from "react"
import numWords from "num-words"
import capitalize from "capitalize"

const uuidv4 = require("uuid/v4")

// JSON.parse(JSON.stringify({items: [{key: `${uuidv4()}`, id: 0, content: numWords(0)}]}))
const listItems = (num) => {
  const arr = []
    for(let i = 0; i<num; i++) {
      arr[i] = {...new Set()}
      arr[i].key = uuidv4()
      arr[i].id = i+1
      arr[i].content = capitalize(numWords(i+1))
    }
    return {items: arr}
  }


// Pass in the LocalState name and an array of objects
const Mangle = (lsKey, items) => {
  // Check if data exists, then load it, or use default daentriesta.
  const [ state, setState ] = useState(JSON.parse(localStorage.getItem(lsKey)) || items )
  //const [ {items}, setState ] = useState({ items: state })

  // Runs once at the beginning
  useEffect(() => {
    if (state) {
      setState(state)
      console.log("Set state for Mangle")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // This should run each updated state
  useEffect(() => {
    console.log("Display was updated")
    localStorage.setItem(lsKey, JSON.stringify(state))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state])

  function adds() {
    const i = state.items.length
    const lasti = state.items[i-1].id
    console.log("Add button pressed")
    const newState = [...state.items, { key: uuidv4(), id: lasti + 1, content: capitalize(numWords(lasti + 1))}]
    setState({items: newState})
  }

  function del(itemToDelete) {
    const newState = [...state.items]
    let newArr = newState.filter(function (item){
      return (item !== itemToDelete)
    })
    console.log("Delete button pressed")
    setState({items: newArr})
  }

  function clr() {
    console.log("RESET button pressed")
    setState(items)
  }

return (
    <React.Fragment>
      Items:{" "}
      <button onClick={() => clr()}>Reset</button>
      <button onClick={() => adds()}>+</button>
      {state.items &&
        state.items.map((item, index) =>
            <div key={item.key}>
              <button onClick={() => del(item)}>-</button>
              {item.id} {item.content} {item.key}
            </div>
        )
      }
    </React.Fragment>
  )
}

export default Mangle
