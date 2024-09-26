// import React from 'react';   
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./CalculationPage.module.css"
import {calcularPegada} from "../js/CalculationPage" 

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
                    <button className={styles.botao_calc} onClick={calcularPegada}>Calcular Pegada de Carbono</button>
                    <p className={styles.comentarios_pequenos}>Atenção: <strong>não</strong> deixe campos vazios.</p>
                    <h3>Pegada de Carbono Total:</h3>
                    <h2 id="resultado">0 toneladas de CO₂</h2>
                </div>


                <div className={styles._tabela}>
                    <div className="tabela container table-responsive">
                        <table className="table table-bordered table-hover">
                        <thead className="table table-dark">
                            <tr>
                                <th scope="col"><p>CO<sub>2</sub> em Toneladas</p></th>
                                <th scope="col"><p>Preço para compensar</p></th>
                                <th scope="col"><p>Equivale a quantas àrvores</p></th>
                                <th scope="col"><p>Tempo necessário</p></th>
                                <th scope="col"><p>Área restaurada m<sup>2</sup></p></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td ><p>1</p></td>
                                <td><p>R$20,00-R$50,00</p></td>
                                <td><p>10-20 árvores</p></td>
                                <td><p>10-20 Ano(s)</p></td>
                                <td>50-100m<sup>2</sup></td>
                            </tr>
                            <tr>
                                <td ><p>5</p></td>
                                <td><p>R$100,00-R$250,00</p></td>
                                <td><p>50-100 árvores</p></td>
                                <td><p>10-20 Ano(s)</p></td>
                                <td>250-500m<sup>2</sup></td>
                            </tr>
                            <tr>
                                <td><p>10</p></td>
                                <td><p>R$200,00-R$500,00</p></td>
                                <td><p>100-200 árvores</p></td>
                                <td><p>10-20 Ano(s)</p></td>
                                <td>500-1.000m<sup>2</sup></td>
                            </tr>
                            <tr>
                                <td><p>30</p></td>
                                <td><p>R$ 500,00-R$ 1.250,00</p></td>
                                <td><p>250-500 árvores</p></td>
                                <td><p>10-20 Ano(s)</p></td>
                                <td>1.250-2.500m<sup>2</sup></td>
                            </tr>
                            <tr>
                                <td><p>50</p></td>
                                <td><p>R$1.000,00-R$2.500,00</p></td>
                                <td><p>500-1.000 árvores</p></td>
                                <td><p>10-20 Ano(s)</p></td>
                                <td>2.500-5.000m<sup>2</sup></td>
                            </tr>
                            <tr>
                                <td><p>100</p></td>
                                <td><p>R$2.000,00-R$5.000,00</p></td>
                                <td><p>1.000-2.000 árvores</p></td>
                                <td><p>10-20 Ano(s)</p></td>
                                <td>5.000-10.000m<sup>2</sup></td>
                            </tr>
                            <tr>
                                <td><p>500</p></td>
                                <td><p>R$10.000,00-R$ 25.000,00</p></td>
                                <td><p>5.000-10.000 árvores</p></td>
                                <td><p>10-20 Ano(s)</p></td>
                                <td>25.000-50.000m<sup>2</sup></td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </div>
            </main>
            <Footer/>
        </body>
    );
}

export default CalculationPage;