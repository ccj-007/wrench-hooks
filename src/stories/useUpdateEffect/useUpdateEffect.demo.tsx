import { useState, useEffect } from 'react'
import useUpdateEffect from '../../hooks/useUpdateEffect'

function UpdateEffect() {
  const [count, setCount] = useState<number>(100)
  const [get, setGet] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => count + 1)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  useUpdateEffect(() => {
    console.log('count', count)

    setGet(count)
  }, [count])
  return (
    <div>
      <div>当前值: {count}</div>

      <div>我接收到的值： {get}</div>
    </div>
  )
}

export default UpdateEffect
