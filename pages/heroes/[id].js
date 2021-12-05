import { useRouter } from 'next/router'

import styled from 'styled-components'
import Link from 'next/link'
import SuperHeroNav from '../../components/SuperHeroNav'
import Image from "next/image"
import List from '../../components/List'

const Heroe = ({heroe}) => {
  const router = useRouter();
  
  if(router.isFallback){
    return(
      <p>cargando...</p>
    )
  }
console.log(heroe)

  const SuperHeroeContainer = styled.div`
    display: flex;
    justify-content:space-around;
    align-items: flex-start;
    @media (max-width: 700px) {
      flex-direction: column;
      align-items: center;
    }
  `;

  const ImageContainer = styled.div`
    overflow: hidden;
    padding: 1px;
    border-radius: 50%;
    width: 20%;
    @media (max-width: 700px) {
      width: 70%;
    }
  `;

  const A = styled.a`
    text-decoration: underline;
    font-size: 30px;
    @media (max-width: 700px) {
      font-size: 20px;
   
    }
  `

  const LinkContainer = styled.div`
    text-align: center;
    font-size: 30px;
    color: #08f;
    margin: 10% 0 0 0 ; 
    @media (max-width: 700px) {
      font-size: 25px;
      margin-top: 30%;
      text-align: right;
    }  
  `
    
  const imageHeroe = `${heroe.thumbnail.path}.${heroe.thumbnail.extension}`
    
  return (
    <div>
      <SuperHeroNav name={heroe.name} />
      <SuperHeroeContainer>
        <ImageContainer>
          <Image
            src={imageHeroe}
            width={500}
            height={500}
            layout="responsive"
          />
        </ImageContainer>
        <List title="SuperHero data tech">
          <h2>Descripcion y Biografía en:</h2>
          <A
            style={{ textDecoration: "underLine", color: "yellow" }}
            rel="noreferrer"
            target="_blank"
            href={heroe.urls[0].url}
          >
            {heroe.name} data tech
          </A>
          <LinkContainer>
        <Link href="/"> ⬅ Come back</Link>
      </LinkContainer>
        </List>
      </SuperHeroeContainer>
      
    </div>
  );
}

export default Heroe


export const getStaticProps = async({params}) => {
  const res = await fetch(`https://gateway.marvel.com/v1/public/characters/${params.id}?limit=20&ts=${process.env.NEXT_PUBLIC_TS}&apikey=${process.env.NEXT_PUBLIC_PUBLIC_MARVEL_KEY}&hash=${process.env.NEXT_PUBLIC_HASH}`);
  const data = await res.json();
  return {props: {heroe: data.data.results[0]}}
}

export const getStaticPaths = async() => {
  const paths =[
    {params:{id:'1011334'}}
  ]

  return {
    paths,
    fallback: true,
  }; 
 }
 