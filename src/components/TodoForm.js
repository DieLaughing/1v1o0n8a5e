import React from 'react'
import { Grommet, TextArea, Box, FormField } from 'grommet'

const TodoForm = props => (
  <Box align="center" pad="large">
    <FormField label="Label" htmlFor="text-area" {...props}>
      <TextArea id="text-area" placeholder="placeholder" />
    </FormField>
  </Box>
)

export default TodoForm
