import React from 'react'

//Circular svg color swatch displayed over colorwheel image
export const Marker = ({ x, y, offset }) => {
  const yy = y - offset.top
  const xx = x - offset.left
  return (
    <div
      style={{
        position: 'fixed',
        top: 'calc(50vh - 215px)',
        left: 'calc(50vw - 215px)',
        overflow: 'visible',
      }}
    >
      <svg
        width='430px'
        height='430px'
        overflow='visible'
        stroke='#FF6666'
        strokeWidth='3'
      >
        <circle
          cx={xx}
          cy={yy}
          r='24'
          stroke='#666666'
          strokeWidth='2'
          fill='#cccccc'
        />
      </svg>
    </div>
  )
}

export default Marker
