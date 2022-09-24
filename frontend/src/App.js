/** @format */
import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./App.css";
import { darkTheme, lightTheme } from "./utils/Theme";

const Container = styled.div`
  display: flex;
`;

const MainCont = styled.div`
  flex: 7;
`;

const Wrapper = styled.div``;

function App() {
  const themes = [darkTheme, lightTheme];
  const [Theme, setTheme] = useState(themes[0]);

  const changeTheme = () => {
    if (Theme === themes[0]) {
      setTheme(themes[1]);
    } else if (Theme === themes[1]) {
      setTheme(themes[0]);
    }
  };

  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <Sidebar changeTheme={changeTheme} />
        <MainCont>
          <Navbar />
          <Wrapper>video cards</Wrapper>
        </MainCont>
      </Container>
    </ThemeProvider>
  );
}

export default App;
