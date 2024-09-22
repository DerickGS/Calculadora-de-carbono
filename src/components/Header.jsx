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
                    <Link to={"/Home"}><p translate="no" className={styles.option}> Home</p></Link>
                    <Link to={"/InformativePage"}><p className={styles.option}>Informativo</p></Link>
                    <Link to={"/"}><p className={styles.option}>Calculadoar CO₂</p></Link>
                    <button onClick={handleAbrirFecharMenu}>
                        <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path></svg>
                    </button>
                </div>
            </div>
            <div className={`${styles.close} ${abrirMenu === true && styles.open}`}>
                <nav className={styles.options_menu}>
                    <Link to={"/"} className={styles.button_options} ><p>Curiosidade</p></Link>
                    <Link to={"/"} className={styles.button_options} ><p>Equipe</p></Link>
                </nav>
            </div>
        </header>
    )
}

export default Header