import React from 'react';

import { FiUser, FiPhoneCall, FiHeadphones } from 'react-icons/fi';
import { FaBars } from 'react-icons/fa';

import {
  Nav,
  Logo,
  MenuBars,
  RightNavMenu,
  NavMenu,
  NavMenuLinks,
  NavButtons,
} from './styles';

import ShiftLogoWhite from '../../../assets/images/shift_white.png';
import { menuData } from '../../../data/menuData';

const Navbar: React.FC = () => {
  return (
    <Nav>
      <Logo to="/">
        <img src={ShiftLogoWhite} srcSet={ShiftLogoWhite} alt="Logo" />
      </Logo>

      <MenuBars>
        <FaBars size={25} />
      </MenuBars>

      <RightNavMenu>
        <NavMenu>
          {menuData.map((item) => (
            <NavMenuLinks to={item.link} key={item.id}>
              {item.title}
            </NavMenuLinks>
          ))}
        </NavMenu>
        <NavButtons>
          <button type="button">
            <FiUser size={15} />
            Cliente
          </button>
          <button type="button">
            <FiHeadphones size={15} />
            Suporte
          </button>
          <button type="button">
            <FiPhoneCall size={15} />
            Fale com a Shift
          </button>
        </NavButtons>
      </RightNavMenu>
    </Nav>
  );
};

export default Navbar;
