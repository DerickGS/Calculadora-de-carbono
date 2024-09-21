import { Link } from "react-router-dom"
import { useState } from "react"

import styles from "./Header.module.css"
import Logo from "../assets/_iconLogo.png"


function Header() {

    const [abrirMenu, setAbrirMenu] = useState(false)

    function handleAbrirFecharMenu() {
    if (abrirMenu === true) {
        setAbrirMenu(false)
        return
    }

    setAbrirMenu(true)
}

    return (
        <header>
            <div className={styles.desktop}>
                <div className={styles.mark_imgText}>
                    <Link to={"/Home"}>
                        <img 
                        src={Logo} 
                        alt="Logo da empresa" 
                        className={styles.logo}
                        />
                        {/* <p><samp className={styles.mark}>FFWD</samp></p> */}
                    </Link>
                </div>
                <div className={styles.options}>
                    <Link to={"/Home"}><p translate="no">Home</p></Link>
                    <Link to={"/InformativePage"}><p className={styles.option}>Informativo</p></Link>
                    <Link to={"/"}><p className={styles.option}>Calculadoar CO₂</p></Link>
                    <button onClick={handleAbrirFecharMenu}>
                    </button>
                    <div className={`${styles.close} ${abrirMenu === true && styles.open}`}>
                        <nav className={styles.options_menu}>
                            <Link to={"/"} className={styles.button_options} ><p>Curiosidade</p></Link>
                            <Link to={"/"} className={styles.button_options} ><p>Equipe</p></Link>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header