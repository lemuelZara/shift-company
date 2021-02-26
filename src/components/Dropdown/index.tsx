import React from 'react';

import { FiX } from 'react-icons/fi';
import { menuData } from '../../data/menuData';

import { DropdownContainer, Icon, DropdownLink } from './styles';

interface DropdownProps {
  setIsOpen: () => void;
  isOpen: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ setIsOpen, isOpen }) => {
  return (
    <DropdownContainer isOpen={isOpen}>
      <Icon onClick={setIsOpen}>
        <FiX size={25} />
      </Icon>
      <div>
        <ul>
          {menuData.map((item) => (
            <DropdownLink key={`menu-${item.id}`}>{item.title}</DropdownLink>
          ))}
        </ul>
      </div>
    </DropdownContainer>
  );
};

export default Dropdown;
