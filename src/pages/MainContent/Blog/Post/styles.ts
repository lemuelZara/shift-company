import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  background: ${({ theme }) => theme.colors.primaryDark};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20rem;
`;

export const TitlePost = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  max-width: 114rem;
  margin: 4rem auto;
  text-align: center;

  div.publication {
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
  }

  @media screen and (max-width: 768px) {
    padding: 0 4rem;
  }
`;

export const ImagePost = styled.div`
  height: 40rem;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const DescriptionPost = styled.div`
  width: 100%;
  max-width: 114rem;

  margin: 4rem auto;

  > p {
    margin-bottom: 2rem;
    text-align: justify;
  }

  @media screen and (max-width: 768px) {
    padding: 0 4rem;
  }
`;
