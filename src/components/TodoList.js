import React from 'react'
import { Box, Button, CheckBox, Text } from 'grommet'

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <div align="center">
      {
        todos => {
          todos.map((todo, index) => (
            <Box pad="large" background="#1b1b25">
              <CheckBox tabIndex={-1} />
              <Box pad="small" background="whitesmoke">
                <Text>{todo}</Text>
              </Box>
              <Button aria-label="Delete"
                onClick={() => {
                  deleteTodo(index)
                }}>🗑</Button>
            </Box>
          ))}
      }
    </div>
  )
}

export default TodoList
