import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

import routes from './router';

/**
 *
 * @param useRoutes:同Routers组件一样，只不过是在js中使用
 * @returns const routes = useRoutes([
    { path:'/',
      element: <div>...</div>
    }
  ]);
 */

// 路由处理方式
const generateRouter = (routers: any) => {
  return routers.map((item: any) => {
    if (item.children) {
      item.children = generateRouter(item.children);
    }
    item.element = (
      <Suspense fallback={<div>加载中...</div>}>
        {/* 把懒加载的异步路由变成组件装载进去 */}
        <item.component />
      </Suspense>
    );
    return item;
  });
};

const Router = () => {
  return useRoutes(generateRouter(routes));
};

export default Router;
