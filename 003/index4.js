var express = require('express');
var app = express();

app.get('/show/news', function (req, res) {
	res.sendFile(__dirname + '/student.json');
})

app.listen(6000, function () {
	console.log('端口号6000 服务启动成功');
});
