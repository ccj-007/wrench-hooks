interface MapListType {
  hookname: string
  text: string
  link: string
}

export const mapList: MapListType[] = [
  {
    hookname: 'createMemo',
    text: 'useMemo的封装, 自动收集函数依赖的缓存钩子',
    link: '/story/hooks-createMemo--page',
  },
  {
    hookname: 'createReducer',
    text: '结合thunk、logger中间件的useReducer',
    link: '/story/hooks-createReducer--page',
  },
  {
    hookname: 'createReducerContext',
    text: 'useReducer结合createContext实现组件状态共享',
    link: '/story/hooks-createReducerContext--page',
  },
  {
    hookname: 'createStateContext',
    text: 'useState结合createContext实现组件状态共享',
    link: '/story/hooks-createStateContext--page',
  },
  {
    hookname: 'useCallbackState',
    text: '用于获取最新的 state',
    link: '/story/hooks-usecallbackstate--page',
  },
  {
    hookname: 'useClickOutside',
    text: '点击DOM的外部的回调',
    link: '/story/hooks-useClickOutside--page',
  },
  {
    hookname: 'useUpdate',
    text: '强制更新钩子',
    link: '/story/hooks-useUpdate--page',
  },
  {
    hookname: 'useFirstMountState',
    text: '是否第一次渲染',
    link: '/story/hooks-useFirstMountState--page',
  },
  {
    hookname: 'useUpdateEffect',
    text: ' 忽略第一次调用钩子的useEffect的update更新状态',
    link: '/story/hooks-useUpdateEffect--page',
  },
  {
    hookname: 'useDebounce',
    text: '常见用于input的输入控制state的防抖处理',
    link: '/story/hooks-useDebounce--page',
  },
  {
    hookname: 'useThrottle',
    text: '按钮点击必用的控制state的节流处理',
    link: '/story/hooks-useThrottle--page',
  },
  {
    hookname: 'useMouse',
    text: '跟踪鼠标的位置',
    link: '/story/hooks-useMouse--page',
  },
  {
    hookname: 'useScroll',
    text: '跟踪网页滚轮的位置',
    link: '/story/hooks-useScroll--page',
  },
  {
    hookname: 'useFullScreen',
    text: '全局显示元素或视频',
    link: '/story/hooks-useFullScreen--page',
  },
  {
    hookname: 'useClip',
    text: '文本复制到剪贴板',
    link: '/story/hooks-useClip--page',
  },
  {
    hookname: 'useTitle',
    text: '修改标题',
    link: '/story/hooks-useTitle--page',
  },
  {
    hookname: 'useWindowSize',
    text: '跟踪网页的尺寸缩放',
    link: '/story/hooks-useWindowSize--page',
  },
]

export const HooksText = (props: Pick<MapListType, 'hookname'>) => {
  let { hookname } = props
  let sel = mapList.find((item) => item.hookname === hookname)
  let text = sel?.text
  return <div>{text}</div>
}
