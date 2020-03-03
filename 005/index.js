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

// 测试 接口
app.get('/users/list', function (req, res) {
	res.status(200);
	res.json(data);
});

// 测试 
app.get('/users/list2', function (req, res) {
	res.json({
		code: 0,
		msg: 'success',
		data: data
	});
});
// 测试 post接口
app.post('/users/delete', function (req, res) {
	res.status(200);
	res.json(data);
});

app.get('/echarts/test1/list', function (req, res) {
	let xData = [];
	for (let i = 0; i < 50; i++) {
		xData.push('aaa' + i);
	}
	let yData = [];
	for (let i = 0; i < 50; i++) {
		let num = Math.floor(Math.random() * (1500 - 100 + 1) + 100) // 向下取整
		yData.push(num)
	}
	let data = {
		xAxis: xData,
		yAxis: yData
	}
	res.json(data);
})
app.get('/echarts/test2/list', function (req, res) {
	let xData = [];
	for (let i = 0; i < 50; i++) {
		xData.push('bbb' + i);
	}
	let yData = [];
	for (let i = 0; i < 50; i++) {
		let num = Math.floor(Math.random() * (1500 - 100 + 1) + 100) // 向下取整
		yData.push(num)
	}
	let data = {
		xAxis: xData,
		yAxis: yData
	}
	res.json(data);
})
app.get('/echarts/test3/list', function (req, res) {
	let xData = [];
	for (let i = 0; i < 50; i++) {
		xData.push('ccc' + i);
	}
	let yData = [];
	for (let i = 0; i < 50; i++) {
		let num = Math.floor(Math.random() * (1500 - 100 + 1) + 100) // 向下取整
		yData.push(num)
	}
	let data = {
		xAxis: xData,
		yAxis: yData
	}
	res.json(data);
})
app.get('/echarts/test4/list', function (req, res) {
	let xData = [];
	for (let i = 0; i < 50; i++) {
		xData.push('ddd' + i);
	}
	let yData = [];
	for (let i = 0; i < 50; i++) {
		let num = Math.floor(Math.random() * (1500 - 100 + 1) + 100) // 向下取整
		yData.push(num)
	}
	let data = {
		xAxis: xData,
		yAxis: yData
	}
	res.json(data);
})
app.get('/echarts/test5/list', function (req, res) {
	let xData = [];
	for (let i = 0; i < 50; i++) {
		xData.push('eee' + i);
	}
	let yData = [];
	for (let i = 0; i < 50; i++) {
		let num = Math.floor(Math.random() * (1500 - 100 + 1) + 100) // 向下取整
		yData.push(num)
	}
	let data = {
		xAxis: xData,
		yAxis: yData
	}
	res.json(data);
})
app.get('/echarts/test6/list', function (req, res) {
	let xData = [];
	for (let i = 0; i < 50; i++) {
		xData.push('fff' + i);
	}
	let yData = [];
	for (let i = 0; i < 50; i++) {
		let num = Math.floor(Math.random() * (1500 - 100 + 1) + 100) // 向下取整
		yData.push(num)
	}
	let data = {
		xAxis: xData,
		yAxis: yData
	}
	res.json(data);
})

app.listen(3001, function () {
	console.log('端口号3001 服务启动成功');
});
