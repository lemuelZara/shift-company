import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Overlay = styled(motion.div)`
  z-index: 1;
  position: fixed;
  background: rgba(0, 0, 0, 0.6);
  will-change: opacity;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
`;

export const Card = styled(motion.div)`
  position: relative;
  width: 42rem;
  padding: ${({ theme }) => theme.spacing.large};
  background: ${({ theme }) => theme.colors.primaryDark};
  border-radius: ${({ theme }) => theme.radii.large};
  overflow: hidden;
  pointer-events: all;

  @media screen and (max-width: 768px) {
    width: 28rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > svg {
    margin-bottom: 2rem;
  }

  > button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 0.8rem;
    background: ${({ theme }) => theme.colors.secondary};
    border-radius: ${({ theme }) => theme.radii.large};
  }
`;

export const TitleContainer = styled(motion.div)`
  display: inline-block;
  text-align: center;
  z-index: 1;

  > h2 {
    font-size: ${({ theme }) => theme.fontSizes.default};
  }
`;

export const Container = styled.div`
  position: absolute;
  display: flex;
  place-items: center;
  place-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`;

export const Backdrop = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;
