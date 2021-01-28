import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;

  border-radius: ${({ theme }) => theme.radii.large};
  background: ${({ theme }) => theme.colors.background};
  box-shadow: ${({ theme }) => theme.shadows.default};
  padding: ${({ theme }) => theme.spacing.extraLarge};

  > svg {
    color: ${({ theme }) => theme.colors.primary};
  }

  > h3 {
    color: ${({ theme }) => theme.colors.primary};
    margin: ${({ theme }) => theme.spacing.vertical};
  }

  > p {
    color: ${({ theme }) => theme.colors.lightGray};
    flex: 1;
  }

  > button {
    display: flex;
    gap: 1.2rem;
    padding: ${({ theme }) => theme.spacing.small};
    background: none;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.radii.large};
    margin-top: 2rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  @media screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;
