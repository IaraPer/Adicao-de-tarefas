// Selecionando os elementos
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Função para criar a lista de tarefas
function createTask(taskText) {
    // Criando o item da lista
    const li = document.createElement('li');
    li.textContent = taskText;

    // Criando o botão de deletar
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Excluir';
    deleteButton.onclick = function() {
        li.remove(); // Remove a tarefa quando o botão é clicado
    };

    // Adicionando o botão de excluir à tarefa
    li.appendChild(deleteButton);

    // Adicionando a tarefa à lista
    taskList.appendChild(li);
}

// Função para adicionar a tarefa
addTaskButton.addEventListener('click', function() {
    const taskText = taskInput.value.trim();

    if (taskText) {
        createTask(taskText);
        taskInput.value = ''; // Limpa o campo de input
    }
});

// Permite adicionar a tarefa pressionando "Enter"
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTaskButton.click();
    }
});
