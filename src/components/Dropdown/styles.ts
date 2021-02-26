import styled from 'styled-components';

interface DropdownContainerProps {
  isOpen: boolean;
}

export const DropdownContainer = styled.div<DropdownContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  opacity: ${(props) => (props.isOpen ? '1' : '0')};
  top: ${(props) => (props.isOpen ? '0' : '-100%')};
  transition: ${({ theme }) => theme.transition.default};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > div > ul {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    text-align: center;
  }
`;

export const Icon = styled.div`
  position: absolute;
  padding: 0.8rem 2.4rem;
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.radii.large};
  top: 2.4rem;
  cursor: pointer;

  > svg {
    color: ${({ theme }) => theme.colors.background};
  }
`;

export const DropdownLink = styled.li`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.extraLarge};
`;
