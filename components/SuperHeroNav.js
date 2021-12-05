import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import  MarvelLogo from '../public/marvelLogo.png'

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  background: black;
  height: 10%;
  padding: 5px;

  @media (max-width: 800px) {
    height: 70px;
    margin-bottom: 5%;
    border-bottom: 1px solid #444;
    padding-bottom: 5px;
  }
`;
const Title = styled.h1`
  color:white;
  font-size: 50px;
  margin-left:auto;
  margin-right: auto;

  @media (max-width: 800px) {
    font-size: 25px;
    margin-left: auto;
    margin-right: auto;
  }
`

const ImageContainer = styled.div`
   @media (max-width: 800px) {
    width:20%;
  }
` 

const SuperHeroNav = ({name}) => {
  return (
    <Container>
        <ImageContainer>
        <Image alt='' src={MarvelLogo} height={80} width={130}  />
        </ImageContainer>
        <Title>{name}</Title>
      </Container>
  )
}

export default SuperHeroNav;
