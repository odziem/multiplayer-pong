const server = require('http').createServer();
const io = require('socket.io')(server);

const PORT = 3000;

server.listen(PORT);
console.log(`Listening on port ${PORT}...`);

let readyPlayerCount = 0;

io.on('connection', (socket) => {
  console.log('a user connected', socket.id);

  socket.on('ready', () => {
    console.log('Player ready', socket.id);

    readyPlayerCount++;

    if (readyPlayerCount === 2) {
      //broadcast('startGame')
    }
  });
});