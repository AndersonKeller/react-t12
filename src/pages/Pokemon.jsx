import { useParams } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Main } from "../components/Main/Main";
import { PokemonCard } from "../components/PokemonCard/PokemonCard";
import { useEffect, useState } from "react";
import { getPokemonInfo } from "../Api/api";

export function PokemonPage(){
    const [pokemon,setPokemon] = useState(false)
    const params = useParams()
    async function getPokeInfo(){
        const res = await getPokemonInfo(params.name)
        //console.log(res,"Res")
        setPokemon(res)
    }
    useEffect(()=>{
        console.log(params,"params")
        getPokeInfo()
    },[])
    return <>
    <Header title="pokemon"/>
    <Main>
        {pokemon && <PokemonCard pokemon={pokemon} />}
    </Main>
    </>
}