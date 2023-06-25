import { fruitImages } from '../../constants';
import { useAppSelector } from '../../hooks/useStore';
import { getHistoryOfPlays } from '../../store/slices/slotMachine';
import * as Styled from './styled';

const PlaysHistory = () => {
  const playsHistory = useAppSelector(getHistoryOfPlays);

  return (
    <Styled.Wrapper>
      {playsHistory.map((play) => (
        <Styled.HistoryItem $isWin={play.isWin} key={play.uuid}>
          {play.sortedFruits.map((fruit, index) => (
            <Styled.FruitImage src={fruitImages[fruit]} key={index} />
          ))}
          <Styled.CoinsWrapper>
            <Styled.Coins>{play.creditsEarned}</Styled.Coins>
            <Styled.IconCoin />
          </Styled.CoinsWrapper>
        </Styled.HistoryItem>
      ))}
    </Styled.Wrapper>
  );
};

export default PlaysHistory;
