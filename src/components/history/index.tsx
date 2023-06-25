import { useAppSelector } from '../../hooks/useStore';
import { getHistoryOfPlays } from '../../store/slices/slotMachine';
import * as Styled from './styled';
import { fruitImages } from '../../constants';

const PlaysHistory = () => {
  const playsHistory = useAppSelector(getHistoryOfPlays);

  return (
    <Styled.Wrapper>
      {playsHistory.map((play) => (
        <Styled.HistoryItem isWin={play.isWin} key={play.uuid}>
          {play.sortedFruits.map((fruit) => (
            <Styled.FruitImage src={fruitImages[fruit]} />
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
