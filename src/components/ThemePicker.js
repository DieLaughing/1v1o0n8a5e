import React, { Component } from 'react'
import { PhotoshopPicker } from 'react-color'

class ThemePicker extends Component {
  render() {
    return (
      <div style={{ border: '1px dashed red', textAlign: 'center' }}>
        <PhotoshopPicker />
      </div>
    )
  }
}

export default ThemePicker
