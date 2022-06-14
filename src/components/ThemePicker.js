import React, { Component } from 'react'
import { ChromePicker } from 'react-color'

// rgba to hexadecimal
const rgba2Hex = (color) => {
  if (/^rgb/.test(color)) {
    const rgba = color.replace(/^rgba?\(|\s+|\)$/g, '').split(',')
    // eslint-disable-next-line no-bitwise
    let hex = `
    #${((1 << 24) + (parseInt(rgba[0], 10) << 16) + (parseInt(rgba[1], 10) << 8) + parseInt(rgba[2], 10)).toString(16).slice(1)}
    `
    // add alpha channel if needed
    if (rgba[4]) {
      const octal = 0o1
      const alpha = Math.round(octal * 255)
      const hexAlpha = (alpha + 0x10000).toString(16).substr(-2).toUpperCase()
      hex += hexAlpha
    }
    return hex
  }
  return color
}

  class ThemePicker extends Component {
    state = {
      displayColorPicker: false,
      color: {
        r: 28,
        g: 56,
        b: 126,
        a: 0.8,
      },
    }
  
    handleClick = () => {
      this.setState({ displayColorPicker: !this.state.displayColorPicker })
    }
  
    handleClose = (event) => {
      this.setState({ displayColorPicker: false })
      console.log("All done!")
    }

    handleChangeComplete = (color) => {
      this.setState({ color: color.rgb })
      //console.log(color.hex)
    }

    render() {
      const popover = {
        position: 'absolute',
        zIndex: '2',
      }
      const cover = {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
      }
      const palette = {
        display: 'block',
        position: 'relative',
        border: '1px solid DarkRed',
        color: 'PapayaWhip',
        backgroundColor: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
        height: '500px',
        width: '50%',
        margin: 'auto',
        padding: '15%',
        textAlign: 'center',
        fontWeight: '900',
        fontFamily: 'Sans-serif',
        fontSize: `calc(2.5em + 2vmin)`,
      }

      return (
        <div>
          <button onClick={ this.handleClick }>Pick a Color</button>
          { this.state.displayColorPicker ? <div style={ popover }>
            <div style={ cover } onClick={ this.handleClose }/>
            <ChromePicker color={ this.state.color } onChangeComplete={ this.handleChangeComplete } />
          </div> : null }
          <div style={ palette } >
            {rgba2Hex(`rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`)}
          </div>
        </div>
      )
    }
  }  

export default ThemePicker
