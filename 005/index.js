var express = require('express');
var app = express();

// 此处没有设置跨域请求

let data = [];
// 数据
for (let i = 0; i < 500; i++) {
	data.push({
		id: i,
		name: 'name' + i
	})
}
/* var data = [
	{
		"id":1,
		"name":"张三"
	},
	{
		"id":2,
		"name":"乔峰"
	},
	{
		"id":3,
		"name":"小龙女"
	}
]; */

// 测试 接口
app.get('/users/list', function (req, res) {
	res.status(200);
	res.json(data);
});

// 测试 
app.get('/users/list2', function (req, res) {
	res.json({
		code:0,
		msg:'success',
		data:data
	});
});
// 测试 post接口
app.post('/users/delete',function(req,res){
	res.status(200);
	res.json(data);
});

app.listen(3001, function () {
	console.log('端口号3001 服务启动成功');
});
