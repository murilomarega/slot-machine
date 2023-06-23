import { css } from 'styled-components';
import { styled } from 'styled-components';

const List = styled.ul`
  ${({ theme }) => css`
    list-style: none;

    :first-child {
      margin-top: ${theme.spacing.s4};
    }
  `}
`;

const ListItem = styled.li`
  ${({ theme }) => css`
    color: ${theme.color.white};
    font-size: ${theme.font.size.s3};
    max-width: 250px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `}
`;

export { List, ListItem };
