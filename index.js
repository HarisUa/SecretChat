var express   =     require("express");
var app       =     express();
var http = require('http').Server(app);
let io = require('socket.io')(http);

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

app.use(express.static(__dirname + '/public'));

http.listen(8080, function(){
	console.log('listening on 8080');
});

io.on('connection', function(socket) {
	
	console.log('connected new client');
	
	
	var currentRoom = 'Global';
	socket.join(currentRoom);
	socket.join('test');
	
	io.emit('refreshClients', io.engine.clientsCount);
	
	socket.on('disconnect', function(data) { 
		io.emit('refreshClients', io.engine.clientsCount);
	});
	
	socket.on('message', function(data) { 
		console.log(data);
		socket.broadcast.to(currentRoom).emit('new message', data);
	});
});


function loadUser(req, res, next) {
	if (req.session.user_id == client.id) {
		return true;
	} else {
		socket.disconnect();
		res.redirect('/');
	}
}