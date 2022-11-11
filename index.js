var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var listmember = [];
io.on('connection', (socket) => {

    console.log('user connected')
    
    socket.on('client-gui-id', function(userNickname) {
                socket.un=userNickname;
        });

        socket.on('client-gui-tinnhan', function(nd){
            io.sockets.emit('server-gui-tinnhan',{nguoigui: socket.un,tinnhan: nd})
        })
    });
    

server.listen(process.env.PORT || 3000);
console.log('Server is running ');