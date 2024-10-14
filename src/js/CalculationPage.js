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

    // Validar o combustível se o veículo for ônibus ou avião ou moto
    if (tipoVeiculo === 'onibus' && tipoCombustivel !== 'diesel') {
        Swal.fire("Combustível inválido", "Para o tipo de veículo 'Ônibus', o combustível deve ser 'Diesel'", "error");
        return ;
    } else if (tipoVeiculo === 'aviao' && tipoCombustivel !== 'querosene_aviacao') {
        Swal.fire("Combustível inválido", "Para o tipo de veículo 'Avião', o combustível deve ser 'Querosene de Aviação'", "error");
        return ;
    }else if (tipoVeiculo === 'moto' && (tipoCombustivel !== 'etanol' && tipoCombustivel !== 'gasolina')) {
        Swal.fire("Combustível inválido", "Para o tipo de veículo 'Moto', o combustível deve ser 'Gasolina' ou 'Etanol'", "error");
        return;
    }else if (tipoCombustivel === "") {
        Swal.fire("Seleção obrigatória", "Você deve selecionar o tipo de combustível antes de calcular", "error");
        return ;
    }

    // Validar o combustível se o veículo for ônibus ou avião ou moto    
    if (passageiros <= 0 ||isNaN(passageiros)) {
        Swal.fire("Número de passageiros inválido", "O número de passageiros deve ser superior a zero", "error");
        return ;
    }    
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

export { calcularPegada, fatorConsumoPorTipo, fatoresEmissao, calcularPegadaCarbonoTransporte };
// export { calcularPegada, exibirCampoPassageiros, fatorConsumoPorTipo, fatoresEmissao, calcularPegadaCarbonoTransporte };