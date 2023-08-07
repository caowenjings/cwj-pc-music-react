import { memo } from 'react';
import { BrowserRouter } from 'react-router-dom';

import WJMain from '@/views/main';

const defaultProps = {
  name: 'Stranger',
  age: 1
};

type IProps = Partial<typeof defaultProps>;

function App() {
  return (
    <BrowserRouter>
      <WJMain />
    </BrowserRouter>
  );
}

export default memo(App);
