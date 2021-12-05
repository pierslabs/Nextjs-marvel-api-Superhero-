import React from 'react'
import styled from 'styled-components'
import ItemList from './ItemList'


const ListContainer = styled.ul`
  border-left: solid #444 1px;
  width: 40%;
  list-style: none;
  padding-left: 5%;
  box-sizing: border-box;
  
  @media (max-width: 700px) {
    width: 90%;
    border: none;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: #eee;
  border-bottom: solid 1px #777;
  padding-bottom: 10px;
`


const List = ({ children , title}) => {
  return (
    <ListContainer>
      <Title>{title}</Title>
      {children}
    </ListContainer>
  );
};

export default List



