// todo.js
function initializeTodo() {
    const todoList = document.getElementById('todo-list');
    const todoForm = document.getElementById('todo-form');
    const newTaskInput = document.getElementById('new-task');

    function addTask(taskText) {
        const taskItem = document.createElement('li');
        taskItem.className = 'task';
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-task">Delete</button>
        `;
        todoList.appendChild(taskItem);
    }

    function deleteTask(taskItem) {
        todoList.removeChild(taskItem);
    }

    todoForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const newTaskText = newTaskInput.value.trim();
        if (newTaskText !== '') {
            addTask(newTaskText);
            newTaskInput.value = '';
        }
    });

    todoList.addEventListener('click', function (e) {
        const target = e.target;
        if (target.classList.contains('delete-task')) {
            const taskItem = target.closest('.task');
            deleteTask(taskItem);
        }
    });
}

// Экспортируем функцию для использования в других файлах
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = {
        initializeTodo
    };
}
