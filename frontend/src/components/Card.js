/** @format */
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 360px;
  margin: 10px;
  margin-bottom: 40px;
`;

const Image = styled.img`
  height: 202px;
  width: 100%;
`;
const ChannelImage = styled.img`
  height: 36px;
  width: 36px;
  border-radius: 50%;
`;
const Title = styled.h3`
  font-size: 14px;
`;
const Details = styled.div`
  display: flex;
  margin-top: 12px;
  gap: 10px;
`;

const ChannelName = styled.h2`
  font-size: 16px;
  font-weight: 600;
`;

const TextDiv = styled.div`
  margin-top: 1px;
`;

const InfoDiv = styled.div``;

const ViewsText = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

const DayText = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

function Card() {
  return (
    <Link to="/video/12" style={{ textDecoration: "none" }}>
      <Container>
        <Image
          src="https://9to5mac.com/wp-content/uploads/sites/6/2019/07/2019-MacBook-Pro-Touch-Bar-Dock-Pock.jpg?quality=82&strip=all"
          alt=""
        />
        <Details>
          <ChannelImage
            src="https://9to5mac.com/wp-content/uploads/sites/6/2019/07/2019-MacBook-Pro-Touch-Bar-Dock-Pock.jpg?quality=82&strip=all"
            alt=""
          />
          <InfoDiv>
            <Title>Macbook pro unboxing</Title>
            <ChannelName>Gear Boxing</ChannelName>
            <TextDiv>
              <ViewsText>12,3049 views . </ViewsText>
              <DayText>1 day ago</DayText>
            </TextDiv>
          </InfoDiv>
        </Details>
      </Container>
    </Link>
  );
}

export default Card;
