/**
 * @description reducer结合createContext的共享状态
 */
import { ReducerState, ReactNode, Dispatch, ReducerAction, Reducer } from 'react';
/**
 * 创建reducer
 */
declare const createReducerContext: <R extends Reducer<any, any>>(reducer: R, defaultInitialState: ReducerState<R>) => readonly [() => [ReducerState<R>, Dispatch<ReducerAction<R>>], ({ children, initialState }: {
    children?: ReactNode;
    initialState?: ReducerState<R>;
}) => import("react").FunctionComponentElement<import("react").ProviderProps<[ReducerState<R>, Dispatch<ReducerAction<R>>]>>, import("react").Context<[ReducerState<R>, Dispatch<ReducerAction<R>>]>];
export default createReducerContext;
