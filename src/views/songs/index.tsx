import React, { useState, memo } from 'react';

interface IMy {}

const My: React.FC<IMy> = () => {
  const [data, setData] = useState(0);

  return <div></div>;
};

export default memo(My);
