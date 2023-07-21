import styled from 'styled-components';

export const AppHeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;
  font-size: 14px;

  .content {
    display: flex;
    justify-content: space-between;
    border: 1px solid red;
  }

  .header-logo {
    display: block;
    width: 176px;
    height: 70px;
    background-position: 0 0;
    text-indent: -9999px;
  }

  .divider {
    height: 5px;
    background-color: #c20c0c;
  }
`;

export const HeaderLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  .serach-list-item {
    padding: 0 20px;
    box-sizing: border-box;

    :last-of-type a {
      position: relative;
      ::after {
        position: absolute;
        content: '';
        width: 28px;
        height: 19px;
        background-image: url('@/assets/img/sprite_01.png');
        background-position: -190px 0;
        top: 20px;
        right: -15px;
      }
    }

    &:hover a,
    .active {
      color: #fff;
      background: #000;
      text-decoration: none;
    }

    .active .icon {
      position: absolute;
      display: inline-block;
      width: 12px;
      height: 7px;
      bottom: -1px;
      left: 50%;
      transform: translate(-50%, 0);
      background-position: -226px 0;
    }
  }

  .serach-list-title {
    color: #ccc;
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  color: #ccc;

  .search {
    width: 160px;
    height: 32px;
    border-radius: 16px;
    background-color: #fff;
    padding: 0 20px;
    input {
      height: 30px;
      background: transparent;
      border: none;
      &::placeholder {
        font-size: 12px;
      }
    }
  }

  .center {
    width: 90px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border: 1px solid #666;
    border-radius: 16px;
    margin: 0 16px;
  }
`;
