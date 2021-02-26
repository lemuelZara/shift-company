import React from 'react';

import { FiUser, FiPhoneCall, FiHeadphones } from 'react-icons/fi';
import { FaBars } from 'react-icons/fa';

import {
  AnimatedNav,
  Logo,
  MenuBars,
  RightNavMenu,
  NavMenu,
  NavMenuLinks,
  NavButtons,
} from './styles';
import { NAV_ANIMATION } from './animations';
import ShiftLogoWhite from '../../../assets/images/shift_white.png';
import { menuData } from '../../../data/menuData';

interface NavbarProps {
  setIsOpen: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ setIsOpen }) => {
  return (
    <AnimatedNav variants={NAV_ANIMATION} initial="unMounted" animate="mounted">
      <Logo to="/">
        <img src={ShiftLogoWhite} srcSet={ShiftLogoWhite} alt="Logo" />
      </Logo>

      <MenuBars onClick={setIsOpen}>
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
    </AnimatedNav>
  );
};

export default Navbar;
