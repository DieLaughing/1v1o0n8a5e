import React, { useState, useEffect } from "react"
import "../settings/ToDo.css"

/* useState()
 */

const ToDo = (tdKey, items) => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(tdKey)) || items)

  useEffect(() => {
    const data = localStorage.getItem(tdKey)
    if (data) {
      setValue(JSON.parse(data))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    localStorage.setItem(tdKey, JSON.stringify(value))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  function handleKeyDown(e, i) {
    if (e.key === "Enter") {
      createTodoAtIndex(e, i)
    }
    if (e.key === "Backspace" && value.items[i].content === "") {
      e.preventDefault()
      return removeTodoAtIndex(i)
    }
  }

  function createTodoAtIndex(e, i) {

  }

  function updateTodoAtIndex(e, i) {

  }

  function removeTodoAtIndex(i) {

  }

  function toggleTodoCompleteAtIndex() {
    
  }

  return (
    <div className='todo-app'>
      <div className='todo-header form-pulse'>ToDo's</div>
      <form className='todo-list'>
        <ul>
          {value.items && value.items.map((todo, i) => (
            <div className={`todo ${todo.isCompleted && "todo-is-completed"}`}>
              <div
                className={"checkbox"}
                onClick={() => toggleTodoCompleteAtIndex(i)}
              >
                {todo.isCompleted && <span>{"\u2714"}</span>}
              </div>
              <input
                type='text'
                value={todo.content}
                onKeyDown={e => handleKeyDown(e, i)}
                onChange={e => updateTodoAtIndex(e, i)}
                spellCheck='false'
              />
            </div>
          ))}
        </ul>
      </form>
    </div>
  )
}

export default ToDo
