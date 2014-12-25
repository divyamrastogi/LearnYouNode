var http = require('http');
var url = require('url');
function getJsonResponse(isoKey, pathname) {
	var date = new Date(isoKey);
	var jsonResponse;
	console.log(pathname);
	if(pathname == '/api/parsetime') {
		jsonResponse = {
			hour : date.getHours() ,
			minute : date.getMinutes(),
			second : date.getSeconds()
		}
	}
	if(pathname == '/api/unixtime') {
		jsonResponse = {
			unixtime : date.getTime()
		}
	}
	return jsonResponse;
}
var server = http.createServer(function(request, response){
	if(request.method !== 'GET')
		return response.end('Please use a GET request\n');
	response.writeHead(200, {'Content-Type' : 'application/json'});
	var parsedUrl = url.parse(request.url, true);
	response.write( JSON.stringify( getJsonResponse( parsedUrl.query.iso, parsedUrl.pathname ) ) );
	response.end();
});
server.listen(process.argv[2]);