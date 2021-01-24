import React, { memo } from 'react';

import Navbar from './Navbar';

import { AnimatedContainer } from './styles';
import { CONTAINER_ANIMATION } from './animations';

const Header: React.FC = () => {
  return (
    <AnimatedContainer
      variants={CONTAINER_ANIMATION}
      initial="unMounted"
      animate="mounted"
    >
      <Navbar />
    </AnimatedContainer>
  );
};

export default memo(Header);
