
import style from "./style.module.css"
import { Card } from "../Card/Card"

export function List({pokemonsList, }){
   
 

    return <ul className={style.ul}>
        {pokemonsList.map((pokemon)=>{
            return <Card key={pokemon.name} lista={pokemonsList} pokemon={pokemon}/>
        })}
    </ul>
}