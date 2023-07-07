import React, { useState, memo } from 'react'

import WJAppHeader from '@/components/app-header'
import WJAppFooter from '@/components/app-footer'

const App = () => {
  return (
    <div>
      <WJAppHeader />
      <div>CONTENT</div>
      <WJAppFooter />
    </div>
  )
}

export default memo(App)
