import React from 'react'
import { Box, Text } from 'grommet'

const TodoList = props => {
  return (
    <Box fill pad="xlarge" background="bg_navy">
      <Text color="white">Stacks, Bitch!</Text>
      <Box pad="small" background="bg_blue">
        <Text color="red">Fuckin' Small Box, Man!</Text>
      </Box>
      <Box pad="small" background="bg_yellow">
        <Text color="red">Stacks on</Text>
      </Box>
    </Box>
  )
}

export default TodoList