import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 10rem auto;

  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 104rem;

  display: flex;
  gap: 4rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin: auto 4rem;
  }
`;

export const HeaderContent = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2rem;

  text-align: right;
  background-image: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.primaryDark} 10%,
    ${({ theme }) => theme.colors.primary} 50%
  );
  padding: ${({ theme }) => theme.spacing.extraLarge};
  border-radius: ${({ theme }) => theme.radii.large};
  color: ${({ theme }) => theme.colors.label};

  > h2 {
    font-size: ${({ theme }) => theme.fontSizes.extraLarge};
  }

  > svg {
    color: ${({ theme }) => theme.colors.secondary};
    margin-top: 2rem;
  }

  @media screen and (max-width: 768px) {
    text-align: center;
    align-items: center;

    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.primaryDark},
      ${({ theme }) => theme.colors.primary}
    );
  }
`;

export const SectionContent = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
