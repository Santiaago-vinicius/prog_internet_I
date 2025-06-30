//==================================================================
// SEÇÃO 1: VARIÁVEIS GLOBAIS E ESTADO DA APLICAÇÃO
//================================e==================================

// 'idCounter' funciona como um contador para garantir que cada tarefa
// tenha um ID numérico único, começando em 1.
let idCounter = 1;

// 'tarefas' é o "coração" da nossa aplicação. É um array que armazena
// todos os objetos de tarefa. Qualquer mudança (adicionar, editar, excluir)
// acontece primeiro neste array, e depois a tela é atualizada.
let tarefas = [];

//==================================================================
// SEÇÃO 2: SELEÇÃO DOS ELEMENTOS DO DOM
//==================================================================

// Aqui, "capturamos" os elementos do HTML com os quais vamos interagir
// e os guardamos em constantes para fácil acesso.
const descricaoInput = document.getElementById('descricaoTarefa'); // O campo de texto para a descrição
const adicionarBtn = document.getElementById('adicionarBtn');       // O botão principal "Adicionar Tarefa"
const tabelaCorpo = document.querySelector('#tabelaTarefas tbody'); // O corpo (<tbody>) da tabela onde as linhas serão inseridas

//==================================================================
// SEÇÃO 3: EVENT LISTENERS (OBSERVADORES DE EVENTOS)
//==================================================================

// Adiciona um "escutador" de eventos de clique ao botão principal.
// Quando o botão for clicado, ele chamará a função 'adicionarTarefa'.
adicionarBtn.addEventListener('click', adicionarTarefa);

// Esta é a técnica de "Delegação de Eventos". Em vez de adicionar um escutador
// para cada botão de cada linha, adicionamos um único escutador no pai de todos
// (o corpo da tabela). Isso é mais eficiente.
tabelaCorpo.addEventListener('click', function(event) {
    // 'event.target' nos diz qual elemento exato foi clicado dentro da tabela.
    const elementoClicado = event.target;
    // 'closest('tr')' encontra o elemento de linha (<tr>) mais próximo do botão que foi clicado.
    const linha = elementoClicado.closest('tr');
    
    // Se o clique não foi em um botão dentro de uma linha, a função para aqui.
    if (!linha) return;

    // Pega o ID da tarefa que foi armazenado no atributo 'data-id' da linha.
    const idTarefa = Number(linha.dataset.id);

    // Usa a estrutura 'if / else if' para tratar cada tipo de botão separadamente.
    if (elementoClicado.classList.contains('concluirBtn')) {
        const tarefa = tarefas.find(t => t.id === idTarefa);
        if (tarefa.dataConclusao) {
            tarefa.dataConclusao = ""; // Se já está concluída, "reabre" a tarefa limpando a data.
        } else {
            tarefa.dataConclusao = new Date(); // Se está pendente, define a data de conclusão para agora.
        }
        renderizarTabelaComLogica(); // Atualiza a tela.
    }
    else if (elementoClicado.classList.contains('editarBtn')) {
        // Se o botão "Editar" for clicado, chama a função para ativar o modo de edição.
        habilitarEdicao(linha);
    }
    else if (elementoClicado.classList.contains('salvarBtn')) {
        // Se o botão "Salvar" (que aparece durante a edição) for clicado, chama a função para salvar.
        salvarEdicao(linha, idTarefa);
    }
    else if (elementoClicado.classList.contains('excluirBtn')) {
        const tarefa = tarefas.find(t => t.id === idTarefa);
        // Validação: Não permite excluir tarefas já finalizadas.
        if (tarefa.dataConclusao) {
            alert("Não é permitido excluir uma tarefa já finalizada.");
            return;
        }
        // Validação: Pede confirmação do usuário antes de excluir.
        if (confirm(`Tem certeza que deseja excluir a tarefa "${tarefa.descricao}"?`)) {
            // 'filter' cria um novo array com todas as tarefas, exceto aquela com o ID que queremos remover.
            tarefas = tarefas.filter(t => t.id !== idTarefa);
            renderizarTabelaComLogica(); // Atualiza a tela.
        }
    }
});

//==================================================================
// SEÇÃO 4: FUNÇÕES DA APLICAÇÃO
//==================================================================

/**
 * Função chamada quando o botão principal "Adicionar Tarefa" é clicado.
 */
