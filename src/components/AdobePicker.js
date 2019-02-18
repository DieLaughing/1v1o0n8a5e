import React, { Component } from 'react'
import Marker from './Marker'
//import Colorwheel from './Colorwheel'

class AdobePicker extends Component {
  constructor(props) {
    super(props)
    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.state = { x: 684, y: 380 }
  }
  
  handleMouseMove(event) {
    event.preventDefault()
    this.setState({
      x: event.clientX,
      y: event.clientY
    })
  }
  
  getOffset( el ) {
    var _x = 0
    var _y = 0
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
      _x += el.offsetLeft - el.scrollLeft
      _y += el.offsetTop - el.scrollTop
      el = el.offsetParent
    }
    return { top: _y, left: _x }
  }

  render() {
    return (
      <div onClick={this.handleMouseMove} style={{
        position: 'fixed',
        top: 'calc(50vh - 215px)',
        left: 'calc(50vw - 215px)',
        width: '434px',
        height: '436px',
        overflow: 'visible'
      }}>
      <img src='./color_wheel.webp' alt='colorwheel' style={{width: '430px', borderRadius: '215px'}} />
        <Marker x={this.state.x} y={this.state.y} offset={{top: 172, left: 465}} />
      </div>
    )
  }
}

export default AdobePicker

/*
//const Theme = createContainer(props => useState(props.initialColor))

  const {x, y} = useMousePosition(),
    size = useWindowSize(),
    radius = 227, //size.width / 2
    diameter = radius * 2,
    center = [(size.width / 2) - radius, (size.height / 2) - radius + 99],
    mx = x - center[0],
    my = y - center[1]

  function distance(dot1, dot2) {
    const x1 = dot1[0],
      y1 = dot1[1],
      x2 = dot2[0],
      y2 = dot2[1]
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2))
  }

  function limit(bx,by) {
    var dist = distance([bx, by], center)
    if (dist <= radius ) {
      return {zx: bx, zy: by}
    } 
    else {
      const rx = bx - center[0],
        ry = by - center[1]
      var radians = Math.atan2(ry, rx)
      return {
        zx: Math.cos(radians) * radius + center[0] - radius,
        zy: Math.sin(radians) * radius + center[1]
      }
    } 
  }

  const { zx, zy } = limit(mx,my)

      The mouse position is {x} and {y} in the window.
      <div style={{position: 'absolute', top: center[1], left: center[0], zIndex: '1' }}>
        <Colorwheel />
      </div>
      <div style={{position: 'absolute', top: center[1], left: center[0], zIndex: '2', border: '2px solid blue' }}>
        <Marker x={zx} y={zy} />
      </div>
      
*/
