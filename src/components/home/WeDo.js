import React from "react";
import styled from "styled-components";
import { AiOutlineMinus } from 'react-icons/ai'

function WeDo() {
  return (
    <Container>
      <Title>WHAT WE DO</Title>
      <UnderLine>________</UnderLine>
      <ImageContainer>
        <TopContainer>
            <Blog>
          <Image src="https://bananacoding.com/assets/WebDesign-7340be74fe6dc77a03f602b09f16f75e.png" />
          <ImageTitle>CLOUD SOLUTIONS</ImageTitle>
          </Blog>
          <Blog>
          <Image src="https://bananacoding.com/assets/MobileApp-66fd851220de759187a54b2f6af48b68.png" />
          <ImageTitle>CLOUD SOLUTIONS</ImageTitle>
          </Blog>
          <Blog>
          <Image src="https://bananacoding.com/assets/DesktopApp-68db4c0a4d467cedc20cf807290cf019.png" />
          <ImageTitle>CLOUD SOLUTIONS</ImageTitle>
          </Blog>
        </TopContainer>
        <ButtonContainer>
            <Blog>
          <Image src="https://bananacoding.com/assets/Cloud-90c248d9e9d6b25920e827a3e151d969.png" />
          <ImageTitle>CLOUD SOLUTIONS</ImageTitle>
          </Blog>
          <Blog>
          <Image src="https://bananacoding.com/assets/MS-2d8d8b1612330680ff0996ed5689f48b.png" />
          <ImageTitle>CLOUD SOLUTIONS</ImageTitle>
          </Blog>
          <Blog>
          <Image src="https://bananacoding.com/assets/Bioinformatics-d1849b0fd0d2444e10de75f5526267f5.png" />
          <ImageTitle>CLOUD SOLUTIONS</ImageTitle>
          </Blog>
        </ButtonContainer>
      </ImageContainer>
    </Container>
  );
}

export default WeDo;

const Container = styled.div`
  display: flex;
  min-height: 700px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0e1411;
`;

const Title = styled.span`
    font-size: 30px;
    color: white;
`;

const UnderLine = styled.span`
    color: white;
    font-weight: 500;
`;

const ImageContainer = styled.div``;

const TopContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const Blog = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
`

const Image = styled.img``;

const ImageTitle = styled.span`
    color: #92e8bc;
`;
