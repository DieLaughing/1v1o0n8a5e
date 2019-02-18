import React from 'react'
import { TextArea, Box, FormField } from 'grommet'
import useInputState from '../hooks/useInputState'

const TodoForm = ({ saveTodo }) => {
  const { value, reset, onChange } = useInputState()
  return (
    <Box align="center" pad="large">
      <FormField
        label="Label"
        htmlFor="text-area"
        onSubmit={event => {
          event.preventDefault()
          saveTodo(value)
          reset()
        }}
      >
        <TextArea
          id="text-area"
          placeholder="Add todo"
          onChange={onChange}
          value={value}
        />
      </FormField>
    </Box>
  )
}

export default TodoForm
