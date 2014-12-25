var http = require('http');
var totalUrls = process.argv.length - 2;
var globalObject = {};
globalObject.completeData = [];
var pages = [];
var totalCount = 0;
globalObject.pushIntoArray = function(str, index) {
	globalObject.completeData[index] = str;
	totalCount++;
	if(totalCount == 3)
		globalObject.printData();
}

globalObject.printData = function() {
	for(var i = 0; i < totalUrls; i++) {
		console.log(globalObject.completeData[i]);
	}
}
var HTMLPage = function(url, index) {
	var self = this;
	self.index = index;
	self.data = '';
	http.get(url , function(response){
		response.setEncoding('utf8');
		response.on('error', console.error);
		response.on('data', function(data) {
			self.data += data;
		});
		response.on('end', function() {
			globalObject.pushIntoArray(self.data, self.index);
		});
	});
}
for(var i = 2; i < process.argv.length; i++)
	new HTMLPage(process.argv[i], i-2);