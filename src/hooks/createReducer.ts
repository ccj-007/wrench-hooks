/**
 * @description 结合异步的useReducer
 */
import { useReducer } from 'react'

const createReducer = (middlewareList: Function[]) => {
  return (reducer: unknown, initVal: unknown) => {
    const [state, dispatch] = useReducer(reducer, initVal)

    const thunkDispatch = (action: any) => {
      //中间件
      middlewareList.forEach((middleware) => {
        middleware(state, action)
      })

      if (typeof action === 'function') {
        return action(dispatch, state)
      }
      return dispatch(action)
    }
    return [state, thunkDispatch]
  }
}

export default createReducer
