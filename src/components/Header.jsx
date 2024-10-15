import { Link } from "react-router-dom"
import { useState } from "react"

import styles from "./Header.module.css"
import Logo from "../assets/_iconLogo.png"
import FFWD from "../img/FFWD.png"
import {CaretDown, List, X} from "phosphor-react"
import {House, Info, Calculator, Question, UsersThree, PaperPlaneTilt} from "phosphor-react"


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
                        <Link to={"/Home"} role="button" aria-label="Voltar para a home">
                            <img 
                            src={Logo} 
                            alt="Logo da empresa FFWD" 
                            className={styles.logo}
                            />
                            {/* <p><samp className={styles.mark}>FFWD</samp></p> */}
                        </Link>
                    </div>
                    <div className={styles.options}>
                        <Link to={"/Home"}><p translate="no" className={styles.option}> Home</p></Link>
                        <Link to={"/InformativePage"}><p className={styles.option}>Informativo</p></Link>
                        <Link to={"/CalculationPage"}><p className={styles.option}>Calculadora CO₂</p></Link>
                        <button role="button" aria-label="Abrir menu de outras opções" onClick={handleAbrirFecharMenu}>
                            <CaretDown className={styles.icon} size={32} />
                        </button>
                    </div>
                </div>
                <div className={`${styles.close} ${abrirMenu === true && styles.open}`}>
                    <nav className={styles.options_menu}>
                        <Link to={"/CuriosityPage"} className={styles.button_options} ><p>Curiosidade</p></Link>
                        <Link to={"/ContactPage"} className={styles.button_options} ><p>Contato</p></Link>
                        <Link to={"/TeamPage"} className={styles.button_options} ><p>Equipe</p></Link>
                    </nav>
                </div>
            </div>


            <div className={styles.mobile}>
                <div className={styles.mobileComponents}>
                    <div className={styles.mark_imgText}>
                        <Link to={"/Home"} role="button" aria-label="Voltar para a home">
                            <img
                            className={styles.logo_FFWD} 
                            src={FFWD} 
                            alt="Logo da empresa FFWD Carbon Credits" 
                            />
                        </Link>
                    </div>
                    <button role="button" aria-label="Abrir menu de navegação" onClick={handleAbrirFecharMenu}>
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
                        <Link onClick={handleAbrirFecharMenu} to={"/Home"}><p translate="no" className={styles.option}> Home  <House size={21} /></p></Link>
                        <hr />
                        <Link onClick={handleAbrirFecharMenu} to={"/InformativePage"}><p className={styles.option}>Informativo  <Info size={21} /></p></Link>
                        <hr />
                        <Link onClick={handleAbrirFecharMenu} to={"/CalculationPage"}><p className={styles.option}>Calculadora CO₂  <Calculator size={21} /></p></Link>
                        <hr />
                        <Link onClick={handleAbrirFecharMenu} to={"/CuriosityPage"} className={styles.button_options} ><p>Curiosidade  <Question size={21} /></p></Link>
                        <hr />
                        <Link onClick={handleAbrirFecharMenu} to={"/ContactPage"} className={styles.button_options} ><p>Contato  <PaperPlaneTilt size={21} /></p></Link>
                        <hr />
                        <Link onClick={handleAbrirFecharMenu} to={"/TeamPage"} className={styles.button_options} ><p>Equipe  <UsersThree size={21} /></p></Link>
                        <a onClick={handleAbrirFecharMenu} className={styles._headerClose}></a>
                    </nav>
                </div>
            </div>
        </header>
        
    )
}

export default Header

