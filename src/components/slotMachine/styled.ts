import { BsCoin } from 'react-icons/bs';
import styled, { css, keyframes } from 'styled-components';

const reelAnimation = (initialDeg: number, finalDeg: number) => keyframes`
  0% {
    transform: rotateX(-${initialDeg}deg);
  }

  5% {
    transform: rotateX(3000deg);
  }

  100% {
    transform: rotateX(-${finalDeg}deg);
  }
`;

const Wrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacing.s10};
    width: 100%;
    max-width: 600px;
    height: 200px;
    margin-left: auto;
    margin-right: auto;
    transform-style: preserve-3d;
    perspective: 1000px;
    background: ${theme.color.white};
    overflow: hidden;
  `}
`;

const Glass = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;

  background: linear-gradient(#3535e830, #ffffff21, #3535e840);
`;

const SeparatorsWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: space-evenly;
`;

const Separator = styled.div`
  ${({ theme }) => css`
    width: 2px;
    height: 100%;
    background: ${theme.color.gray};
  `}
`;

const SlotsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  transform-style: preserve-3d;
  scale: 0.85;
`;

const Slots = styled.ul<{
  $currentSortedItem: number;
  $newSortedItem: number;
  $reelAnimationTime: number;
  $isPlayOngoing: boolean;
}>`
  ${({ $newSortedItem }) => css`
    list-style: none;
    height: 125px;
    width: 100%;
    transform: rotateX(-${$newSortedItem}deg);
    transform-style: preserve-3d;
  `}

  ${({ $currentSortedItem, $newSortedItem, $reelAnimationTime, $isPlayOngoing }) =>
    $isPlayOngoing &&
    css`
      animation: ${reelAnimation($currentSortedItem, $newSortedItem)} ${$reelAnimationTime}ms
        cubic-bezier(0.01, 0.56, 0.36, 1);
    `}
`;

const FruitImg = styled.img<{ $rotateX: number }>`
  ${({ $rotateX }) => css`
    height: 100%;
    width: 100%;
    transform: rotateX(${$rotateX}deg) translateZ(150px);
    backface-visibility: hidden;
    object-fit: contain;
    position: absolute;
  `}
`;

const HistoryWrapper = styled.div`
  height: 300px;
`;

const SortButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
`;

const SortButton = styled.button`
  ${({ theme }) => css`
    padding: 25px 35px;
    text-transform: uppercase;
    font-size: ${theme.font.size.s10};
    background: ${theme.color.red};
    color: ${theme.color.white};
    display: flex;
    border-radius: 20px;
    margin-bottom: ${theme.spacing.s4};

    box-shadow: inset -4px -4px 10px 2px rgba(0, 0, 0, 0.5);

    transition: box-shadow 0.15s;
    border: none;

    span {
      font-size: ${theme.font.size.s10};
      line-height: ${theme.font.size.s10};
    }

    &:disabled {
      box-shadow: inset 3px 3px 10px 8px rgba(0, 0, 0, 0.5);
    }
  `}
`;

const BalanceWrapper = styled.div`
  margin: auto;
  width: 100%;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Ammount = styled.span`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    color: ${theme.color.white};
    font-size: ${theme.font.size.s7};
    align-items: baseline;
  `}
`;

const Quantity = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.size.s5};
    vertical-align: bottom;
    margin-left: ${theme.spacing.s1};
  `}
`;

const IconCoin = styled(BsCoin)`
  ${({ theme }) => css`
    color: ${theme.color.gold};
    font-size: ${theme.font.size.s7};
    margin-left: ${theme.spacing.s1};
    align-self: center;
  `}
`;

export {
  Ammount,
  BalanceWrapper,
  FruitImg,
  Glass,
  HistoryWrapper,
  IconCoin,
  Quantity,
  Separator,
  SeparatorsWrapper,
  Slots,
  SlotsWrapper,
  SortButton,
  SortButtonWrapper,
  Wrapper,
};
