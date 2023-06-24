import { useState } from 'react';
import { IGame } from '../../services/games/intrefaces';
import GamesList from '../gamesList';
import SearchGame from '../searchGame';
import * as Styled from './styled';

const Sidebar = () => {
  const [gamesList, setGamesList] = useState<IGame[]>([]);
  const [searchGameValue, setSearchGameValue] = useState<string>('');

  return (
    <Styled.Aside>
      <SearchGame
        setGamesList={setGamesList}
        setSearchGameValue={setSearchGameValue}
        searchGameValue={searchGameValue}
      />
      {!!gamesList.length && searchGameValue.length && <GamesList games={gamesList} />}
    </Styled.Aside>
  );
};

export default Sidebar;
