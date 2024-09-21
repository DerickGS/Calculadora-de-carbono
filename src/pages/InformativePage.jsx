import Header from "../components/Header"
import Footer from "../components/footer"

// import Correct from "../img/correct.png"
// import Wrong from "../img/wrong.png"
import Fundo from "../img/capa-site.jpeg"
// import React from 'react'
import styles from "./InformativePage.module.css"

function InformativePage() {
  return (
    <body>
      <Header/>
      <main>
        <div>
          <img 
          className={styles}
          src={Fundo} 
          alt="Paisagem de um campo verde" 
          />
        </div>


        {/* <div class="capa_superior">
          <img src="img/capa-site.jpeg" class="d-block w-100" alt="...">
        </div>
        <br>

        <div class="titulo">
          <h1>Informativo</h1>
        </div>
        <br>

        <div class="titulo">
          <h4>Comparação de calculadoras de CO²</h4>
        </div>
        <div class="tabela container table-responsive">
          <table class="table table-bordered table-hover">
            <thead class="thead-dark">
              <tr>
                <th></th>
                <th scope="col"><a class="btn btn-outline-light" href="https://co2.myclimate.org/en/calculate_emissions">My
                    Climate</a></th>
                <th scope="col"><a class="btn btn-outline-light"
                    href="https://www.footprintcalculator.org/home/en">Footprint</a></th>
                <th scope="col"><a class="btn btn-outline-light" href="https://calculator.moss.earth/">Moss</a></th>
                <th scope="col"><a class="btn btn-outline-light" href="https://iniciativaverde.org.br/calculadora">Iniciativa
                    Verde</a></th>
                <th scope="col"><a class="btn btn-outline-light"
                    href="https://www.sosma.org.br/calcule-sua-emissao-de-co2">SOS Mata Atlântica</a></th>
                <th scope="col"><a class="btn btn-outline-light"
                    href="https://compensa.eco/calculadora/empresas/">Compensa</a></th>
                <th scope="col"><a class="btn btn-outline-light"
                    href="https://www.biofilica.com.br/calculadora-de-carbono-biofilica/">Biolífica</a></th>
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
              <p class="comentarios_pequenos">Essa tabela foi desenvolvida com base em critérios considerados de <strong>maior
                  importância</strong> em uma calculadora de CO².</p>
            </caption>
          </table>
        </div>
        
        <div class="centralizar_botao">
          <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <img src="img/question.png" alt="" width="50px"/><br><br>
            <button type="button" class="btn btn-warning">O que significa compensar CO²?</button>
            <p class="comentarios_pequenos">Clique para saber mais.</p>
          </div>
        </div> */}
      </main>
      <Footer/>
    </body>

  )
}

export default InformativePage