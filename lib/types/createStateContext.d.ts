/**
 * @description 用于组件共享数据的state共享
 */
import { Dispatch, SetStateAction, ReactNode } from 'react';
declare const createStateContext: <T>(defaultInitialValue: T) => readonly [() => [T, Dispatch<SetStateAction<T>>], ({ children, initialValue }: {
    children?: ReactNode;
    initialValue?: T;
}) => import("react").FunctionComponentElement<import("react").ProviderProps<[T, Dispatch<SetStateAction<T>>]>>, import("react").Context<[T, Dispatch<SetStateAction<T>>]>];
export default createStateContext;
