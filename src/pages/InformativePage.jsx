import Header from "../components/Header"
import Footer from "../components/footer"

import Correct from "../img/correct.png"
import Wrong from "../img/wrong.png"
import Question from "../img/question.png"
// import Fundo/ from "../img/capa-site.jpeg"
// import React from 'react'
import styles from "./InformativePage.module.css"

function InformativePage() {
  return (
    <body>
      <Header/>
        <main>

          <div className={styles._backgroundImage}></div>
          
          <div className={styles._title}>
            <div className="titulo">
              <h1>Informativo</h1>
            </div>
            <div className="titulo">
              <h4>Comparação de calculadoras de CO²</h4>
            </div>
          </div>

          <div className="tabela container table-responsive">
            <table className="table table-bordered table-hover">
              <thead className="table table-dark">
                <tr>
                  <th></th>
                  <th scope="col"><a className="btn btn-outline-light" translate="no" href="https://co2.myclimate.org/en/calculate_emissions">My Climate</a></th>
                  <th scope="col"><a className="btn btn-outline-light" translate="no" href="https://www.footprintcalculator.org/home/en">Footprint</a></th>
                  <th scope="col"><a className="btn btn-outline-light" translate="no" href="https://calculator.moss.earth/">Moss</a></th>
                  <th scope="col"><a className="btn btn-outline-light" translate="no" href="https://iniciativaverde.org.br/calculadora">Iniciativa Verde</a></th>
                  <th scope="col"><a className="btn btn-outline-light" translate="no" href="https://www.sosma.org.br/calcule-sua-emissao-de-co2">SOS Mata Atlântica</a></th>
                  <th scope="col"><a className="btn btn-outline-light" translate="no" href="https://compensa.eco/calculadora/empresas/">Compensa</a></th>
                  <th scope="col"><a className="btn btn-outline-light" translate="no" href="https://www.biofilica.com.br/calculadora-de-carbono-biofilica/">Biolífica</a></th>
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
            </table>
          </div>

          <div className={styles._cardInfo}>
            <div className="alert alert-warning fade show" role="alert">
              <img 
              src= {Question}
              alt="" 
              width="50px"
              />
              <br />
              <a className="btn btn-warning" href="https://frotas.localiza.com/blog/compensacao-de-carbono">O que significa compensar CO²?</a>
              <p className="comentarios_pequenos">Clique para saber mais.</p>
            </div>
          </div>

        </main>
      <Footer/>
    </body>

  )
}

export default InformativePage