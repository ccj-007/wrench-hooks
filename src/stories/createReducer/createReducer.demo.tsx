import React from 'react'
import createReducer from '../../hooks/createReducer'

// 自定义中间件
const logger = (state: any, action: any) => {
  console.log('state', state, 'action', action)
}
const createMiddlewareReducer = createReducer([logger])

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

const Reducer = () => {
  const [state, dispatch] = createMiddlewareReducer(reducer, { count: 0 })

  // 支持thunk的函数类型的传入, 支持异步
  const waitFn = (waitDispatch: any, waitState: any) => {
    setTimeout(() => {
      waitDispatch({ type: 'increment' })
    }, 2000)
  }
  return (
    <div>
      <p>count: {state.count}</p>
      <button onClick={() => dispatch(waitFn)}>wait</button>
      <button onClick={() => dispatch({ type: 'reset', payload: 6 })}>Reset</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  )
}

export default Reducer
