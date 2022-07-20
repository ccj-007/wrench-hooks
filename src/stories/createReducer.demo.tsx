import React from 'react'
import createReducer from '../hooks/createReducer'
import thunk from 'redux-thunk'

const useThunkReducer = createReducer(thunk)

interface StateType {
  count: number
}
interface ActionType {
  type: string
  payload?: any
}

function reducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    case 'reset':
      return { count: action.payload }
    default:
      throw new Error()
  }
}

const Reducer = ({ initialCount = 1 }) => {
  const addAndReset = React.useCallback(() => {
    return (dispatch: (arg0: ActionType) => void) => {
      dispatch({ type: 'increment' })

      setTimeout(() => {
        dispatch({ type: 'reset', payload: initialCount })
      }, 1000)
    }
  }, [initialCount])

  const [state, dispatch] = useThunkReducer(reducer, initialCount)

  return (
    <div>
      <p>count: {state.count}</p>
      <button onClick={() => dispatch(addAndReset())}>Add and reset</button>
      <button onClick={() => dispatch({ type: 'reset', payload: { count: initialCount } })}>Reset</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  )
}

export default Reducer
