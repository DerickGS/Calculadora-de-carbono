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
            </body>
            <Footer/>
        </main>
    );
}

export default ContactPage;