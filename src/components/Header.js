import React from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive'
import { FaBars } from 'react-icons/fa'

function Header() {
    return (
        <Container>
            <Logo>
                <LogoText>Bana Coding</LogoText>
            </Logo>
            <Menu>
                <Service>SERVICE</Service>
                <Product>PRODUCTS</Product>
                <Team>OUR TEAM</Team>
                <Blog>BLOG</Blog>
                <About>ABOUT US</About>
                <Contact>CONTACT US</Contact>
                <Flag src="https://icons.iconarchive.com/icons/wikipedia/flags/1024/TH-Thailand-Flag-icon.png"></Flag>
            </Menu>
            <MobileIcon>
                <FaBars/>
            </MobileIcon>
        </Container>
    )
}

export default Header

const Container = styled.div`
    display: flex;
    width: 100vw;
    justify-content: space-between;
    align-items: center;
    background-color: #ffec45;
    position: fixed;
    top: 0;
    z-index: 100;
`

const Logo = styled.div`
    display: flex;
    flex: 2;
    justify-content: flex-start;
    margin: 10px 0px 10px 0px; 
`

const LogoText = styled.span`
    margin-left: 50px;
`

const Menu = styled.div`
    margin-right: 100px;
    flex: 3;
    display : flex;
    justify-content: space-evenly;
    font-size: 13px;
    span {
        padding: 5px;
        cursor: pointer;
    }
    span:hover {
        background-color: #ebe8e8;
      }
    ${mobile({display: 'none'})}
`

const MobileIcon = styled.div`
    margin-right: 30px;
    @media screen and (min-width: 400px) {
        display: none;
      }
`

const Service = styled.span``

const Product = styled.span``

const Team = styled.span``

const Blog = styled.span``

const About = styled.span``

const Contact = styled.span``

const Flag = styled.img`
    max-width: 20px;
    max-height: 20px;
    cursor: pointer;
`
