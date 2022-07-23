declare const createReducer: (middlewareList: Function[]) => (reducer: unknown, initVal: unknown) => any[];
export default createReducer;
