// Função de erro (reaproveitada)
function exibirMensagem(idElemento, mensagem) {
    const elemento = document.getElementById(idElemento);
    elemento.textContent = mensagem;
    elemento.classList.remove('oculto');
    setTimeout(() => {
        elemento.classList.add('oculto');
    }, 3000);
}

document.getElementById('enviarBtn').addEventListener('click', function() {
    const checkboxes = document.getElementsByName('redesSociais');
    const resultadoDiv = document.getElementById('redesSelecionadas');
    let selecionadas = [];

    // Percorre o array de checkboxes
    for (let i = 0; i < checkboxes.length; i++) {
        // Testa a propriedade 'checked' 
        if (checkboxes[i].checked) {
            selecionadas.push(checkboxes[i].value);
        }
    }

    // Valida se pelo menos um checkbox foi marcado 
    if (selecionadas.length === 0) {
        exibirMensagem('mensagemErro', 'Selecione pelo menos uma rede social.');
        resultadoDiv.innerHTML = '';
    } else {
        // Exibe as redes selecionadas 
        resultadoDiv.innerHTML = `<strong>Redes Selecionadas:</strong> ${selecionadas.join(', ')}`;
    }
});