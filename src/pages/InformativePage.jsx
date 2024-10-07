import Header from "../components/Header"
import Footer from "../components/Footer"

import CopRioDeJaneiro from "../img/cop - rio de janeiro.jpg"
import ConferenceDubai from "../img/-conference - dubai.webp"
import Cop29 from "../img/cop 29.jpg"

import styles from "./InformativePage.module.css"

function InformativePage() {
  return (
    <body>
      <Header/>
        <main className={styles._pageInformative}>
          <div className={styles._backgroundImage}></div>
          <div className={styles._contentTest}>
            <h2>Conferências Mundiais</h2>
            <h4>Reuniões entre países sobre preocupações climáticas</h4>
            <p>A primeira reunião mundial de grande importância dedicada ao combate das mudanças climáticas foi a <a href="https://semil.sp.gov.br/educacaoambiental/prateleira-ambiental/eco-92-rio-92-cupula-da-terra/">Conferência das Nações Unidas sobre Meio Ambiente e Desenvolvimento (Cúpula da Terra)</a> realizada no Rio de Janeiro, em 1992, 20 anos após a <a href="https://semil.sp.gov.br/educacaoambiental/2024/06/conferencia-da-organizacao-das-nacoes-unidas-sobre-o-ambiente-humano-ou-conferencia-de-estocolmo/">Conferência de Estocolmo</a>. Nesse evento, foi criado o conceito de desenvolvimento sustentável, que buscava equilibrar o crescimento econômico com a proteção ambiental. O principal resultado foi a criação da Convenção-Quadro das Nações Unidas sobre Mudança do Clima (UNFCCC), um tratado internacional com o objetivo de estabilizar as concentrações de gases de efeito estufa.</p>
            <figure>
                <img className={styles._imgInfo} src={CopRioDeJaneiro} alt="" />
                <figcaption>Foto: Wikipedia / CNUMAD / Rio de Janeiro</figcaption>
            </figure>
            <p> Em 1997, o <a href="https://www12.senado.leg.br/noticias/entenda-o-assunto/protocolo-de-kyoto">Protocolo de Kyoto</a> foi um marco nas negociações climáticas globais. Ele estabeleceu metas de redução de emissões de carbono para países desenvolvidos, sendo a primeira vez que se impuseram responsabilidades legais para a redução de emissões. No entanto, o protocolo enfrentou desafios, como a não participação de grandes emissores, como os Estados Unidos. </p>
            <p>A Conferência das Partes (COP) de Paris, em 2015, foi outro momento crucial, com a criação do Acordo de Paris, que estabeleceu metas mais amplas para a redução de emissões. O objetivo principal do acordo é limitar o aquecimento global a bem abaixo de 2 °C em relação aos níveis pré-industriais. As nações participantes concordaram em adotar planos nacionais de redução de emissões e promover energias limpas.</p>
            <p>A última Conferência das Partes foi a COP 28, realizada em Dubai, Emirados Árabes Unidos em 2023, terá como foco central o acompanhamento dos progressos desde o Acordo de Paris, firmado na COP21 em 2015, cujo principal objetivo é limitar o aumento da temperatura global a menos de 2°C, com esforços para restringi-lo a 1,5°C acima dos níveis pré-industriais (UNFCCC, 2015).</p>
            <figure>
                <img className={styles._imgInfo} src={ConferenceDubai} alt="" />
                <figcaption>Foto: Amr Alfiky / Reuters</figcaption>
            </figure>
            <p>Além disso, esta edição será a primeira a realizar uma Avaliação Global (Global Stocktake), um processo para revisar as ações climáticas adotadas pelos países signatários, verificar se estão alinhadas aos objetivos de longo prazo do acordo, e definir novos compromissos para mitigação, adaptação e financiamento (UNFCCC, 2023). Alguns dos temas centrais que foram abordados incluem: </p>
            <ul>
              <li><strong>Financiamento Climático:</strong> Busca-se garantir a mobilização de US$ 100 bilhões anuais pelos países desenvolvidos para apoiar nações em desenvolvimento na transição para uma economia de baixo carbono e na adaptação às mudanças climáticas (UNFCCC, 2020).</li>
              <li><strong>Mercado de Carbono:</strong> Discussões sobre o Artigo 6 do Acordo de Paris, que trata da regulamentação de mecanismos de mercado para comercialização de créditos de carbono.</li>
              <li><strong>Transição Energética Justa:</strong> Foco em energias renováveis, eficiência energética e redução do uso de combustíveis fósseis, buscando uma transição que leve em conta aspectos sociais e econômicos, garantindo que não haja prejuízos desproporcionais a comunidades mais vulneráveis.</li>
            </ul>
            <p>A COP28 foi fundamental para avaliar os avanços climáticos globais e estabelecer novos caminhos para o
            cumprimento dos compromissos do Acordo de Paris. O evento é visto como uma oportunidade para os países reafirmarem
            sua ambição climática e colaborarem em soluções que ajudem a mitigar os efeitos do aquecimento global.</p>
            <p>A 29ª Conferência das Partes tem previsão de ocorrer em 2024. Esta conferência dará continuidade às discussões globais sobre o combate às mudanças climáticas, representando um momento decisivo para avaliar as metas estabelecidas em conferências anteriores e discutir novas formas de ação para o cumprimento do Acordo de Paris. </p>
            <p>A COP29 ocorre em um contexto global de crescentes impactos das mudanças climáticas, como desastres naturais mais frequentes, aumento do nível do mar e a necessidade de transição para economias mais sustentáveis (IPCC, 2023). </p>
            <figure>
                <img className={styles._imgInfo} src={Cop29} alt="" />
                <figcaption>Foto: The COP29 Presidency Team</figcaption>
            </figure>
            <ul>
              <li><strong>Financiamento Climático:</strong> O financiamento climático continua sendo uma questão crucial, especialmente para países em desenvolvimento que enfrentam dificuldades na adaptação aos efeitos das mudanças climáticas. Espera-se que o compromisso de mobilizar US$ 100 bilhões anuais, assumido pelos países desenvolvidos, seja reavaliado e ampliado para atender às demandas globais (UNFCCC, 2020).</li>
              <li><strong>Ajustes nas Contribuições Nacionalmente Determinadas (NDCs):</strong> Haverá foco na atualização das NDCs, com muitos países pressionados a aumentar a ambição de suas metas de redução de emissões de gases de efeito estufa (GEE) para evitar os piores cenários de aquecimento (UNFCCC, 2023).</li>
              <li><strong>Perdas e Danos:</strong> O tema das perdas e danos (loss and damage) será central na COP29, com expectativas de que um mecanismo financeiro sólido seja estabelecido para apoiar países vulneráveis que sofrem com os impactos climáticos mais severos (IPCC, 2022).</li>
              <li><strong>Transição Justa:</strong> A COP29 deverá intensificar as discussões sobre uma transição energética justa, que promova o desenvolvimento sustentável sem abandonar comunidades mais afetadas pela mudança para uma economia de baixo carbono (ILO, 2021).</li>
            </ul>
          </div>
        </main>
      <Footer/>
    </body>

  )
}

export default InformativePage