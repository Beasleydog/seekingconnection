console.log("Server starting...")
var app = require('express')();
var http = require('http').createServer(app);
app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
    res.sendFile('public/index.html');
});

http.listen(3000, () => {
    console.log('listening on *:3000');
});