import { BiSearchAlt2 } from 'react-icons/bi';
import { css, styled } from 'styled-components';

const SearchIcon = styled(BiSearchAlt2)`
  ${({ theme }) => css`
    color: ${theme.color.gray};
    position: relative;
    right: ${theme.spacing.s1};
    font-size: ${theme.font.size.s5};
    position: absolute;
  `}
`;

const Input = styled.input<{ isFieldActive: boolean }>`
  ${({ theme }) => css`
    color: ${theme.color.white};
    background: ${theme.color.darkGray};
    padding: 0 ${theme.spacing.s2};
    border-radius: 4px;
    height: 30px;
    width: 100%;
    border: none;
    transition: width 0.2s, box-shadow 0.2s;
    font-size: ${theme.font.size.s2};

    &::placeholder {
      color: ${theme.color.gray};
    }
  `}
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: auto;
`;

export { Input, SearchIcon, Wrapper };
