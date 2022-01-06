import React from "react";
import styled, {keyframes} from "styled-components";
import { AiOutlineDown } from "react-icons/ai";
import logo from "./img/logo.png";

function blinkingEffect() {
    return keyframes`
      50% {
        opacity: 0;
      }
    `;
  }

function FirstPage() {
  return (
    <Container>
      <Logo src={logo} />
      <LogoText>Better by Design</LogoText>
      <UnderLine>_________</UnderLine>
      <IconContainer>
        <ArrowDown>
          <AiOutlineDown
            style={{ fontSize: "20px", backgroundColor: "white" }}
          />
        </ArrowDown>
      </IconContainer>
    </Container>
  );
}

export default FirstPage;

const Container = styled.div`
  width: 100%;
  min-height: 740px;
  background-image: url("https://cdn.wallpapersafari.com/53/17/5oylXU.jpg");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  margin-top: 100px;
  width: 150px;
  height: 150px;
`;

const LogoText = styled.span`
  color: white;
  font-size: 50px;
  font-weight: 350;
`;
const IconContainer = styled.div`
  display: flex;
  background-color: white;
  margin: 20px;
  padding: 10px;
  border-radius: 50%;
`;

const UnderLine = styled.span`
    color: white;
`;

const ArrowDown = styled.div`
    display: flex;
  animation: ${blinkingEffect} 2s linear infinite;
`;
