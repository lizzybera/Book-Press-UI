import React from 'react'
import styled from 'styled-components'
import Circle from '../components/reUse/Circle'



const Calculate = () => {
  return (
    <div>
        <Container>
            <Main>
                <Circle 
                number={92500}
                text='Subscriber'
                />
                <Circle 
                number={500}
                text='Free Download'
                />
                <Circle 
                number={5000}
                text='Product List'
                />
                <Circle 
                number={10}
                text='EBook'
                />
            </Main>
        </Container>
    </div>
  )
}

export default Calculate

const Main = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height: 100%;
width: 90%;
`
const Container = styled.div`
display: flex;
justify-content: center;
background-color: #F76E2E;
width: 100%;
height: 400px;
align-items: center;
margin-bottom: 100px;
`