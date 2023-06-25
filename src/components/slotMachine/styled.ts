import { css, styled } from 'styled-components';

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

  background: linear-gradient(#3535e821, #ffffff21, #3535e821);

  // background: linear-gradient(
  //   to bottom,
  //   #3535e870 0%,
  //   rgba(53, 53, 232, 0) 15%,
  //   rgba(53, 53, 232, 0) 85%,
  //   #3535e870 100%
  // );

  // background: linear-gradient(
  //   to bottom,
  //   #00000070 0%,
  //   rgba(53, 53, 232, 0) 15%,
  //   rgba(53, 53, 232, 0) 85%,
  //   #00000070 100%
  // );

  // background: linear-gradient(
  //   to bottom,
  //   #00000070 0%,
  //   #ffffff02 20%,
  //   #ffffff02 80%,
  //   #00000070 100%
  // );
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

const Slots = styled.ul<{ itemSorted: number; reelAnimationTime: number }>`
  ${({ itemSorted, reelAnimationTime }) => css`
    list-style: none;
    height: 125px;
    width: 100%;
    transform: rotateX(-${itemSorted}deg);
    transition: all ${reelAnimationTime}s;
    transform-style: preserve-3d;
    float: left;
  `}
`;

const FruitImg = styled.img<{ rotateX: number }>`
  ${({ rotateX }) => css`
    height: 100%;
    width: 100%;
    transform: rotateX(${rotateX}deg) translateZ(150px);
    backface-visibility: hidden;
    object-fit: contain;
    position: absolute;
  `}
`;

const HistoryWrapper = styled.div`
  height: 300px;
`;

export {
  FruitImg,
  Glass,
  Separator,
  SeparatorsWrapper,
  Slots,
  SlotsWrapper,
  Wrapper,
  HistoryWrapper,
};
