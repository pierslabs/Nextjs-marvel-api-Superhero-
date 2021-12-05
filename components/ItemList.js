import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'


const Item = styled.li`
  font-size: 40px;

  @media (max-width: 700px) {
    font-size: 30px;
  }
`



const ItemList = ({name, id}) => {
  return <Item><Link href={`/heroes/${id}`}>{name}</Link></Item>;
}

export default ItemList
