function converterParaCaixaAlta() {
    const inputEntrada = document.getElementById("textoEntrada");
    const inputSaida = document.getElementById("textoSaida");

    if (inputEntrada && inputSaida) {
        const textoOriginal = inputEntrada.value;
        inputSaida.value = textoOriginal.toUpperCase();
    }
}