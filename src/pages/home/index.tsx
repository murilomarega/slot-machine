import Header from '../../components/header';
import Sidebar from '../../components/sidebar';
import SlotMachineGame from '../../components/slotMachine';
import * as Styled from './styled';

const Home = () => {
  return (
    <Styled.Wrapper>
      <Header />
      <Sidebar />
      <SlotMachineGame />
    </Styled.Wrapper>
  );
};

export default Home;
