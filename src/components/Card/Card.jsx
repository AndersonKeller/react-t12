import { useEffect, useState } from "react"
import { getPokemonInfo } from "../../Api/api"
import style from "./style.module.css"
import {  useNavigate } from "react-router-dom"
export function Card({pokemon}){
    const [image,setImage] = useState("")
    const navigate = useNavigate()
    async function getInfo(){
        const infos = await getPokemonInfo(pokemon.name)
        setImage(infos.sprites.front_default)
       
    }
    function getPokemon(){
        
        // console.log(navigate("/pokemon"))
        navigate(`/pokemon/${pokemon.name}`)
    }
    useEffect(()=>{
        getInfo()
        console.log("pokemon que chegou no card")
    },[])

    return <button onClick={getPokemon}  className={style.card}>
        <img src={image} alt="pokemon image" />
        <p>{pokemon.name}</p>
    </button>
}