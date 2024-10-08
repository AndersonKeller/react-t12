import axios from "axios";

const api = axios.create({
    baseURL:"https://pokeapi.co/api/v2/pokemon/",
    timeout:5000
})
export async function getPokemons(){
    const res = await api.get("/")
   
    return res.data
}
export async function getPokemonInfo(name=""){

    const res = await api.get(name)
   
    return res.data
}