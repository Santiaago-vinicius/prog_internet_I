// Função refatorada para exibir mensagem de erro
function exibirMensagem(idElemento, mensagem, tempo = 3000) {
    const elemento = document.getElementById(idElemento);
    if (!elemento) return; // Não faz nada se o elemento não existir

    elemento.textContent = mensagem;
    elemento.classList.remove('oculto');

    setTimeout(() => {
        elemento.classList.add('oculto');
    }, tempo);
}

// Evento do botão
document.getElementById('botaoErro').addEventListener('click', function() {
    exibirMensagem('mensagemErro', 'Este é um erro de exemplo!');
});