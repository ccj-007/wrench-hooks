/**
 * @description state的节流处理
 */

import { useEffect, useRef, useState } from 'react'

function useThrottle(fn: Function, wait: number = 1000, deps: any[] = []) {
  let pre = useRef(0)
  let [time, setTime] = useState(wait)
  useEffect(() => {
    let now = Date.now()
    if (now - pre.current > time) {
      fn()
      pre.current = now
    }
  }, deps)

  const cancel = () => {
    setTime(0)
  }

  return [cancel]
}

export default useThrottle
