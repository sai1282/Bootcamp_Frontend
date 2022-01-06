import React from "react";
import styled from "styled-components";

function AboutUs() {
  return (
    <Container>
      <Title>ABOUT US</Title>
      <UnderLine>_______</UnderLine>
      <Description>
        We're an experienced team of developers and designers based in Chiang
        Mai, Thailand. We work with clients to create beautiful, functional
        software.
      </Description>
      <Description>
      As a small, cohesive team we can guarantee transparency and flexibility in our working practices, and we always deliver on our promises.
      </Description>
      <Description>
      "Our expertise covers a number of disciplines, but we're specialists in .NET, Ruby on Rails, cross-platform mobile development and user experience (UX)."
      </Description>
      <Footer>
          <Design>Our design process</Design>
          <And>and</And>
          <Development>Our developmnet process</Development>
      </Footer>
    </Container>
  );
}

export default AboutUs;

const Container = styled.div`
    height: 700px;
  background-color: #ffec45;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.span``;

const UnderLine = styled.span``;

const Description = styled.span`
    margin-top: 50px;
    max-width: 600px;
`

const Footer = styled.div`
    display: flex;
    margin-top: 50px;
`

const Design = styled.span`
    margin: 0px 10px 0px 10px;
    text-decoration: underline;
`

const And = styled.span`
    margin: 0px 10px 0px 10px;
`

const Development = styled.span`
    margin: 0px 10px 0px 10px;
    text-decoration: underline;
`
