import React from "react";
import styled from "styled-components";

function JoinUs() {
  return (
    <Container>
      <Title>JOIN OUR TEAM</Title>
      <SubTitle>Come work with us</SubTitle>
      <EmailContainer>
        <EmailTitle>Or you can e-mail to </EmailTitle>
        <Email>hr@bananacoding.com</Email>
      </EmailContainer>
      <SubTitle>for internship</SubTitle>
    </Container>
  );
}

export default JoinUs;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const Title = styled.span`
    padding: 5px 20px 5px 20px;
    font-size: 20px;
    border: solid 2px;
`;

const SubTitle = styled.span`
    text-decoration: underline;
    font-size: 15px;
    font-weight: 500;
    margin-top: 20px;
    :hover {
        color: #ffec45;
        padding: 0px 20px 0px 20px;
        background-color: black;
        text-decoration: none;
    }
`;

const EmailContainer = styled.div`
    display: flex;
    margin-top: 20px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

const EmailTitle = styled.span``;

const Email = styled.span`
    font-size: 18px;
    color: #73ebc9;
    margin-left: 10px;
    font-weight: 500;
`;
