/** @format */
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";

const Container = styled.div`
  flex: 1;
  background: #000;
  height: 100vh;
  color: white;
  margin: 0;
  padding: 0;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  margin-bottom: 18px;
`;

const Image = styled.img`
  height: 40px;
  object-fit: contain;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  margin: 8px 0px;
  cursor: pointer;
`;

function Sidebar() {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Image
            src="https://www.freeiconspng.com/thumbs/youtube-logo-png/hd-youtube-logo-png-transparent-background-20.png"
            alt=""
          />
          Youtube
        </Logo>
        <Item>
          <HomeIcon/>  
          Home
        </Item>
      </Wrapper>
    </Container>
  );
}

export default Sidebar;
