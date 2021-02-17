import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  position: relative;

  display: flex;
  justify-content: center;
  margin-top: 16rem;

  background: ${({ theme }) => theme.colors.primaryDark};
`;

export const Content = styled.div`
  width: 100%;
  max-width: 104rem;
  padding: ${({ theme }) => theme.spacing.extraLargeVertical};

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

export const PostsList = styled.div`
  display: flex;
  gap: 4rem;

  margin: 2.4rem 0;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Article = styled(motion.div)``;
