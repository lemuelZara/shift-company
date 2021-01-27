import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';

export const Container = styled.section`
  height: 85vh;
  position: relative;
  overflow: hidden;
`;

export const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

export const HeroSlide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;

export const HeroSlider = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0;
    left: 0;
    overflow: hidden;
    opacity: 0.8;
    background: ${({ theme }) => theme.colors.primaryDark};
  }
`;

export const Image = styled(motion.img)`
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
  object-fit: cover;
  filter: brightness(80%);
`;

export const HeroImage = styled(motion.div)``;

export const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 112rem;
  margin-top: 6rem;
  text-align: center;

  > h1 {
    font-size: 3.2rem;
    text-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.4);
  }

  > p {
    margin-bottom: 1.2rem;
  }

  > div > button {
    margin: 2rem auto;
    white-space: nowrap;
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.label};
    border-radius: ${({ theme }) => theme.radii.default};
    padding: 1rem 2rem;
    transition: ${({ theme }) => theme.transition.default};
    font-size: ${({ theme }) => theme.fontSizes.default};
  }

  @media screen and (max-width: 768px) {
    margin: 0 2.4rem;
  }
`;

export const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 1.2rem;
`;

export const SliderButtons = styled.div`
  position: absolute;
  bottom: 2rem;

  display: flex;
  gap: 1.2rem;
  z-index: 10;
`;

const arrowButtons = css`
  width: 4rem;
  height: 4rem;
  padding: 1rem;
  border-radius: ${({ theme }) => theme.radii.default};
  cursor: pointer;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.label};
  user-select: none;
  transition: ${({ theme }) => theme.transition.default};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
  }
`;

export const PrevArrow = styled(IoArrowBack)`
  ${arrowButtons}
`;

export const NextArrow = styled(IoArrowForward)`
  ${arrowButtons}
`;
