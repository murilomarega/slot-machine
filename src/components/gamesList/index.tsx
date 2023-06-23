import { FC } from 'react';
import { IGame } from '../../interfaces/games';
import * as Styled from './styled';

const GamesList: FC<{ games: IGame[] }> = ({ games }) => {
  return (
    <Styled.List>
      {games.map((game) => (
        <Styled.ListItem key={game.id}>{game.title}</Styled.ListItem>
      ))}
    </Styled.List>
  );
};

export default GamesList;
