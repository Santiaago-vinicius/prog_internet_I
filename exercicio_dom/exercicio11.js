function adicionarItem() {
    const inputItem = document.getElementById("itemTexto");
    const lista = document.getElementById("minhaLista");

    if (inputItem && lista) {
        const textoDoItem = inputItem.value.trim(); // trim() remove espaços em branco no início e fim

        if (textoDoItem === "") {
            alert("Por favor, digite algo para adicionar à lista.");
            return;
        }

        // 1. Criar um novo elemento <li>
        const novoLi = document.createElement("li");

        // 2. Definir o conteúdo do novo <li>
        novoLi.textContent = textoDoItem;

        // 3. Adicionar o novo <li> à lista <ul>
        lista.appendChild(novoLi);

        // Limpar a caixa de texto após adicionar
        inputItem.value = "";
        inputItem.focus(); // Coloca o foco de volta no input
    }
}