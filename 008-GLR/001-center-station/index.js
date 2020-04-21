/**
 * 中心站-展示板-接口模拟 
 * 
 * 
*/
var express = require('express');
var app = express();
const fs = require('fs')

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
	for (var i = 0; i < 20; i++) {
		let yData = [];
		for (let j = 0; j < 10; j++) {
			let num = Math.floor(Math.random() * (1500 - 100 + 1) + 100) // 向下取整
			yData.push(num)
		}
		data.push({
			xAxis: xData,
			yAxis: yData,
			seriesName: '异常' + i
		})
	}
	res.json(data);
})
// 误差折线图接口
app.get('/error2', function (req, res) {
	let xData = [];
	for (let i = 0; i < 10; i++) {
		xData.push('aaa' + i);
	}
	let data = [];
	for (var i = 0; i < 6; i++) {
		let yData = [];
		for (let j = 0; j < 10; j++) {
			// let num = Math.floor(Math.random() * (1500 - 100 + 1) + 100) // 向下取整
			// 保留一位小数
			// 数据 [-0.8,0.8]
			let num = ((Math.random() > 0.5 ? 1 : -1) * Math.random() * 0.8).toFixed(1);
			yData.push(num)
		}
		data.push({
			xAxis: xData,
			yAxis: yData,
			markLineData: [{
				yAxis: -0.5
			}, {
				yAxis: -0.2
			}, {
				yAxis: 0.2
			}, {
				yAxis: 0.5
			}],
			seriesName: '异常' + i
		})
	}
	res.json(data);
})

// 老曾
// 首页-误差随时间变化折线
let data0 = {
	xData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
	yData: [820, 932, 901, 934, 1290, 1330, 1320]
}
app.get('/echarts/test/list0', (req, res) => {
	res.send(data0)
})

// 首页-互感器监控状态信息仪表图
let dataGauge0 = {
	title: '互感器监控信息',// 仪表总标题
	name: '正常状态统计',// 仪表数据对应标题
	value: 90,// 仪表数据
	startColor: 'yellow',// 仪表开始颜色
	endColor: 'blue',// 仪表开始颜色
}

app.get('/echarts/test/list1', (req, res) => {
	res.send(dataGauge0)
})

// 首页-互感器监控状态信息仪表图
let dataGauge1 = {
	name: '警告状态统计',// 仪表数据对应标题
	value: 7,// 仪表数据
	startColor: 'yellow',// 仪表开始颜色
	endColor: 'blue',// 仪表开始颜色
}

app.get('/echarts/test/list2', (req, res) => {
	res.send(dataGauge1)
})

// 首页-互感器监控状态信息仪表图
let dataGauge2 = {
	name: '异常状态统计',// 仪表数据对应标题
	value: 4,// 仪表数据
	startColor: 'yellow',// 仪表开始颜色
	endColor: 'blue',// 仪表开始颜色
}

app.get('/echarts/test/list3', (req, res) => {
	res.send(dataGauge2)
})

// 首页-互感器监控状态信息仪表图正常、异常、警告
let dataGauges = [
	{
		title: '互感器监控信息',// 仪表总标题
		name: '正常状态统计',// 仪表数据对应标题
		status: 0,  //0 正常
		value: 90,// 仪表数据
		startColor: 'yellow',// 仪表开始颜色
		endColor: 'blue',// 仪表开始颜色
	},
	{
		name: '警告状态统计',// 仪表数据对应标题
		status: 1,  //1 警告
		value: 7,// 仪表数据
		startColor: 'yellow',// 仪表开始颜色
		endColor: 'blue',// 仪表开始颜色
	},
	{
		name: '异常状态统计',// 仪表数据对应标题
		status: 2,  //２ 异常
		value: 4,// 仪表数据
		startColor: 'yellow',// 仪表开始颜色
		endColor: 'blue',// 仪表开始颜色
	}

]
app.get('/echarts/test/listGauges', (req, res) => {
	res.send(dataGauges)
})




// 首页-互感器监控状态信息
let dataPie = [{ value: 7, name: "未激活" },
{ value: 10, name: "建设中" },
{ value: 21, name: "已激活" }]

app.get('/echarts/test/listPie', (req, res) => {
	res.send(dataPie)
})


// 首页-运维统计
let dataPieOpex = [{ value: 17, name: "已审核" },
{ value: 18, name: "已派单" },
{ value: 21, name: "已完成" }, { value: 20, name: "已生成" }]

app.get('/echarts/test/listPieOpex', (req, res) => {
	res.send(dataPieOpex)
})

