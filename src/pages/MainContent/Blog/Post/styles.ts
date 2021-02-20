import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AnimatedContainer = styled(motion.div)`
  background: ${({ theme }) => theme.colors.primaryDark};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16rem;

  @media screen and (max-width: 768px) {
    margin-top: 10rem;
  }
`;

export const ContentPost = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  max-width: 104rem;
  margin: 4rem auto;
  text-align: center;

  span {
    display: inline-block;
  }

  @media screen and (max-width: 768px) {
    padding: 0 4rem;
  }
`;

export const Title = styled(motion.h2)``;

export const Letter = styled(motion.span)``;

export const Info = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 1.2rem;

  > span {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: ${({ theme }) => theme.spacing.small};
    background: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontSizes.small};
    border-radius: ${({ theme }) => theme.radii.default};
    color: ${({ theme }) => theme.colors.label};
    width: 18rem;

    > svg {
      margin-right: 0.8rem;
    }
  }
`;

export const AnimatedTitle = styled(motion.div)`
  display: flex;
`;

export const AnimatedSpanLetter = styled(motion.span)`
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSizes.extraLarge};
  font-weight: bold;
`;

export const AnimatedImage = styled(motion.div)`
  position: relative;
  height: 40rem;
  margin: 0 auto;
  overflow: hidden;

  > img {
    position: absolute;
    width: 100%;
    height: auto;
  }

  @media screen and (max-width: 768px) {
    height: 30rem;
  }
`;

export const Description = styled.div`
  background: ${({ theme }) => theme.colors.background};
  width: 100%;
  padding-bottom: 8rem;

  > div {
    margin: 4rem auto;
    max-width: 104rem;
    > p {
      margin-bottom: 2rem;
      text-align: justify;
      color: ${({ theme }) => theme.colors.darkGray};
    }
  }

  @media screen and (max-width: 768px) {
    padding: 0 4rem;
  }
`;
