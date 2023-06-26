import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: ${theme.spacing.s5} ${theme.spacing.s4};
    grid-gap: ${theme.spacing.s2};
    color: white;
  `}
`;

const ItemTitle = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.size.s5};
    line-height: ${theme.font.size.s5};
    font-weight: ${theme.font.weight.bold};
  `}
`;

const ItemSubTitle = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.size.s3};
    font-weight: ${theme.font.weight.medium};
    margin-top: ${theme.spacing.s5};
  `}
`;

const InternalWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    text-align: center;
    color: ${theme.color.white};
    display: flex;
    flex-direction: column;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.2s;
    z-index: 12;
    position: absolute;
  `}
`;

const ItemBackdrop = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 11;
    background: ${theme.color.black};

    transition: opacity 0.2s;
  `}
`;

const ItemWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 200px;
    height: 200px;
    border-radius: 4px;
    position: relative;
    cursor: default;

    transition: transform 0.2s;

    &:hover {
      transform: scale(1.02);
      box-shadow: ${theme.shadow.input};

      ${InternalWrapper} {
        opacity: 1;
      }

      ${ItemBackdrop} {
        opacity: 0.7;
      }
    }
  `}
`;

const ItemBackground = styled.div<{ backgroundImg: string }>`
  ${({ backgroundImg }) => css`
    height: 100%;
    width: 100%;
    background: url(https:${backgroundImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    z-index: 10;

    ${!backgroundImg?.length &&
    `
    background: gray;
      ${InternalWrapper} {
        opacity: 1;
      }
    `}
  `}
`;

const EmptyBackground = styled.div`
  height: 100%;
  width: 100%;
  background: gray;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export {
  EmptyBackground,
  InternalWrapper,
  ItemBackdrop,
  ItemBackground,
  ItemSubTitle,
  ItemTitle,
  ItemWrapper,
  Wrapper,
};
