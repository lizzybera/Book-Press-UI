import React from 'react'
import styled from 'styled-components'


interface iCard2{
    image?: any;
    title?: string
    text?: string
    right?: string
}

const Card2:React.FC<iCard2> = ({image, title, text, right}) => {
  return (
    <div>
        <Container>
            <Pics src={image} />
            <Div>
                <Left>
                <Title>{title}</Title>
                <Text>{text} </Text>
                </Left>
                <Right> {right}</Right>
            </Div>
        </Container>
    </div>
  )
}

export default Card2

const Right = styled.div`
font-size: 15px;
padding-top: 10px;

:hover{
    cursor: pointer;
    color: blue;
}
`
const Text = styled.div`
font-size: 18px;
margin-top: 10px;
`
const Title = styled.div`
font-size: 20px;
font-weight: 500;
:hover{
    cursor: pointer;
    color: blue;
}
`
const Left = styled.div`

`
const Div = styled.div`
display: flex;
justify-content: space-between;
width: 90%;
margin: 0 10px;
`
const Pics = styled.img`
width: 100%;
height: 260px;
object-fit: cover;
background-color: aliceblue;
margin-bottom: 10px ;
`

const Container = styled.div`
    border: 1px solid silver;
    min-height: 350px;
    width: 270px;
    border-radius: 5px;
`
