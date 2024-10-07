import { useState } from 'react';

// import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

import styles from "./CuriosityPage.module.css"

function CuriosityPage() {
    const [isVisible, setIsVisible] = useState(false);

    // Função para alternar a visibilidade
    const toggleVisibility = () => {
        setIsVisible(prevState => !prevState);
    };

    return (
        <main>
            <Header/>
            <body className={styles._pageCuriosity}>
                <div className={styles._backgroundImage}></div>
                <div className={styles._contentTest}>
                    <h2>Calculadora de CO₂</h2>
                    <h4>Entenda como é feito o cálculo</h4>
                    <h3>Entrada de Dados</h3>
                    <p>O usuário fornece:</p>
                    <ul>
                        <li><strong>Distância percorrida (distanciaKm)</strong>: Quantos quilômetros o usuário viajou.</li>
                        <li><strong>Tipo de veículo (tipoVeiculo)</strong>: O tipo de veículo usado (carro, moto, ônibus ou avião).</li>
                        <li><strong>Tipo de combustível (tipoCombustivel)</strong>: O combustível utilizado (gasolina, etanol, diesel, gás natural, querosene de aviação ou híbrido).</li>
                    </ul>
                    <h3>Fatores de Consumo por Tipo de Veículo</h3>
                </div>

                <dir className={styles._tabela}>
                    <div className="tabela container table-responsive">
                        <table className="table table-bordered table-hover">
                            <thead className="table table-dark">
                                <tr>
                                    <th>Tipo de Veículo</th>
                                    <th>Consumo (litros por km)</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Carro</td>
                                <td>0.1</td>
                            </tr>

                            <tr>
                                <td>Moto</td>
                                <td>0.04</td>
                            </tr>

                            <tr>
                                <td>Ônibus</td>
                                <td>0.6</td>
                            </tr>

                            <tr>
                                <td>Avião</td>
                                <td>4</td>
                            </tr>
                            
                            </tbody>
                        </table>
                    </div>
                </dir>

                <div className={styles._contentTest}>
                    <h3>Fatores de Emissão por Tipo de Combustível</h3>
                </div>

                <div className={styles._tabela}>
                    <div className="tabela container table-responsive">
                        <table className="table table-bordered table-hover">
                            <thead className="table table-dark">
                                <tr>
                                    <th>Tipo de Combustível</th>
                                    <th>Emissão (kg CO₂ por litro ou m³)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Gasolina</td>
                                    <td>2.28</td>
                                </tr>

                                <tr>
                                    <td>Etanol</td>
                                    <td>1.867</td>
                                </tr>

                                <tr>
                                    <td>Diesel</td>
                                    <td>3.2</td>
                                </tr>

                                <tr>
                                    <td>Gás Natural</td>
                                    <td>1.824</td>
                                </tr>

                                <tr>
                                    <td>Querosene de Aviação</td>
                                    <td>0.12</td>
                                </tr>

                                <tr>
                                    <td>Híbrido</td>
                                    <td>1.14</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className={styles._contentTest}>
                    <h3>Cálculo da Pegada de Carbono</h3>
                    <p>A fórmula para calcular a pegada de carbono (<strong>PegadaCarbono</strong>) é:</p>
                    <p><strong>PegadaCarbono = ConsumoTotal x FatorEmissao</strong></p>
                    <p>onde:</p>
                    <p><strong>ConsumoTotal = DistanciaKM x FatorConsumo</strong></p>
                    <h3>Exemplo de Cálculo</h3>
                    <p>Suponha que o usuário percorreu 100 km em um carro utilizando gasolina.</p>
                    <h3>Dados fornecidos:</h3>
                    <ul>
                        <li><strong>DistanciaKM = 100</strong> KM</li>
                        <li><strong>TipoVeiculo = ¨carro¨</strong> → <strong>FatorConsumo = 0.1</strong> (litros por km)</li>
                        <li><strong>TipoCombustivel = ¨gasolina¨</strong> → <strong>FatorEmissao = 2.28</strong> (kg CO₂ por litro)</li>
                    </ul>
                </div>


                <div>
            <button id="toggleButton" onClick={toggleVisibility}>
                {isVisible ? "Ocultar Referências" : "Mostrar Referências"}
            </button>
            <div className={`${styles.toggleText} ${isVisible ? styles.show : styles.hidden}`}>
                Aqui estão algumas referências.
            </div>

        </div>

            </body>
            <Footer/>
        </main>
    );
}

export default CuriosityPage;