const express = require('express');
// import express from 'express';
// import { Server } from 'socket.io';

const app = express();
const server = require('http').createServer(app);

const io = require('socket.io')(server,{
   cors: {origin: "*"}
});

io.on('connection',(socket) => {
    console.log('connection');

    socket.on('sendChatToServer',(message) => {
        console.log(message);
        // get from server
        // io.sockets.emit('sendChatToClient',message);
        socket.broadcast.emit('sendChatToClient',message)

    });

    socket.on('disconnect',(socket) => {
        console.log('Disconnect');
    });
});

server.listen(3000,() =>{
    console.log('Server is runing');
});
