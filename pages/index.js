import { useState } from 'react';
import { useFormik } from 'formik';
import styled from 'styled-components'
import Nav from "../components/Nav";
import InputCard from "../components/InputCard";
import List from "../components/List";
import ItemList from "../components/ItemList";
import {validate} from '../validates'


const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FormContainer = styled.form`
  display: flex;
  justify-content: space-around;
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`

export default function Home({heroes}) {

  const [superHeroSearch, setSuperHeroSearch] = useState({
    name: "",
    search:{}
  });

  const [search, setSearch] = useState(false);
  


  const handleSubmit = async() => {

    const res = await fetch(
      `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${formik.values.name}&limit=100&ts=${process.env.NEXT_PUBLIC_TS}&apikey=${process.env.NEXT_PUBLIC_PUBLIC_MARVEL_KEY}&hash=${process.env.NEXT_PUBLIC_HASH}`,{
        
      }
    );

    
    const data = await res.json();
    setSuperHeroSearch({ name: "", search: data });

    console.log(data)
    setSearch(true)
  }

  const formik = useFormik({
    initialValues: superHeroSearch,
    onSubmit: handleSubmit,
    validate: (values) => validate(values),
  });

  return (
    <div>
      <Nav />
      <Container>
        <FormContainer onSubmit={formik.handleSubmit}>
          <InputCard
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            errors={formik.errors}
            label="Search Super Hero"
            placeholder=" Search Alphabetically"
          />
        </FormContainer>
        <List title="SuperHero List">
          {!search
            ? heroes.map((heroe) => (
                <ItemList key={heroe.id} name={heroe.name} id={heroe.id} />
              ))
            : superHeroSearch.search.data.results.map((heroe) => (
                <ItemList key={heroe.id} name={heroe.name} id={heroe.id} />
              ))}
        </List>
      </Container>
    </div>
  );
}

export const getStaticProps = async() => {
  const res = await fetch(`${process.env.API_URL}/characters?ts=${process.env.TS}&apikey=${process.env.PUBLIC_MARVEL_KEY}&hash=${process.env.HASH}`);
  const data = await res.json();
   return {
    props: { heroes:data.data.results}
  }
}




