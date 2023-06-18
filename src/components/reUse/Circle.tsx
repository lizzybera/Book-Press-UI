import React from 'react'
import styled from 'styled-components';

interface iCalculate{
    number?: number;
    text?: string;
}

const Circle:React.FC<iCalculate> = ({number, text}) => {
  return (
    <div>
        <Circle1>
                    <Number>{number}</Number>
                    <Text>{text}</Text>
                    <Line></Line>
                </Circle1>
    </div>
  )
}

export default Circle

const Line = styled.div`
width: 50px;
height: 3px;
margin-top: 5px;
background-color: #FBB797;
`
const Text = styled.div`
font-size: 16px;
color: white;
margin-top: 20px;
font-weight: 500;
`
const Number = styled.div`
font-size: 45px;
font-weight: 500;
color: white;
`
const Circle1 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 180px;
height: 180px;
border-radius: 50%;
border: 5px solid #FBB797;
`