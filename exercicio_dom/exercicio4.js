// selecione o botão usando o método getElementById
var botao = document.getElementById("botao");
var botaoLimpar = document.getElementById("botaoLimpar"); // Seleciona o novo botão

// selecione o parágrafo usando o método getElementById
var paragrafo = document.getElementById("paragrafo");
const textoOriginal = paragrafo.textContent; // Guarda o texto original para referência, se necessário

// adicione um evento de clique ao botão "Clique aqui"
if (botao) {
    botao.addEventListener("click", function() {
        // altere o texto do parágrafo [cite: 6]
        paragrafo.textContent = "O texto deste parágrafo foi alterado!";
    });
}

// adicione um evento de clique ao botão "Limpar"
if (botaoLimpar) {
    botaoLimpar.addEventListener("click", function() {
        // limpe o conteúdo do texto do parágrafo
        paragrafo.textContent = ""; // Define o texto como vazio
        // Ou, para voltar ao texto inicial:
        // paragrafo.textContent = textoOriginal;
    });
}