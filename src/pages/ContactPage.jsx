import {useState}  from 'react';

import Header from "../components/Header";
import Footer from "../components/Footer";

import styles from "./ContactPage.module.css"
import {PaperPlaneTilt} from "phosphor-react"

function ContactPage() {

    const [phone, setPhone] = useState('');

    const handleInputChange = (e) => {
        const input = e.target.value.replace(/\D/g, '');
        let formattedPhone;
    
        if (input.length === 11) {
            formattedPhone = input.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        } else if (input.length === 10) {
            formattedPhone = input.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
        } else {
            formattedPhone = input;
        }
        setPhone(formattedPhone);
    };

    
    return (
        <main>
            <Header/>
            <body>
                {/* <samp aria-label="Página atual: Contato"></samp> */}
                <div>
                    <form className={styles._formEmail} action="https://formsubmit.co/derick@eaportal.org" method="POST">
                        <h3>Conte-nos o que você achou!</h3>
                        <div className={styles._inputName}>
                            <div className={styles._formInput}>
                                <label>Primeiro nome</label>
                                <input type="text" name="first name" placeholder="Nome:" required />
                            </div>
                            <div className={styles._formInput}>
                                <label>Sobrenome</label>
                                <input type="text" name="lastname" placeholder="Sobrenome:" required />
                            </div>
                        </div>
                        <div className={styles._formInput}>
                            <label>Endereço de e-mail</label>
                            <input type="email" name="email" placeholder="Email:" required />
                        </div>
                        <div className={styles._formInput}>
                            <label>Número de Contato</label>
                            <input id="phone" value={phone} onChange={handleInputChange} type="tel" name="numeroContato" placeholder="Número de Contato:" required />
                        </div>
                        <div className={styles._formInput}>
                            <label>Mensagem</label>
                            <textarea name="message" placeholder="Mensagem:" required />
                        </div>

                        <button className="btn btn-warning"> <PaperPlaneTilt size={21} /> Enviar Mensagem</button>
                        <div className={styles.loader}></div>
                    </form>
                </div>
            </body>
            <Footer/>
        </main>
    );
}

export default ContactPage;