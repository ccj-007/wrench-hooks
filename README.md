![](./public/logo.png)

<h1 >Welcome to wrench-hooks</h1>

## What ?

wrench-hooks 扳手 hooks 工具库，针对<span >业务场景</span>开发的 hooks，轻量简洁~~~ (该库支持 TS 类型支持)

## Quick Start

```js
npm i wrench-hooks

import { useTitle } from 'wrench-hooks'

useTitle('welcome to  wrench-hooks')
```

## Docs

[document address](https://ccj-007.github.io/wrench-hooks/storybook-static/index)

## API

| hooks            | description                     |
| ---------------- | ------------------------------- |
| useCallbackState | 用于获取最新的 state            |
| useDebounce      | 常见用于 input 的输入的防抖处理 |
| useThrottle      | 按钮点击必用的节流处理          |
| useMouse         | 跟踪鼠标的位置                  |
| useScroll        | 跟踪网页滚轮的位置              |
| useWindowSize    | 跟踪网页的尺寸缩放              |
| useFullScreen    | 全局显示元素或视频              |
| useClip          | 文本复制到剪贴板                |
| useTitle         | 修改标题                        |
