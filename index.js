var express   =     require("express");
var app       =     express();
var http = require('http').Server(app);
let io = require('socket.io')(http);

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

app.use(express.static(__dirname + '/public'));

http.listen(3000, function(){
	console.log('listening on 3000');
});

io.on('connection', function(socket) {
	console.log('connected new client');
	
	socket.on('message', function(data) { 
		console.log(data);
		socket.broadcast.emit('new message', data);
	});
});

