/*jshint esversion: 6 */

let PORT = 5000;
let express = require('express');
let app = express();

let http = require('http');
let server = http.Server(app);

app.use(express.static('client'));

server.listen(PORT, function() {
    console.log('Chat server running');
    
});

let io = require('socket.io')(server);
io.on('connection', function(socket) {
    socket.on('message', function(msg) {
        io.emit('message', msg);
    });
});