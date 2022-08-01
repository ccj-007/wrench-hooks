/**
 * @description 当点击DOM的外部区域
 */
import { RefObject } from 'react';
declare function useClickOutside(ref: RefObject<HTMLElement>, handler: Function): void;
export default useClickOutside;
