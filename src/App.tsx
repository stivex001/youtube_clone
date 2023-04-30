import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/menu/Menu";
import Navbar from "./components/Navbar/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";
import { useState } from "react";

const Container = styled.div`
  display: flex;
`;
const Main = styled.div`
  flex: 7;
  background-color:  ${({ theme }) => theme.bg};
`;
const Wrapper = styled.div``;

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  return (
    <ThemeProvider theme={darkMode? darkTheme : lightTheme}>
      <Container>
        <Menu setDarkMode={setDarkMode} darkMode={darkMode}/>

        <Main>
          <Navbar />
          <Wrapper>videos</Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
};

export default App;
