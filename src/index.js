import express from 'express';
import {Server as WebSocketServer} from 'socket.io';
import http from 'http';
const app = express();

const server = http.createServer(app);
const io = new WebSocketServer(server);

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
  console.log("new connection:", socket.id);

  socket.emit('ping');
})


const port = process.env.PORT || 3001;
server.listen(port, () => {

  console.log("server on port ", port);
});


