const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Middleware для указания папки, из которой будут отдаваться статические файлы (например, HTML, CSS, JS)
app.use(express.static(__dirname));

// Middleware для обработки всех запросов, чтобы отправлять index.html и обрабатывать маршруты на стороне клиента
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
