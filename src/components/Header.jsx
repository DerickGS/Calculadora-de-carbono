import { Link } from "react-router-dom"

import styles from './Header.module.css'
import Logo from '../assets/_iconLogo.png'


function Header() {



    return (
        <header>
            <div className={styles.desktop}>
                <Link to={"/Inicio"}>
                    <img src={Logo} className={styles.logo} alt="sal"/>
                </Link>
                <h1 className={styles.mark}>FFWD</h1>
            </div>
        </header>
    )
}

export default Header