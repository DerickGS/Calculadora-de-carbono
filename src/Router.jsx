import { Routes, Route } from "react-router-dom"

import Inicio from "./pages/Inicio"



function Router() {
    return(
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/Inicio" element={<Inicio />} />
        </Routes>
    )
}

export default Router