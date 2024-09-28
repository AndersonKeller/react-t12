import { StyledHeader, StyledName } from "./style"

export function PokemonAbilities({abilities}){
   return abilities.map((item)=>{
    return <>
    <StyledName  color="primary"> {item.ability.name}</StyledName>
    <StyledName> {item.ability.name}</StyledName>
    <StyledHeader>
      <p>Judas</p>

    </StyledHeader>
    </>
   })
        
       
}