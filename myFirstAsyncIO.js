var fs = require('fs');
var fileName = process.argv[2];
var file = fs.readFile(fileName, function(err, data) {
	if(err) throw err;
	var fileStringArray = data.toString().split('\n');
	console.log(fileStringArray.length-1);
});