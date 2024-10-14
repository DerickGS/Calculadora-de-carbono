import { Link } from "react-router-dom"

import styles from "./Footer.module.css"
import Logo from "../assets/_iconLogo.png"


function Footer() {

    const currentYear = new Date().getFullYear(); //data copyright footer           .- .-. . / -.-- --- ..- / -.-. ..- .-. .. --- ..- ... ..--..

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
       }

    return (
        <footer>
            <div className={styles._grid}>
                <Link to ={"/CuriosityPage"}>Curiosidades</Link>
                <Link to ={"/ContactPage"}>Contato</Link>
                <Link to ={"/TeamPage"}>Equipe</Link>
            </div>
            <hr />
            <div className={styles._imgLogo}>
                <img
                role="button"
                onClick={scrollToTop}
                src={Logo} 
                alt="logo" 
                />
            </div>    
            <div className={styles._footer}>
                <p>© {currentYear}</p>
            </div>
        </footer>
    )
}

export default Footer





// ༼ つ ◕_◕ ༽つ By: DerickGS