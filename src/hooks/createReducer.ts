/**
 * @description 结合中间件的useReducer
 */

import { MutableRefObject, useCallback, useRef, useState } from 'react'
import useUpdateEffect from './useUpdateEffect'

type Dispatch<Action> = (action: Action) => void

interface Store<Action, State> {
  getState: () => State
  dispatch: Dispatch<Action>
}

type Middleware<Action, State> = (store: Store<Action, State>) => (next: Dispatch<Action>) => (action: Action) => void

//联合中间件
function composeMiddleware<Action, State>(chain: Middleware<Action, State>[]) {
  return (context: Store<Action, State>, dispatch: Dispatch<Action>) => {
    return chain.reduceRight((res, middleware) => {
      return middleware(context)(res)
    }, dispatch)
  }
}

const createReducer = <Action, State>(...middlewares: Middleware<Action, State>[]) => {
  //中间件
  const composedMiddleware = composeMiddleware<Action, State>(middlewares)

  //返回的useThunkReducer为createRedcuer
  return (reducer: (state: State, action: Action) => State, initialState: State, initializer = (value: State) => value): [State, Dispatch<Action>] => {
    const ref = useRef(initializer(initialState))
    const [, setState] = useState(ref.current)

    const dispatch = useCallback(
      (action: Action) => {
        ref.current = reducer(ref.current, action)
        setState(ref.current)
        return action
      },
      [reducer]
    )

    //通过useRef保存reducer的状态， 默认第一次存入
    const dispatchRef: MutableRefObject<Dispatch<Action>> = useRef(
      composedMiddleware(
        {
          getState: () => ref.current,
          dispatch: (...args: [Action]) => dispatchRef.current(...args),
        },
        dispatch
      )
    )

    // 之后更新的存入current
    useUpdateEffect(() => {
      dispatchRef.current = composedMiddleware(
        {
          getState: () => ref.current,
          dispatch: (...args: [Action]) => dispatchRef.current(...args),
        },
        dispatch
      )
    }, [dispatch])

    return [ref.current, dispatchRef.current]
  }
}

export default createReducer
