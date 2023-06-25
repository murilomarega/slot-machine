import { css, styled } from 'styled-components';

const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100vw;
    height: 100vh;

    padding-top: ${theme.spacing.s10};
    overflow-x: hidden;
  `}
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: auto;
`;

export { Container, Wrapper };
