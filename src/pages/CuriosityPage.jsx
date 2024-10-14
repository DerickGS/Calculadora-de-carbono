import { useState } from 'react';

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
                
                <div className={styles._contentTitle}>
                    <h3>Passo a Passo do Cálculo</h3>
                    <p><strong>Calcular o Consumo Total de Combustível: </strong></p>
                    {/* <img src={Calculo1} alt="" className={styles._imgCuri} /> */}
                </div>
                <figure className={styles._Calculo1} aria-label="O consumo total é igual à distância em quilômetros multiplicada pelo fator de consumo"></figure>

                <div className={styles._contentTitle}>
                    <p><strong>Calcular a Pegada de Carbono: </strong></p>
                    {/* <img src={Calculo2} alt="" className={styles._imgCuri} /> */}
                </div>
                <figure className={styles._Calculo2} aria-label="A pegada de carbono é igual ao consumo total de energia multiplicado pelo fator de emissão"></figure>

                <div className={styles._contentTitle}>
                    <p><strong>Converter para Toneladas: </strong></p>
                    {/* <img src={Calculo3} alt="" className={styles._imgCuri} /> */}
                </div>
                <figure className={styles._Calculo3} aria-label="A pegada total em toneladas é igual à pegada de carbono dividida por mil"></figure>



                <div className={styles._contentTest}>
                    <p>Portanto, ao inserir 100 km percorridos em um carro que utiliza gasolina, a pegada de carbono resultante seria de aproximadamente <strong>0.0228 toneladas de CO₂</strong>.</p>
                    <hr/>
                    <h2>Crédito de Carbono</h2>
                    <h4>Como compensar suas emissões de carbono</h4>
                    <p>O crédito de carbono é um mecanismo de mercado que permite que empresas ou países que excedem suas metas de redução de emissões compensem essa diferença comprando créditos de carbono de organizações que estão abaixo de suas metas. Um crédito de carbono equivale a uma tonelada de CO₂ que foi evitada ou removida da atmosfera. Este sistema incentiva a adoção de práticas mais limpas e a criação de tecnologias que reduzam as emissões.</p>
                    <p>No entanto, o sistema de créditos de carbono também possui pontos negativos, pois, se pararmos para pensar, ele pode permitir que grandes poluidores continuem emitindo, enquanto simplesmente compram créditos, ao invés de realizar mudanças significativas em seus processos produtivos. A solução definitiva para o problema das emissões seria reduzir diretamente as atividades intensivas em carbono, em vez de apenas compensá-las.</p>
                    <hr/>

                    <h2>Redução de Carbono em Grande Escala (Empresas)</h2>
                    <h4>Como compensar suas emissões de carbono</h4>
                    <p>As grandes empresas têm um papel fundamental na redução das emissões globais de carbono, dado o impacto significativo que suas atividades têm sobre o meio ambiente. Uma das maneiras mais eficazes de reduzir as emissões em larga escala é por meio da implementação de práticas de eficiência energética e o uso de energias renováveis em seus processos industriais. A adoção de políticas internas de sustentabilidade, como a otimização da cadeia de suprimentos e o uso de materiais recicláveis, também pode gerar uma redução considerável nas emissões.</p>
                    <p>Além das mudanças estruturais, muitas empresas estão adotando compromissos para zerar suas emissões líquidas de carbono até um determinado ano, como parte das iniciativas de ¨net-zero¨. Esse movimento envolve a transição para uma matriz energética mais limpa, a compensação de emissões inevitáveis e a inovação em tecnologias de captura e armazenamento de carbono.</p>
                    <p>No entanto, a compensação por meio de créditos de carbono, embora seja uma ferramenta válida, não é suficiente por si só para resolver o problema das emissões. O foco deve estar em soluções que reduzam diretamente as emissões, como a eletrificação dos processos e a adoção de economia circular, onde os resíduos são minimizados e os materiais são reutilizados. Apenas compensar as emissões não elimina o impacto ambiental, mas é um passo temporário até que as reduções reais possam ser alcançadas.</p>
                    <h2>Referências</h2>
                    <h4>Veja todas nossas referências que compôem as informações presentes nesse website</h4>
                    
                    
                    <button type="button" id="toggleButton" onClick={toggleVisibility} className="btn btn-warning btn-lg btn-block w-100">
                    {isVisible ? "Ocultar Referências" : "Referências"}
                    </button>
                    <div className={`${styles.toggleText} ${isVisible ? styles.show : styles.hidden}`}>
                        <div className="toggle-text hidden">
                            <p><strong>ALMEIDA, F.</strong> O Bom Negócio da Sustentabilidade. Rio de Janeiro: Nova Fronteira, 2002. Cap. 4. </p>
                            <p><strong>BNDES.</strong> A difusão da agenda ESG no mundo e no Brasil. Blog do Desenvolvimento. Disponível em: <a href="https://agenciadenoticias.bndes.gov.br/blogdodesenvolvimento/detalhe/A-difusao-da-agenda-ESG-no-mundo-e-no-Brasil/" target="_blank">https://agenciadenoticias.bndes.gov.br</a>. Acesso em: 27 de setembro de 2024. </p>
                            <p><strong>BRASIL ESCOLA.</strong> COP: Conferência das Partes. Brasil Escola. Disponível em: <a href="https://brasilescola.uol.com.br/geografia/cop-conferencia-das-partes.htm" target="_blank">https://brasilescola.uol.com.br</a>. Acesso em: 27 de setembro de 2024.</p>
                            <p><strong>CARVALHO, J.</strong> Sustentabilidade Corporativa e a Redução de Emissões. Rio de Janeiro: Editora Corporativa, 2020.</p>
                            <p><strong>CHARNEY, J.</strong> Carbon Dioxide and Climate: A Scientific Assessment. Washington, D.C.: National Academy of Sciences, 1979.</p>
                            <p><strong>GOMES, A.</strong> Pegada de carbono e o papel das calculadoras. Revista de Sustentabilidade, p. 15-30, 2020.</p>
                            <p><strong>GOVERNO BRASILEIRO.</strong> O Brasil no enfrentamento à mudança do clima. 2023. Disponível em: <a href="https://www.gov.br/mma/pt-br/assuntos/mudanca-do-clima" target="_blank">https://www.gov.br/mma</a>. Acesso em: 26 set. 2024.</p>
                            <p><strong>INTERGOVERNMENTAL PANEL ON CLIMATE CHANGE (IPCC).</strong> First Assessment Report (FAR). Organização das Nações Unidas, 1990. Disponível em: <a href="https://www.ipcc.ch" target="_blank">https://www.ipcc.ch</a>. Acesso em: 27 set. 2024.</p>
                            <p><strong>KYOTO PROTOCOL.</strong> The Kyoto Protocol to the United Nations Framework Convention on Climate Change. Organização das Nações Unidas, 1997. Disponível em: <a href="https://unfccc.int/kyoto_protocol" target="_blank">https://unfccc.int</a>. Acesso em: 27 set. 2024.</p>
                            <p><strong>MENDES, P.</strong> Reflorestamento e Mitigação de Mudanças Climáticas. Editora Ambiental, 2021.</p>
                            <p><strong>NEOENERGIA.</strong> COP29: Principais informações e objetivos do maior encontro sobre mudanças climáticas. Disponível em: <a href="https://www.neoenergia.com/w/cop-29-informacoes-e-objetivos-do-maior-encontro-sobre-mudancas-climaticas-do-mundo" target="_blank">https://www.neoenergia.com</a>. Acesso em: 26 set. 2024.</p>
                            <p><strong>ORGANIZAÇÃO DAS NAÇÕES UNIDAS.</strong> Acordo da COP28 sinaliza o “início do fim” da era dos combustíveis fósseis. 2023. Disponível em: <a href="https://unfccc.int/news/cop28-agreement-signals-beginning-of-the-end-of-the-fossil-fuel-era" target="_blank">https://unfccc.int</a>. Acesso em: 26 set. 2024.</p>
                            <p><strong>ORGANIZAÇÃO DAS NAÇÕES UNIDAS.</strong> Conferência das Nações Unidas sobre as mudanças climáticas em Baku. 2024. Disponível em: <a href="https://unfccc.int/cop29" target="_blank">https://unfccc.int/cop29</a>. Acesso em: 26 set. 2024.</p>
                            <p><strong>ORGANIZAÇÃO DAS NAÇÕES UNIDAS.</strong> Blog da COP28. 2023 a 2024. Disponível em: <a href="https://unfccc.int/cop28/blogs" target="_blank">https://unfccc.int/cop28/blogs</a>. Acesso em: 26 set. 2024.</p>
                            <p><strong>UNITED NATIONS FRAMEWORK CONVENTION ON CLIMATE CHANGE (UNFCCC).</strong> The Paris Agreement. Organização das Nações Unidas, 2015. Disponível em: <a href="https://unfccc.int/paris_agreement" target="_blank">https://unfccc.int</a>. Acesso em: 27 set. 2024.</p>
                            <p><strong>UNITED NATIONS FRAMEWORK CONVENTION ON CLIMATE CHANGE (UNFCCC).</strong> United Nations Framework Convention on Climate Change. Organização das Nações Unidas, 1992. Disponível em: <a href="https://unfccc.int" target="_blank">https://unfccc.int</a>. Acesso em: 27 set. 2024.</p>
                        </div>
                    </div>

                </div>
            </body>
            <Footer/>
        </main>
    );
}

export default CuriosityPage;