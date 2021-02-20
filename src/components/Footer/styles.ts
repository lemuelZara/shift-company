import styled from 'styled-components';

export const Container = styled.footer`
  background: ${({ theme }) => theme.colors.primaryDark};
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSizes.default};
`;

export const Content = styled.div`
  width: 100%;
  max-width: 104rem;
  margin: 4rem auto;
  padding: 0 4rem;

  display: flex;
  justify-content: space-between;
  gap: 4rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > img {
    width: 10rem;
    margin-bottom: 4rem;
  }

  @media screen and (max-width: 768px) {
    align-items: center;
    margin-bottom: 4rem;
  }
`;

export const RightFooter = styled.div`
  display: flex;
  gap: 4rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto 4rem;
  }
`;

export const Column = styled.div`
  > h4 {
    margin-bottom: 2rem;
    font-size: ${({ theme }) => theme.fontSizes.large};
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.2rem;
  }

  @media screen and (max-width: 768px) {
    > h4 {
      text-align: center;
    }

    > div {
      display: flex;
      flex-direction: column;
      text-align: center;
      gap: 1rem;
    }
  }
`;
