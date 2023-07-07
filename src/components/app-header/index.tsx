/** app 的头部 */
import React, { useState, memo } from 'react';
import { NavLink } from 'react-router-dom';

import { headerLinks } from '../../content/local-data';
import { ILinkItem } from '../../content/local-data-type';

import { AppHeaderWrapper } from './style';

interface IApp {}

const App: React.FC<IApp> = () => {
  const [data, setData] = useState(0);

  return (
    <AppHeaderWrapper>
      <div className="wrap-v1 content">
        <a className="header-logo sprite_01" href="#/">
          网易云音乐
        </a>
        <div className="header-list">
          {headerLinks.map((item: ILinkItem) => {
            return (
              <NavLink to={item.link}>
                {item.title}
                <i className="sprite_01 icon" />
              </NavLink>
            );
          })}
        </div>
        <div className="header-search">sou</div>
      </div>
    </AppHeaderWrapper>
  );
};
export default memo(App);
