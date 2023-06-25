import GamesList from '../../components/gamesList';
import SearchGame from '../../components/searchGame';
import * as Styled from './styled';

const Games = () => {
  return (
    <Styled.Wrapper>
      <Styled.Container>
        <SearchGame />
        <GamesList />
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default Games;
