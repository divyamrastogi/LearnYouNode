var fs = require('fs');
var fileName = process.argv[2];
var file = fs.readFileSync(fileName);
var fileStringArray = file.toString().split('\n');
console.log(fileStringArray.length-1);