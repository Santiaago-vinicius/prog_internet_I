const btnContraste = document.getElementById("btnContraste");
const btnResetarCores = document.getElementById("btnResetarCores");
const body = document.body;

// Armazenar as cores originais (pode ser melhorado pegando do CSS computado)
const corFundoOriginal = window.getComputedStyle(body).backgroundColor;
const corTextoOriginal = window.getComputedStyle(body).color;

let altoContrasteAtivo = false;

if (btnContraste) {
    btnContraste.addEventListener("click", function() {
        if (!altoContrasteAtivo) {
            body.style.backgroundColor = "black";
            body.style.color = "white";
            // Você pode querer mudar a cor de outros elementos específicos também
            document.querySelectorAll('h1, p').forEach(el => el.style.color = "white");
            altoContrasteAtivo = true;
        } else {
            resetarCores(); // Reutiliza a função de resetar
        }
    });
}

if (btnResetarCores) {
    btnResetarCores.addEventListener("click", resetarCores);
}

function resetarCores() {
    body.style.backgroundColor = corFundoOriginal;
    body.style.color = corTextoOriginal;
    document.querySelectorAll('h1, p').forEach(el => el.style.color = corTextoOriginal); // Reseta outros elementos
    altoContrasteAtivo = false;
}