// import React from 'react';   
import { Link } from "react-router-dom"


import Header from "../components/Header";
import Footer from "../components/Footer";

import styles from "./CalculationPage.module.css"

import {calcularPegada} from "../js/CalculationPage.js" 

import Question from "../img/question.png"
import Correct from "../img/correct.png"
import Wrong from "../img/wrong.png"

function CalculationPage() {
    return (
        <body>
            <Header/>
            <main className={styles._pageCalculation}>
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
                            <input type="number" id="distancia1" placeholder="Distância (km)" required />

                            {/* <label htmlFor="consumo1">Consumo (km/l ou m³/km)</label>
                            <input type="number" id="consumo1" placeholder="Consumo (km/l)" required/> */}

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
                


                {/* <div className={styles._tabela}>
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
                </div> */}
                <div className={styles._cardInfo}>
                    <div className="alert alert-warning fade show" role="alert">
                    <img 
                    src= {Question}
                    alt="" 
                    width="50px"
                    />
                    <br />
                    <Link className="btn btn-warning" to ={"/CuriosityPage"}>Como esse calculo é feito?</Link>
                    {/* <p className="comentarios_pequenos">Clique para saber mais.</p> */}
                    </div>
                </div>

                <div className={styles._contentTest}>
                    <h2>Calculadora de Carbono</h2>
                    <h4>Afinal, qual é o seu propósito?</h4>
                    <p>Uma calculadora de carbono é uma ferramenta projetada para estimar a quantidade de dióxido de carbono (CO₂) emitida por um indivíduo, organização ou atividade específica. Ela leva em consideração diversas atividades diárias, como o uso de eletricidade, transporte, consumo de alimentos e a produção de resíduos. O objetivo é conscientizar os usuários sobre o impacto de suas ações no meio ambiente e incentivá-los a reduzir sua pegada de carbono.</p>
                    <p>Os resultados gerados pela calculadora são geralmente expressos em toneladas de CO₂ equivalentes, que é uma medida usada para comparar as emissões de diferentes gases de efeito estufa com base no seu potencial de aquecimento global. Ao fornecer essa estimativa, as calculadoras ajudam os indivíduos e empresas a identificar as áreas em que podem fazer mudanças para reduzir suas emissões.</p>
                    <p>Além de educar e conscientizar, essas ferramentas são cada vez mais utilizadas por empresas que buscam rastrear suas emissões e desenvolver estratégias de aliviar altas emissões, alinhando-se às metas globais de redução de carbono. A implementação dessas ferramentas se tornou um passo importante na transição para uma economia de baixo carbono.</p>
                    <p>A calculadora também serve como uma ferramenta para entender como as emissões de carbono podem ser compensadas através do sistema de créditos de carbono. Quando a calculadora fornece o resultado das emissões em toneladas de CO₂, os indivíduos e empresas podem buscar a compensação através da compra de créditos de carbono, que representam a remoção ou a redução de uma tonelada de dióxido de carbono da atmosfera. Essa prática permite que aqueles que não podem reduzir completamente suas emissões neutralizem o impacto ambiental, incentivando a sustentabilidade. </p>
                    <p>Com base em pesquisas online, construímos uma tabela comparativa com diversas calculadoras de pegada de carbono, apontamos quais foram os quesitos que consideramos de maior relevância que uma calculadora de CO₂ deveria possuir. </p>
                </div>

                <div className={styles._tabela}>
                    <div className="tabela container table-responsive">
                        <table className="table table-bordered table-hover">

                            <thead className="table table-dark">
                                <tr>
                                    <th scope="col"><a className="btn btn-secondary active  ">Requisitos</a></th>
                                    <th scope="col"><a className="btn btn-outline-warning" translate="no" href="https://co2.myclimate.org/en/calculate_emissions"><p>My Climate</p></a></th>
                                    <th scope="col"><a className="btn btn-outline-warning" translate="no" href="https://www.footprintcalculator.org/home/en"><p>Footprint</p></a></th>
                                    <th scope="col"><a className="btn btn-outline-warning" translate="no" href="https://calculator.moss.earth/"><p>Moss</p></a></th>
                                    <th scope="col"><a className="btn btn-outline-warning" translate="no" href="https://iniciativaverde.org.br/calculadora"><p>Iniciativa Verde</p></a></th>
                                    <th scope="col"><a className="btn btn-outline-warning" translate="no" href="https://www.sosma.org.br/calcule-sua-emissao-de-co2"><p>SOS Mata Atlântica</p></a></th>
                                    <th scope="col"><a className="btn btn-outline-warning" translate="no" href="https://compensa.eco/calculadora/empresas/"><p>Compensa</p></a></th>
                                    <th scope="col"><a className="btn btn-outline-warning" translate="no" href="https://www.biofilica.com.br/calculadora-de-carbono-biofilica/"><p>Biolífica</p></a></th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <th scope="row">Gratuito</th>
                                    <td><img src={Correct} alt="" width="25px"/></td>
                                    <td><img src={Correct} alt="" width="25px"/></td>
                                    <td><img src={Correct} alt="" width="25px"/></td>
                                    <td><img src={Correct} alt="" width="25px"/></td>
                                    <td><img src={Correct} alt="" width="25px"/></td>
                                    <td><img src={Correct} alt="" width="25px"/></td>
                                    <td><img src={Correct} alt="" width="25px"/></td>
                                </tr>

                                <tr>
                                    <th scope="row">Cálculo Pegada de CO² Pessoal</th>
                                    <td><img src={Correct} alt="" width="25px"/></td>
                                    <td><img src={Correct} alt="" width="25px"/></td>
                                    <td><img src={Correct} alt="" width="25px"/></td>
                                    <td><img src={Correct} alt="" width="25px"/></td>
                                    <td><img src={Correct} alt="" width="25px"/></td>
                                    <td><img src={Wrong} alt="" width="25px"/></td>
                                    <td><img src={Wrong} alt="" width="25px"/></td>
                                </tr>

                                <tr>
                                    <th scope="row">Cálculo Para Empresa</th>
                                    <td><img src={Correct} alt="" width="25px"/></td>
                                    <td><img src={Wrong} alt="" width="25px"/></td>
                                    <td><img src={Correct} alt="" width="25px"/></td>
                                    <td><img src={Wrong} alt="" width="25px"/></td>
                                    <td><img src={Wrong} alt="" width="25px"/></td>
                                    <td><img src={Correct} alt="" width="25px"/></td>
                                    <td><img src={Correct} alt="" width="25px"/></td>
                                </tr>
                                
                                <tr>
                                    <th scope="row">Cálculo Consumo Energia</th>
                                    <td><img src={Correct} alt="" width="25px"/></td>
                                    <td><img src={Correct} alt="" width="25px"/></td>
                                    <td><img src={Correct} alt="" width="25px"/></td>
                                    <td><img src={Correct} alt="" width="25px"/></td>
                                    <td><img src={Correct} alt="" width="25px"/></td>
                                    <td><img src={Correct} alt="" width="25px"/></td>
                                    <td><img src={Correct} alt="" width="25px"/></td>
                                </tr>

                                <tr>
                                    <th scope="row">Cálculo Transporte Púb.</th>
                                    <td><img src={Correct} alt="" width="25px"/></td>
                                    <td><img src={Correct} alt="" width="25px"/></td>
                                    <td><img src={Correct} alt="" width="25px"/></td>
                                    <td><img src={Correct} alt="" width="25px"/></td>
                                    <td><img src={Correct} alt="" width="25px"/></td>
                                    <td><img src={Correct} alt="" width="25px"/></td>
                                    <td><img src={Correct} alt="" width="25px"/></td>
                                </tr>
                                <tr>
                                    <th scope="row">Cálculo Transporte Priv.</th>
                                    <td><img src={Correct} alt="" width="25px"/></td>
                                    <td><img src={Correct} alt="" width="25px"/></td>
                                    <td><img src={Correct} alt="" width="25px"/></td>
                                    <td><img src={Correct} alt="" width="25px"/></td>
                                    <td><img src={Correct} alt="" width="25px"/></td>
                                    <td><img src={Correct} alt="" width="25px"/></td>
                                    <td><img src={Correct} alt="" width="25px"/></td>
                                </tr>

                                <tr>
                                    <th scope="row">Cálculo Transporte Áereo</th>
                                    <td><img src={Correct} alt="" width="25px"/></td>
                                    <td><img src={Correct} alt="" width="25px"/></td>
                                    <td><img src={Correct} alt="" width="25px"/></td>
                                    <td><img src={Correct} alt="" width="25px"/></td>
                                    <td><img src={Correct} alt="" width="25px"/></td>
                                    <td><img src={Correct} alt="" width="25px"/></td>
                                    <td><img src={Correct} alt="" width="25px"/></td>
                                </tr>
                                
                                <tr>
                                    <th scope="row">Cálculo Transporte Marítimo</th>
                                    <td><img src={Correct} alt="" width="25px"/></td>
                                    <td><img src={Wrong} alt="" width="25px"/></td>
                                    <td><img src={Wrong} alt="" width="25px"/></td>
                                    <td><img src={Wrong} alt="" width="25px"/></td>
                                    <td><img src={Wrong} alt="" width="25px"/></td>
                                    <td><img src={Wrong} alt="" width="25px"/></td>
                                    <td><img src={Correct} alt="" width="25px"/></td>
                                </tr>

                                <tr>
                                    <th scope="row">Cálculo Consumo de Carne</th>
                                    <td><img src={Correct} alt="" width="25px"/></td>
                                    <td><img src={Correct} alt="" width="25px"/></td>
                                    <td><img src={Correct} alt="" width="25px"/></td>
                                    <td><img src={Wrong} alt="" width="25px"/></td>
                                    <td><img src={Wrong} alt="" width="25px"/></td>
                                    <td><img src={Wrong} alt="" width="25px"/></td>
                                    <td><img src={Wrong} alt="" width="25px"/></td>
                                </tr>

                                <tr>
                                    <th scope="row">Cálculo Gastos de Roupas</th>
                                    <td><img src={Wrong} alt="" width="25px"/></td>
                                    <td><img src={Correct} alt="" width="25px"/></td>
                                    <td><img src={Correct} alt="" width="25px"/></td>
                                    <td><img src={Wrong} alt="" width="25px"/></td>
                                    <td><img src={Wrong} alt="" width="25px"/></td>
                                    <td><img src={Wrong} alt="" width="25px"/></td>
                                    <td><img src={Wrong} alt="" width="25px"/></td>
                                </tr>

                                <tr>
                                    <th scope="row">Cálulo de Resíduos</th>
                                    <td><img src={Wrong} alt="" width="25px"/></td>
                                    <td><img src={Correct} alt="" width="25px"/></td>
                                    <td><img src={Wrong} alt="" width="25px"/></td>
                                    <td><img src={Wrong} alt="" width="25px"/></td>
                                    <td><img src={Wrong} alt="" width="25px"/></td>
                                    <td><img src={Wrong} alt="" width="25px"/></td>
                                    <td><img src={Correct} alt="" width="25px"/></td>
                                </tr>

                                <tr>
                                    <th scope="row">Cálculo Gastos de Técnologia</th>
                                    <td><img src={Correct} alt="" width="25px"/></td>
                                    <td><img src={Correct} alt="" width="25px"/></td>
                                    <td><img src={Correct} alt="" width="25px"/></td>
                                    <td><img src={Wrong} alt="" width="25px"/></td>
                                    <td><img src={Wrong} alt="" width="25px"/></td>
                                    <td><img src={Wrong} alt="" width="25px"/></td>
                                    <td><img src={Wrong} alt="" width="25px"/></td>
                                </tr>

                                <tr>
                                    <th scope="row">Compensar CO²</th>
                                    <td><img src={Correct} alt="" width="25px"/></td>
                                    <td><img src={Correct} alt="" width="25px"/></td>
                                    <td><img src={Correct} alt="" width="25px"/></td>
                                    <td><img src={Correct} alt="" width="25px"/></td>
                                    <td><img src={Correct} alt="" width="25px"/></td>
                                    <td><img src={Correct} alt="" width="25px"/></td>
                                    <td><img src={Correct} alt="" width="25px"/></td>
                                </tr>
                            </tbody>

                            <caption>
                                <p className={styles.comentarios_pequenos}>Essa tabela foi desenvolvida com base em critérios considerados de <strong>maior importância</strong> em uma calculadora de CO₂.</p>
                            </caption>
                        </table>
                    </div>
                </div>
                
                <div className={styles._contentTest}>
                    <p>A  primeira coluna está presente os fatores comparativos que consideramos de maior importância em uma calculadora de carbono. O primeiro quesito é a gratuidade, pois permite o acesso a qualquer usuário em web, sem a necessidade de fazer algum pagamento, apesar de estar na última linha, o último quesito é o de grande relevância, pois é onde que permite compensar a emissão de CO₂ a partir da compra de Créditos de Carbono.</p>
                </div>

                <div className={styles._cardInfo}>
                    <div className="alert alert-warning fade show" role="alert">
                    <img 
                    src= {Question}
                    alt="" 
                    width="50px"
                    />
                    <br />
                    <Link className="btn btn-warning"  to ={"/CuriosityPage"}>O que significa compensar CO²?</Link>
                    {/* <p className="comentarios_pequenos">O que significa compensar CO₂?</p> */}
                    </div>
                </div>

            </main>
            <Footer/>
        </body>
    );
}

export default CalculationPage;