// 首页-运维完成率
let dataPregress = [{
	name: '张家界市',
	value: 90
},
{
	name: '张家界市',
	value: 90
},
{
	name: '张家界市',
	value: 90
},
{
	name: '张家界市',
	value: 90
},
{
	name: '张家界市',
	value: 90
}, {
	name: '张家界市',
	value: 90
}, {
	name: '张家界市',
	value: 90
}, {
	name: '张家界市',
	value: 90
}, {
	name: '张家界市',
	value: 90
}, {
	name: '张家界市',
	value: 90
}, {
	name: '张家界市',
	value: 90
},]

app.get('/echarts/test/listPregress', (req, res) => {
	res.send(dataPregress)
})




// 首页-站点介绍
// let dataText = `6666666变电站是指电力系统中对电压和电流进行变换，接受电能及分配电能的场所在四类变电站是指除一三类以外的35kV及以上变电站
// 注工区所有220kV变电站为三类变电站，110kV及以下所有变电站为四类变电站,110kV及以下所有变
// 电站为四类变电站,110kV及以下所有变电站为四类变电站,110kV及以下所有变电站为四类变电站
// 110kV及以下所有变电站为四类变电站110kV及以下所有下所有变电站为四类变电所有下所有变电站为
// 四类变电所有下所有变电站为四类变电所有下所有变电站为四类变电所有下所有变电站为四类变电所有
// 下所有变电站为四类变电所有下所有变电站为四类变电所有下所有变电站为四类变电所有下所有变电站
// 为四类变电所有下所有变电站为四类变电所有下所有变电站为四类变电站110kV及以下所有变电站为四类
// 变电站110kV及以下所有变电站为四类变电站`

let dataText = `123456110电站为四类变电站110kV及以下所有变电站电站为四类变电站110kV及以下所有变电站为四类变电站,110kV及以下所有变电站为四类变电站110kV及以下所有变电站为四类变电站,110kV及以下所有变电站为四类变电站110kV及以下所有变电站为四类变电站,110kV及以下所有变电站为四类变电站110kV及以下所有变电站为四类变电站,110kV及以下所有变电站为四类变电站110kV及以下所有变电站为四类变电站,110kV及以下所有变电站为四类变电站110kV及以下所有变电站为四类变电站,110kV及以下所有变电站为四类变电站110kV及以下所有变电站为四类变电站,110kV及以下所有变电站为四类变电站110kV及以下所有变电站为四类变电站,110kV及以下所有变电站为四类变电站110kV及以下所有变电站为四类变电站,110kV及以下所有变
  `

app.get('/echarts/test/listText', (req, res) => {
	res.send(dataText)
})




// 首页 地图-读取省份地理数据并返回站点信息
// import geojson from "./json/430000.json"

// fs.readFile("./json/430000.json", "utf-8", (error, data) => {
// console.log(error);  //如果err为null就说明读取成功了,没有出错
// console.log(data); // 如果不给第二个参数[读取的文件编码格式]就会以beffer格式输出

//  用error来判断文件是否读取成功
// if (error) return console.log("读取文件失败,内容是" + error.message);
let dataStation = {
	"prince": {
		"name": "湖南省",
		"code": 430000,
		// "geojson": geojson,
		"city": [
			{
				"name": "长沙市",
				"code": 430100
			}
		]
	},
	"stationInfo": {
		'active': [
			{
				'id': 301,
				'name': '0002-麻塘站'
			},
			{
				'id': 305,
				'name': '0001-真武站'
			}
		],
		'noActive': [
			{
				'id': 302,
				'name': '株洲站-0002'
			},
			{
				'id': 303,
				'name': '湘潭站-0003'
			}
		],
		'constructing': [
			{
				'id': 320,
				'name': '邵阳站-0005'
			},
			{
				'id': 314,
				'name': '湘西土家族苗族自治站-0014'
			}
		],
		'geoMap': {
			'0001-真武站': [112.3635, 26.4938],
			'0002-麻塘站': [112.3037, 26.5223],
			'娄底站-0013': [112.008497, 27.728136],
			'岳阳站-0006': [113.132855, 29.37029],
			'常德站-0007': [111.691347, 29.040225],
			'张家界站-0008': [110.479921, 29.127401],
			'怀化站-0012': [109.97824, 27.550082],
			'株洲站-0002': [113.151737, 27.835806],
			'永州站-0011': [111.608019, 26.434516],
			'湘潭站-0003': [112.944052, 27.82973],
			'湘西土家族苗族自治站-0014': [109.739735, 28.314296],
			' 益阳站-0009': [112.355042, 28.570066],
			'邵阳站-0005': [111.46923, 27.237842],
			'郴州站-0010': [113.032067, 25.793589],
			'长沙站-0004': [112.982279, 28.19409]
		}
	}
}

