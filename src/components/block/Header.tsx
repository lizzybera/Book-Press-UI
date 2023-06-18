import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import img from "../../assets/logo.png"
import {FiSearch} from "react-icons/fi"
import {AiOutlineShoppingCart} from "react-icons/ai"
import {AiOutlineDropbox} from "react-icons/ai"

const Header = () => {
    const [isSticky, setIsSticky] = useState(false)

    useEffect(() =>{
        const handlescroll =()=>{
            const scroll = window.pageYOffset;

            if(scroll >= 100){
                setIsSticky(true)
            }else{
                setIsSticky(false)
            }
        }

        window.addEventListener("scroll", handlescroll)

        return () => {
            window.removeEventListener("scroll", handlescroll)
        }
    })
  return (
    <div>
        {
            isSticky? <Container bg="yellow" p='fixed'>
            <Main>
                <Logo src={img} />
                
                <Nav>
                    <Navs>Home</Navs>
                    <Navs>About</Navs>
                    <Navs>Book Store <Icon> <AiOutlineDropbox /></Icon></Navs>
                    <Navs>Blogs</Navs>
                    <Navs>Contact</Navs>
                    <Navs>More</Navs>
                </Nav>

                <Icons>
                    <Hold><FiSearch /></Hold>
                    <Hold2><AiOutlineShoppingCart /></Hold2>
                    <Button> Upload </Button>



                </Icons>
            </Main>
        </Container> : <Container bg="white" p=''>
            <Main>
            <Logo src={img} />
                
            <Nav>
                    <Navs>Home</Navs>
                    <Navs>About</Navs>
                    <Navs>Book Store <Icon> <AiOutlineDropbox /></Icon></Navs>
                    <Navs>Blogs</Navs>
                    <Navs>Contact<Icon> <AiOutlineDropbox /></Icon></Navs>
                    <Navs>More</Navs>
                </Nav>

                <Icons>
                    <Hold><FiSearch /></Hold>
                    <Hold2><AiOutlineShoppingCart /></Hold2>
                    <Button> Upload </Button>
                </Icons>
            </Main>
        </Container>
        }
    </div>
  )
}

export default Header

const Icon = styled.div`
margin-left: 10px;
margin-top: 5px;
`
const Button = styled.div`
width: 120px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
margin-left: 25px;
color: white;
background-color: blue;
font-size: 15px;
font-weight: 500;
border-radius: 5px;
`
const Hold2 = styled.div`
margin-left: 25px;
`
const Hold = styled.div`
margin-left: 25px;
`
const Icons = styled.div`
display: flex;
align-items: center;
font-size: 20px;
color: blue;
`
const Navs = styled.div`
margin-right: 50px;
cursor: pointer;
display: flex;
align-items: center;
`
const Nav = styled.div`
display: flex;
font-weight: 700;
/* align-items: center; */
`
const Logo = styled.img`
height: 40px;
object-fit: cover;
`
const Main = styled.div`
width: 90%;
height: 100%;
display: flex;
align-items: center;
justify-content: space-between;
`
const Container = styled.div<{bg: string,p: string}>`
width: 100%;
height: 80px;
display: flex;
justify-content: center;
background-color: ${({bg})=>bg};
align-items: center;
z-index: 10;
position: ${({p})=> p};
backdrop-filter: blur;
`