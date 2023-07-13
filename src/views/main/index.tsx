/** 主页面 */
import React, { memo } from 'react';

import WJRouter from '@/router/index';

import WJAppHeader from '@/components/app-header';
import WJAppFooter from '@/components/app-footer';

const WJMain = () => {
  return (
    <>
      <WJAppHeader />
      <WJRouter />
      <WJAppFooter />
    </>
  );
};

export default memo(WJMain);
