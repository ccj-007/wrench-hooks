/**
 * @description state的节流处理
 */
declare function useThrottle(fn: Function, wait?: number, deps?: any[]): (() => void)[];
export default useThrottle;
