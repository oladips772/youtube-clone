/** @format */
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const Container = styled.div`
  display: flex;
`;

const MainCont = styled.div`
  flex: 7;
`;
const Wrapper = styled.div``;

function App() {
  return (
    <Container>
      <Sidebar />
      <MainCont>
        <Navbar />
        <Wrapper>video cards</Wrapper>
      </MainCont>
    </Container>
  );
}

export default App;
