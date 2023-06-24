import React, { FC, useEffect } from 'react';
import { ISearchGame } from './interfaces';
import * as Styled from './styled';
import { searchGamebyName } from '../../services/games';

const SearchGame: FC<ISearchGame> = ({ searchGameValue, setGamesList, setSearchGameValue }) => {
  const getSearchGame = async () => {
    const res = await searchGamebyName(searchGameValue);
    setGamesList(res);
  };

  useEffect(() => {
    if (searchGameValue.length) {
      getSearchGame();
      return;
    }

    setGamesList([]);
  }, [searchGameValue]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Styled.Wrapper>
      <Styled.Input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchGameValue(e.target.value)}
        placeholder="Search game"
        value={searchGameValue}
        isFieldActive={!!searchGameValue.length}
      />
      <Styled.SearchIcon />
    </Styled.Wrapper>
  );
};

export default SearchGame;
