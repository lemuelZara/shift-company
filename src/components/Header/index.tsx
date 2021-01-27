import React, { memo } from 'react';

import Navbar from './Navbar';

import { AnimatedContainer } from './styles';

const Header: React.FC = () => {
  return (
    <AnimatedContainer>
      <Navbar />
    </AnimatedContainer>
  );
};

export default memo(Header);
