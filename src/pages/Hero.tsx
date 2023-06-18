import styled from 'styled-components'
import img from '../assets/slider5.jpg'
import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (
    <div>
      <Container>
        <Card>
          <Title>Get Your New Book With Best Price Find Your Book Now</Title>
          <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunta sunt quaerat, eligendi ad, ipsum sit culpa porro fuga atque andersi delectus nostrum sapiente cupiditate.</Text>
          <Box>
              <Input placeholder="KeyWord"/>
              <Line></Line>
              <Select>
                <option value="">RELIGION</option>
                <option value="">YES OOO</option>
                <option value="">YES OOO</option>
                <option value="">YES OOO</option>
                <option value="">YES OOO</option>
              </Select>
              <Line></Line>
              <Select>
                <option value="">RELIGION</option>
                <option value="">YES OOO</option>
                <option value="">YES OOO</option>
                <option value="">YES OOO</option>
                <option value="">YES OOO</option>
              </Select><Button> Search</Button>
          </Box>
          <Div>
            <T1>Popular Searches :</T1>
            <Links to="">Education </Links>
            <Links to="">Fine Arts </Links>
            <Links to="">History  </Links>
            <Links to="">Music  </Links>
            <Links to=""> Philosophy  </Links>
            <Links to="">  Religion  </Links>
          </Div>
        </Card>
      </Container>
    </div>
  )
}

export default Hero

const Links = styled(NavLink)`
margin-left: 15px ;
color: white;
`
const T1 = styled.div` 
font-weight: 500;
`
const Div = styled.div`
display: flex;
color: white;
font-size: 17px;
margin-top: 15px;
`
const Button = styled.div`
width: 120px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
/* margin-left: 25px; */
color: black;
background-color: orange;
font-size: 15px;
font-weight: 500;
margin-right: 10px;
`

const Select = styled.select`
margin-left: 7px;
margin-right: 10px;
border: none;
width: 170px;
outline: none;
color: gray;
  font-size: 15px;
`
const Line = styled.div`
width: 2px;
height: 30px;
background-color: silver;
`

const Input = styled.input`
overflow: hidden;
outline: none;
border: none;
margin-left: 10px ;
width: 200px;

::placeholder{
  font-size: 15px;
  padding-left: 15px;
}
`
const Box = styled.div`
background-color: white;
border-radius: 5px;
width: 55%;
height: 80px;
display: flex;
align-items: center;
`
const Text = styled.div`
font-size: 20px;
color: #d7d6d6;
width: 52%;
text-align: center;
margin: 40px 0;
`
const Title = styled.div`
font-size: 45px;
width: 58%;
font-weight: 700;
color: white;
text-align: center;
`
const Card = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
background-color: rgba(116, 218, 14, 0.2);
`

const Container = styled.div`
  width: 100%;
  display: flex;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 700px;
`