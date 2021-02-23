import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.section`
  width: 100%;
  position: relative;

  display: flex;
  justify-content: center;
  margin-top: 16rem;

  background: ${({ theme }) => theme.colors.primaryDark};
`;

export const Content = styled(motion.div)`
  width: 100%;
  max-width: 104rem;
  padding: ${({ theme }) => theme.spacing.extraLargeVertical};
  margin: auto 4rem;

  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    text-align: center;
    margin: auto 4rem;
  }
`;

export const HeaderContent = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: ${({ theme }) => theme.spacing.largeVertical};

  > h2 {
    font-size: ${({ theme }) => theme.fontSizes.extraLarge};
  }
`;

export const ContentOption = styled(motion.div)`
  margin: 2.4rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: minmax(14rem, 1fr) minmax(14rem, 1fr);
  }
`;
