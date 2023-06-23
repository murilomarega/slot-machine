import Header from '../../components/header';
import Sidebar from '../../components/sidebar';
import * as Styled from './styled';

const Home = () => {
  return (
    <Styled.Wrapper>
      <Header />
      <Sidebar />
    </Styled.Wrapper>
  );
};

export default Home;
