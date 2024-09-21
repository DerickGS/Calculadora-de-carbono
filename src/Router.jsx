import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import InformativePage from "./pages/InformativePage"



function Router() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/InformativePage" element={<InformativePage />} />
        </Routes>
    )
}

export default Router