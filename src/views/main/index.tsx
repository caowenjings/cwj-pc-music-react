import React, { memo } from 'react';
import { HashRouter } from 'react-router-dom';

import { Router } from '../../router/index';

import WJAppHeader from '../../components/app-header';
import WJAppFooter from '../../components/app-footer';

export default memo(function HYMain() {
  return (
    <HashRouter>
      <WJAppHeader />
      <div>
        <Router />
      </div>
      <WJAppFooter />
    </HashRouter>
  );
});
