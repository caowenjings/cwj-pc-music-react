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
