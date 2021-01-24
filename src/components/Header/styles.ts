import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AnimatedContainer = styled(motion.header)`
  width: 100%;
  background: ${({ theme }) => theme.colors.primaryDark};
  position: fixed;
  z-index: 100;
`;
