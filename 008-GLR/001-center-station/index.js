/**
 * 中心站-展示板-接口模拟 
 * 
 * 
*/
var express = require('express');
var app = express();

// 此处没有设置跨域请求

// 健康图接口
app.get('/healthy', function (req, res) {
	let xData = [];
	for (let i = 0; i < 10; i++) {
		xData.push('fff' + i);
	}
	let yData = [];
	let lineData = [];
	for (let i = 0; i < 10; i++) {
		let num = Math.floor(Math.random() * (1500 - 100 + 1) + 100) // 向下取整
		yData.push(num)
		lineData.push(num);
	}
	let data = {
		xAxis: xData,
		yAxis: yData,
		lineData: lineData
	}
	res.json(data);
})
// 误差折线图接口
app.get('/error', function (req, res) {
	let xData = [];
	for (let i = 0; i < 10; i++) {
		xData.push('aaa' + i);
	}
	let data = [];
	for (var i = 0; i < 24; i++) {
		let yData = [];
		for (let j = 0; j < 10; j++) {
			let num = Math.floor(Math.random() * (1500 - 100 + 1) + 100) // 向下取整
			yData.push(num)
		}
		data.push({
			xAxis: xData,
			yAxis: yData
		})
	}
	res.json(data);
})

app.listen(3001, function () {
	console.log('端口号3001 服务启动成功');
});
