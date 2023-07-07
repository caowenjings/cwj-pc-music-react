import React, { Suspense, memo } from 'react';
import { renderRoutes } from 'react-router-config';

import routes from '@/router';

import WJAppHeader from '@/components/app-header';
import WJAppFooter from '@/components/app-footer';

const App = () => {
  return (
    <>
      <WJAppHeader />
      <Suspense fallback={<div>loading</div>}>{renderRoutes(routes)}</Suspense>
      <WJAppFooter />
    </>
  );
};

export default memo(App);
