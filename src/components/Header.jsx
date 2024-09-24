import { Link } from "react-router-dom"
import { useState } from "react"

import styles from "./Header.module.css"
import Logo from "../assets/_iconLogo.png"
import {CaretDown, List, X} from "phosphor-react"


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
                <div className={styles.desktopComponents}>
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
                        <Link to={"/CalculationPage"}><p className={styles.option}>Calculadoar CO₂</p></Link>
                        <button onClick={handleAbrirFecharMenu}>
                            <CaretDown className={styles.icon} size={32} />
                        </button>
                    </div>
                </div>
                <div className={`${styles.close} ${abrirMenu === true && styles.open}`}>
                    <nav className={styles.options_menu}>
                        <Link to={"/"} className={styles.button_options} ><p>Curiosidade</p></Link>
                        <Link to={"/"} className={styles.button_options} ><p>Equipe</p></Link>
                    </nav>
                </div>
            </div>


            <div className={styles.mobile}>
                <div className={styles.mobileComponents}>
                    <div className={styles.mark_imgText}>
                        <Link to={"/Home"}>
                            <img 
                            src={Logo} 
                            alt="Logo da empresa" 
                            className={styles.logo}
                            />
                        </Link>
                    </div>
                        <button onClick={handleAbrirFecharMenu}>
                        {
                            abrirMenu === true ? (
                            <X className={styles.icon} size={32} />
                            ) : (
                            <List className={styles.icon} size={32} />
                            )
                        }
                        </button>
                </div>
                <div className={`${styles.close} ${abrirMenu === true && styles.open}`}>
                    <nav className={styles.options_menuMobile}>
                        <Link to={"/Home"}><p translate="no" className={styles.option}> Home</p></Link>
                        <hr />
                        <Link to={"/InformativePage"}><p className={styles.option}>Informativo</p></Link>
                        <hr />
                        <Link to={"/"}><p className={styles.option}>Calculadoar CO₂</p></Link>
                        <hr />
                        <Link to={"/"} className={styles.button_options} ><p>Curiosidade</p></Link>
                        <hr />
                        <Link to={"/"} className={styles.button_options} ><p>Equipe</p></Link>
                    </nav>
                </div>
            </div>
        </header>
        
    )
}

export default Header

