import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

// Fatores de consumo por tipo de veículo (litros por KM)
const fatorConsumoPorTipo = {
    carro: 0.1,
    moto: 0.04,
    onibus: 0.6,
    aviao: 4
};

// Fatores de emissão (kg CO2/litro ou kg CO2/m³)
const fatoresEmissao = {
    gasolina: 2.28,           // kg CO2/litro
    etanol: 1.867,            // kg CO2/litro
    diesel: 3.2,              // kg CO2/litro
    gas_natural: 1.824,       // kg CO2/m³
    querosene_aviacao: 0.12,  // kg CO2/litro
    hibrido: 1.14             // Metade da gasolina
};

function bloquearCombustivelPassageiros() {
    const tipoVeiculoSelect = document.getElementById('tipoVeiculo');
    const combustivelSelect = document.getElementById('combustivel');
    const inputPassageiros = document.getElementById('passageiros');
    const passageirosInfo = document.getElementById('passageirosInfo'); 

    // Habilita todas as opções de combustível inicialmente
    Array.from(combustivelSelect.options).forEach(option => {
        option.disabled = false; // Não trava o valor do combustível
    });

    // Verifica a seleção do tipo de veículo
    const tipoVeiculoSelecionado = tipoVeiculoSelect.value;
    
    if (tipoVeiculoSelecionado === 'carro') {
        combustivelSelect.disabled = false; // Habilita a seleção
        combustivelSelect.value = ''; // Zera a escolha do combustível
        combustivelSelect.options[0].disabled = true; // Desabilita a opção de "escolha em branco"
        combustivelSelect.options[5].disabled = true; // Desabilita opção 

        inputPassageiros.value = ''; // Zera o valor do input de passageiros
        inputPassageiros.disabled = false; // Habilita a seleção de passageiros
        passageirosInfo.innerText = ""; // Limpa a mensagem ao usuário
        

    } else if (tipoVeiculoSelecionado === 'moto') {
        combustivelSelect.disabled = false; // Habilita a seleção
        combustivelSelect.value = ''; // Zera a escolha do combustível
        combustivelSelect.options[0].disabled = true; // Desabilita a opção de "escolha em branco"
        combustivelSelect.options[3].disabled = true; // Desabilita opção 
        combustivelSelect.options[4].disabled = true; // Desabilita opção 
        combustivelSelect.options[5].disabled = true; // Desabilita opção 
        combustivelSelect.options[6].disabled = true; // Desabilita opção
        
        inputPassageiros.value = ''; // Zera o valor do input de passageiros
        inputPassageiros.disabled = false; // Habilita a seleção de passageiros
        passageirosInfo.innerText = ""; // Limpa a mensagem ao usuário

    } else if (tipoVeiculoSelecionado === 'onibus') {
        combustivelSelect.disabled = true; // Desabilita a seleção
        combustivelSelect.value = 'diesel'; // Define valor padrão como 'diesel'
        combustivelSelect.options[0].disabled = true; // Desabilita a opção de "escolha em branco"
        combustivelSelect.options[1].disabled = true; // Desabilita opção 
        combustivelSelect.options[2].disabled = true; // Desabilita opção 
        combustivelSelect.options[4].disabled = true; // Desabilita opção 
        combustivelSelect.options[5].disabled = true; // Desabilita opção 
        combustivelSelect.options[6].disabled = true; // Desabilita opção 

        inputPassageiros.value = 40; // Define o valor do input de passageiros como 40, conforme a capacidade média de um ônibus
        inputPassageiros.disabled = true; // Desabilita a seleção de passageiros
        passageirosInfo.innerText = "Número de passageiros fixado em 40, com base na capacidade média de assentos de um ônibus."; // Informa ao usuário o número definido de passageiros
        
    } else if (tipoVeiculoSelecionado === 'aviao') {
        combustivelSelect.disabled = true; // Desabilita a seleção
        combustivelSelect.value = 'querosene_aviacao'; // Define valor padrão como 'querosene para aviação'
        combustivelSelect.options[0].disabled = true; // Desabilita a opção de "escolha em branco"
        combustivelSelect.options[1].disabled = true; // Desabilita opção 
        combustivelSelect.options[2].disabled = true; // Desabilita opção 
        combustivelSelect.options[3].disabled = true; // Desabilita opção 
        combustivelSelect.options[4].disabled = true; // Desabilita opção 
        combustivelSelect.options[6].disabled = true; // Desabilita opção  

        inputPassageiros.value = 180; // Define o valor do input de passageiros como 180, conforme a capacidade média de um avião comercial
        inputPassageiros.disabled = true; // Desabilita a seleção de passageiros
        passageirosInfo.innerText = "Número de passageiros fixado em 180, com base na capacidade média de assentos de um avião comercial."; // Informa ao usuário o número definido de passageiros
    }
}



