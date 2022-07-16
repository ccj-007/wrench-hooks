/**
 * @description setState第二个参数可以获得最新的state
 */

import { useState, useRef, useEffect, RefCallback } from 'react'

function useCallbackState<T>(initState: T) {
  const [state, setState] = useState<any>(initState)
  const isUpdate = useRef<RefCallback<(arg: T) => void>>()

  const setNewState = (newState: T, cb: () => void) => {
    isUpdate.current = cb
    setState(newState)
  }

  useEffect(() => {
    if (isUpdate.current) {
      isUpdate.current(state)
    }
  }, [state])

  return [state, setNewState]
}

export default useCallbackState
