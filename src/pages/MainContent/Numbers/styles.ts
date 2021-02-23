import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

interface CardProps {
  gridArea?: string;
}

export const Container = styled.section`
  width: 100%;
  margin-top: 8rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 104rem;
  padding: ${({ theme }) => theme.spacing.largeVertical};
  margin: auto 4rem;

  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    margin: auto 4rem;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  margin: ${({ theme }) => theme.spacing.largeVertical};

  > h2 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontSizes.extraLarge};
  }

  > p {
    color: ${({ theme }) => theme.colors.darkGray};
  }
`;

export const GridOptions = styled.div`
  margin: ${({ theme }) => theme.spacing.largeVertical};

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 4rem 4rem;
  grid-template-rows: 1fr 20rem 1fr;
  grid-template-areas:
    'card card card'
    'card cardCenter card'
    'card card card';
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 850px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Card = styled(motion.div)<CardProps>`
  grid-area: 'card';

  padding: ${({ theme }) => theme.spacing.large};
  border-radius: ${({ theme }) => theme.radii.large};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;

  &:nth-child(1),
  &:nth-child(3),
  &:nth-child(7),
  &:nth-child(9) {
    background: ${({ theme }) => theme.colors.primaryDark};
    box-shadow: ${({ theme }) => theme.shadows.default};

    > span {
      color: ${({ theme }) => theme.colors.secondary};
    }

    > p {
      color: ${({ theme }) => theme.colors.label};
    }
  }

  > span {
    font-size: 2.8rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};
  }

  > p {
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes.default};
    color: ${({ theme }) => theme.colors.darkGray};
    margin-top: 2rem;
  }

  ${(props) =>
    props.gridArea === 'cardCenter' &&
    css`
      grid-area: 'cardCenter';
      background: none;
      box-shadow: none;

      > img {
        width: 24rem;
        margin: 0 auto;
      }
    `}
`;
