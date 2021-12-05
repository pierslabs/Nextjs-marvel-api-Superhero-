import React from 'react'
import styled from 'styled-components'
import MarvelLogo from '../public/marvelLogo.png'
import Image from 'next/image'


const Container = styled.div`
  display: flex;
  width:100%;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  background: black;
  height:10%;
  padding: 5px;

  @media (max-width: 800px) {
   height: 50px;
    margin-bottom: 5%;
    border-bottom: 1px solid #444;
    padding-bottom: 5px;
  }

`
const Title = styled.h1`
  color:white;
  font-size: 50px;
  margin-left:auto;
  margin-right: auto;

  @media (max-width: 800px) {
    font-size: 35px;
    margin-left: auto;
    margin-right: auto;
  }
`

const ImageContainer = styled.div`
   @media (max-width: 800px) {
    width:20%;
  }
` 

const Nav = () => {
  return (
  
      <Container>
        <ImageContainer>
        <Image  src={MarvelLogo} height={80} width={130}  />
        </ImageContainer>
        <Title>SuperHero Api</Title>
      </Container>

  );
};

export default Nav;
