import { useEffect, useState } from "react"
import {getPokemons} from "../Api/api"
import {Header} from "../components/Header/Header"
import {Main} from "../components/Main/Main"
import {List} from "../components/List/List"
export function Home(){
    const [pokemonsList,setPokemonsList] = useState([])
 
   async function get(){
    const pokemons = await getPokemons()
    setPokemonsList(pokemons.results)
   }
   
    useEffect(()=>{
        get()
        
    },[])
  return (
    <>
    <Header title="Home" />
    <Main>
      {pokemonsList.length > 0 &&
      <List  pokemonsList={pokemonsList} />
       } 
   
    </Main>
    </>
  )
}