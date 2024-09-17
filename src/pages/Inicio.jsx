import Header from '../components/Header'
import styles from './Inicio.module.css'

import Logo from '../assets/_iconLogo.png'

function Inicio() {



    return (
    
    
    <body>
        <Header/>
        <main className={styles}>
        <p>Inicio</p>
        <img src={Logo} alt="sal" />
        </main>
    </body>
    
    )
    }
    
    export default Inicio