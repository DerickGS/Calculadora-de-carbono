// import React from 'react';
import Header from "../components/Header"
import Footer from "../components/Footer"

import {InstagramLogo, GithubLogo, LinkedinLogo} from "phosphor-react"
import styles from "./TeamPage.module.css"

import DerickGs from "../img/DerickGs.jpeg"

function TeamPage() {
    return (
    
    <main>
        <Header/>
        <body>
        <div className={styles._backgroundImage}></div>
        <div className={styles._title}>
            <h1>Equipe de criação do website</h1>
        </div>
        <section>
            <div className={styles._gridCards}>
                <div className={styles._cards}>
                    <img 
                    className={styles._imgCards}
                    src={DerickGs} 
                    alt="" 
                    />
                    <h6 className={styles._titleCards} >Derick Galdino</h6>
                    <div className={styles._contacts}>
                        <InstagramLogo size={32} className={styles._contactsLogoIsta} />
                        <GithubLogo size={32} className={styles._contactsLogoGit} />
                        <LinkedinLogo size={32} className={styles._contactsLogoLinkdin} />
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
                        <InstagramLogo size={32} className={styles._contactsLogoIsta} />
                        <GithubLogo size={32} className={styles._contactsLogoGit} />
                        <LinkedinLogo size={32} className={styles._contactsLogoLinkdin} />
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
                        <InstagramLogo size={32} className={styles._contactsLogoIsta} />
                        <GithubLogo size={32} className={styles._contactsLogoGit} />
                        <LinkedinLogo size={32} className={styles._contactsLogoLinkdin} />
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
                        <InstagramLogo size={32} className={styles._contactsLogoIsta} />
                        <GithubLogo size={32} className={styles._contactsLogoGit} />
                        <LinkedinLogo size={32} className={styles._contactsLogoLinkdin} />
                    </div>
                </div>
            </div>
        </section>
        </body>
        <Footer/>
    </main>

    );
}

export default TeamPage;