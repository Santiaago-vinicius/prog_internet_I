document.getElementById('selectImagem').addEventListener('change', function(event) {
    const imagemExibida = document.getElementById('imagemExibida');
    const urlSelecionada = event.target.value;

    imagemExibida.src = urlSelecionada;
});