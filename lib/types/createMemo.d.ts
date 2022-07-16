/**
 * @description 缓存函数的memo钩子
 */
declare const createMemo: <T extends (...args: any) => any>(fn: T) => (...args: Parameters<T>) => ReturnType<T>;
export default createMemo;
