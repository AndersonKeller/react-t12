import {Routes, Route} from "react-router-dom"

import { PokemonPage } from "../pages/Pokemon"
import { Home } from "../pages/Home"

export function MainRoutes(){
    return <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/pokemon/:name" element={<PokemonPage/>} />
    </Routes>
}