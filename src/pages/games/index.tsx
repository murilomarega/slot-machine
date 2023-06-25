import GamesList from '../../components/gamesList';
import * as Styled from './styled';

const Games = () => {
  return (
    <Styled.Wrapper>
      <Styled.Container>
        <GamesList />
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default Games;
