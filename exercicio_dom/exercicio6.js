const caixa = document.getElementById("caixa");

function mudarEstilo() {
    if (caixa) {
        // Alterando a cor de fundo
        caixa.style.backgroundColor = "salmon";
        // Alterando a cor do texto
        caixa.style.color = "white";
        // Alterando o tamanho da fonte (propriedades com hífen são camelCase em JS)
        caixa.style.fontSize = "20px";
        // Adicionando uma borda mais grossa
        caixa.style.border = "3px dashed darkblue";
    }
}

function resetarEstilo() {
    if (caixa) {
        caixa.style.backgroundColor = "lightblue";
        caixa.style.color = "black";
        caixa.style.fontSize = "initial"; // ou o valor original, se souber
        caixa.style.border = "1px solid black";
    }
}