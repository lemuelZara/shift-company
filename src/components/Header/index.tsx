import React, { memo, useState } from 'react';
import Dropdown from '../Dropdown';

import Navbar from './Navbar';

import { AnimatedContainer } from './styles';

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
