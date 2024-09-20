import { useEffect, useState } from "react"
import { getPokemonInfo } from "../../Api/api"
import style from "./style.module.css"
export function Card({pokemon}){
    const [image,setImage] = useState("")
    async function getInfo(){
        const infos = await getPokemonInfo(pokemon.name)
        console.log(infos,"infos")
        setImage(infos.sprites.front_default)
    }
    useEffect(()=>{
        getInfo()
    },[])
    return <li className={style.card}>
        <img src={image} alt="pokemon image" />
        <p>{pokemon.name}</p>
    </li>
}