import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
${({ theme }) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${theme.font.family.poppings};
    font-weight: ${theme.font.weight.regular};
    font-size: ${theme.font.size.base};
  }

  body {
    height: 100vh;
    width: 100vw;
    background-color: ${theme.color.black};
    overflow-x: hidden;
  }
`}
`;
