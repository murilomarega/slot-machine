import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    width: 100vw;
    padding: ${theme.spacing.s10} ${theme.spacing.s4} ${theme.spacing.s6};
  `}
`;

export { Wrapper };
