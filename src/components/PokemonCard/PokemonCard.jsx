import { useEffect } from "react"
import style from "./style.module.css"
import { PokemonAbilities } from "./PokemonAbilities"

export function PokemonCard({pokemon}){
    useEffect(()=>{
        console.log(pokemon,"pokemon pokemonCard")
    },[])
    return <div className={style.main}>
        <img src={pokemon.sprites.front_default} alt="" />
        <p>{pokemon.name}</p>
        <p>Abilities</p>
        <PokemonAbilities abilities={pokemon.abilities} />
    </div>
}