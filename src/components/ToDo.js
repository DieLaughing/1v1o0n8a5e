import React, { useState, useEffect } from "react"
import "../settings/ToDo.css"
import numWords from "num-words"
import capitalize from "capitalize"

const uuidv4 = require("uuid/v4")

function init(data) {
  return (
    data || {items: [{ id: 1, content: "One", isCompleted: true },{ id: 2, content: "two", isCompleted: false  },{ id: 3, content: "Three", isCompleted: false  },{ id: 4, content: "four", isCompleted: false  },{ id: 5, content: "Five", isCompleted: true  },{ id: 6, content: "six", isCompleted: false  },{ id: 7, content: "Seven", isCompleted: false  },{ id: 8, content: "eight", isCompleted: false  },{ id: 9, content: "Nine", isCompleted: true }]}
  )
}

// TODO: create an deleted array to store deleted entries and use both array lengths to determine the next index number, for consistency.

/* function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      console.log("CREATE button pressed")
      //const len = Array.from(state.items).length + 1
      const newList = [...state.items, {
        key: action.payload,
        content: "",
        isCompleted: false
      }]
      return {items: newList}
    case "DELETE":
      console.log("DELETE button pressed")
      //oldList.pop() TODO: Get the key of the ToDo with focus and slice it out
      //setList(action.payload)
      break;
    case "CLEAR":
      console.log("RESET button pressed")
      return init(action.payload)
    case "TOGGLE":
      console.log("TOGGLE button pressed")
      return
    default:
      throw new Error()
  }
} */

function ToDo(lsKey, items) {
  //const items = []
  // Check if data exists, then load it, or use default data.
  const [list, setList] = useState(JSON.parse(localStorage.getItem(lsKey)) || items)
  const [state, setState] = useState(init(list))

  useEffect(() => {
    if (list) {
      setList(list)
      setState(list)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

useEffect(() => {
  localStorage.setItem(lsKey, JSON.stringify(state))
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [state])


  function handleKeyDown(e, i) {
    if (e.key === "Enter") {
      createTodoAtIndex(e, i)
    }
    if (e.key === "Backspace" && state.items[i].content === "") {
      e.preventDefault()
      const newList = state.items.slice(0,i).concat(state.items.slice(i+1, state.items.length))
      setState({items: newList})
    }
  }


  function createTodoAtIndex(e, i) {
    const len = state.items.length
    const newList = [...state.items, {
      key: uuidv4(),
      index: len+1,
      id: len+1,
      content: capitalize(numWords(len+1)),
      isCompleted: false
    }]
    setState({items: newList})
    /* setTimeout(() => {
      document.forms[0].elements[i + 1].focus()
    }, 10) */
  }

  function updateTodoAtIndex(e, i) {
    const newList = [...state.items]
    newList[i].content = e.target.value
    setState({items: newList})
  }

  function toggleTodoCompleteAtIndex(i) {
    const newList = [...state.items]
    newList[i].isCompleted = !newList[i].isCompleted
    setState({items: newList})
  }

        //<img src={logo} className='logo' alt='logo' />
  return (
    <div className='todo-app'>
      <div className='todo-header'>ToDo's
      </div>
      <form className='todo-list'>
        <ul>
          {state.items && state.items.map((todo, i) => (
            <div key={i} className={`todo ${todo.isCompleted && "todo-is-completed"}`}>
              <div
                key={'div=' + i}
                className={"checkbox"}
                onClick={() => toggleTodoCompleteAtIndex(i)}
              >
                {todo.isCompleted && <span>&#x2714;</span>}
              </div>
              <input
                type='text'
                value={todo.content}
                onKeyDown={e => handleKeyDown(e, i)}
                onChange={e => updateTodoAtIndex(e, i)}
              />
            </div>
          ))}
        </ul>
      </form>
    </div>
  )
}

export default ToDo
