import React, { useEffect, useState } from 'react'
import numWords from 'num-words'
import capitalize from 'capitalize'

const uuidv4 = require('uuid/v4')

// Pass in the LocalState name and an array of objects
const Mangle = (lsKey, items) => {
  // Check if data exists, then load it, or use default daentriesta.
  const [state, setState] = useState(
    JSON.parse(localStorage.getItem(lsKey)) || items
  )

  // Runs once at the beginning
  useEffect(() => {
    if (state) {
      setState(state)
      //console.log('Set state for Mangle')
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
      { key: uuidv4(), id: lasti + 1, content: capitalize.words(numWords(lasti + 1)) }
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

  function clr() {
    setState(items)
  }

  return (
    <React.Fragment>
      <span>
        <button onClick={() => clr()}>Reset</button>
        <button onClick={() => adds()}>+</button>
      </span>
      <h3>Items: </h3>
      {state.items &&
        state.items.map((item, index) => (
          <div key={item.key}>
            <button onClick={() => del(item)}>-</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {item.id}{item.id < 10 ? <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</> : <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>}{item.content}{item.id < 10 ? <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</> : <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>}{item.key}
          </div>
        ))}
    </React.Fragment>
  )
}

export default Mangle