app.get('/echarts/test/listStationInfos', (req, res) => {
	res.send(dataStation)
})
// });


// 首页 -地图-读取城市份地理数据

fs.readFile("./json/430100.json", "utf-8", (error, data) => {
	// console.log(error);  //如果err为null就说明读取成功了,没有出错
	// console.log(data); // 如果不给第二个参数[读取的文件编码格式]就会以beffer格式输出

	//  用error来判断文件是否读取成功
	if (error) return console.log("读取文件失败,内容是" + error.message);
	let cityData = {
		"name": "长沙市",
		"code": 430100,
		"geojson": data,
	}

	app.get('/echarts/test/listCity', (req, res) => {
		res.send(cityData)
	})
});


// 数据分析-散点回归
let dataScattar = [
	[1, 4862.4],
	[2, 5294.7],
	[3, 5934.5],
	[4, 7171.0],
	[5, 8964.4],
	[6, 10202.2],
	[7, 11962.5],
	[8, 14928.3],
	[9, 16909.2],
	[10, 18547.9],
	[11, 21617.8],
	[12, 26638.1],
	[13, 34634.4],
	[14, 46759.4],
	[15, 58478.1],
	[16, 67884.6],
	[17, 74462.6],
	[18, 79395.7]
]

app.get('/echarts/test/listScatter', (req, res) => {
	res.send(dataScattar)
})

// 互感器-健康图
let dataHealth = [
	{ name: '1线', scode: 91 },
	{ name: '2线', scode: 78 },
	{ name: '3线', scode: 50 },
	{ name: '4线', scode: 100 },
	{ name: '5线', scode: 64 },
	{ name: '6线', scode: 23 }
]

app.get('/echarts/test/listHealth', (req, res) => {
	res.send(dataHealth)
})

// 柱状折线图
let databars =
{
	xData: ['站点1', '站点2', '站点3', '站点4'],
	yData: [{
		name: '总数',
		type: 'bar',
		data: [1500, 1500, 1500, 1500]
	},
	{
		name: '2019年',
		type: 'bar',
		data: [1200, 1400, 1000, 900]
	},
	{
		name: '2020年',
		type: 'line',
		data: [1000, 900, 700, 500]
	}]
}

app.get('/echarts/test/listbars', (req, res) => {
	res.send(databars)
})





// 数据分析模块
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

// 误差影响因素分析
// 1.基波频率影响
app.post('/analysis/deviationInfluenceFactor/fundamentalFrequencyImpactData', function (req, res) {
	let datax = [];
	let data = [];
	for(var i=0;i<500;i++){
		let arr = [RandomNumBoth(49,50),RandomNumBoth(0,1)];
		datax.push(arr);
	}
	let json = {
		transformerPositionId: 27,
		transformerPositionName: "220kV#1母线",
		transformerId: 79,
		transformerName: "A相",
		name: "220kV#1母线A相基波频率",
		startTime: "2020-03-21 14:15:35",
		endTime: "2020-04-21 14:15:35",
		datax:datax,
		stationId: 305
	}
	
	for(var i =0;i<3;i++){
		data.push(json);
	}
	res.json({
		msg:'ok',
		code:0,
		data:{
			yseries:{
				xmin:49.96019,
				xmax: 50.05042,
				ymin: 0.10005,
				ymax: 0.21344,
				data:data
			}
		}
	});
})
// 2.基波有效值影响
app.post('/analysis/deviationInfluenceFactor/fundamentalFrequencyImpactData', function (req, res) {
	let datax = [];
	let data = [];
	for(var i=0;i<500;i++){
		let arr = [RandomNumBoth(131,132),RandomNumBoth(0,1)];
		datax.push(arr);
	}
	let json = {
		transformerPositionId: 27,
		transformerPositionName: "220kV#1母线",
		transformerId: 79,
		transformerName: "A相",
		name: "220kV#1母线A相基波频率",
		startTime: "2020-03-21 14:15:35",
		endTime: "2020-04-21 14:15:35",
		datax:datax,
		stationId: 305
	}
	
	for(var i =0;i<3;i++){
		data.push(json);
	}	

	res.json({
		msg:'ok',
		code:0,
		data:{
			yseries:{
				xmin:129.5713,
				xmax:132.3113,
				ymin: 0.10005,
				ymax: 0.21344,
				data:data
			}
		}

	});
})
function RandomNumBoth(Min,Max){
	var range = Max - Min;
	var rand = Math.random();
	var num = (Min + (rand * range)).toFixed(5); // 保留5位小数
	return +num;
}
app.listen(3001, function () {
	console.log('端口号3001 服务启动成功');
});
