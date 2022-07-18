/**
 * @description reducer结合createContext的共享状态
 */

import { createContext, createElement, useContext, useReducer } from 'react'

/**
 * 创建reducer
 *
 * @param {R} reducer  处理函数
 * @param {React.ReducerState<R>} defaultInitialState  默认状态值
 * @return {*}
 */
const createReducerContext = <R extends React.Reducer<any, any>>(reducer: R, defaultInitialState: React.ReducerState<R>) => {
  //创建context
  const context = createContext<[React.ReducerState<R>, React.Dispatch<React.ReducerAction<R>>] | undefined>(undefined)

  //构建context包裹组件
  const providerFactory = (props: any, children: React.ReactNode) => createElement(context.Provider, props, children)

  // 包裹组件传入children、initialState
  const ReducerProvider = ({ children, initialState }: { children?: React.ReactNode; initialState?: React.ReducerState<R> }) => {
    //从useRuducer获取[state, dispatch]
    const state = useReducer<R>(reducer, initialState !== undefined ? initialState : defaultInitialState)
    return providerFactory({ value: state }, children)
  }

  //获取context传递的数据
  const useReducerContext = () => {
    const state = useContext(context)
    if (state == null) {
      throw new Error(`useReducerContext must be used inside a ReducerProvider.`)
    }
    return state
  }

  //as const 类型断言
  return [useReducerContext, ReducerProvider, context] as const
}

export default createReducerContext
