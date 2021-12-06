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
  margin: 0 0 2% 1%;
`

const ErrorContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  color:red;
  margin-top: 15px;
  font-size: 20px;
`

const InputCard = ({...props}) => {
  return (
  <Card>
    <Label>{props.label}</Label>
    <Input name={props.name} onChange={props.onChange} value={props.value} placeholder={props.placeholder}/>
    <ErrorContainer>
    {props.errors.name ? props.errors.name : null}
    </ErrorContainer>
    
  </Card>
  )
}

export default InputCard
