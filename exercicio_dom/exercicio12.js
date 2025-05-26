function adicionarOpcao() {
    const inputOpcao = document.getElementById("opcaoTexto");
    const selectElement = document.getElementById("meuSelect");

    if (inputOpcao && selectElement) {
        const textoDaOpcao = inputOpcao.value.trim();

        if (textoDaOpcao === "") {
            alert("Por favor, digite algo para adicionar ao select.");
            return;
        }

        // 1. Criar um novo elemento <option>
        const novaOption = document.createElement("option");

        // 2. Definir o texto e o valor da nova <option>
        // Geralmente, o texto visível e o valor enviado podem ser os mesmos ou diferentes.
        novaOption.textContent = textoDaOpcao;
        novaOption.value = textoDaOpcao.toLowerCase().replace(/\s+/g, '-'); // Ex: "Nova Opcao" -> "nova-opcao"

        // 3. Adicionar a nova <option> ao <select>
        selectElement.appendChild(novaOption);

        // Limpar a caixa de texto após adicionar
        inputOpcao.value = "";
        inputOpcao.focus();
    }
}