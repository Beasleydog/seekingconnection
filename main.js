console.log("Server starting...")
var express = require('express');
var app = express();
var http = require('http').createServer(app);
app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

http.listen(3000, () => {
    console.log('listening on *:3000');
});