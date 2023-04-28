import styled from "styled-components";
import Menu from "./components/menu/Menu";
import Navbar from "./components/Navbar/Navbar";

const Container = styled.div`
display: flex;
`;
const Main = styled.div`
flex: 7;
`;
const Wrapper = styled.div`

`;


const App: React.FC = () => {
  return <Container>
    <Menu />

    <Main>
      <Navbar />
      <Wrapper>
        videos
      </Wrapper>
    </Main>
  </Container>;
};

export default App;
