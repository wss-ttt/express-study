var express = require('express');
var request = require('request');
var app = express();
app.get('/news', function(req, res) {
	var data;
	var url = 'http://news-at.zhihu.com/api/4/news/latest';
	// 在接口里面发送请求
	request(url, function(error, response, body) {
		if(!error && response.statusCode == 200) {
			data = JSON.parse(body);
			res.send(typeof body);  // string
		}
	});
});

app.listen(2000, function() {
	console.log('启动成功');
});