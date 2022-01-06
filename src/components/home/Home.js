import React from "react";
import styled from "styled-components";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import FirstPage from "./FirstPage";
import JoinUs from "./JoinUs";
import WeDo from "./WeDo";

function Home() {
  return (
    <Container>
      <FirstPage />
      <WeDo />
      <AboutUs />
      <ContactContainer>
        <Contact />
        <JoinUs />
      </ContactContainer>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ContactContainer = styled.div`
  min-height: 700px;
  margin-button: 100px;
  padding: 50px;
  background-image: url("https://wallpaper.dog/large/10892376.jpg");
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
