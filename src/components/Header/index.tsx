import React, { memo, useState } from 'react';

import { AnimatedContainer } from './styles';

import Dropdown from '../Dropdown';
import Navbar from './Navbar';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <AnimatedContainer>
      <Navbar setIsOpen={toggleMenu} />
      <Dropdown setIsOpen={toggleMenu} isOpen={isOpen} />
    </AnimatedContainer>
  );
};

export default memo(Header);
