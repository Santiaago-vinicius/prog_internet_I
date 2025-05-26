function calcular() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultadoSpan = document.getElementById("resultadoCalc");
    let operacaoSelecionada;

    // Encontra qual operação está selecionada (checked)
    const operacoes = document.getElementsByName("operacao");
    for (let i = 0; i < operacoes.length; i++) {
        if (operacoes[i].checked) {
            operacaoSelecionada = operacoes[i].value;
            break;
        }
    }

    let resultado;

    if (isNaN(num1) || isNaN(num2)) {
        resultadoSpan.textContent = "Por favor, insira números válidos.";
        return;
    }

    switch (operacaoSelecionada) {
        case "soma":
            resultado = num1 + num2;
            break;
        case "subtracao":
            resultado = num1 - num2;
            break;
        case "multiplicacao":
            resultado = num1 * num2;
            break;
        case "divisao":
            if (num2 === 0) {
                resultadoSpan.textContent = "Erro: Divisão por zero!";
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            resultadoSpan.textContent = "Operação inválida.";
            return;
    }

    resultadoSpan.textContent = resultado;
}