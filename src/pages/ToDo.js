import React, { useState, useEffect } from 'react'
import '../settings/ToDo.css'
import numWords from 'num-words'
import capitalize from 'capitalize'
import { v4 as uuidv4 } from "uuid"

// TODO: create an deleted array to store deleted entries and use both array lengths to determine the next index number, for consistency.

function ToDo(lsKey, items) {

  // Check if data exists, then load it, or use default data.
  const [list, setList] = useState(JSON.parse(localStorage.getItem(lsKey)) || items)
  const [state, setState] = useState(list || items)

  useEffect(() => {
    if (list) {
      setList(list)
      setState(list)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list])

  useEffect(() => {
    localStorage.setItem(lsKey, JSON.stringify(state))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state])

  function handleKeyDown(e, i) {
    if (e.key === 'Enter') {
      createTodoAtIndex(e, i)
    }
    if (e.key === 'Backspace' && state.items[i].content === '') {
      e.preventDefault()
      const newList = state.items
        .slice(0, i)
        .concat(state.items.slice(i + 1, state.items.length))
      setState({ items: newList })
    }
  }

  function createTodoAtIndex(e, i) {
    const newList = [...state.items]
    const len = newList.length
    const lasti = newList[len - 1].id

    newList[len] = {
      key: uuidv4(),
      content: capitalize.words(numWords(lasti+1)),
      id: lasti+1,
      isCompleted: false
    }
    setState({ items: newList })
  }

  function updateTodoAtIndex(e, i) {
    const newList = [...state.items]
    newList[i].content = e.target.value
    setState({ items: newList })
  }

  function toggleTodoCompleteAtIndex(i) {
    const newList = [...state.items]
    newList[i].isCompleted = !newList[i].isCompleted
    setState({ items: newList })
  }

  return (
    <div className='todo-app'>
      {/* TODO: change color of pulse based on how close to completing items from RED to GREEN through YELLOW
      TODO: make this feature customizable
      TODO: make this integrated with the theme */}
      <div className='todo-header text-pulse dave'>ToDo's</div>
      <form className='todo-list'>
        <ul>
          {state.items &&
            state.items.map((todo, i) => (
              <div
                key={i}
                className={`todo ${todo.isCompleted && 'todo-is-completed'}`}
              >
                <div
                  key={'div=' + i}
                  className={'checkbox'}
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
