import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.article)`
  text-align: center;
`;

export const Content = styled.div`
  border-radius: ${({ theme }) => theme.radii.large};
  overflow: hidden;

  > a {
    display: flex;
  }

  @media screen and (max-width: 768px) {
    height: 20rem;
  }
`;

export const Image = styled(motion.img)`
  width: 100%;
  height: 100%;
`;

export const Title = styled(motion.h3)`
  margin-top: 1.2rem;
  font-size: ${({ theme }) => theme.fontSizes.large};
`;
