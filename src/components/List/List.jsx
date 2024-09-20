import { useState } from "react"
import { getPokemons } from "../../Api/api"
import { useEffect } from "react"
import style from "./style.module.css"
import { Card } from "../Card/Card"

export function List(){
    const [pokemonsList,setPokemonsList] = useState([])
    const [title,setTitle] = useState("")

   async function get(){
    const pokemons = await getPokemons()
    console.log(pokemons,"pokemons")
    // pokemonsList= pokemons.results
    setPokemonsList(pokemons.results)
   }
   function updateTitle(){
        setTitle("Pokemons")
   }
   function limpar(){
    setPokemonsList([])
   }
    // get()
    useEffect(()=>{
        get()
    },[])
    useEffect(()=>{
        updateTitle()
    },[pokemonsList])

    return pokemonsList.length > 0 ?
        <><p>{title}</p>
        <button onClick={limpar}>Limpar</button>
        <ul className={style.ul}>
        {pokemonsList.map((pokemon)=>{
            return <Card pokemon={pokemon}/>
        })}
    </ul></>:
    <>
    <button onClick={get}>Listar</button>
    <div>Carregando...</div>
    </> 
}