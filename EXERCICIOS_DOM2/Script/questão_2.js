// Função de erro (reaproveitada da questão 1)
function exibirMensagem(idElemento, mensagem) {
    const elemento = document.getElementById(idElemento);
    elemento.textContent = mensagem;
    elemento.classList.remove('oculto');
    setTimeout(() => {
        elemento.classList.add('oculto');
    }, 3000);
}

// Função principal do exercício
function exibirConteudo() {
    const input = document.getElementById('caixaDeTexto');
    const conteudoDiv = document.getElementById('conteudo');
    const valorTratado = input.value.trim(); // Remove espaços 

    if (valorTratado === '') {
        // Sinaliza o erro se o campo estiver vazio 
        exibirMensagem('mensagemErro', 'O campo não pode ser vazio.');
        conteudoDiv.innerHTML = ''; // Limpa o conteúdo
    } else {
        conteudoDiv.innerHTML = valorTratado;
    }
}

document.getElementById('botaoExibir').addEventListener('click', exibirConteudo);