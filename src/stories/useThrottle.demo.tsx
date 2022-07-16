import { useState } from 'react'
import useThrottle from '../hooks/useThrottle'

const Throttle = () => {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  const handleCount = () => {
    setA(a + 1)
  }

  let [cancel] = useThrottle(
    () => {
      setB(a)
    },
    1000,
    [a]
  )

  // 5s后关闭
  setTimeout(() => {
    cancel()
  }, 5000)
  return (
    <>
      <button onClick={handleCount}>click me</button>
      <div>{a}</div>
      <div>{b}</div>
    </>
  )
}

export default Throttle
