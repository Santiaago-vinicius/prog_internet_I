// Função de erro (reaproveitada)
function exibirMensagem(idElemento, mensagem) {
    const elemento = document.getElementById(idElemento);
    elemento.textContent = mensagem;
    elemento.classList.remove('oculto');
    setTimeout(() => {
        elemento.classList.add('oculto');
    }, 3000);
}

function calcularEngajamento() {
    const interacoesInput = document.getElementById('interacoes');
    const visualizacoesInput = document.getElementById('visualizacoes');
    const resultadoDiv = document.getElementById('resultado');

    const interacoes = interacoesInput.value;
    const visualizacoes = visualizacoesInput.value;

    // Validação de campos vazios ou não numéricos 
    if (interacoes === '' || visualizacoes === '' || isNaN(interacoes) || isNaN(visualizacoes)) {
        exibirMensagem('mensagemErro', 'Por favor, insira valores numéricos válidos.'); // 
        resultadoDiv.innerHTML = '';
        return;
    }
    
    const numInteracoes = parseFloat(interacoes);
    const numVisualizacoes = parseFloat(visualizacoes);

    if (numVisualizacoes === 0) {
        exibirMensagem('mensagemErro', 'O número de visualizações não pode ser zero.');
        resultadoDiv.innerHTML = '';
        return;
    }

    // Fórmula da taxa de engajamento 
    const taxa = (numInteracoes / numVisualizacoes) * 100;
    resultadoDiv.innerHTML = `Taxa de Engajamento: <strong>${taxa.toFixed(2)}%</strong>`;
}

document.getElementById('btnCalcular').addEventListener('click', calcularEngajamento);