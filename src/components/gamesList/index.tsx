import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useStore';
import { fetchGamesList, getGames } from '../../store/slices/games';
import * as Styled from './styled';

const GamesList = () => {
  const dispatch = useAppDispatch();
  const games = useAppSelector(getGames);
  const gameStatus = useAppSelector((state) => state.games.status);

  useEffect(() => {
    if (gameStatus === 'idle') {
      dispatch(fetchGamesList());
    }
  }, [gameStatus, dispatch]);

  return (
    <Styled.Wrapper>
      {games.map((game) => (
        <Styled.ItemWrapper key={game.id}>
          <Styled.ItemBackground backgroundImg={game?.thumb?.url}>
            <Styled.ItemBackdrop />
            <Styled.InternalWrapper>
              <Styled.ItemTitle>{game.title}</Styled.ItemTitle>

              <Styled.ItemSubTitle>Provider</Styled.ItemSubTitle>
              <Styled.ItemTitle>{game.providerName}</Styled.ItemTitle>
            </Styled.InternalWrapper>
          </Styled.ItemBackground>
        </Styled.ItemWrapper>
      ))}
    </Styled.Wrapper>
  );
};

export default GamesList;
