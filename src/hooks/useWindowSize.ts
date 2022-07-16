/**
 * @description 监听窗口的尺寸变化
 */

import { useState, useEffect } from 'react'

export default function useWindowSize() {
  const [size, setSize] = useState({ width: 0, height: 0 })

  const windowSizeEvents = () => {
    setSize({ width: window.innerWidth, height: window.innerHeight })
  }

  useEffect(() => {
    windowSizeEvents()
    window.addEventListener('size', windowSizeEvents, false)
    return () => {
      window.removeEventListener('size', windowSizeEvents, false)
    }
  }, [])

  return size
}
