import React, { useState, useContext, useEffect } from 'react'
import createContainer from 'constate'
import { useMousePosition } from '../hooks/useMousePosition'
import { useWindowSize } from '../hooks/useWindowSize'

/* function getOffset( el ) {
  var _x = 0
  var _y = 0
  while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
      _x += el.offsetLeft - el.scrollLeft
      _y += el.offsetTop - el.scrollTop
      el = el.offsetParent
  }
  return { top: _y, left: _x }
} */
//const Theme = createContainer(props => useState(props.initialColor))

export const ColorWheel = props => {

  const position = useMousePosition()
  const size = useWindowSize()
  const xx = size.width / 2
  const yy = size.height / 2
  const x = position.x - xx + 16
  const y = position.y - yy + 99
  
  return (
    <div align='center' display='inline-block' position='relative' backgroundColor='yellow'>
      The mouse position is {position.x}, {position.y} in the window.
      <div style={{position: 'absolute', top:'35vh', left:'35vw', zIndex:'1'}}>
        <img src='./color_wheel.webp' alt='colorwheel' style={{width: '430px', borderRadius: '215px'}} />
      </div>
      <div style={{position: 'absolute', top:'35vh', left:'35vw', zIndex:'2'}}>
        <svg x={x} y={y} width='430px' height='430px'>
          <g width='100vw' height='100vh'>
            <circle cx={x} cy={y} r='24' stroke='#006600' stroke-width='3' fill='#00cc00'/>
          </g>
        </svg>
      </div>
    </div>
  )
}

export default ColorWheel