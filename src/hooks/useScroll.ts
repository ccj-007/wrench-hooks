import React from 'react'

function useScroll() {
  const [scroll, setScroll] = React.useState({ x: 0, y: 0 })
  const scrollEvents = (e: any) => {
    const x = e.path[1].scrollX.toFixed(1)
    const y = e.path[1].scrollY.toFixed(1)
    setScroll({ x, y })
  }

  React.useEffect(() => {
    window.addEventListener('scroll', scrollEvents, false)

    return () => {
      window.removeEventListener('scroll', scrollEvents, false)
    }
  }, [])

  return scroll
}

export default useScroll
