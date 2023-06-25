import { Link } from 'react-router-dom';
import { css, styled } from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 20;
  background: rgba(0, 0, 0, 0.85);
`;

const Container = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacing.s2} ${theme.spacing.s4};
    width: 100%;
    max-width: ${theme.breakpoint.xlg.minWidth};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
  `}
`;

const Title = styled(Link)`
  ${({ theme }) => css`
    color: ${theme.color.gold};
    font-family: ${theme.font.family.monoton};
    font-size: ${theme.font.size.s7};
    text-shadow: ${theme.shadow.textTitle};
    text-decoration: none;
  `}
`;

export { Container, Title, Wrapper };