function adicionarTarefa() {
    const descricao = descricaoInput.value;

    // Validação para não permitir tarefas com descrição vazia.
    if (descricao.trim() === "") {
        alert("Por favor, insira uma descrição para a tarefa.");
        return;
    }

    // Cria um novo objeto de tarefa com os dados necessários.
    const novaTarefa = {
        id: idCounter++,
        descricao: descricao,
        dataInicio: new Date(),
        dataConclusao: "" // A data de conclusão começa vazia.
    };

    // Adiciona o novo objeto ao nosso array principal de dados.
    tarefas.push(novaTarefa);
    
    // Chama a função para redesenhar a tabela na tela.
    renderizarTabelaComLogica();
    
    // Limpa o campo de texto para que o usuário possa adicionar outra tarefa.
    descricaoInput.value = "";
}

/**
 * Função central que desenha a tabela HTML com base nos dados do array 'tarefas'.
 * É chamada sempre que os dados são alterados.
 */
function renderizarTabelaComLogica() {
    // Primeiro, limpa todo o conteúdo atual da tabela para não duplicar linhas.
    tabelaCorpo.innerHTML = "";

    // Itera sobre cada objeto 'tarefa' no array 'tarefas'.
    for (const tarefa of tarefas) {
        // Cria o elemento <tr> (linha) na memória.
        const linha = document.createElement('tr');
        linha.dataset.id = tarefa.id; // Armazena o ID da tarefa na própria linha.

        // Prepara as variáveis que podem mudar de acordo com o estado da tarefa.
        const dataInicioFormatada = new Date(tarefa.dataInicio).toLocaleString('pt-BR');
        let dataConclusaoFormatada = "Pendente";
        let acaoBotaoTexto = "Concluir";

        // Se a tarefa tiver uma data de conclusão, ajusta os valores e o estilo.
        if (tarefa.dataConclusao) {
            dataConclusaoFormatada = new Date(tarefa.dataConclusao).toLocaleString('pt-BR');
            acaoBotaoTexto = "Reabrir";
            linha.style.textDecoration = "line-through"; // Tacha o texto da tarefa.
            linha.style.color = "#888";
        }

        // Monta o conteúdo HTML da linha com todas as células (<td>).
        linha.innerHTML = `
            <td>${tarefa.id}</td>
            <td>${tarefa.descricao}</td>
            <td>${dataInicioFormatada}</td>
            <td>${dataConclusaoFormatada}</td>
            <td>
                <button class="concluirBtn">${acaoBotaoTexto}</button>
                <button class="editarBtn">Editar</button>
                <button class="excluirBtn">Excluir</button>
            </td>
        `;

        // Adiciona a linha pronta ao corpo da tabela na página.
        tabelaCorpo.appendChild(linha);
    }
}

/**
 * Ativa o modo de edição para uma linha específica da tabela.
 * @param {HTMLElement} linha - O elemento <tr> que será editado.
 */
function habilitarEdicao(linha) {
    // Seleciona a segunda célula (<td>) da linha, que é a da descrição.
    const celulaDescricao = linha.querySelector('td:nth-child(2)');
    const descricaoAtual = celulaDescricao.textContent;

    // Substitui o texto por um campo de input com o valor atual.
    celulaDescricao.innerHTML = `<input type="text" class="input-edicao" value="${descricaoAtual}">`;

    // Substitui os botões de ação por um único botão "Salvar".
    const celulaAcoes = linha.querySelector('td:nth-child(5)');
    celulaAcoes.innerHTML = `<button class="salvarBtn">Salvar</button>`;

    // Coloca o foco do cursor diretamente no campo de input.
    celulaDescricao.querySelector('.input-edicao').focus();
}

/**
 * Salva as alterações feitas em uma tarefa.
 * @param {HTMLElement} linha - O elemento <tr> que está sendo editado.
 * @param {number} idTarefa - O ID da tarefa a ser atualizada no array.
 */
function salvarEdicao(linha, idTarefa) {
    // Pega o novo texto do campo de input.
    const novoValor = linha.querySelector('.input-edicao').value;

    if (novoValor.trim() === "") {
        alert("A descrição não pode ficar em branco.");
        return;
    }

    // Encontra a tarefa correspondente no array de dados.
    const tarefaParaAtualizar = tarefas.find(t => t.id === idTarefa);
    if(tarefaParaAtualizar) {
        // Atualiza a propriedade 'descricao' no objeto.
        tarefaParaAtualizar.descricao = novoValor;
    }

    // Chama a função para redesenhar a tabela e refletir a mudança.
    renderizarTabelaComLogica();
}

//==================================================================
// SEÇÃO 5: INICIALIZAÇÃO DA APLICAÇÃO
//==================================================================

// Chama a função de renderização uma vez quando a página carrega,
// para garantir que a tabela apareça corretamente (mesmo que vazia).
renderizarTabelaComLogica();