// Função para calcular a pegada de carbono para um único meio de transporte
function calcularPegadaCarbonoTransporte(distanciaKm, tipoCombustivel, tipoVeiculo, passageiros, diasPorMes) {
    
    const fatorConsumo = fatorConsumoPorTipo[tipoVeiculo];
    if (!fatorConsumo) {
        Swal.fire("Seleção obrigatória", "Você deve selecionar o tipo de veículo antes de calcular", "error");
        return ;
    }

    if (distanciaKm <= 0 ||isNaN(distanciaKm)) {
        Swal.fire("Distância", "A Distância (km) deve ser superior a zero", "error");
        return 0; // Retorna 0 para evitar cálculos incorretos
    }
    
    const fatorEmissao = fatoresEmissao[tipoCombustivel];
    if (!fatorEmissao) {
        Swal.fire("Combustível", "Você deve selecionar o tipo de veículo antes de calcular", "error");
    }

    // Validar o combustível é passageiros se o veículo for ônibus ou avião ou moto ou carro
    if (tipoVeiculo === 'onibus' && tipoCombustivel !== 'diesel') {
        Swal.fire("Combustível inválido", "Para o tipo de veículo 'Ônibus', o combustível deve ser 'Diesel'", "error");
        return ;
    } else if (tipoVeiculo === 'aviao' && tipoCombustivel !== 'querosene_aviacao') {
        Swal.fire("Combustível inválido", "Para o tipo de veículo 'Avião', o combustível deve ser 'Querosene de Aviação'", "error");
        return ;
    }else if (tipoVeiculo === 'moto' && (tipoCombustivel !== 'etanol' && tipoCombustivel !== 'gasolina')) {
        Swal.fire("Combustível inválido", "Para o tipo de veículo 'Moto', o combustível deve ser 'Gasolina' ou 'Etanol'", "error");
        return;
    }else if (tipoVeiculo === 'moto' && (passageiros <= 0 || passageiros >= 3) ){
        Swal.fire("Passageiros", "Moto comporta entre 1 e 2 passageiros", "error");
        return;
    }else if (tipoVeiculo === 'carro' && tipoCombustivel === 'querosene_aviacao' ){
        Swal.fire("Combustível inválido", "Para o tipo de veículo 'Carro', o combustível não pode ser 'Querosene de Aviação'", "error");
        return;
    }else if (tipoVeiculo === 'carro' && (passageiros <= 0 || passageiros >= 6) ){
        Swal.fire("Passageiros", "Carro comporta entre 1 e 5 passageiros", "error");
        return;
    }else if (tipoCombustivel === "") {
        Swal.fire("Seleção obrigatória", "Você deve selecionar o tipo de combustível antes de calcular", "error");
        return ;
    }

    // Validar o Número de passageiros
    if (passageiros <= 0 ||isNaN(passageiros)) {
        Swal.fire("Número de passageiros inválido", "O número de passageiros deve ser superior a zero", "error");
        return ;
    }    
    // Validar o dia por mês
    if (diasPorMes <= 0 || isNaN(diasPorMes)) {
        Swal.fire("Dias inválidos", "A quantidade de dias no mês deve ser superior a 0", "error");
        return ;
    }    


    // Calcular o consumo total de combustível com base na distância e no fator de consumo
    const consumoTotalUnidades = distanciaKm * fatorConsumo;

    // Calcular a pegada de carbono
    const pegadaCarbono = consumoTotalUnidades * fatorEmissao / passageiros;

    return pegadaCarbono;  // em kg CO2
}


// Função chamada pelo botão para calcular a pegada de carbono
function calcularPegada() {
    // Obtenha a distância, combustível e tipo de veículo do usuário
    const distanciaKm = parseFloat(document.getElementById('distancia').value) || 0;
    const tipoCombustivel = document.getElementById('combustivel').value;
    const tipoVeiculo = document.getElementById('tipoVeiculo').value;
    const passageiros = document.getElementById('passageiros').value;
    const diasPorMes = document.getElementById('diasPorMes').value;

    try {
        const pegadaPorViagem = calcularPegadaCarbonoTransporte(distanciaKm, tipoCombustivel, tipoVeiculo, passageiros, diasPorMes);

        if (isNaN(pegadaPorViagem) || pegadaPorViagem <= 0) {
            document.getElementById('resultado').innerText = `Campo vazio ou inválido`;
        } else {
            const pegadaTotal = pegadaPorViagem * diasPorMes; // Multiplica pela quantidade de dias
            Swal.fire("Cálculo realizado!", `${(pegadaTotal / 1000).toFixed(4)} toneladas de CO₂`, "success");
            document.getElementById('resultado').innerText = `${(pegadaTotal / 1000).toFixed(4)} toneladas de CO₂`;
        }
    } catch (error) {
        Swal.fire("Erro", error.message, "error");
    }
}

export { calcularPegada, bloquearCombustivelPassageiros, fatorConsumoPorTipo, fatoresEmissao, calcularPegadaCarbonoTransporte };