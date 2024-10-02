// Fatores de correção de consumo com base no tipo de veículo
const fatorConsumoPorTipo = {
    carro: 1.0,       // Referência
    moto: 1.2,        // Motos geralmente têm maior eficiência
    onibus: 0.5,      // Ônibus transporta mais passageiros, menor consumo per capita
    aviao: 0.1        // Avião emite muito por km, mas depende do número de passageiros
};

// Dicionário com os fatores de emissão
const fatoresEmissao = {
    gasolina: 2.19,       // kg CO2/litro
    etanol: 1.53,         // kg CO2/litro
    diesel: 2.68,         // kg CO2/litro
    gas_natural: 2.75,    // kg CO2/m³
    querosene_aviacao: 2.54,  // kg CO2/litro
    hibrido: 1.75         // Exemplo: média ponderada entre gasolina e eletricidade
};

// Função para calcular a pegada de carbono para um único meio de transporte
function calcularPegadaCarbonoTransporte(distanciaKm, consumoKmPorUnidade, tipoCombustivel, tipoVeiculo) {
    const fatorEmissao = fatoresEmissao[tipoCombustivel];
    if (!fatorEmissao) {
        throw new Error("Tipo de combustível desconhecido");
    }
    // alteração DerickGs test ---------------------------------------------------------------//
    if (distanciaKm <= 0) {
        throw new Error("A distância deve ser maior que zero");
    }
    
    if (consumoKmPorUnidade <= 0) {
        throw new Error("O consumo por unidade deve ser maior que zero");
    }
    const fatorConsumo = fatorConsumoPorTipo[tipoVeiculo];
    if (!fatorConsumo) {
        throw new Error("Tipo de veículo desconhecido");
    }
    //----------------------------------------------------------------------------------------//

    // const fatorConsumo = fatorConsumoPorTipo[tipoVeiculo];
    const consumoTotalUnidades = (distanciaKm / consumoKmPorUnidade) * fatorConsumo;
    const pegadaCarbono = consumoTotalUnidades * fatorEmissao;

    return pegadaCarbono;  // em kg CO2
}

// Função para calcular a pegada de carbono total para múltiplos meios de transporte
function calcularPegadaTotal() {
    const distancias = [
        parseFloat(document.getElementById('distancia1').value) || 0,
    ];

    const consumos = [
        parseFloat(document.getElementById('consumo1').value) || 0,
    ];

    const combustiveis = [
        document.getElementById('combustivel1').value,
    ];

    const tiposVeiculo = [
        document.getElementById('tipoVeiculo1').value,
    ];

    let pegadaTotal = 0;

    for (let i = 0; i < distancias.length; i++) {
        pegadaTotal += calcularPegadaCarbonoTransporte(distancias[i], consumos[i], combustiveis[i], tiposVeiculo[i]);
    }

    return pegadaTotal / 1000;  // Convertendo de kg CO2 para toneladas de CO2
}

// Função chamada pelo botão para exibir o resultado
function calcularPegada() {
    const pegadaTotal = calcularPegadaTotal();
    document.getElementById('resultado').innerText = `${pegadaTotal.toFixed(4)} toneladas de CO₂`;
}

export {calcularPegada, fatorConsumoPorTipo, fatoresEmissao, calcularPegadaCarbonoTransporte, calcularPegadaTotal }; 