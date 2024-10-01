// import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

import styles from "./ContactPage.module.css"

function ContactPage() {
    return (
        <main>
            <Header/>
            <body>
                <h1 className={styles}>Pagina de contato</h1>
                <div>
                    <form className={styles._formEmail} action="https://formsubmit.co/derick@eaportal.org" method="POST">
                        <div className={styles._inputName}>
                            <input type="text" name="first name" placeholder="Nome:" required></input>
                            <input type="text" name="lastname" placeholder="Sobrenome:" required></input>
                        </div>
                        <input type="email" name="email" placeholder="Email:" required></input>
                        <input id="phone" type="tel" name="numeroContato" placeholder="Número de Contato:" required></input>
                        <textarea name="message" placeholder="Mensagem:" required></textarea>
                        <button>Enviar</button>
                    </form>
                </div>
            </body>
            <Footer/>
        </main>
    );
}

export default ContactPage;