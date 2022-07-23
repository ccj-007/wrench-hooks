/**
 * @description reducer结合createContext的共享状态
 */

import { ReducerState, ReactNode, Dispatch, ReducerAction, Reducer, createContext, createElement, useContext, useReducer } from 'react'

/**
 * 创建reducer
 */
const createReducerContext = <R extends Reducer<any, any>>(reducer: R, defaultInitialState: ReducerState<R>) => {
  // 创建context
  const context = createContext<[ReducerState<R>, Dispatch<ReducerAction<R>>] | undefined>(undefined)

  // 构建context包裹组件
  const providerFactory = (props: any, children: ReactNode) => createElement(context.Provider, props, children)

  // 包裹组件传入children、initialState
  const ReducerProvider = ({ children, initialState }: { children?: ReactNode; initialState?: ReducerState<R> }) => {
    // 从useRuducer获取[state, dispatch]
    const state = useReducer<R>(reducer, initialState !== undefined ? initialState : defaultInitialState)
    return providerFactory({ value: state }, children)
  }

  // 获取context传递的数据
  const useReducerContext = () => {
    const state = useContext(context)
    if (state == null) {
      throw new Error(`useReducerContext must be used inside a ReducerProvider.`)
    }
    return state
  }

  // as const 类型断言
  return [useReducerContext, ReducerProvider, context] as const
}

export default createReducerContext
