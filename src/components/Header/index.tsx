import React from 'react';

import Navbar from './Navbar';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Navbar />
    </Container>
  );
};

export default Header;
