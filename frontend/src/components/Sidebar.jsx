/** @format */
import styled from "styled-components";
import { AiFillHome } from "react-icons/ai";
import { BsCompass } from "react-icons/bs";
import { HiOutlineSaveAs } from "react-icons/hi";
import {MdOutlineVideoLibrary} from "react-icons/md"

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
  gap: 20px;
  font-weight:bold;
`;

const HR = styled.hr`
  height:0.3px;
`

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
          <AiFillHome />
          Home
        </Item>
        <Item>
          <BsCompass />
          Explore
        </Item>
        <Item>
          <HiOutlineSaveAs />
          Subsciptions
        </Item>
        <HR />
        <Item>
          <MdOutlineVideoLibrary />
          Library
        </Item>
      </Wrapper>
    </Container>
  );
}

export default Sidebar;
