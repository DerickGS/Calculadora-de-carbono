import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import InformativePage from "./pages/InformativePage"
import CalculationPage from "./pages/CalculationPage"


function Router() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/InformativePage" element={<InformativePage />} />
            <Route path="/CalculationPage" element={<CalculationPage />} />
        </Routes>
    )
}

export default Router