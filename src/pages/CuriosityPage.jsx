// import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

import styles from "./CuriosityPage.module.css"

function CuriosityPage() {
    return (
        <main>
            <Header/>
            <body>
                <h1 className={styles} >Curiosidades</h1>
            </body>
            <Footer/>
        </main>
    );
}

export default CuriosityPage;