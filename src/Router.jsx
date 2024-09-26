import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import InformativePage from "./pages/InformativePage"
import CalculationPage from "./pages/CalculationPage"
import TeamPage from "./pages/TeamPage"
import ContactPage from "./pages/ContactPage"
import CuriosityPage from "./pages/CuriosityPage"


function Router() {
    return(
        <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/InformativePage" element={<InformativePage />} />
                <Route path="/CalculationPage" element={<CalculationPage />} />
                <Route path="/TeamPage" element={<TeamPage />} />
                <Route path="/ContactPage" element={<ContactPage />} />
                <Route path="/CuriosityPage" element={<CuriosityPage />} />
        </Routes>
    )
}

export default Router