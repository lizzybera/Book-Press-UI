import React from 'react'
import styled from 'styled-components'
import Card from '../components/reUse/Card'
import img from "../assets/book-mockup1.png"
import img2 from "../assets/book-mockup2.png"
import img3 from "../assets/book-mockup13.png"
import img4 from "../assets/book-mockup5.png"

const PopularBooks = () => {
  return (
    <div>
        <Container>
            <Main>
                <Title>Popular books in Bookpress</Title>
                <Div>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing t, consectetur adipisicing elit. Ut quos cupiditate, nemo debitis, explicabo voluptas.</Text>
                    <Button>Browse All Books</Button>
                </Div>
                <CardHolder>
                <Card 
                image={img}
                text='Fearless Attempts for defending lost'
                iconColor='grey'
                n1='$32.00'
                n2='$27.00'
                />
                <Card 
                image={img3}
                text='Half Moon by Koly & Harpers '
                iconColor='orange'
                n1='$48.00'
                n2='$15.00'
                />
                <Card 
                image={img4}
                text='Dark in Mask Gratitude'
                iconColor='grey'
                n1='$32.00'
                n2='$27.00'
                />
                <Card 
                image={img2}
                text='A Brief History of America'
                iconColor='grey'
                n1='$32.00'
                n2='$12.00'
                />
                </CardHolder>
                <Div2>
                    <Circle c='blue'></Circle>
                    <Circle c='#bfbfbf'></Circle>
                    <Circle c='#bfbfbf'></Circle>
                    <Circle c='#bfbfbf'></Circle>
                    <Circle c='#bfbfbf'></Circle>
                </Div2>
            </Main>
        </Container>
    </div>
  )
}

export default PopularBooks

const Circle = styled.div<{c: string}>`
width: 15px;
height: 15px;
margin-left: 10px;
border-radius: 50%;
background-color: ${({c}) => c};
`

const Div2 = styled.div`
display: flex;
justify-content: center;
margin-top: 20px;
width: 100%;
`
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
    padding-top: 100px;
    padding-bottom: 100px;
`