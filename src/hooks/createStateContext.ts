/**
 * @description 用于组件共享数据的state共享
 */

import { createContext, createElement, useContext, useState } from 'react'

const createStateContext = <T>(defaultInitialValue: T) => {
  const context = createContext<[T, React.Dispatch<React.SetStateAction<T>>] | undefined>(undefined)
  const providerFactory = (props: any, children: React.ReactNode) => createElement(context.Provider, props, children)

  //构建context包裹组件
  const StateProvider = ({ children, initialValue }: { children?: React.ReactNode; initialValue?: T }) => {
    const state = useState<T>(initialValue !== undefined ? initialValue : defaultInitialValue)
    return providerFactory({ value: state }, children)
  }

  const useStateContext = () => {
    const state = useContext(context)
    if (state == null) {
      throw new Error(`useStateContext must be used inside a StateProvider.`)
    }
    return state
  }

  return [useStateContext, StateProvider, context] as const
}

export default createStateContext
