document.addEventListener('DOMContentLoaded', function () {
    const app = document.getElementById('app');
    const todoList = document.getElementById('todo-list');
    const todoForm = document.getElementById('todo-form');
    const newTaskInput = document.getElementById('new-task');

    function addTask(taskText) {
        const taskItem = document.createElement('li');
        taskItem.className = 'task';
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="edit-task">Edit</button>
            <button class="delete-task">Delete</button>
        `;
        todoList.appendChild(taskItem);
        saveTasksToLocalStorage();
    }

    function deleteTask(taskItem) {
        todoList.removeChild(taskItem);
        saveTasksToLocalStorage();
    }

    function saveTasksToLocalStorage() {
        const tasks = Array.from(document.querySelectorAll('.task span')).map(task => task.innerText);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasksFromLocalStorage() {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            const tasks = JSON.parse(storedTasks);
            tasks.forEach(task => addTask(task));
        }
    }

    function editTask(taskItem) {
        const span = taskItem.querySelector('span');
        const newText = prompt('Edit task:', span.innerText);
        if (newText !== null) {
            span.innerText = newText;
            saveTasksToLocalStorage();
        }
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
        const taskItem = target.closest('.task');

        if (target.classList.contains('delete-task')) {
            deleteTask(taskItem);
        } else if (target.classList.contains('edit-task')) {
            editTask(taskItem);
        }
    });

    // Load tasks from local storage on page load
    loadTasksFromLocalStorage();
});
