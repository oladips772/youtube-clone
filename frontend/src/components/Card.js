/** @format */
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 360px;
  margin: 10px;
  margin-bottom: 40px;
`;

const Wrapper = styled.div``;

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
  font-size: 17px;
  font-weight:600;
`;

const InfoDiv = styled.div``;

function Card() {
  return (
    <Container>
      <Wrapper>
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
          </InfoDiv>
        </Details>
      </Wrapper>
    </Container>
  );
}

export default Card;
