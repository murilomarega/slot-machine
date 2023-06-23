import { css, styled } from 'styled-components';

const Aside = styled.aside`
  ${({ theme }) => css`
    position: absolute;
    right: ${theme.spacing.s0};
    top: ${theme.spacing.s0};
    padding: ${theme.spacing.s4};
  `}
`;

export { Aside };
