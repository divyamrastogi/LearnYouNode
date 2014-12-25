module.exports = function(dirName, extName, callback) {
	var fs = require('fs');
	var path = require('path');
	var fileList = [];
	var extension = '.' + extName;
	var dir = fs.readdir(dirName, function(err, list) {
		if (err)
			return callback(err);
		for (var i = 0; i < list.length; i++) {
			if(path.extname(list[i]) === extension) {
				fileList.push(list[i]);
			}
		};
		callback(null, fileList);
	});
}