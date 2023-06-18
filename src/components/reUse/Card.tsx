import React from 'react'
import styled from 'styled-components'
import {BsStarFill} from "react-icons/bs"
import {BsStar} from "react-icons/bs"


interface iCard{
    image?: any;
    text?: string;
    iconColor?: string;
    n1?: string;
    n2?: string;
}

const Card:React.FC<iCard> = ({image, text, iconColor, n1, n2}) => {
  return (
    <div>
        <Container>
            <Pics src={image} />
            <Circle>Sale!</Circle>
            <Text>{text}</Text>
            <Div>
            <Icon/>
            <Icon/>
            <Icon/>
            <Icon/>
            <Icon2 iconColor={`${iconColor}`} />
            </Div>
            <Number>
                <N1>{n1}</N1>
                <N2>{n2}</N2>
            </Number>
            <ButtonHolder>
                <Button>Add to Cart</Button>
            </ButtonHolder>
        </Container>
    </div>
  )
}

export default Card

const Button = styled.div`
width: 120px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
margin-left: 10px;
color: white;
background-color: blue;
font-size: 15px;
font-weight: 500;
border-radius: 5px;
`

const ButtonHolder = styled.div`
border-top: 1px solid silver;
padding: 10px 0;
background-color: #f3f3f3;
`

const N2 = styled.div`
font-size: 25px;
color: blue;
`

const N1 = styled.div`
color: gray;
text-decoration: line-through;
font-size: 20px;
`

const Number = styled.div`
display: flex;
margin-left: 10px;
font-weight: 700;
margin-bottom: 10px;
`

const Icon2 = styled(BsStar)<{iconColor: string}>`
margin: 15px 1px;
font-size: 20px;
color: ${({iconColor}) => iconColor};
`
const Icon = styled(BsStarFill)`
margin: 15px 1px;
font-size: 20px;
color: orange;
`

const Div = styled.div`
display: flex;
margin-left: 10px;
`
const Text = styled.div`
font-size: 25px;
font-weight: 500;
margin-left: 10px;

:hover{
    color: blue;
}
`
const Circle = styled.div`
width: 60px;
height: 60px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
color: white;
background-color: blue;
position: absolute;
right: 10px;
top: 10px;
font-size: 18px;
`

const Pics = styled.img`
width: 100%;
height: 300px;
object-fit: cover;
background-color: aliceblue;
margin-bottom: 10px ;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid silver;
    min-height: 500px;
    width: 270px;
position: relative;
`