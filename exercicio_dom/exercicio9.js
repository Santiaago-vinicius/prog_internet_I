const btnAumentar = document.getElementById("btnAumentarFonte");
const btnDiminuir = document.getElementById("btnDiminuirFonte");
const body = document.body;
let tamanhoFonteAtual = parseFloat(window.getComputedStyle(body).fontSize); // Pega o tamanho atual em pixels

const passo = 2; // Quantos pixels aumentar/diminuir por vez

if (btnAumentar) {
    btnAumentar.addEventListener("click", function() {
        tamanhoFonteAtual += passo;
        body.style.fontSize = tamanhoFonteAtual + "px";
    });
}

if (btnDiminuir) {
    btnDiminuir.addEventListener("click", function() {
        if (tamanhoFonteAtual > passo) { // Evita fonte muito pequena ou negativa
            tamanhoFonteAtual -= passo;
            body.style.fontSize = tamanhoFonteAtual + "px";
        }
    });
}