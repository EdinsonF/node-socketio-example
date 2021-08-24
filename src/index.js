import express from 'express';
import {Server as WebSocketServer} from 'socket.io';
import http from 'http';
import { v4 as uuidv4 } from 'uuid';

const base = [];

const app = express();

const server = http.createServer(app);
const io = new WebSocketServer(server);

app.use(express.static(__dirname + '/public'));
 
io.on('connection', (socket) => {
  console.log("new connection:", socket.id);

    socket.emit('server:loadPost', base)

      socket.on('client:newPost', datos => {
        
        let newPost = {...datos.datos, id: uuidv4() }
        base.push(newPost)

        io.emit('server:newPost',newPost)

      });

})


const port = process.env.PORT || 3001;
server.listen(port, () => {

  console.log("server on port ", port);
});


