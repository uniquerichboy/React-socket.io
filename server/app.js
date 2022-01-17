const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server, {
    cors: { origin: '*' }
});

const PORT = 5000;

io.on('connection', (socket) => {
    console.log(`Пользователь ${socket.id} подключился`);
    socket.on('disconnect', () => console.log(`Пользователь ${socket.id} отключился`));
});

server.listen(PORT, () => console.log(`Сервер запущен на порте: ${PORT}`));