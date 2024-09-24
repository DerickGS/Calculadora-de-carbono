// import React from 'react';   
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./CalculationPage.module.css"
// import {calcularPegada} from "../js/CalculationPage" 

function CalculationPage() {
    return (
        <body>
            <Header/>
            <main>
                <div className={styles._backgroundImage}></div>
                <div className={styles.container_calc}>
                    <h3>Calculadora CO₂</h3>
                    <br/>
                    <div id="transportes">
                        <div className={styles.transporte_container}>
                            <label htmlFor="tipoVeiculo1">Tipo de Veículo</label>
                            <select id="tipoVeiculo1" required>
                                <option value="carro">Carro</option>
                                <option value="moto">Moto</option>
                                <option value="onibus">Ônibus</option>
                                <option value="aviao">Avião</option>
                            </select>

                            <label htmlFor="distancia1">Distância (km)</label>
                            <input type="number" id="distancia1" placeholder="Distância (km)" required/>

                            <label htmlFor="consumo1">Consumo (km/l ou m³/km)</label>
                            <input type="number" id="consumo1" placeholder="Consumo (km/l)" required/>

                            <label htmlFor="combustivel1">Combustível</label>
                            <select id="combustivel1" required>
                                <option value="gasolina">Gasolina</option>
                                <option value="etanol">Etanol</option>
                                <option value="diesel">Diesel</option>
                                <option value="gas_natural">Gás Natural</option>
                                <option value="querosene_aviacao">Querosene de Aviação</option>
                                <option value="hibrido">Híbrido</option>
                            </select>
                            <p className={styles.comentarios_pequenos}>
                                Lembre-se: ao escolher <strong>avião</strong>, selecione a opção ¨Querosene de Aviação¨ para maior precisão.
                            </p>
                        </div>
                    </div>
                    {/* <button className="botao_calc" onClick={calcularPegada()}>Calcular Pegada de Carbono</button> */}
                    <p className={styles.comentarios_pequenos}>Atenção: <strong>não</strong> deixe campos vazios.</p>
                    <h3>Pegada de Carbono Total:</h3>
                    <h2 id="resultado">0 toneladas de CO₂</h2>
                </div>
            </main>
            <Footer/>
        </body>
    );
}

export default CalculationPage;