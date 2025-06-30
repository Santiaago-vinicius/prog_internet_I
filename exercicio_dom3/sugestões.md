1. Sistema de Prioridade
O quê? Permitir que o usuário defina uma prioridade (Baixa, Média, Alta) para cada tarefa.

Por quê? Para ajudar na organização e permitir que o usuário foque nas tarefas mais urgentes, melhorando o gerenciamento do fluxo de trabalho.

Como? Adicionando um campo de seleção (<select>) no formulário. A prioridade seria salva no objeto da tarefa e usada para aplicar uma classe CSS à linha da tabela (<tr>), que por sua vez aplicaria uma cor de fundo diferente para cada nível de prioridade.

2. Filtros de Visualização
O quê? Adicionar botões ("Mostrar Todas", "Mostrar Pendentes", "Mostrar Concluídas") para filtrar as tarefas visíveis na tabela.

Por quê? Em listas longas, a visualização pode ficar poluída com tarefas já concluídas. Os filtros melhoram a experiência do usuário ao permitir que ele foque apenas no que é relevante no momento.

Como? Os botões atualizariam uma variável de "estado do filtro" no JavaScript. A função renderizarTabela seria modificada para, antes de exibir os dados, filtrar o array principal de tarefas com base nesse estado.

3. Persistência de Dados com localStorage
O quê? Salvar a lista de tarefas no navegador do usuário.

Por quê? Atualmente, as tarefas são perdidas se o usuário fecha ou recarrega a página. Salvar os dados no localStorage torna a aplicação genuinamente útil, pois o trabalho do usuário não é perdido.

Como? Ao carregar a página, o script verificaria se há dados no localStorage. Se houver, carregaria esses dados. Toda vez que o array de tarefas fosse modificado (adicionar, editar, etc.), a nova versão do array seria salva no localStorage (usando JSON.stringify).

4. Notificações e Prazos
O quê? Adicionar um campo de data para um prazo final da tarefa e criar notificações no navegador.

Por quê? Para adicionar um senso de urgência e ajudar o usuário a não perder prazos importantes, tornando a ferramenta mais proativa.

Como? Adicionar um campo de data (<input type="date">) no formulário. No JavaScript, uma função rodaria em intervalos (setInterval) para verificar se alguma tarefa está próxima do prazo. Se estivesse, a API de Notificações do navegador poderia ser usada para exibir um alerta para o usuário.

