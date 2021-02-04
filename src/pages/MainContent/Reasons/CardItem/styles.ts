import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Card = styled(motion.div)`
  cursor: pointer;
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radii.default};
  padding: ${({ theme }) => theme.spacing.large};

  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: visible;
`;

export const TitleContainer = styled(motion.div)`
  display: inline-block;
  > h2 {
    color: ${({ theme }) => theme.colors.primaryDark};
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes.large};
  }
`;
