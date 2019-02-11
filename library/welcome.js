const net = require('net');


const response = "Ahhhh, welcome! Take a look at shelf 80, we have some special offers for travellers like you!"


const server = net.createServer(function(socket) {
	socket.write(response);
});

server.listen(1337, '0.0.0.0');