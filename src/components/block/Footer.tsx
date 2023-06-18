import React from 'react'
import styled from 'styled-components'
import img from "../../assets/logo-white.png"
import {BsArrowRight} from "react-icons/bs"
import {BsFacebook, BsTwitter, BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <div>
      <Container>
        <Main>
          <Up><Div1>
            <Logo src={img}/>
            <P>
            BookPress is light and clean design that is a smart choice for book selling landing page. BookPress has everything you need to take your item selling to the next level but most of all it’s easy to use.
            </P>
          </Div1>
          <Div1>
            <Title>Quick Links</Title>
            <Text>Home</Text>
            <Text>About</Text>
            <Text>Blog</Text>
            <Text>Contact</Text>
          </Div1>
          <Div1>
            <Title>About Us</Title>
            <Text>Books store</Text>
            <Text>Cart page</Text>
            <Text>Checkout</Text>
            <Text>My account</Text>
          </Div1>
          <Div1>
            <Title>Newsletter</Title>
            <Text>Subscribe Now Latest Update E-Book.</Text>
        <InputHolder>
        <Input  placeholder='Enter your Email Address' />
        <Div3><BsArrowRight /></Div3>
        </InputHolder>
        <Icon>
          <L> <BsFacebook /> </L>
          <L>  <BsTwitter /> </L>
          <L> <BsLinkedin /> </L>
        </Icon>
          </Div1></Up>
          <Line></Line>
          <Text2>© 2017 - 2022 All Rights Reserved by Themeperch</Text2>
        </Main>
      </Container>
    </div>
  )
}

export default Footer

const Text2 = styled.div`
font-size: 18px;
margin: 30px 0;

:hover{
  text-decoration: underline;
  cursor: pointer;
}
`
const Line = styled.div`
width: 100%;
height: 1px;
background-color: silver;
margin-top: 40px;
`
const Up = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: space-between;
`

const L = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: blue;
display: flex;
justify-content: center;
align-items: center;
color: white;
font-size: 20px;
margin-left: 5px;
`
const Icon = styled.div`
display: flex;
margin-top: 50px;
`
const Div3 = styled.div`
font-size: 20px;
display: flex;
justify-content: center;
align-items: center;
color: #7b7b7b;
width: 20%;
`

const Input = styled.input`
padding-left: 10px;
outline-color: blue;
border: none;
width: 80%;
height: 100%;
/* margin-left: 2px; */
overflow: hidden;
/* background-color: red; */


::placeholder{
  color: #c3c4c4;
 padding-left: 10px;
 font-size: 15px;
}
`
const InputHolder = styled.div`
border-radius: 10px;
display: flex;
width: 350px;
height: 50px;
background-color: #E9ECEF;
margin-top: 25px;
align-items: center;
overflow: hidden;


`
const Text = styled.div`
font-size: 18px;
margin-bottom: 20px;

:hover{
  text-decoration: underline;
  cursor: pointer;
}
`
const Title = styled.div`
font-weight: 700;
font-size: 23px;
margin-bottom: 25px;
`
const P = styled.div`
  font-size: 18px;
  width: 350px;
`

const Logo = styled.img`
height: 50px;
`
const Div1 = styled.div`
`
const Main = styled.div`
width: 90%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
`
const Container = styled.div`
display: flex;
justify-content: center;
width: 100%;
min-height: 300px;
background-color: #131313;
color: white;
padding-top: 30px;
`