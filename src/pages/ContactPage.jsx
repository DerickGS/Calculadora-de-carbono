import {useState}  from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

import styles from "./ContactPage.module.css"

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
                {/* <h1 className={styles}>Pagina de contato</h1> */}
                <div>
                    <form className={styles._formEmail} action="https://formsubmit.co/derick@eaportal.org" method="POST">
                        <h3>Conte-nos o que você achou!</h3>
                        <div className={styles._inputName}>
                            <input type="text" name="first name" placeholder="Nome:" required></input>
                            <input type="text" name="lastname" placeholder="Sobrenome:" required></input>
                        </div>
                        <input type="email" name="email" placeholder="Email:" required></input>
                        <input id="phone" value={phone} onChange={handleInputChange} type="tel" name="numeroContato" placeholder="Número de Contato:" required></input>
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