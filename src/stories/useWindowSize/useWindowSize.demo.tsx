import React from 'react'
import useWindowSize from '../../hooks/useWindowSize'

const WindowSize = () => {
  const { width, height } = useWindowSize()
  return (
    <>
      <div>
        宽度：{width} 高度：{height}
      </div>
    </>
  )
}

export default WindowSize
