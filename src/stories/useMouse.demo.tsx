import React from 'react'
import useMouse from '../hooks/useMouse'

const Mouse = () => {
  const { x, y } = useMouse()
  return (
    <>
      <div>
        x: {x} y: {y}
      </div>
    </>
  )
}

export default Mouse
