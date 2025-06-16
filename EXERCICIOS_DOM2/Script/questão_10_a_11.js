const disponiveisSelect = document.getElementById('ativosDisponiveis');
const carteiraSelect = document.getElementById('carteiraInvestimentos');
const paraDireitaBtn = document.getElementById('moverParaDireitaBtn');
const paraEsquerdaBtn = document.getElementById('moverParaEsquerdaBtn');

// Função de erro (reaproveitada)
function exibirMensagem(idElemento, mensagem) {
    const elemento = document.getElementById(idElemento);
    elemento.textContent = mensagem;
    elemento.classList.remove('oculto');
    setTimeout(() => {
        elemento.classList.add('oculto');
    }, 3000);
}

// Função para mover opções entre selects
function moverOpcoes(origemSelect, destinoSelect) {
    const selecionadas = Array.from(origemSelect.selectedOptions);

    // Validação se algum item foi selecionado (Questão 11a) 
    if (selecionadas.length === 0) {
        exibirMensagem('mensagemErro', 'Selecione pelo menos um item para mover.');
        return;
    }

    selecionadas.forEach(option => {
        destinoSelect.appendChild(option); // O appendChild move o elemento
    });
    
    atualizarEstadoBotoes();
}

// Função para habilitar/desabilitar botões (Questão 11b) 
function atualizarEstadoBotoes() {
    paraDireitaBtn.disabled = disponiveisSelect.options.length === 0;
    paraEsquerdaBtn.disabled = carteiraSelect.options.length === 0;
}

// Event Listeners para os botões
paraDireitaBtn.addEventListener('click', () => {
    moverOpcoes(disponiveisSelect, carteiraSelect);
});

paraEsquerdaBtn.addEventListener('click', () => {
    moverOpcoes(carteiraSelect, disponiveisSelect);
});

// Inicializa o estado dos botões ao carregar a página
document.addEventListener('DOMContentLoaded', atualizarEstadoBotoes);