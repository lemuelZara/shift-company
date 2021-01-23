import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  height: 6rem;
  width: auto;

  display: flex;
  align-items: center;
  margin: ${({ theme }) => theme.spacing.large};

  @media screen and (max-width: 768px) {
    height: 4rem;
    display: flex;
    justify-content: space-between;
  }
`;

export const Logo = styled(Link)`
  > img {
    width: 12.5rem;
  }
`;

export const MenuBars = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const RightNavMenu = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;

  margin-left: 1rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
`;

export const NavMenuLinks = styled(Link)`
  color: ${({ theme }) => theme.colors.label};

  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.horizontal};
  height: 100%;
`;

export const NavButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  > button {
    white-space: nowrap;
    background: none;
    border: 0.2rem solid ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.label};
    border-radius: 0.8rem 0.8rem 0 0.8rem;
    padding: 1rem 2rem;
    transition: ${({ theme }) => theme.transition.default};
    font-size: ${({ theme }) => theme.fontSizes.default};

    &:hover {
      background: ${({ theme }) => theme.colors.secondary};
    }

    > svg {
      margin-right: 1rem;
    }
  }
`;