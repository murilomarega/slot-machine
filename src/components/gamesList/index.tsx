import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useStore';
import { IGame } from '../../store/interfaces';
import {
  fetchGamesList,
  getFilteredGames,
  getGames,
  getSearchedTerm,
} from '../../store/slices/games';
import * as Styled from './styled';

const GamesList = () => {
  const dispatch = useAppDispatch();
  const gamesFiltered = useAppSelector(getFilteredGames);
  const games = useAppSelector(getGames);
  const searchTerm = useAppSelector(getSearchedTerm);
  const gameStatus = useAppSelector((state) => state.games.status);

  const [gamesList, setGamesList] = useState<IGame[]>([]);

  useEffect(() => {
    if (searchTerm?.length) {
      setGamesList(gamesFiltered);
      return;
    }

    setGamesList(games);
  }, [games, searchTerm, gamesFiltered]);

  useEffect(() => {
    if (gameStatus === 'idle') {
      dispatch(fetchGamesList());
    }
  }, [gameStatus, dispatch]);

  return (
    <Styled.Wrapper>
      {gamesList?.length ? (
        gamesList.map((game) => (
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
        ))
      ) : (
        <>
          <span>No games found</span>
          {searchTerm && <span>with the seacrhed term "{searchTerm}"</span>}
        </>
      )}
    </Styled.Wrapper>
  );
};

export default GamesList;
