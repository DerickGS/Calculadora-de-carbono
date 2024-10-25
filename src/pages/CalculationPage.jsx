// import React from 'react';   
import { Link } from "react-router-dom"


import Header from "../components/Header";
import Footer from "../components/Footer";

import styles from "./CalculationPage.module.css"

import {calcularPegada} from "../js/CalculationPage.js" 
import {bloquearCombustivelPassageiros} from "../js/CalculationPage.js" 
import {calcularArvore} from "../js/CalcTree.js" 
import {calcularCredito} from "../js/CalcTree.js" 

import Question from "../img/question.png"
import Correct from "../img/correct.png"
import Wrong from "../img/wrong.png"

import Poluicao from "../img/poluicao_icon.png"
import Arvore from "../img/tree_icon.png"
import Moeda from "../img/coin_icon.png"

function CalculationPage() {
    return (
        <body>
            <Header/>
            <main className={styles._pageCalculation}>
                <div className={styles._backgroundImage}></div>
                {/* <samp aria-label="Página atual: Calculadora CO₂"></samp> */}
                <div className={styles._contentTest}>
                    <h2>Vamos Calcular!</h2>
                    <h4>Abaixo teremos a calculora de pegada de carbono de veículos</h4>
                </div>
                <div className={styles.container_calc}>
                    <h2>Calculadora CO₂</h2>
                    <br/>
                    <div id="transportes">
                        <div className={styles.transporte_container}>
                            <label htmlFor="tipoVeiculo">Tipo de Veículo</label>
                            <select id="tipoVeiculo" onChange={bloquearCombustivelPassageiros} required>
                                <option value="" disabled selected>Selecione o Veículo</option>
                                <option value="carro">Carro</option>
                                <option value="moto">Moto</option>
                                <option value="onibus">Ônibus</option>
                                <option value="aviao">Avião</option>
                            </select>

                            <label htmlFor="distancia">Distância (km)</label>
                            <input type="number" id="distancia" placeholder="Distância (km)" required />

                            <label htmlFor="combustivel">Combustível</label>
                            <select id="combustivel" required>
                                <option value="" disabled selected>Selecione o combustível</option>
                                <option value="gasolina">Gasolina</option>
                                <option value="etanol">Etanol</option>
                                <option value="diesel">Diesel</option>
                                <option value="gas_natural">Gás Natural</option>
                                <option value="querosene_aviacao">Querosene de Aviação</option>
                                <option value="hibrido">Híbrido</option>
                            </select>

                            <div id="campoPassageiros">
                                <label htmlFor="passageiros">Número de passageiros</label>
                                <input type="number" id="passageiros" placeholder="Número de passageiros" min="1" />
                                <p id="passageirosInfo" className={styles.comentarios_pequenos}></p>
                            </div>
                            <label htmlFor="diasPorMes">Quantas vezes ao mês você faz esse percurso?</label>
                            <input type="number" id="diasPorMes" placeholder="Número de vezes ao mês" required />
                        </div>
                    </div>
                    
                    <div className={styles.resultadoCalculoCarbono}>
                        <img width="70px" src={Poluicao} alt="Icone referente a poluição" />
                        <button type="button" className="botao_calc btn btn-warning" onClick={calcularPegada}>Calcular Pegada de Carbono</button>
                        <p className={styles.comentarios_pequenos}> <strong>Atenção:</strong> Não deixe campos vazios.</p>
                        <div className={styles._resultado}>
                            <h2 id="resultado" className="">
                                <div className={styles.loader}></div>
                            </h2>
                        </div>
                    </div>

                    <div className={styles.resultadoCalculoArvore}>
                        <img width="70px" src={Arvore} alt="Icone referente a uma Árvore" />
                        <button type="button" className="botao_calc btn btn-warning" onClick={calcularArvore}>Árvores Necessárias</button>
                        <p className={styles.comentarios_pequenos}>A cada tonelada de CO₂ emitidos, são necessárias <strong>7 árvores</strong> nos seus primeiros <strong>20 anos de idade</strong> para compensar.<br/><i>Fonte: <a href="https://www.ibflorestas.org.br/conteudo/compensacao-de-co2#:~:text=A%20cada%207%20%C3%A1rvores%2C%20%C3%A9,de%20Efeito%20Estufa%20(GEE).">Instituto Brasileiro de Florestas</a> atualizado em 18/10/2024</i></p>
                        <div className={styles._resultado}>
                            <h2 id="resultadoArvoresGrande">
                                <div className={styles.loader}></div>
                            </h2>
                            <h4 id="resultadoArvores"></h4>
                        </div>
                    </div>

                    <div className={styles.resultadoCalculoCredito}>
                        <img width="70px" src={Moeda} alt="Icone referente a credito" />
                        <button type="button" className="botao_calc btn btn-warning" onClick={calcularCredito}>Créditos de Carbono Necessários</button>
                        <p className={styles.comentarios_pequenos}>A cada tonelada de CO₂ emitidos, é necessário <strong>1</strong> crédito de carbono para compensar, custando <strong>R$ 53,80</strong> cada.<br/><i>Fonte: <a href="https://credcarbo.com/comprar">CredCarbon</a> atualizado em 18/10/2024</i></p>
                        <div className={styles._resultado}>
                            <h2 id="resultadoCreditoGrande">
                                <div className={styles.loader}></div>
                            </h2>
                            <h4 id="resultadoCredito"></h4>
                        </div>
                    </div>

                </div>
                


                <div className={styles._cardInfo}>
                    <div className="alert alert-warning fade show" role="alert">
                    <img 
                    src= {Question}
                    alt="Icone pergunta" 
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
                                    <th scope="col"><samp className="btn btn-secondary active w-100 ">Requisitos</samp></th>
                                    <th scope="col"><a className="btn btn-outline-warning" translate="no" href="https://co2.myclimate.org/en/calculate_emissions">My Climate</a></th>
                                    <th scope="col"><a className="btn btn-outline-warning" translate="no" href="https://www.footprintcalculator.org/home/en">Footprint</a></th>
                                    <th scope="col"><a className="btn btn-outline-warning" translate="no" href="https://calculator.moss.earth/">Moss</a></th>
                                    <th scope="col"><a className="btn btn-outline-warning" translate="no" href="https://iniciativaverde.org.br/calculadora">Iniciativa Verde</a></th>
                                    <th scope="col"><a className="btn btn-outline-warning" translate="no" href="https://www.sosma.org.br/calcule-sua-emissao-de-co2">SOS Mata Atlântica</a></th>
                                    <th scope="col"><a className="btn btn-outline-warning" translate="no" href="https://compensa.eco/calculadora/empresas/">Compensa</a></th>
                                    <th scope="col"><a className="btn btn-outline-warning" translate="no" href="https://www.biofilica.com.br/calculadora-de-carbono-biofilica/">Biolífica</a></th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <th scope="row">Gratuito</th>
                                    <td><img src={Correct} alt="Icone correto" width="25px"/></td>
                                    <td><img src={Correct} alt="Icone correto" width="25px"/></td>
                                    <td><img src={Correct} alt="Icone correto" width="25px"/></td>
                                    <td><img src={Correct} alt="Icone correto" width="25px"/></td>
                                    <td><img src={Correct} alt="Icone correto" width="25px"/></td>
                                    <td><img src={Correct} alt="Icone correto" width="25px"/></td>
                                    <td><img src={Correct} alt="Icone correto" width="25px"/></td>
                                </tr>

                                <tr>
                                    <th scope="row">Cálculo Pegada de CO² Pessoal</th>
                                    <td><img src={Correct} alt="Icone correto" width="25px"/></td>
                                    <td><img src={Correct} alt="Icone correto" width="25px"/></td>
                                    <td><img src={Correct} alt="Icone correto" width="25px"/></td>
                                    <td><img src={Correct} alt="Icone correto" width="25px"/></td>
                                    <td><img src={Correct} alt="Icone correto" width="25px"/></td>
                                    <td><img src={Wrong} alt="Icone errado" width="25px"/></td>
                                    <td><img src={Wrong} alt="Icone errado" width="25px"/></td>
                                </tr>

                                <tr>
                                    <th scope="row">Cálculo Para Empresa</th>
                                    <td><img src={Correct} alt="Icone correto" width="25px"/></td>
                                    <td><img src={Wrong} alt="Icone errado" width="25px"/></td>
                                    <td><img src={Correct} alt="Icone correto" width="25px"/></td>
                                    <td><img src={Wrong} alt="Icone errado" width="25px"/></td>
                                    <td><img src={Wrong} alt="Icone errado" width="25px"/></td>
                                    <td><img src={Correct} alt="Icone correto" width="25px"/></td>
                                    <td><img src={Correct} alt="Icone correto" width="25px"/></td>
                                </tr>
                                
                                <tr>
                                    <th scope="row">Cálculo Consumo Energia</th>
                                    <td><img src={Correct} alt="Icone correto" width="25px"/></td>
                                    <td><img src={Correct} alt="Icone correto" width="25px"/></td>
                                    <td><img src={Correct} alt="Icone correto" width="25px"/></td>
                                    <td><img src={Correct} alt="Icone correto" width="25px"/></td>
                                    <td><img src={Correct} alt="Icone correto" width="25px"/></td>
                                    <td><img src={Correct} alt="Icone correto" width="25px"/></td>
                                    <td><img src={Correct} alt="Icone correto" width="25px"/></td>
                                </tr>

                                <tr>
                                    <th scope="row">Cálculo Transporte Púb.</th>
                                    <td><img src={Correct} alt="Icone correto" width="25px"/></td>
                                    <td><img src={Correct} alt="Icone correto" width="25px"/></td>
                                    <td><img src={Correct} alt="Icone correto" width="25px"/></td>
                                    <td><img src={Correct} alt="Icone correto" width="25px"/></td>
                                    <td><img src={Correct} alt="Icone correto" width="25px"/></td>
                                    <td><img src={Correct} alt="Icone correto" width="25px"/></td>
                                    <td><img src={Correct} alt="Icone correto" width="25px"/></td>
                                </tr>
                                <tr>
                                    <th scope="row">Cálculo Transporte Priv.</th>
                                    <td><img src={Correct} alt="Icone correto" width="25px"/></td>
                                    <td><img src={Correct} alt="Icone correto" width="25px"/></td>
                                    <td><img src={Correct} alt="Icone correto" width="25px"/></td>
                                    <td><img src={Correct} alt="Icone correto" width="25px"/></td>
                                    <td><img src={Correct} alt="Icone correto" width="25px"/></td>
                                    <td><img src={Correct} alt="Icone correto" width="25px"/></td>
                                    <td><img src={Correct} alt="Icone correto" width="25px"/></td>
                                </tr>

                                <tr>
                                    <th scope="row">Cálculo Transporte Áereo</th>
                                    <td><img src={Correct} alt="Icone correto" width="25px"/></td>
                                    <td><img src={Correct} alt="Icone correto" width="25px"/></td>
                                    <td><img src={Correct} alt="Icone correto" width="25px"/></td>
                                    <td><img src={Correct} alt="Icone correto" width="25px"/></td>
                                    <td><img src={Correct} alt="Icone correto" width="25px"/></td>
                                    <td><img src={Correct} alt="Icone correto" width="25px"/></td>
                                    <td><img src={Correct} alt="Icone correto" width="25px"/></td>
                                </tr>
                                
                                <tr>
                                    <th scope="row">Cálculo Transporte Marítimo</th>
                                    <td><img src={Correct} alt="Icone correto" width="25px"/></td>
                                    <td><img src={Wrong} alt="Icone errado" width="25px"/></td>
                                    <td><img src={Wrong} alt="Icone errado" width="25px"/></td>
                                    <td><img src={Wrong} alt="Icone errado" width="25px"/></td>
                                    <td><img src={Wrong} alt="Icone errado" width="25px"/></td>
                                    <td><img src={Wrong} alt="Icone errado" width="25px"/></td>
                                    <td><img src={Correct} alt="Icone correto" width="25px"/></td>
                                </tr>

                                <tr>
                                    <th scope="row">Cálculo Consumo de Carne</th>
                                    <td><img src={Correct} alt="Icone correto" width="25px"/></td>
                                    <td><img src={Correct} alt="Icone correto" width="25px"/></td>
                                    <td><img src={Correct} alt="Icone correto" width="25px"/></td>
                                    <td><img src={Wrong} alt="Icone errado" width="25px"/></td>
                                    <td><img src={Wrong} alt="Icone errado" width="25px"/></td>
                                    <td><img src={Wrong} alt="Icone errado" width="25px"/></td>
                                    <td><img src={Wrong} alt="Icone errado" width="25px"/></td>
                                </tr>

                                <tr>
                                    <th scope="row">Cálculo Gastos de Roupas</th>
                                    <td><img src={Wrong} alt="Icone errado" width="25px"/></td>
                                    <td><img src={Correct} alt="Icone correto" width="25px"/></td>
                                    <td><img src={Correct} alt="Icone correto" width="25px"/></td>
                                    <td><img src={Wrong} alt="Icone errado" width="25px"/></td>
                                    <td><img src={Wrong} alt="Icone errado" width="25px"/></td>
                                    <td><img src={Wrong} alt="Icone errado" width="25px"/></td>
                                    <td><img src={Wrong} alt="Icone errado" width="25px"/></td>
                                </tr>

                                <tr>
                                    <th scope="row">Cálulo de Resíduos</th>
                                    <td><img src={Wrong} alt="Icone errado" width="25px"/></td>
                                    <td><img src={Correct} alt="Icone correto" width="25px"/></td>
                                    <td><img src={Wrong} alt="Icone errado" width="25px"/></td>
                                    <td><img src={Wrong} alt="Icone errado" width="25px"/></td>
                                    <td><img src={Wrong} alt="Icone errado" width="25px"/></td>
                                    <td><img src={Wrong} alt="Icone errado" width="25px"/></td>
                                    <td><img src={Correct} alt="Icone correto" width="25px"/></td>
                                </tr>

                                <tr>
                                    <th scope="row">Cálculo Gastos de Técnologia</th>
                                    <td><img src={Correct} alt="Icone correto" width="25px"/></td>
                                    <td><img src={Correct} alt="Icone correto" width="25px"/></td>
                                    <td><img src={Correct} alt="Icone correto" width="25px"/></td>
                                    <td><img src={Wrong} alt="Icone errado" width="25px"/></td>
                                    <td><img src={Wrong} alt="Icone errado" width="25px"/></td>
                                    <td><img src={Wrong} alt="Icone errado" width="25px"/></td>
                                    <td><img src={Wrong} alt="Icone errado" width="25px"/></td>
                                </tr>

                                <tr>
                                    <th scope="row">Compensar CO²</th>
                                    <td><img src={Correct} alt="Icone correto" width="25px"/></td>
                                    <td><img src={Correct} alt="Icone correto" width="25px"/></td>
                                    <td><img src={Correct} alt="Icone correto" width="25px"/></td>
                                    <td><img src={Correct} alt="Icone correto" width="25px"/></td>
                                    <td><img src={Correct} alt="Icone correto" width="25px"/></td>
                                    <td><img src={Correct} alt="Icone correto" width="25px"/></td>
                                    <td><img src={Correct} alt="Icone correto" width="25px"/></td>
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
                    alt="Icone pergunta" 
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