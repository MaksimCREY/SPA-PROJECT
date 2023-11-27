// main.js
document.addEventListener('DOMContentLoaded', function () {
    const app = document.getElementById('app');

    function navigateTo(route) {
        fetch(route + '.html')
            .then(response => response.text())
            .then(html => {
                app.innerHTML = html;
                if (route === 'todo') {
                    const todo = require('./todo'); // Путь к todo.js
                    todo.initializeTodo();
                }
            });
    }

    window.addEventListener('hashchange', () => {
        const route = window.location.hash.substr(1);
        navigateTo(route || 'home');
    });

    // Инициализация SPA
    navigateTo('home');
});
