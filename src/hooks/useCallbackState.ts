import React, { useState, useRef, useEffect } from 'react'

function useCallbackState<T>(initState: T) {
  const [state, setState] = useState<any>(initState)
  const isUpdate = useRef<React.RefCallback<(arg: T) => void>>()

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
