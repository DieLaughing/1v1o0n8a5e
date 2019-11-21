import React, { useState } from "react"
import "../settings/ToDo.css"

const ToDo = () => {
  const [todos, setTodos] = useState([
    {
      content: "Make a list",
      isCompleted: true
    },
    {
      content: "Check it twice",
      isCompleted: false
    },
    {
      content: "Build a ToDo app in React",
      isCompleted: false
    }
  ])

  function handleKeyDown(e, i) {
    if (e.key === "Enter") {
      createTodoAtIndex(e, i)
    }
    if (e.key === "Backspace" && todos[i].content === "") {
      e.preventDefault()
      return removeTodoAtIndex(i)
    }
  }

  function createTodoAtIndex(e, i) {
    const newTodos = [...todos]
    newTodos.splice(i + 1, 0, {
      content: "",
      isCompleted: false
    })
    setTodos(newTodos)
    /* setTimeout(() => {
      document.forms[0].elements[i + 1].focus()
    }, 0) */
  }

  function updateTodoAtIndex(e, i) {
    const newTodos = [...todos]
    newTodos[i].content = e.target.value
    setTodos(newTodos)
  }

  function removeTodoAtIndex(i) {
    if (i === 0 && todos.length === 1) return
    setTodos(todos =>
      todos.slice(0, i).concat(todos.slice(i + 1, todos.length))
    )
    /* setTimeout(() => {
      document.forms[0].elements[i - 1].focus()
    }, 0) */
  }

  function toggleTodoCompleteAtIndex(index) {
    const temporaryTodos = [...todos]
    temporaryTodos[index].isCompleted = !temporaryTodos[index].isCompleted
    setTodos(temporaryTodos)
  }

  return (
    <div className='todo-app'>
      <div className='todo-header form-pulse'>ToDo's</div>
      <form className='todo-list'>
        <ul>
          {todos.map((todo, i) => (
            <div className={`todo ${todo.isCompleted && "todo-is-completed"}`}>
              <div
                className={"checkbox"}
                onClick={() => toggleTodoCompleteAtIndex(i)}
              >
                {todo.isCompleted && <span>{'\u2714'}</span>}
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
