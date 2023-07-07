/** app 的头部 */
import React, { useState, memo } from 'react'

import { AppHeaderWrapper } from './style'
interface IApp {}
const App: React.FC<IApp> = () => {
  const [data, setData] = useState(0)
  return (
    <AppHeaderWrapper>
      <div className="wrap-v1 content">
        <a className="header-logo sprite_01" href="#/">
          网易云音乐
        </a>
        <div className="header-list"></div>
        <div className="header-search"></div>
      </div>
    </AppHeaderWrapper>
  )
}
export default memo(App)
