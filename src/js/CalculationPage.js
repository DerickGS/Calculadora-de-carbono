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
    gasolina: 2.28,
    etanol: 1.867,
    diesel: 3.2,
    gas_natural: 1.824,
    querosene_aviacao: 0.12,
    hibrido: 1.14
};

// Função para calcular a pegada de carbono para um único meio de transporte
function calcularPegadaCarbonoTransporte(distanciaKm, tipoCombustivel, tipoVeiculo) {
    const fatorEmissao = fatoresEmissao[tipoCombustivel];
    if (!fatorEmissao) {
        throw new Error("Tipo de combustível desconhecido");
    }

    if (distanciaKm <= 0) {
        Swal.fire("Campo vazio ou inválido", "A Distância (KM) deve ser superior a zero", "error");
        return 0; // Retorna 0 para evitar cálculos incorretos
    }

    const fatorConsumo = fatorConsumoPorTipo[tipoVeiculo];
    if (!fatorConsumo) {
        throw new Error("Tipo de veículo desconhecido");
    }

    // Calcular o consumo total de combustível com base na distância e no fator de consumo
    const consumoTotalUnidades = distanciaKm * fatorConsumo;

    // Calcular a pegada de carbono
    const pegadaCarbono = consumoTotalUnidades * fatorEmissao;

    return pegadaCarbono;  // em kg CO2
}

// Função chamada pelo botão para calcular a pegada de carbono
function calcularPegada() {
    // Obtenha a distância, combustível e tipo de veículo do usuário
    const distanciaKm = parseFloat(document.getElementById('distancia1').value) || 0;
    const tipoCombustivel = document.getElementById('combustivel1').value;
    const tipoVeiculo = document.getElementById('tipoVeiculo1').value;

    try {
        const pegadaTotal = calcularPegadaCarbonoTransporte(distanciaKm, tipoCombustivel, tipoVeiculo);

        if (isNaN(pegadaTotal) || pegadaTotal <= 0) {
            document.getElementById('resultado').innerText = `Campo vazio ou inválido`;
        } else {
            Swal.fire("Cálculo realizado!", `${(pegadaTotal / 1000).toFixed(4)} toneladas de CO₂`, "success");
            document.getElementById('resultado').innerText = `${(pegadaTotal / 1000).toFixed(4)} toneladas de CO₂`;
        }
    } catch (error) {
        Swal.fire("Erro", error.message, "error");
    }
}

export { calcularPegada, fatorConsumoPorTipo, fatoresEmissao, calcularPegadaCarbonoTransporte };