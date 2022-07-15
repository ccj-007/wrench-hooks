import React, { useState, useRef, useEffect } from 'react'

function useCallbackState<T>(initState: T) {
  let [state, setState] = useState<any>(initState)
  let isUpdate = useRef<React.RefCallback<(arg: T) => void>>()

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
