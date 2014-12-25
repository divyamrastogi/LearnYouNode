var net = require('net');
var date = new Date();
function zeroFill(number) {
	return number < 10 ? '0' + number : number;
}
function now() {
	return date.getFullYear() + '-' 
		+ zeroFill(date.getMonth() + 1) + '-' 
		+ zeroFill(date.getDate()) + ' ' 
		+ zeroFill(date.getHours()) + ':' 
		+ zeroFill(date.getMinutes());
}
var server = net.createServer(function response(socket){
	socket.write(now() + '\n');
	socket.end();
});

server.listen(process.argv[2]);