document.getElementById('btnCarregar').addEventListener('click', function() {
    const uploadInput = document.getElementById('uploadImagem');
    const resultadoDiv = document.getElementById('resultado');

    // Pega o arquivo selecionado 
    const arquivo = uploadInput.files[0];

    if (arquivo) {
        // Limpa a div de resultado antes de adicionar nova imagem
        resultadoDiv.innerHTML = '';
        
        // Cria o elemento <img> 
        const imgElement = document.createElement('img');
        
        // Define o src da imagem usando createObjectURL 
        imgElement.src = URL.createObjectURL(arquivo);
        imgElement.style.maxWidth = '100%'; // Para a imagem não estourar o container
        imgElement.style.marginTop = '10px';

        // Adiciona a imagem à div 
        resultadoDiv.appendChild(imgElement);
    } else {
        alert('Por favor, selecione um arquivo de imagem.');
    }
});