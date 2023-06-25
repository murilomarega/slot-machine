import * as Styled from './styled';

const Header = () => {
  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.LinkToList to={'/games-list'}>
          <Styled.GameIcon />
        </Styled.LinkToList>
        <Styled.Title to={'/'}>Wheel of Fortune</Styled.Title>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default Header;
