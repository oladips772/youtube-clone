/** @format */
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { IoMdShareAlt } from "react-icons/io";
import React from "react";
import styled from "styled-components";
import Comments from "../components/Comments";
import Card2 from "../components/Card2";

const Container = styled.div`
  display: flex;
  gap: 20px;
  padding: 10px;
`;
const Content = styled.div`
  flex: 5;
`;
const VideoWrapper = styled.div``;

const Title = styled.h2``;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.div`
  font-weight: 600;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Recommendation = styled.div`
  flex: 2;
`;

// !
const Channel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  padding-top: 10px;
  border-top: 1px solid lightgray;
`;

const ChannelInfo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const ChannelImage = styled.img`
  height: 38px;
  width: 38px;
  border-radius: 50%;
`;

const Description = styled.p`
  width: 60%;
`;
const ChannelDetail = styled.div``;

const ChannelCounter = styled.span`
  font-weight: 500;
`;

const ChannelName = styled.h3`
  font-weight: bold;
`;

const Subscribe = styled.button`
  height: 37px;
  background: red;
  color: white;
  border-radius: 4px;
  width: 200px;
  font-size: 17px;
  font-weight: 600;
  border: none;
  cursor: pointer;
`;

function Video() {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="650"
            src="https://www.youtube.com/embed/Bm0JjR4kP8w"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </VideoWrapper>
        <Title>Send Push Notifications With Javascript</Title>
        <Details>
          <Info>123,202 views . 2 days ago</Info>
          <Buttons>
            <Button>
              <AiOutlineLike size={22} />
              Like
            </Button>
            <Button>
              <AiOutlineDislike size={22} />
              Dislike
            </Button>
            <Buttons>
              <IoMdShareAlt size={22} />
              Share
            </Buttons>
          </Buttons>
        </Details>
        {/* //* channel div */}
        <Channel>
          <ChannelInfo>
            <ChannelImage
              src="https://9to5mac.com/wp-content/uploads/sites/6/2019/07/2019-MacBook-Pro-Touch-Bar-Dock-Pock.jpg?quality=82&strip=all"
              alt=""
            />
            <ChannelDetail>
              <ChannelName>Web Dev Simplified</ChannelName>
              <ChannelCounter>200k subscribers</ChannelCounter>
              <Description>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
                amet aliquid repudiandae! Nemo quisquam rerum commodi veritatis,
                itaque hic, magnam explicabo ipsa, iste aliquam quis voluptate
                alias nesciunt provident recusandae!
              </Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>Subscribe</Subscribe>
        </Channel>
        <Comments />
      </Content>
      <Recommendation>
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
      </Recommendation>
    </Container>
  );
}

export default Video;
