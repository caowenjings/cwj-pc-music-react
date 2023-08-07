1.react 18.6 + ts + hook + router 6 创建项目

1.前端路由核心原理
2.react-router 简单编写
3.react 服务器渲染

-------- 组件模板---------

import React, { useState, memo } from 'react';
interface IApp {}
const App: React.FC<IApp> = (props:IApp) => {
const [data, setData] = useState(0);

return (123);
};
export default memo(App);

--------Tabbar------------
tabbarWrapper
tabbarList
tabbarItem
---------loading-------------
loading 组件

--------topic 列表页 -----------------
scrollList 列表组件

---------- 实现具体的接口请求----------------
base 封装
handleComresponse 公共函数处理成功数据
handleCommonError 公共函数处理错误数据

具体的接口请求封装

--- 骨架图 --- ---------
没有数据时显示

---topic 组件-------------
cardWrapper
cardHead -》子元素（tag）
cardBody -》子元素 image,info,time

---

Image 组件
通常先定义类型，再定义变量
Partial 支持你先定义变量，再通过变量来定义类型
export interface ImageProps extengds partial<typeof defalutProps>{
src:string, // 特殊，不统一的变量
style?:React.CSSproperties
}
可选项的属性值最好给一个默认值

---

tag 组件
useParams
useHistroy
useCallback
useMemo
