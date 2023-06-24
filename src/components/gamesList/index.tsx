import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useStore';
import { IGame } from '../../store/interfaces';
import { fetchGamesList, getGames, getSearchedTerm } from '../../store/slices/games';
import * as Styled from './styled';

const GamesList = () => {
  const dispatch = useAppDispatch();
  const games = useAppSelector(getGames);
  const searchedTerm = useAppSelector(getSearchedTerm);
  const gameStatus = useAppSelector((state) => state.games.status);

  const [filteredList, setFilteredList] = useState<IGame[]>([]);

  useEffect(() => {
    if (searchedTerm !== '') {
      const filtered = games.filter((game) => game.title.includes(searchedTerm));

      setFilteredList(filtered);
      return;
    }
    setFilteredList([]);
  }, [searchedTerm, games]);

  useEffect(() => {
    if (gameStatus === 'idle') {
      dispatch(fetchGamesList());
    }
  }, [gameStatus, dispatch]);

  return (
    <>
      {searchedTerm && (
        <Styled.List>
          {filteredList.map((game) => (
            <Styled.ListItem key={game.id}>{game.title}</Styled.ListItem>
          ))}
        </Styled.List>
      )}
    </>
  );
};

export default GamesList;
