/**
 * @description state的防抖处理
 */

import { useEffect, useRef } from 'react'

export default function useDebounce(fn: Function, wait: number = 1000, deps: any[] = []) {
  let timeout = useRef<any>()
  useEffect(() => {
    if (timeout.current) clearTimeout(timeout.current)
    timeout.current = setTimeout(() => {
      fn()
    }, wait)
  }, deps)

  const cancel = () => {
    clearTimeout(timeout.current)
    timeout.current = null
  }

  return [cancel]
}
