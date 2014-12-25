var http = require('http');
var completeData = [];
http.get(process.argv[2] , function(response){
	response.setEncoding('utf8');
	response.on('error', console.error);
	response.on('data', function(data) {
		completeData.push(data);
	});
	response.on('end', function() {
		var totalData = completeData.join('');
		console.log(totalData.length);
		console.log(totalData);
	});
});