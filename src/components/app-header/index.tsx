/** app 的头部 */
import React, { useState, memo } from 'react';
import { NavLink } from 'react-router-dom';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import { headerLinks } from '@/content/local-data';
import { ILinkItem } from '@/content/local-data-type';

import { AppHeaderWrapper, HeaderRight, HeaderLeft } from './style';
import './index.css';

interface IApp {}

const App: React.FC<IApp> = () => {
  const [data, setData] = useState(0);

  return (
    <AppHeaderWrapper>
      <div className="wrap-v1 content">
        <a className="header-logo sprite_01" href="#/">
          网易云音乐
        </a>
        <HeaderLeft className="header-list">
          {headerLinks.map((item: ILinkItem) => {
            return (
              <div className="serach-list-item">
                <NavLink to={item.link} key={item.title}>
                  <span className="serach-list-title">{item.title}</span>
                  <i className="sprite_01 icon" />
                </NavLink>
              </div>
            );
          })}
        </HeaderLeft>
        <HeaderRight>
          <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} />
          <div className="center">创作者中心</div>
          <div className="">登录</div>
        </HeaderRight>
      </div>
    </AppHeaderWrapper>
  );
};
export default memo(App);
