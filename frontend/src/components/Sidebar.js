/** @format */
import styled from "styled-components";
import { AiFillHome } from "react-icons/ai";
import { BsCompass } from "react-icons/bs";
import { GiGamepad } from "react-icons/gi";
import {
  MdOutlineVideoLibrary,
  MdHistory,
  MdSubscriptions,
  MdOutlineAccountCircle,
  MdOutlineLibraryMusic,
  MdOutlineSportsBasketball,
} from "react-icons/md";
import { BiMovie } from "react-icons/bi";
import { AiOutlineSetting } from "react-icons/ai";


const Container = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.bgLighter};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  margin: 0;
  padding: 0;
  position:sticky;
  top:0;
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
  gap: 20px;
  font-weight: bold;
`;

const HR = styled.hr`
  border: 0.3px solid ${({ theme }) => theme.soft};
`;

const LoginDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 6.5px;
  margin: 8px 0px;
  cursor: pointer;
  gap: 20px;
  font-weight: bold;
  border: 1px solid lightgreen;
  border-radius: 4px;
  color: lightgreen;
  width: 100px;
`;

function Sidebar({changeTheme}) {
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
          <AiFillHome size={21} />
          Home
        </Item>
        <Item>
          <BsCompass size={21} />
          Explore
        </Item>
        <Item>
          <MdSubscriptions size={21} />
          Subsciptions
        </Item>
        <HR />
        <Item>
          <MdOutlineVideoLibrary size={21} />
          Library
        </Item>
        <Item>
          <MdHistory size={21} />
          History
        </Item>
        <HR />
        <LoginDiv>
          <MdOutlineAccountCircle size={21} />
          Sign in
        </LoginDiv>
        <HR />
        <Item>Best of Youtube </Item>
        <Item>
          <MdOutlineLibraryMusic size={21} />
          Music
        </Item>
        <Item>
          <MdOutlineSportsBasketball size={21} />
          Music
        </Item>
        <Item>
          <GiGamepad size={21} />
          Gaming
        </Item>
        <Item>
          <BiMovie size={21} />
          Movies
        </Item>
        <Item onClick={changeTheme}>
          <AiOutlineSetting size={21} />
          Lightmode
        </Item>
      </Wrapper>
    </Container>
  );
}

export default Sidebar;