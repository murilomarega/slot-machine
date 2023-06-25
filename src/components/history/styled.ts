import { css, styled } from 'styled-components';

import { BsCoin } from 'react-icons/bs';

const Wrapper = styled.div`
  ${({ theme }) => css`
    color: white;
    display: flex;
    gap: ${theme.spacing.s1};
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    max-height: 100%;
    overflow-y: scroll;
  `}
`;

const HistoryItem = styled.div<{ isWin: boolean }>`
  ${({ isWin, theme }) => css`
    display: flex;
    gap: 4px;
    align-items: center;
    width: min-content;
    padding: 0 ${theme.spacing.s2};
    border: 1px solid ${isWin ? theme.color.white : 'transparent'};
  `}
`;

const FruitImage = styled.img`
  height: 60px;
  width: 60px;
  object-fit: contain;
`;

const CoinsWrapper = styled.div`
  ${({ theme }) => css`
    color: white;
    display: flex;
    align-items: center;
    margin-left: ${theme.spacing.s1};
    width: 85px;
    justify-content: flex-end;
    gap: ${theme.spacing.s1};
  `}
`;

const Coins = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.size.s8};
    &::before {
      content: 'x';
      font-size: ${theme.font.size.s5};
    }
  `}
`;

const IconCoin = styled(BsCoin)`
  ${({ theme }) => css`
    color: ${theme.color.gold};
    font-size: ${theme.font.size.s8};
  `}
`;

export { Wrapper, HistoryItem, FruitImage, IconCoin, CoinsWrapper, Coins };
