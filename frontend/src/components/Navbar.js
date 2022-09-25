/** @format */
import styled from "styled-components";
import { ImSearch } from "react-icons/im";

const Container = styled.div`
  display: flex;
  align-items:center;
  justify-content:flex-end;
  height:50px;
  position:sticky;
  top:0;
  background:${({theme}) => theme.bgLighter}
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  width: 70%;
  margin: auto;
  border: 1px solid ${({ theme }) => theme.text};
`;

const Input = styled.input`
  width: 90%;
  border: none;
  font-size: 16px;
  padding: 5px;
  background: none;
  outline: none;
  color: ${({ theme }) => theme.text};;
`;


function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Input />
        <ImSearch color={"white"} />
      </Wrapper>
    </Container>
  );
}

export default Navbar;
