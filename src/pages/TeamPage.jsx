// import React from 'react';
import Header from "../components/Header"
import Footer from "../components/Footer"

import {InstagramLogo, GithubLogo} from "phosphor-react"
// import {LinkedinLogo} from "phosphor-react"
import styles from "./TeamPage.module.css"

import DerickGs from "../img/DerickGs.jpeg"
import FernandoAntunes from "../img/FernandoAntunes.jpeg"
import Felipe from "../img/Felipe.jpg"
import William from "../img/William.png"
// import Img from "../img/question.png"

function TeamPage() {
    return (
    
    <body>
        <Header/>
        <main className={styles._pageTeam}>
            <div className={styles._backgroundImage}></div>
            {/* <div className={styles._title}>
                <div>
                    <h1>Equipe de criação do website</h1>
                </div>
            </div> */}
            <section>
                <div className={styles._gridCards}>

                    <div className={styles._cards}>
                        <img 
                        className={styles._imgCards}
                        src={FernandoAntunes} 
                        alt="" 
                        />
                        <h6 className={styles._titleCards} >Fernando Antunes</h6>
                        <div className={styles._contacts}>
                            <a aria-label="Link para o Istagram de Fernando Antunes" href="https://www.instagram.com/fernantunes_/" role="button" target="_blank" rel="noopener noreferrer" ><InstagramLogo size={32} className={styles._contactsLogoIsta} /></a>
                            <a aria-label="Link para o Github de Fernando Antunes" href="https://github.com/FernAntu" role="button" target="_blank" rel="noopener noreferrer" ><GithubLogo size={32} className={styles._contactsLogoGit} /></a>
                            {/* <a href="https://www.linkedin.com/in/fernando-antunes-b86a421b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><LinkedinLogo size={32} className={styles._contactsLogoLinkdin} /></a> */}
                        </div>
                    </div>

                    <div className={styles._cards}>
                        <img 
                        className={styles._imgCards}
                        src={Felipe} 
                        alt="" 
                        />
                        <h6 className={styles._titleCards} >Felipe Sampaio</h6>
                        <div className={styles._contacts}>
                            <a aria-label="Link para o Istagram Felipe Sampaio" href="https://www.instagram.com/lipe_samp/" role="button" target="_blank" rel="noopener noreferrer" ><InstagramLogo size={32} className={styles._contactsLogoIsta} /></a>
                            <a aria-label="Link para o Github Felipe Sampaio" href="https://github.com/lipe-samp" role="button" target="_blank" rel="noopener noreferrer" ><GithubLogo size={32} className={styles._contactsLogoGit} /></a>
                            {/* <a href=""><LinkedinLogo size={32} className={styles._contactsLogoLinkdin} /></a> */}
                        </div>
                    </div>

                    <div className={styles._cards}>
                        <img 
                        className={styles._imgCards}
                        src={William} 
                        alt="" 
                        />
                        <h6 className={styles._titleCards} >William Gomes</h6>
                        <div className={styles._contacts}>
                            <a aria-label="Link para o Istagram de William Gomes" href="https://www.instagram.com/willian.san99/" role="button" target="_blank" rel="noopener noreferrer" ><InstagramLogo size={32} className={styles._contactsLogoIsta} /></a>
                            <a aria-label="Link para o Github de William Gomes"href="https://github.com/WilliamSan99" role="button" target="_blank" rel="noopener noreferrer" ><GithubLogo size={32} className={styles._contactsLogoGit} /></a>
                            {/* <a href=""><LinkedinLogo size={32} className={styles._contactsLogoLinkdin} /></a> */}
                        </div>
                    </div>
                    <div className={styles._cards}>
                        <img 
                        className={styles._imgCards}
                        src={DerickGs} 
                        alt="" 
                        />
                        <h6 className={styles._titleCards} >Derick Galdino</h6>
                        <div className={styles._contacts}>
                            <a aria-label="Link para o Istagram de Derick Galdino" href="https://www.instagram.com/derickgaldi/" role="button" target="_blank" rel="noopener noreferrer" ><InstagramLogo size={32} className={styles._contactsLogoIsta} /></a>
                            <a aria-label="Link para o Github de Derick Galdino" href="https://github.com/DerickGS/" role="button" target="_blank" rel="noopener noreferrer" ><GithubLogo size={32} className={styles._contactsLogoGit} /></a>
                            {/* <a href="https://www.linkedin.com/in/derickgs/"><LinkedinLogo size={32} className={styles._contactsLogoLinkdin} /></a> */}
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <Footer/>
    </body>

    );
}

export default TeamPage;