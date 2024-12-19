const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

addBtn.addEventListener('click', addTodo);

function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText === '') return;

    const listItem = document.createElement('li');
    listItem.textContent = todoText;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Өшіру';
    removeBtn.className = 'remove-btn';
    removeBtn.addEventListener('click', () => listItem.remove());

    listItem.appendChild(removeBtn);

    listItem.addEventListener('dblclick', () => {
        todoInput.value = todoText;
        listItem.remove();
    });

    todoList.appendChild(listItem);
    todoInput.value = '';
}
