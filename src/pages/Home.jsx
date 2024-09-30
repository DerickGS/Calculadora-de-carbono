import Header from "../components/Header"
import Footer from "../components/Footer"
// import { Link } from "react-router-dom"
// import Logo from "../assets/_iconLogo.png"
import carbonDioxide from "../img/dioxido-carbono-wallpaper.png"
import heatWave from "../img/onda-de-calor.png"
import bigAcceleration from "../img/grande-aceleracao.png"
import carbonImg from "../img/carbon-imagem.jpg"

import styles from "./Home.module.css"

function Home() {
    return (
        <body>
            <Header/>
            <main className={styles._pageHome}>
                <div className={styles._backgroundImage}></div>
                <div className={styles._content}>
                    <h2>Conceito de CO₂</h2>
                    <i><h4>Dióxido de carbono e seu impacto</h4></i>
                    <p>O <a href="https://pt.wikipedia.org/wiki/Di%C3%B3xido_de_carbono">Dióxido de Carbono (CO₂)</a> é um composto químico gasoso constituído por dois átomos de oxigênio e um átomo de carbono. Ele é produzido por através da respiração de seres vivos, pela queima de combustíveis fósseis, decomposição de seres vivos ou materiais, e em decorrência de atividades humanas como indústrias. <i>(ECYCLE, 2022)</i></p>
                    <p>Quando emitido em grandes quantidades devido à queima de combustíveis fósseis, como petróleo, carvão e gás natural, ele contribui para o efeito estufa, um fenômeno natural que mantém o planeta aquecido. O problema surge quando há excesso desse gás, o que intensifica o aquecimento global e causa desequilíbrios ecológicos severos.</p>
                    <figure>
                        <img className={styles._imgHome} src={carbonDioxide} alt="" />
                        <figcaption>Foto: Shutterstock.com</figcaption>
                    </figure>
                    <p>Os problemas causados pelo excesso de carbono na atmosfera incluem o aumento da temperatura global média, a elevação do nível dos oceanos e a intensificação de eventos climáticos extremos, como furacões, secas e inundações. Essas alterações climáticas afetam diretamente ecossistemas, agricultura e, consequentemente, a segurança alimentar, além de promoverem a extinção de diversas espécies que não conseguem se adaptar às novas condições ambientais.</p>
                    <p>Além disso, a poluição atmosférica causada pelas emissões de carbono também impacta diretamente a saúde humana. Segundo o <a href="https://www.inca.gov.br/sites/ufu.sti.inca.local/files/media/document/cartilha_poluicao_do_ar_web.pdf">Instituto Nacional de Câncer José Alencar Gomes da Silva / Ministério da Saúde</a>, estudos indicam que a exposição a altos níveis de poluição aumenta os riscos de doenças respiratórias, cardiovasculares e até de câncer. Esse impacto atinge de forma desproporcional as populações mais vulneráveis, que vivem em áreas urbanas densamente poluídas e têm menos acesso a cuidados de saúde adequados.</p>
                    <figure>
                        <img className={styles._imgHome} src={heatWave} alt="" />
                        <figcaption>Foto: Tomaz Silva/Agência Brasil/Divulgação</figcaption>
                    </figure>

                    <hr />

                    <h2>Momento Histórico</h2>
                    <i><h4>Início da alta emissão de carbono no mundo</h4></i>
                    <p>A <a href="https://brasilescola.uol.com.br/historiag/revolucao-industrial.htm">Revolução Industrial, no século XVIII</a>, marcou o início de uma intensa emissão de carbono, uma vez que houve a transição de métodos de produção manuais para o uso de máquinas movidas a carvão e, em seguida, a petróleo. Este período representou um salto significativo na capacidade produtiva das sociedades, mas também iniciou uma era de emissões descontroladas de gases de efeito estufa.</p>
                    <p>Outro momento histórico importante foi o período pós-Segunda Guerra Mundial, quando houve o aumento no consumo de combustíveis fósseis. O crescimento econômico e a urbanização aumentaram significativamente a demanda por energia, e a industrialização se espalhou rapidamente pelo mundo. Esse período ficou conhecido como a <a href="https://museudoamanha.org.br/livro/10-vivendo-no-antropoceno.html">Grande Aceleração</a>, devido ao aumento expressivo de emissões de carbono, resultante da expansão das economias globais e da globalização, além quando a disponibilidade de petróleo abundante e barato.</p>
                    <figure>
                        <img className={styles._imgHome} src={bigAcceleration} alt="" />
                        <figcaption>Foto: Michael Kodas / Inside Climate News</figcaption>
                    </figure>
                    <p>Além disso, a crescente dependência do transporte motorizado, a expansão da agricultura industrial e o desmatamento acelerado nas décadas subsequentes contribuíram para aumentar ainda mais as emissões. A demanda por veículos movidos a gasolina e diesel, associada à derrubada de florestas para abrir espaço para a agropecuária, foram fatores essenciais para a contínua alta nas emissões de carbono.</p>
                    
                    <hr />

                    <h2>Preocupação Global</h2>
                    <i><h4>Momento em que o mundo se dá conta do impacto do CO₂</h4></i>
                    <p>A preocupação global com as emissões de carbono começou a ganhar força a partir das décadas de 1970 e 1980, quando cientistas começaram a alertar sobre os efeitos devastadores das mudanças climáticas causadas pelo aumento das emissões de gases de efeito estufa. O ¨Relatório Charney¨ de 1979 foi um marco inicial, alertando que o aumento de CO₂ poderia causar um aumento significativo na temperatura global.</p>
                    <p>Na década de 1990, o <a href="https://antigo.mctic.gov.br/mctic/opencms/ciencia/SEPED/clima/ciencia_do_clima/painel_intergovernamental_sobre_mudanca_do_clima.html">Painel Intergovernamental sobre Mudanças Climáticas (IPCC)</a>, uma organização da ONU, publicou relatórios que evidenciavam a ligação entre as atividades humanas e as mudanças climáticas. Esses relatórios ajudaram a solidificar a compreensão pública e governamental sobre os riscos das emissões descontroladas de carbono e a urgência de medidas globais.</p>
                    <figure>
                        <img className={styles._imgHome} src={carbonImg} alt="" />
                        <figcaption>Foto: Unsplash/Marcin Jozwiak</figcaption>
                    </figure>
                    <p>Com o passar dos anos, a consciência sobre os impactos das mudanças climáticas se intensificou, levando vários países a adotarem políticas de mitigação e a firmarem acordos internacionais para reduzir as emissões de carbono. A crescente incidência de desastres naturais atribuídos ao aquecimento global reforçou a percepção global de que era necessário tomar medidas drásticas.</p>
                    
                    <hr />
                    
                    <h2>O Brasil</h2>
                    <i><h4>Nosso país no enfrentamento à mudança climática</h4></i>
                    <p>Desde 1995, as Conferências das Partes (COPs) da Convenção-Quadro das Nações Unidas sobre Mudança do Clima (UNFCCC) reúnem líderes mundiais para discutir ações globais contra o aquecimento global. Essas conferências resultaram em importantes compromissos internacionais, como o Protocolo de Kyoto, adotado em 1997 e válido de 2005 a 2020, e o Acordo de Paris, firmado em 2015 e em vigor desde 2016.</p>
                    <p>No contexto brasileiro, a agenda climática deve ser alinhada às políticas de desenvolvimento econômico, social e ambiental. O país enfrenta desafios como a descarbonização de suas atividades econômicas, com o objetivo de alcançar a <a href="https://www.epe.gov.br/sites-pt/publicacoes-dados-abertos/publicacoes/PublicacoesArquivos/publicacao-726/PTE_RelatorioFinal_PT_Digital_.pdf">neutralidade climática até 2050</a> , ou seja, emissão líquida zerada de gases de efeito estufa. Outro desafio importante é a proteção da população brasileira contra os crescentes eventos climáticos extremos. Para garantir que essa transição seja justa, é fundamental incluir as populações mais vulneráveis nas discussões e nas políticas públicas, abordando questões de moradia, alimentação, renda e outras necessidades sociais.</p>
                    <p>A crescente relevância da pauta climática no Brasil exige uma integração mais robusta entre as políticas federais e uma governança mais inclusiva e eficaz. Isso envolve a participação de diferentes atores, como estados, municípios, sociedade civil, pesquisadores e o setor privado. Algumas das iniciativas em andamento incluem a reformulação do <a href="https://www.gov.br/mma/pt-br/composicao/smc/dcol/cim">Comitê Interministerial sobre Mudança do Clima (CIM)</a>, a criação de um Plano Clima que orientará as ações de mitigação e adaptação até 2035, e o fortalecimento da participação social. Além disso, a redução do desmatamento na Amazônia e o uso de recursos do Fundo Clima são essenciais para o Brasil atingir suas metas climáticas.</p>
                    <p>Essas ações visam fortalecer a posição do Brasil no cenário internacional, especialmente com a realização da COP30 em Belém, Pará, em 2025, onde o país poderá assumir </p>
                
                </div>
                </main>
            <Footer/>
        </body>
    )
}

export default Home
