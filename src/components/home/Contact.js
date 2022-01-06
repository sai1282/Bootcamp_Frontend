import React from 'react'
import styled from 'styled-components'
import { AiOutlineMail, AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'

function Contact() {
    return (
        <Container>
            <Title>CONTACT US</Title>
            <AddressContainer>
                <InfoTitle>Office: </InfoTitle>
                <Info> 34/12 Moo 5 Canal Road, Suthep Chiang Mai, Thailand 50200</Info>
            </AddressContainer>
            <InfoContainer>
                <InfoTitle>Office: </InfoTitle>
                <Info> +6653 020 078</Info>
            </InfoContainer>
            <InfoContainer>
                <InfoTitle>Office: </InfoTitle>
                <Info style={{color:"#73ebc9"}}> hello@bananacoding.com</Info>
            </InfoContainer>
            <IconContainer>
                <AiOutlineMail style={{width:"40px", height:"40px", color:"#73ebc9", marginRight:"10px", cursor: 'pointer'}}/>
                <AiOutlineTwitter style={{width:"40px", height:"40px", color:"#73ebc9", marginRight:"10px"}}/>
                <FaFacebookF style={{width:"40px", height:"40px", color:"#73ebc9", marginRight:"10px"}}/>
                <FaLinkedinIn style={{width:"40px", height:"40px", color:"#73ebc9", marginRight:"10px"}}/>
            </IconContainer>
        </Container>
    )
}

export default Contact

const Container = styled.div`
    margin: 20px;
    padding: 50px 50px 100px 50px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Title = styled.span`
    font-size: 20px;
`

const AddressContainer = styled.div`
    margin-top: 20px;
`

const InfoContainer = styled.div`
    margin-top: 20px;
`

const InfoTitle = styled.span`
    font-size: 18px;
    text-decoraction: bold;
`

const Info = styled.span`
    font-size: 15px;
`

const IconContainer = styled.div`
    margin-top: 20px;
    display: flex;
`



