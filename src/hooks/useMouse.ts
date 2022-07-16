import { useState, useEffect } from 'react'

export default function useMouse() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  const windowMouseEvents = (e: MouseEvent) => {
    setMouse({ x: e.pageX, y: e.pageY })
  }

  useEffect(() => {
    window.addEventListener('mousemove', windowMouseEvents, false)

    return () => {
      window.removeEventListener('mousemove', windowMouseEvents, false)
    }
  }, [])

  return mouse
}
