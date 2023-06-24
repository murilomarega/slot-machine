import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks/useStore';
import { setSearchedTerm } from '../../store/slices/games';
import * as Styled from './styled';

const SearchGame = () => {
  const [searchGameValue, setSearchGameValue] = useState<string>('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setSearchedTerm(searchGameValue));
  }, [searchGameValue, dispatch]);

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
