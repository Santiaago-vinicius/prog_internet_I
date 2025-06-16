const inputHashtag = document.getElementById('inputHashtag');
const btnAdd = document.getElementById('btnAdd');
const btnRemover = document.getElementById('btnRemover');
const listaHashtags = document.getElementById('listaHashtags');

// Função de erro (reaproveitada)
function exibirMensagem(idElemento, mensagem) {
    const elemento = document.getElementById(idElemento);
    elemento.textContent = mensagem;
    elemento.classList.remove('oculto');
    setTimeout(() => {
        elemento.classList.add('oculto');
    }, 3000);
}

// Adicionar Hashtag
btnAdd.addEventListener('click', function() {
    const hashtagText = inputHashtag.value.trim();
    const options = listaHashtags.options;

    // Validações da Questão 8
    if (hashtagText === '') { // b) Hashtags vazias 
        exibirMensagem('mensagemErro', 'Hashtag não pode ser vazia.');
        return;
    }
    if (hashtagText.length < 2) { // c) Comprimento menor que 2 
        exibirMensagem('mensagemErro', 'Hashtag deve ter pelo menos 2 caracteres.');
        return;
    }
    if (options.length >= 5) { // d) Mais que 5 hashtags 
        exibirMensagem('mensagemErro', 'A lista já contém 5 hashtags.');
        return;
    }
    for (let i = 0; i < options.length; i++) { // a) Hashtags repetidas 
        if (options[i].value.toLowerCase() === hashtagText.toLowerCase()) {
            exibirMensagem('mensagemErro', 'Esta hashtag já foi adicionada.');
            return;
        }
    }

    // Cria e adiciona a nova option (Questão 7) 
    const novaOption = document.createElement('option');
    novaOption.value = hashtagText;
    novaOption.textContent = `#${hashtagText}`;
    listaHashtags.appendChild(novaOption);

    inputHashtag.value = ''; // Limpa o input
    inputHashtag.focus();
});

// Remover Hashtag (Questão 9)
btnRemover.addEventListener('click', function() {
    // Pega as opções selecionadas
    const selectedOptions = listaHashtags.selectedOptions; // 

    if (selectedOptions.length === 0) {
        exibirMensagem('mensagemErro', 'Selecione uma hashtag para remover.');
        return;
    }
    
    // Remove as opções selecionadas do select
    // É preciso iterar de trás para frente ao remover múltiplos itens de uma coleção ao vivo
    for (let i = selectedOptions.length - 1; i >= 0; i--) {
        listaHashtags.removeChild(selectedOptions[i]); // 
    }
});