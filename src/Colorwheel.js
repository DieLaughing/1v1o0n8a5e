import React from 'react'
//import PropTypes from 'prop-types'
import { Grommet, Box, Image } from 'grommet'
import theme from './theme'

const Colorwheel = () => {
  return (
    <Grommet theme={theme}>
      <Box align='center' pad='medium'>
        <Image fit='contain' src='./color_wheel.webp' width='420px' />
      </Box>
    </Grommet>
  )
}

//Colorwheel.propTypes = {}

export default Colorwheel