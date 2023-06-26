import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100vw;
    height: 100vh;
    padding-top: ${theme.spacing.s10};
  `}
`;

const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    max-width: 1200px;
    margin: auto;
    margin-top: ${theme.spacing.s7};
  `}
`;

export { Container, Wrapper };
