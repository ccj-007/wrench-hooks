/**
 * @description 忽略第一次调用钩子的useEffect
 */
import { useEffect } from 'react';
declare const useUpdateEffect: typeof useEffect;
export default useUpdateEffect;
