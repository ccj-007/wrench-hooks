/**
 * @description state的防抖处理
 */
export default function useDebounce(fn: Function, wait?: number, deps?: any[]): (() => void)[];
