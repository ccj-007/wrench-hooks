(self.webpackChunkwrench_hooks=self.webpackChunkwrench_hooks||[]).push([[179],{"./src/stories/Introduction.story.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{UseText:function(){return UseText},__namedExportsOrder:function(){return __namedExportsOrder},__page:function(){return __page}});__webpack_require__("./node_modules/react/index.js");var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const UseText=()=>[{usename:"useCallbackState",text:"用于获取最新的 state",link:"/story/hooks-usecallbackstate--page"},{usename:"createMemo",text:"useMemo的封装, 自动收集传参的依赖",link:"/story/hooks-createMemo--page"},{usename:"useUpdate",text:"强制更新钩子",link:"/story/hooks-useUpdate--page"},{usename:"useDebounce",text:"常见用于input的输入的防抖处理",link:"/story/hooks-useDebounce--page"},{usename:"useThrottle",text:"按钮点击必用的节流处理",link:"/story/hooks-useThrottle--page"},{usename:"useMouce",text:"跟踪鼠标的位置",link:"/story/hooks-useMounce--page"},{usename:"useScroll",text:"跟踪网页滚轮的位置",link:"/story/hooks-useScroll--page"},{usename:"useWindowSize",text:"跟踪网页的尺寸缩放",link:"/story/hooks-useWindowSize--page"},{usename:"useFullScreen",text:"全局显示元素或视频",link:"/story/hooks-useFullScreen--page"},{usename:"useClip",text:"文本复制到剪贴板",link:"/story/hooks-useClip--page"},{usename:"useTitle",text:"修改标题",link:"/story/hooks-useTitle--page"}].map(((item,index)=>(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"use-box",key:index},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("a",{className:"use",href:item.link},item.usename),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"desc"},item.text)))),layoutProps={UseText:UseText};function MDXContent({components:components,...props}){return(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.h_,{title:"Introduction",mdxType:"Meta"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("style",null,"\n    .title {\n      color: #ff3399;\n    }\n    .use {\n      cursor: point;\n      text-decoration:underline;\n      width: 200px;\n      text-align: center;\n      background: #ff3399;\n      color: #fff;\n    }\n    .use-box {\n      display: flex;\n      margin-bottom: 20px;\n    }\n    .desc {\n      width: 400px;\n      text-align: center;\n      background: #eee;\n      color: #000;\n    }\n  "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("img",{src:"logo.png"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h1",{className:"title"},"Welcome to wrench-hooks"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("p",null,"wrench-hooks 扳手 hooks 工具库，针对",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("span",{className:"title"},"业务场景"),"开发的 hooks，轻量简洁~~~ ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("span",{className:"title"},"(TS 类型支持)")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("code",{parentName:"pre",className:"language-js"},"npm i wrench-hooks\n\nimport { useTitle } from 'wrench-hooks'\n\nexport default function Title() {\n  return (\n    <button\n      onClick={() => {\n        useTitle('changed')\n      }}\n    >\n      change webSite title\n    </button>\n  )\n}\n\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(UseText,{mdxType:"UseText"}," "))}MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Introduction",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.aT,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(MDXContent,null))},__webpack_exports__.default=componentMeta;const __namedExportsOrder=["UseText","__page"]},"./src/stories/createMemo.story.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},__page:function(){return __page},default:function(){return createMemo_story}});var react=__webpack_require__("./node_modules/react/index.js"),esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),hooks_createMemo=function createMemo(fn){return function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(0,react.useMemo)((function(){return fn.apply(void 0,args)}),args)}},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),createMemo_demo=function Memo(){var useMemoFibonacci=hooks_createMemo((function fibonacci(n){return 0===n?0:1===n?1:fibonacci(n-1)+fibonacci(n-2)})),result=useMemoFibonacci(10);return(0,jsx_runtime.jsxs)("div",{children:["fib(10) = ",result]})},Home=__webpack_require__("./src/stories/Home.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const layoutProps={};function MDXContent({components:components,...props}){return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,esm.kt)(dist_esm.h_,{title:"hooks/createMemo",mdxType:"Meta"}),(0,esm.kt)("h2",{style:{color:"#ff3399"}}," createMemo Reference "),(0,esm.kt)(createMemo_demo,{mdxType:"Memo"}),(0,esm.kt)(Home.Z,{mdxType:"Home"}),(0,esm.kt)("h2",{style:{color:"#ff3399"}},"createMemo Usage "),"useMemo的封装, 自动收集函数依赖的缓存钩子",(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre",className:"language-js"},"import { createMemo } from 'wrench-hooks'\n\nconst Memo = () => {\n  const fibonacci = (n: number): number => {\n    if (n === 0) return 0\n    if (n === 1) return 1\n    return fibonacci(n - 1) + fibonacci(n - 2)\n  }\n\n  const useMemoFibonacci = createMemo(fibonacci)\n\n  const result = useMemoFibonacci(10)\n\n  return <div>fib(10) = {result}</div>\n}\n\nexport default Memo\n")))}MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"hooks/createMemo",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,esm.kt)(dist_esm.aT,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},(0,esm.kt)(MDXContent,null))};var createMemo_story=componentMeta;const __namedExportsOrder=["__page"]},"./src/stories/useCallbackState.story.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},__page:function(){return __page},default:function(){return useCallbackState_story}});var react=__webpack_require__("./node_modules/react/index.js"),esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");var hooks_useCallbackState=function useCallbackState(initState){var _useState=(0,react.useState)(initState),_useState2=(0,slicedToArray.Z)(_useState,2),state=_useState2[0],setState=_useState2[1],isUpdate=(0,react.useRef)();return(0,react.useEffect)((function(){isUpdate.current&&isUpdate.current(state)}),[state]),[state,function setNewState(newState,cb){isUpdate.current=cb,setState(newState)}]},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function CallbackState(){var _useCallbackState=hooks_useCallbackState(0),_useCallbackState2=(0,slicedToArray.Z)(_useCallbackState,2),state=_useCallbackState2[0],setState=_useCallbackState2[1];return(0,jsx_runtime.jsxs)("button",{onClick:function addCount(){setState((function(pre){return pre+1}),(function(v){console.log("new",v)}))},children:["score + 1, current: ",state]})}var Home=__webpack_require__("./src/stories/Home.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const layoutProps={};function MDXContent({components:components,...props}){return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,esm.kt)(dist_esm.h_,{title:"hooks/useCallbackState",mdxType:"Meta"}),(0,esm.kt)("h2",{style:{color:"#ff3399"}}," useCallbackState Reference "),(0,esm.kt)(CallbackState,{mdxType:"CallbackState"}),(0,esm.kt)(Home.Z,{mdxType:"Home"}),(0,esm.kt)("h2",{style:{color:"#ff3399"}},"useCallbackState Usage "),"setState的第二个参数是回调，可以获得最新的state",(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre",className:"language-js"},"import { useCallbackState } from 'wrench-hooks'\n\nexport default function CallbackState() {\n  let [state, setState] = useCallbackState < number > 0\n  const addCount = () => {\n    setState(\n      (pre: number) => {\n        return pre + 1\n      },\n      (v: number) => {\n        console.log('new', v)\n      }\n    )\n  }\n  return <button onClick={addCount}>score + 1, current: {state}</button>\n}\n")))}MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"hooks/useCallbackState",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,esm.kt)(dist_esm.aT,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},(0,esm.kt)(MDXContent,null))};var useCallbackState_story=componentMeta;const __namedExportsOrder=["__page"]},"./src/stories/useScroll.story.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},__page:function(){return __page},default:function(){return useScroll_story}});var react=__webpack_require__("./node_modules/react/index.js"),esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");var hooks_useScroll=function useScroll(){var _React$useState=react.useState({x:0,y:0}),_React$useState2=(0,slicedToArray.Z)(_React$useState,2),scroll=_React$useState2[0],setScroll=_React$useState2[1],scrollEvents=function scrollEvents(e){var x=e.path[1].scrollX.toFixed(1),y=e.path[1].scrollY.toFixed(1);setScroll({x:x,y:y})};return react.useEffect((function(){return window.addEventListener("scroll",scrollEvents,!1),function(){window.removeEventListener("scroll",scrollEvents,!1)}}),[]),scroll},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),useScroll_demo=function Scroll(){var _useScroll=hooks_useScroll(),x=_useScroll.x,y=_useScroll.y;return(0,jsx_runtime.jsxs)("div",{children:["x: ",x," y: ",y]})},Home=__webpack_require__("./src/stories/Home.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const layoutProps={};function MDXContent({components:components,...props}){return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,esm.kt)(dist_esm.h_,{title:"hooks/useScroll",mdxType:"Meta"}),(0,esm.kt)("h2",{style:{color:"#ff3399"}}," useScroll Reference "),(0,esm.kt)("hr",null),(0,esm.kt)("hr",null),(0,esm.kt)("hr",null),(0,esm.kt)("hr",null),(0,esm.kt)("hr",null),(0,esm.kt)("hr",null),(0,esm.kt)(useScroll_demo,{mdxType:"Scroll"}),(0,esm.kt)(Home.Z,{mdxType:"Home"}),(0,esm.kt)("h2",{style:{color:"#ff3399"}},"useScroll Usage "),"useMemo的封装, 自动收集函数依赖的缓存钩子",(0,esm.kt)("hr",null),(0,esm.kt)("hr",null),(0,esm.kt)("hr",null),(0,esm.kt)("hr",null),(0,esm.kt)("hr",null),(0,esm.kt)("hr",null),(0,esm.kt)("hr",null),(0,esm.kt)("hr",null),(0,esm.kt)("hr",null),(0,esm.kt)("hr",null),(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre",className:"language-js",metastring:"import {useScroll} from 'wrench-hooks'",import:!0,"{useScroll}":!0,from:!0,"'wrench-hooks'":!0},"const Scroll = () => {\n  let { x, y } = useScroll()\n  return (\n    <div>\n      x: {x} y: {y}\n    </div>\n  )\n}\n\nexport default Scroll\n")))}MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"hooks/useScroll",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,esm.kt)(dist_esm.aT,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},(0,esm.kt)(MDXContent,null))};var useScroll_story=componentMeta;const __namedExportsOrder=["__page"]},"./src/stories/useTitle.story.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},__page:function(){return __page},default:function(){return useTitle_story}});__webpack_require__("./node_modules/react/index.js");var esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js");var hooks_useTitle=function useTitle(title){document.title=title},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Title(){return(0,jsx_runtime.jsx)("button",{onClick:function onClick(){hooks_useTitle("changed")},children:"change webSite title"})}var Home=__webpack_require__("./src/stories/Home.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const layoutProps={};function MDXContent({components:components,...props}){return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,esm.kt)(dist_esm.h_,{title:"hooks/useTitle",mdxType:"Meta"}),(0,esm.kt)("h2",{style:{color:"#ff3399"}}," UseTitle Reference "),(0,esm.kt)(Title,{mdxType:"Title"}),(0,esm.kt)(Home.Z,{mdxType:"Home"}),(0,esm.kt)("h2",{style:{color:"#ff3399"}},"UseTitle Usage "),"简单的处理下标题",(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre",className:"language-js"},"import { useTitle } from 'wrench-hooks'\n\nexport default function Title() {\n  return (\n    <button\n      onClick={() => {\n        useTitle('changed')\n      }}\n    >\n      change webSite title\n    </button>\n  )\n}\n")))}MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"hooks/useTitle",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,esm.kt)(dist_esm.aT,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},(0,esm.kt)(MDXContent,null))};var useTitle_story=componentMeta;const __namedExportsOrder=["__page"]},"./.storybook/preview.js-generated-config-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{__namedExportsOrder:function(){return __namedExportsOrder},parameters:function(){return parameters}});var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},__namedExportsOrder=["parameters"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return(0,ClientApi.uc)(value);case"argTypes":return(0,ClientApi.v9)(value);case"decorators":return value.forEach((function(decorator){return(0,ClientApi.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,ClientApi.HZ)(loader,!1)}));case"parameters":return(0,ClientApi.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,ClientApi.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,ClientApi._C)(enhancer)}));case"render":return(0,ClientApi.$P)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,ClientApi.h1)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./src/stories/Home.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.Z=function Home(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a",{style:{color:"#ff3399",position:"absolute",top:20,left:20},href:"path=/story/introduction--page",children:"Home"})}},"./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.story\\.(js%7Cjsx%7Cts%7Ctsx))$":function(module){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.story\\.(js%7Cjsx%7Cts%7Ctsx))$",module.exports=webpackEmptyContext},"./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.story\\.mdx)$":function(module,__unused_webpack_exports,__webpack_require__){var map={"./stories/Introduction.story.mdx":"./src/stories/Introduction.story.mdx","./stories/createMemo.story.mdx":"./src/stories/createMemo.story.mdx","./stories/useCallbackState.story.mdx":"./src/stories/useCallbackState.story.mdx","./stories/useScroll.story.mdx":"./src/stories/useScroll.story.mdx","./stories/useTitle.story.mdx":"./src/stories/useTitle.story.mdx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.story\\.mdx)$"},"./storybook-init-framework-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},"?4f7e":function(){},"./generated-stories-entry.cjs":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.story\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.story\\.(js%7Cjsx%7Cts%7Ctsx))$")],module,!1)}},function(__webpack_require__){var __webpack_exec__=function(moduleId){return __webpack_require__(__webpack_require__.s=moduleId)};__webpack_require__.O(0,[543],(function(){return __webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),__webpack_exec__("./.storybook/preview.js-generated-config-entry.js"),__webpack_exec__("./generated-stories-entry.cjs")}));__webpack_require__.O()}]);