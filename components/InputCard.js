import React from 'react'
import styled from 'styled-components'


const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border: solid blue 1px;
  width: 100%;
  padding: 20px;
  border-radius: 2rem;
  background-color: rgba(255, 255, 255, 0.4);
  margin: 2%;
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    width: 90%;
  }
`;

const Input = styled.input`
  height: 50px;
  outline: none;
  border-radius: 15px;
  width:100%;
  box-sizing:content-box ;
  font-size: 25px;
  color: #666;
  padding: 5px 10px;
  @media (max-width: 700px) {
    width: 90%;
  }
`
const Label = styled.label`
  font-size: 30px;
  margin-right: 2%;
`

const InputCard = ({name, onChange}) => {
  return (
  <Card>
    <Label>Search SuperHero</Label>
    <Input name={name} onChange={onChange}/>
  </Card>
  )
}

export default InputCard
