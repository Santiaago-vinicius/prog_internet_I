function contarEExibir() {
    const divFonte = document.getElementById("divComParagrafos");
    const divResultado = document.getElementById("resultadoContagem");

    if (divFonte && divResultado) {
        // Pega todos os elementos <p> DENTRO da 'divComParagrafos'
        const paragrafos = divFonte.getElementsByTagName("p");
        const numeroDeParagrafos = paragrafos.length;

        // Exibe o resultado na 'divResultado'
        divResultado.textContent = "Número de parágrafos na div: " + numeroDeParagrafos;
    } else {
        console.error("Uma ou ambas as divs não foram encontradas!");
    }
}