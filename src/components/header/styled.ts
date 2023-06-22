import { css, styled } from 'styled-components';

const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.breakpoint.xlg.minWidth};
    padding-top: ${theme.spacing.s2};
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

const Title = styled.span`
  ${({ theme }) => css`
    color: ${theme.color.gold};
    font-family: ${theme.font.family.monoton};
    font-size: ${theme.font.size.s7};
    text-shadow: ${theme.text.shadow};
  `}
`;

export { Title, Wrapper };
