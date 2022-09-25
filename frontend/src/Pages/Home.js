import styled from "styled-components";
import React from "react";
import Card from "../components/Card";

const Container = styled.div`
display:flex;
flex-wrap:wrap;
padding:10px;
cursor:pointer;
`
const Wrapper = styled.div``

function Home() {
  return (
    <Container>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Container>
  );
}

export default Home;