/** @format */
import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./App.css";
import { darkTheme, lightTheme } from "./utils/Theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Video from "./Pages/Video";

const Container = styled.div`
  display: flex;
`;

const MainCont = styled.div`
  flex: 7;
  background: whitesmoke;
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
      <BrowserRouter>
        <Container>
          <Sidebar changeTheme={changeTheme} />
          <MainCont>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element={<Home />} />
                  <Route path="video">
                    <Route path=":id" element={<Video />} />
                  </Route>
                </Route>
              </Routes>
            </Wrapper>
          </MainCont>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
