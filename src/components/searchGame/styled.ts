import { BiSearchAlt2 } from 'react-icons/bi';
import { css, styled } from 'styled-components';

const inputActiveWidth = '250px';

const SearchIcon = styled(BiSearchAlt2)`
  ${({ theme }) => css`
    color: ${theme.color.gray};
    position: relative;
    right: ${theme.spacing.s1};
    font-size: ${theme.font.size.s5};
    position: absolute;

    transition: color 0.5s;
  `}
`;

const Input = styled.input<{ isFieldActive: boolean }>`
  ${({ theme }) => css`
    color: ${theme.color.white};
    background: ${theme.color.darkGray};
    padding: 0 ${theme.spacing.s2};
    border-radius: 4px;
    height: 30px;
    width: 30px;
    border: none;
    transition: width 0.2s, box-shadow 0.2s;
    font-size: ${theme.font.size.s2};

    &::placeholder {
      opacity: 0;
      transition: opacity 0.2s;
      color: ${theme.color.gray};
    }
  `}

  ${({ isFieldActive, theme }) =>
    isFieldActive &&
    css`
      width: ${inputActiveWidth};
      box-shadow: ${theme.shadow.input};
    `}
`;

const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &:hover {
      ${Input} {
        width: ${inputActiveWidth};
        box-shadow: ${theme.shadow.input};

        &::placeholder {
          opacity: 1;
        }
      }
    }
  `}
`;

export { Input, SearchIcon, Wrapper };
