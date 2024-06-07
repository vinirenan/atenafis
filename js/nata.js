function converterTemperatura() {
    // Obter os valores dos inputs
    var temperatura = parseFloat(document.getElementById('temperatura').value);
    var deEscala = document.getElementById('deEscala').value;
    var paraEscala = document.getElementById('paraEscala').value;

    // Converter para Celsius
    var temperaturaCelsius;

    if (deEscala === 'celsius') {
        temperaturaCelsius = temperatura;
    } else if (deEscala === 'fahrenheit') {
        temperaturaCelsius = (temperatura - 32) * 5 / 9;
    } else if (deEscala === 'kelvin') {
        temperaturaCelsius = temperatura - 273.15;
    }

    // Converter para a escala desejada
    var temperaturaConvertida;

    if (paraEscala === 'celsius') {
        temperaturaConvertida = temperaturaCelsius;
    } else if (paraEscala === 'fahrenheit') {
        temperaturaConvertida = temperaturaCelsius * 9 / 5 + 32;
    } else if (paraEscala === 'kelvin') {
        temperaturaConvertida = temperaturaCelsius + 273.15;
    }

    // Exibir o resultado
    var resultado = document.getElementById('resultadoTemp');
    resultado.innerHTML = 'Resultado: ' + temperaturaConvertida.toFixed(2) + ' ' + paraEscala.toUpperCase();
}

function calcularForca() {
    // Obter os valores dos inputs
    var massa = parseFloat(document.getElementById('massa').value);
    var aceleracao = parseFloat(document.getElementById('aceleracao').value);

    // Calcular a força
    var forca = massa * aceleracao;

    // Exibir o resultado
    var resultado = document.getElementById('resultadoDin');
    resultado.innerHTML = 'Força Resultante: ' + forca.toFixed(2) + ' N';
}
function calcularVelocidadeMedia() {
    // Obter os valores dos inputs
    var deslocamento = parseFloat(document.getElementById('deslocamento').value);
    var tempo = parseFloat(document.getElementById('tempo').value);

    // Calcular a velocidade média
    var velocidadeMedia = deslocamento / tempo;

    // Exibir o resultado
    var resultado = document.getElementById('resultadoCine');
    resultado.innerHTML = 'Velocidade Média: ' + velocidadeMedia.toFixed(2) + ' m/s';
}
