import React, { useState, memo } from 'react';

interface IDiscover {}

const Discover: React.FC<IDiscover> = () => {
  const [data, setData] = useState(0);

  return <div>456</div>;
};

export default memo(Discover);
