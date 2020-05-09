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
// 单个误差折线图
app.get('/singleError', function (req, res) {
	let xData = [];
	for (let i = 0; i < 10; i++) {
		xData.push('aaa' + i);
	}
	let data = [];
	for (var i = 0; i < 3; i++) {
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
var wss = {
	prefix: '/analysis/deviationInfluenceFactor/',
	api: [
		'fundamentalFrequencyImpactData',  // 基波频率影响
		'fundamentalAmplitudeImpactData',  // 基波有效值影响
		'zeroSequenceVoltageImbalanceImpactData', // 零序电压不平衡度影响
		'negativeSequenceVoltageImbalanceImpactData',// 负序电压不平衡度影响
		'temperatureImpactData',  // 温度影响
		'humidityImpactData',    // 湿度影响
		'fundamentalPhaseImpactData',   // 基波相位影响
		'threeHarmonicAmplitudeImpactData',   // 三次谐波有效值影响
		'threeHarmonicPhaseImpactData',   // 三次谐波相位
		'fiveHarmonicAmplitudeImpactData',  // 五次谐波有效值影响
		'fiveHarmonicPhaseImpactData'       // 五次谐波相位影响
	],
	prefix2: '/analysis/timeSeries/',
	api2: [
		'fundamentalFrequencyData',   // 基波频率
		'fundamentalVoltageData',  // 基波电压
		'harmonicVoltageData',  // 谐波电压
		'sequenceVoltageImbalanceData', // 电压不平衡度
		'temperatureData',  // 温湿度
		'humidityData'      // 湿度
	],
	// 创建数据
	createData: function (min, max, count) {
		let datax_a = [], datax_b = [], datax_c = [], data = [];
		for (var i = 0; i < 500; i++) {
			let arr_a = [this.RandomNumBoth(min, max, count), this.RandomNumBoth(0, 1, count)];
			let arr_b = [this.RandomNumBoth(min, max, count), this.RandomNumBoth(0, 1, count)];
			let arr_c = [this.RandomNumBoth(min, max, count), this.RandomNumBoth(0, 1, count)];
			datax_a.push(arr_a);
			datax_b.push(arr_b);
			datax_c.push(arr_c);
		}
		let a = {
			transformerPositionId: 27,
			transformerPositionName: "220kV#1母线",
			transformerId: 79,
			transformerName: "A相",
			name: "220kV#1母线A相基波频率",
			startTime: "2020-03-21 14:15:35",
			endTime: "2020-04-21 14:15:35",
			datax: datax_a,
			stationId: 305
		};
		let b = {
			transformerPositionId: 27,
			transformerPositionName: "220kV#1母线",
			transformerId: 80,
			transformerName: "B相",
			name: "220kV#1母线B相基波幅值",
			startTime: "2020-03-21 14:15:35",
			endTime: "2020-04-21 14:15:35",
			datax: datax_b,
			stationId: 305
		};
		let c = {
			transformerPositionId: 27,
			transformerPositionName: "220kV#1母线",
			transformerId: 81,
			transformerName: "C相",
			name: "220kV#1母线C相基波频率",
			startTime: "2020-03-21 14:15:35",
			endTime: "2020-04-21 14:15:35",
			datax: datax_c,
			stationId: 305
		};
		// data.push(a);
		data.push(a, b);
		// data.push(a,b,c);
		return data;
	},
	RandomNumBoth: function (Min, Max, count) {
		var range = Max - Min;
		var count = count || 5;
		var rand = Math.random();
		var num = (Min + (rand * range)).toFixed(count); // 保留5位小数
		return +num;
	},
	createData2: function (min, max, count) {
		let data_a = [];
		let data_b = [];
		let data_c = [];
		let data = [];
		let self = this;
		for (let i = 0; i < 3; i++) {
			let step = 15;
			xtime = i * step;
			let arr_a = {
				ydata: self.RandomNumBoth(min, max, count),
				xtime: '2019-11-14 05:' + xtime + ':00'
			};
			let arr_b = {
				ydata: self.RandomNumBoth(min, max, count),
				xtime: '2019-11-14 05:' + xtime + ':00'
			};
			let arr_c = {
				ydata: self.RandomNumBoth(min, max, count),
				xtime: '2019-11-14 05:' + xtime + ':00'
			};
			data_a.push(arr_a);
			data_b.push(arr_b);
			data_c.push(arr_c);
		}
		let a = {
			transformerPositionId: 3,
			transformerPositionName: "济南站-3线",
			transformerId: 7,
			transformerName: "A相",
			name: "济南站-3线A相基波频率",
			startTime: null,
			endTime: null,
			data: data_a,
			type: 'line',
			yaxisIndex: 0
		};
		let b = {
			transformerPositionId: 3,
			transformerPositionName: "济南站-3线",
			transformerId: 8,
			transformerName: "B相",
			name: "济南站-3线B相基波频率",
			startTime: null,
			endTime: null,
			data: data_b,
			type: 'line',
			yaxisIndex: 0
		};
		let c = {
			transformerPositionId: 3,
			transformerPositionName: "济南站-3线",
			transformerId: 8,
			transformerName: "B相",
			name: "济南站-3线C相基波频率",
			startTime: null,
			endTime: null,
			data: data_c,
			type: 'line',
			yaxisIndex: 0
		};
		// push3个相线
		data.push(a, b, c);
		return data;
	}
}
// 0.基波频率影响
app.post(wss.prefix + wss.api[0], function (req, res) {

	let data = wss.createData(49, 50);
	res.json({
		msg: 'ok',
		code: 0,
		yseries: {
			xmin: 49.96019,
			xmax: 50.05042,
			ymin: 0.10005,
			ymax: 0.21344,
			data: data
		}
	});
})
// 1.基波有效值影响
app.post(wss.prefix + wss.api[1], function (req, res) {

	data = wss.createData(131, 132);

	res.json({
		msg: 'ok',
		code: 0,
		yseries: {
			xmin: 129.5713,
			xmax: 132.3113,
			ymin: 0.10005,
			ymax: 0.21344,
			data: data
		}

	});
})

// 2.零序电压不平衡度影响
app.post(wss.prefix + wss.api[2], function (req, res) {
	let data = wss.createData(0, 0);
	res.json({
		msg: 'ok',
		code: 0,
		yseries: {
			xmin: 0,
			xmax: 0,
			ymin: 0.10005,
			ymax: 0.21344,
			data: data
		}
	});
})
// 3.负序电压不平衡度影响
app.post(wss.prefix + wss.api[3], function (req, res) {
	let data = wss.createData(0, 0);
	res.json({
		msg: 'ok',
		code: 0,
		yseries: {
			xmin: 0,
			xmax: 0,
			ymin: 0.10005,
			ymax: 0.21344,
			data: data
		}
	});
})

// 4.温度影响
app.post(wss.prefix + wss.api[4], function (req, res) {
	let data = wss.createData(15, 15);
	res.json({
		msg: 'ok',
		code: 0,
		yseries: {
			xmin: 15,
			xmax: 30,
			ymin: -3,
			ymax: 1,
			data: data
		}
	});
})

// 5.湿度影响
app.post(wss.prefix + wss.api[5], function (req, res) {
	let data = wss.createData(15, 15);
	res.json({
		msg: 'ok',
		code: 0,
		yseries: {
			xmin: 15,
			xmax: 30,
			ymin: -3,
			ymax: 1,
			data: data
		}
	});
})

// 6.基波相位影响
app.post(wss.prefix + wss.api[6], function (req, res) {
	let data = wss.createData(-10000, 10000, 2);
	res.json({
		msg: 'ok',
		code: 0,
		yseries: {
			xmin: -10769.58,
			xmax: 10796.43,
			ymin: 0.10005,
			ymax: 0.21344,
			data: data
		}
	});
})

// 7.三次谐波有效值影响
app.post(wss.prefix + wss.api[7], function (req, res) {
	let data = wss.createData(0, 1);
	res.json({
		msg: 'ok',
		code: 0,
		yseries: {
			xmin: 0.00515,
			xmax: 0.03635,
			ymin: 0.10005,
			ymax: 0.21344,
			data: data
		}
	});
})

// 8.三次谐波相位影响
app.post(wss.prefix + wss.api[8], function (req, res) {
	let data = wss.createData(-10000, 10000, 2);
	res.json({
		msg: 'ok',
		code: 0,
		yseries: {
			xmin: -10789.57,
			xmax: 10780.5,
			ymin: 0.10005,
			ymax: 0.21344,
			data: data
		}
	});
})

// 9.五次谐波有效值影响
app.post(wss.prefix + wss.api[9], function (req, res) {
	let data = wss.createData(0, 1);
	res.json({
		msg: 'ok',
		code: 0,
		yseries: {
			xmin: 0.00037,
			xmax: 0.03549,
			ymin: 0.10005,
			ymax: 0.21344,
			data: data
		}
	});
})

// 10.五次谐波相位影响
app.post(wss.prefix + wss.api[10], function (req, res) {
	let data = wss.createData(-10000, 10000, 2);
	res.json({
		msg: 'ok',
		code: 0,
		yseries: {
			xmin: -10797.59,
			xmax: 10792.26,
			ymin: 0.10005,
			ymax: 0.21344,
			data: data
		}
	});
})

// 时序展示模块
// 0.基波频率
app.post(wss.prefix2 + wss.api2[0], function (req, res) {
	let data = wss.createData2(49, 50);
	let everTime = [];
	for (let i = 0; i < 3; i++) {
		step = 15;
		xtime = i * step;
		everTime.push('2019-11-14 05:' + xtime + ':00');
	}
	res.json({
		msg: 'ok',
		code: 0,
		yseries: [
			{
				min: 25.9999,
				max: 100,
				data: data,
				everTime: everTime
			}]
	})
})
// 1.基波电压
app.post(wss.prefix2 + wss.api2[1], function (req, res) {
	let data = wss.createData2(49, 50);
	let everTime = [];
	for (let i = 0; i < 3; i++) {
		step = 15;
		xtime = i * step;
		everTime.push('2019-11-14 05:' + xtime + ':00');
	}
	res.json({
		msg: 'ok',
		code: 0,
		yseries: [
			{
				min: 25.9999,
				max: 100,
				data: data,
				everTime: everTime
			}]
	})
})
// 2.谐波电压
app.post(wss.prefix2 + wss.api2[2], function (req, res) {
	let data = wss.createData2(49, 50);
	let everTime = [];
	for (let i = 0; i < 3; i++) {
		step = 15;
		xtime = i * step;
		everTime.push('2019-11-14 05:' + xtime + ':00');
	}
	res.json({
		msg: 'ok',
		code: 0,
		yseries: [
			{
				min: 25.9999,
				max: 100,
				data: data,
				everTime: everTime
			}]
	})
})
// 3.电压不平衡度
app.post(wss.prefix2 + wss.api2[3], function (req, res) {
	let data = wss.createData2(49, 50);
	let everTime = [];
	for (let i = 0; i < 3; i++) {
		step = 15;
		xtime = i * step;
		everTime.push('2019-11-14 05:' + xtime + ':00');
	}
	res.json({
		msg: 'ok',
		code: 0,
		yseries: [
			{
				min: 25.9999,
				max: 100,
				data: data,
				everTime: everTime
			}]
	})
})
// 4.温度
app.post(wss.prefix2 + wss.api2[4], function (req, res) {
	let data = wss.createData2(49, 50);
	let everTime = [];
	for (let i = 0; i < 3; i++) {
		step = 15;
		xtime = i * step;
		everTime.push('2019-11-14 05:' + xtime + ':00');
	}
	res.json({
		msg: 'ok',
		code: 0,
		yseries: [
			{
				min: 25.9999,
				max: 100,
				data: data,
				everTime: everTime
			}]
	})
})
// 5.湿度
app.post(wss.prefix2 + wss.api2[5], function (req, res) {
	let data = wss.createData2(49, 50);
	let everTime = [];
	for (let i = 0; i < 3; i++) {
		step = 15;
		xtime = i * step;
		everTime.push('2019-11-14 05:' + xtime + ':00');
	}
	res.json({
		msg: 'ok',
		code: 0,
		yseries: [
			{
				min: 25.9999,
				max: 100,
				data: data,
				everTime: everTime
			}]
	})
})

// 26.变电站信息:展示变电站排名，综合评分，健康评分，运维评分
app.post('/stationScore', function (req, res) {
	let data = [
		{
			title: 'comprehensive',
			name: '综合评分',
			score: 99
		},
		{
			title: 'operation',
			name: '运维评分',
			score: 40
		},
		{
			title: 'healthy',
			name: '健康评分',
			score: 50
		}
	];
	res.json({
		msg: 'ok',
		code: 0,
		data: {
			data,
			ranking: 67
		}
	})
})
// 27.互感器评分接口
app.post('/transformerScore', function (req, res) {
	let data = [];
	for (let i = 1; i <= 11; i++) {
		data.push({
			name: '石长' + i + '线',
			last: Math.ceil(Math.random() * 100),
			current: Math.ceil(Math.random() * 100)
		})
	}
	console.log(data);
	res.json({
		msg: 'ok',
		code: 0,
		data: data
	})
})

// 22.基础信息表:变电站的概况
app.post('/station', function (req, res) {
	let data = [
		{
			name: '投运时间',
			val: '2020.04.22'
		},
		{
			name: '所属区域',
			val: '湖南省怀化市某镇'
		},
		{
			name: '站点类型',
			val: '变电站'
		},
		{
			name: '变电站电压等级',
			val: '220kV'
		},
		{
			name: '220kV计量母线互感器组数',
			val: '3组'
		},
		{
			name: '110kV计量母线互感器组数',
			val: '1组'
		},
		{
			name: '220kV计量线路互感器组数',
			val: '3组'
		},
		{
			name: '110kV计量线路互感器组数',
			val: '1组'
		} /* ,
        {
          name: '550kV计量线路互感器组数',
          val: '1组'
        } */
	]
	console.log(data);
	res.json({
		msg: 'ok',
		code: 0,
		data: data
	})
})

// 23.采集电参量
app.post('/paramerter', function (req, res) {
	let json = {
		name: '石长线',
		time: '2020年2月11日20:15:30',
		// 基波频率
		'fundamentalFrequency': {
			a: '50.88888HZ',
			b: '50.88364HZ',
			c: '50.78675HZ'
		},
		// 基波有效值
		'fundamentalAmplitude': {
			a: '225KV',
			b: '225KV',
			c: '225KV'
		},
		// 基波相位
		'fundamentalPhase': {
			a: '49.88886分',
			b: '49.88887分',
			c: '49.88888分',
		},
		'zeroSequenceVoltage': '0.02KV',
		'temperature': '20C',
		'negativeSequence': '0.003KV',
		'humidity': '78%RH',
		// 三次谐波有效值
		'threeHarmonicAmplitude': {
			a: '0.02234KV',
			b: '0.02233KV',
			c: '0.22333KV'
		},
		// 五次谐波有效值
		'fiveHarmonicAmplitude': {
			a: '0.02234KV',
			b: '0.02233KV',
			c: '0.22333KV'
		},
		// 三次谐波相位
		'threeHarmonicPhase': {
			a: '8093.72分',
			b: '8093.73分',
			c: '8093.74分',
		},
		// 五次谐波相位
		'fiveHarmonicPhase': {
			a: '8093.72分',
			b: '8093.73分',
			c: '8093.74分',
		}
	};
	let data = []
	for (let i = 1; i <= 5; i++) {
		// 由于json是引用类型，所以这里需要过渡转换一次，否则最终的数据都是一样的
		var t = JSON.parse(JSON.stringify(json));
		t['name'] = '石长线' + i;
		data.push(t)
	}
	res.json({
		msk: 'ok',
		code: 0,
		data: data
	});
})

// 24.接线图-线路的相线误差数据
// 每条线的abc3个相线的误差值
app.post('/lineError', function (req, res) {
	// 数据结构
	let json = {
		name: '石长线',  // 线路名称
		a: {
			val: 0.8,   // 相线误差值
			status: 2 // 0：正常 1:警告 2:异常
		},
		b: {
			val: 1,// 相线误差值
			status: 1// 0：正常 1:警告 2:异常
		},
		c: {
			val: 0.4,// 相线误差值
			status: 2	// 0：正常 1:警告 2:异常
		},
		isBus: 0,   // 0:表示不是母线 1：表示是母线
	};
	// 母线I
	let json2 = {
		id:7,
		name: 'I母线',  // 线路名称
		a: {
			val: 0.8,   // 相线误差值
			status: 2 // 0：正常 1:警告 2:异常
		},
		b: {
			val: 1,// 相线误差值
			status: 1// 0：正常 1:警告 2:异常
		},
		c: {
			val: 0.4,// 相线误差值
			status: 2	// 0：正常 1:警告 2:异常
		},
		isBus: 1,   // 0:表示不是母线 1：表示是母线
	}
	// 母线II
	let json3 = {
		id:8,
		name: 'II母线',  // 线路名称
		a: {
			val: 0.8,   // 相线误差值
			status: 2 // 0：正常 1:警告 2:异常
		},
		b: {
			val: 1,// 相线误差值
			status: 1// 0：正常 1:警告 2:异常
		},
		c: {
			val: 0.4,// 相线误差值
			status: 2	// 0：正常 1:警告 2:异常
		},
		isBus: 1,   // 0:表示不是母线 1：表示是母线
	}
	let data = [];
	// 有几条数据就返回几个，我这里模拟返回5条数据
	for (let i = 1; i <= 6; i++) {
		let t = JSON.parse(JSON.stringify(json));
		t['name'] += i;
		t['id']=i;
		data.push(t);
	}
	data.push(json2, json3);
	res.json({
		msg: 'ok',
		code: 0,
		data: data
	})
})
// 28.互感器画像5个维度的信息
app.post('/pictureInfo', function (req, res) {
	let data = [];
	let json = {
		name: '使用年限',  // 名称
		a: '2年',
		b: '12年',
		c: '22年'
	}
	for (let i = 1; i <= 5; i++) {
		let t = JSON.parse(JSON.stringify(json));
		t['name'] += i;
		data.push(t);
	}
	res.json({
		msg: 'ok',
		code: 0,
		data: data
	})
})
// 29.互感器画像
app.post('/pictureStatus', function (req, res) {
	let data = [];
	data = [
		{
			name: 'a相',
			type: '110', // 取值:110 | 220 | 500
			status: 0,    // 0:正常 1: 警告 2: 异常
		},
		{
			name: 'b相',
			type: '220',
			status: 1
		},
		{
			name: 'c相',
			type: '500',
			status: 2
		}
	]
	res.json({
		msg: 'ok',
		code: 0,
		data: data
	})
})
// 30.互感器画像基础信息
app.post('/pictureBaseInfo', function (req, res) {
	let data = {};
	data = {
		type: '变电站',   // 类型
		timea: '2018年11月11日', // 定检时间
		voltageLevel: '500KV', // 电压等级
		timeb: '2019年12月11日', // 周检时间
		manufactor: '海尔', // 厂家
		timec: '2020年12月12日' // 上次检修时间
	}
	res.json({
		msg: 'ok',
		code: 0,
		data: data
	})
})
// 31.最近一次的互感器运维信息
app.post('/latelyOperation', function (req, res) {
	let data = [];
	let a = {
		name: 'a',
		workOrder: '11111111111111',
		location: '长沙市-岳麓区',
		transformerStatus: 0,  // 0:正常 1:警告 2: 异常
		operationStatus: '已生成',
		startTime: '2020-03-22',
		endTime: '2020-11-22',
		evalutaionValue: 19,
		verificationValue: 20,
	}
	let b = {
		name: 'b',
		workOrder: '11111111111111',
		location: '长沙市-岳麓区',
		transformerStatus: 1,  // 0:正常 1:警告 2: 异常
		operationStatus: '已生成',
		startTime: '2020-03-22',
		endTime: '2020-11-22',
		evalutaionValue: 19,
		verificationValue: 20,
	}
	let c = {
		name: 'b',
		workOrder: '11111111111111',
		location: '长沙市-岳麓区',
		transformerStatus: 2,  // 0:正常 1:警告 2: 异常
		operationStatus: '已生成',
		startTime: '2020-03-22',
		endTime: '2020-11-22',
		evalutaionValue: 19,
		verificationValue: 20,
	}
	data.push(a, b, c);
	res.json({
		msg: 'ok',
		code: 0,
		data: data
	})
})

// 32.历史运维信息
app.post('/historyOperation', function(req, res) {

})
// 老曾-新增加

// 首页-站点监控状态信息
app.get("/presentation/sysStation/stationStatis", (req, res) => {
	let dataPie = {
		code: 200,
		data: {
			constructing: 10,
			active: 100,
			noActive: 0,
		}
	};
	res.send(dataPie);
});
// 首页-站点监控信息
app.post("/presentation/sysStation/stationMonitor", (req, res) => {
	var stationTable = [];
	for (var i = 0; i < 10; i++) {
		let obj = {};
		obj["stationName"] = "站点" + i;
		obj["stationId"] = i;
		obj["status"] = 0;
		obj["address"] = "湖南省某地" + i;
		obj["commissionDate"] = i * 5;
		obj["transformerCount"] = i * 10;
		stationTable.push(obj)
	}
	let stationTables = {
		code: 200,
		data: stationTable
	};
	res.send(stationTables);
});
// 首页-互感器监控状态信息仪表图正常、异常、警告
app.get("/presentation/transformer/selectTransformerCount", (req, res) => {
	let dataGauges = {
		code: 200,
		msg: "操作成功",
		data: {
			warnCount: 10,
			normalCount: 20,
			abnormalCount: 5,
		}
	};
	res.send(dataGauges);
});

// 首页-互感器监控信息
app.get("/presentation/transformer/transformerMonitorInfo", (req, res) => {
	var transformerTable = [];
	for (let i = 0; i < 20; i++) {
		let obj = {};
		obj["regionName"] = "长沙市1" + i;
		obj["cityId"] = i;
		obj["normalCount"] = i * 4;
		obj["warnCount"] = i * 3;
		obj["abnormalCount"] = i * 8;
		obj["needRepair"] = i * 5;
		obj["completed"] = i * 10;
		transformerTable.push(obj);
	}
	var transformerTables = {
		code: 200,
		data: transformerTable,
	};
	res.send(transformerTables);
});
app.listen(3001, function () {
	console.log('端口号3001 服务启动成功');
});
