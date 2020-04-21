var express = require('express');

var app = express();

app.use(express.static(__dirname));

//设置跨域访问
app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});

// post请求
app.post('/news',function(req,res){
	res.sendFile(__dirname + '/news.json');
});

app.listen(2000, function() {
	console.log('启动成功');
});