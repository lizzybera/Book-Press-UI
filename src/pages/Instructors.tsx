import React from 'react'
import styled from 'styled-components'
import Card2 from '../components/reUse/Card2'
import image from "../assets/blog-post-1.jpg"
import image2 from "../assets/blog-post3-1.jpg"
import image3 from "../assets/book-mockup6-1.png"
import image4 from "../assets/blog-post-1.jpg"

const Instructors = () => {
  return (
    <div>
        <Container>
            <Main>
            <Title>Checkout our featured author</Title>
                <Div>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing t, consectetur adipisicing elit. Ut quos cupiditate, nemo debitis, explicabo voluptas.</Text>
                    <Button>Browse All Writers</Button>
                </Div>
                <CardHolder>
                    <Card2 
                     image={image}
                     title='Hannah Harpers'
                     text='Author & Writer'
                     right='2 Books'
                    />
                    <Card2 
                     image={image2}
                     title='John Doe'
                     text='Author & Writer'
                     right='
                     2 Books'
                    />
                    <Card2 
                     image={image3}
                     title='Jonathan Barnes'
                     text='Writer'
                     right='
                     3 Books'
                    />
                    <Card2 
                     image={image4}
                     title='Marcos Trison'
                     text='Writer'
                     right='
                     3 Books'
                    />
                </CardHolder>
            </Main>
        </Container>
    </div>
  )
}

export default Instructors

const CardHolder = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
margin-top: 20px;
margin-bottom: 20px;
`

const Button = styled.div`
width: 150px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
/* margin-left: 25px; */
color: white;
background-color: blue;
font-size: 15px;
font-weight: 500;
margin-right: 10px;
border-radius: 5px;

`

const Text = styled.div`
font-size: 20px;
font-weight: 15px;
color: #868484;
width: 50%;
margin-bottom: 20px;
`
const Div = styled.div`
display: flex;
justify-content: space-between;
`
const Title = styled.div`
font-size: 40px;
font-weight: 700;
margin-bottom: 15px;
`
const Main = styled.div`
width: 90%;
height: 100%;
display: flex;
flex-direction: column;
`
const Container = styled.div`
    width: 100%;
    min-height: 500px;
    display: flex;
    justify-content: center;
    padding-top: 50px;
    padding-bottom: 100px;
`