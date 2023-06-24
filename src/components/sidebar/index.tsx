import GamesList from '../gamesList';
import SearchGame from '../searchGame';
import * as Styled from './styled';

const Sidebar = () => {
  return (
    <Styled.Aside>
      <SearchGame />
      <GamesList />
    </Styled.Aside>
  );
};

export default Sidebar;
