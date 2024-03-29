var express = require('express');
var app = express();

//设置跨域访问
// app.all('*', function (req, res, next) {
// 	res.header("Access-Control-Allow-Origin", "*");
// 	res.header("Access-Control-Allow-Headers", "X-Requested-With,token");
// 	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
// 	res.header("X-Powered-By", ' 3.2.1');
// 	res.header("Content-Type", "application/json;charset=utf-8");
// 	next();
// });


let data = [];
// 数据
for (let i = 0; i < 500; i++) {
	data.push({
		id: i,
		name: 'name' + i
	})
}
// 模拟分页返回数据接口
app.get('/users/page', function (req, res) {
	var start = req.query.start;
	var end = req.query.end;
	console.log(start,end)
	res.status(200);
	let d = data.slice(start,end)
	res.json(d);
});

// 一次返回所有的数据
app.get('/users/list', function (req, res) {
	res.status(200);
	res.json(data);
});
app.get('/news', function (req, res) {
	res.sendFile(__dirname + '/recommend.json');
})

app.listen(4000, function () {
	console.log('端口号4000 服务启动成功');
});
