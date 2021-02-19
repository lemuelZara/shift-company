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
  background: ${({ theme }) => theme.colors.primaryDark};
  padding: ${({ theme }) => theme.spacing.extraLarge};
  border-radius: ${({ theme }) => theme.radii.large};

  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin: auto 4rem;
  }
`;

export const HeaderContent = styled.div`
  @media screen and (max-width: 768px) {
    text-align: center;
    margin-bottom: 4rem;
  }
`;

export const Buttons = styled.div`
  display: flex;

  > button {
    padding: 2rem 4rem;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;

    &:first-child {
      background: ${({ theme }) => theme.colors.background};
      border-radius: 2rem 0 0 2rem;
      text-transform: uppercase;
      font-size: 1.2rem;
    }

    &:last-child {
      background: ${({ theme }) => theme.colors.primary};
      border-radius: 0 2rem 2rem 0;
      color: ${({ theme }) => theme.colors.background};
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;

    button {
      margin-bottom: 2rem;
      border-radius: ${({ theme }) => theme.radii.large} !important;
    }
  }
`;
