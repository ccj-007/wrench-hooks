import { useState, useEffect, RefObject } from 'react'

export default function useFullScreen(ref: RefObject<HTMLElement>, show: boolean = false, onClose: () => void): boolean {
  const [first, setFirst] = useState(true)
  const [full, setFull] = useState(false)

  useEffect(() => {
    if (first) {
      setFirst(false)
      return
    }
    if (show && !full) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen()
      }
      setFull(true)
    }
    if (!show && full) {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
      onClose()
      setFull(false)
    }
  }, [show])

  return full
}
