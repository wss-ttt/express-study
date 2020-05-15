/**
 * 中心站-展示板-接口模拟 
 * 
 * 
 */
var express = require('express');
var app = express();
const fs = require('fs')
// 字典数据接口
app.post('/web/common/columnTypes', function (req, res) {
	res.json({
		msg: 'ok',
		code: 200,
		data: [{
				"code": "FUNDAMENTAL_FREQUENCY",
				"desc": "基波频率"
			},
			{
				"code": "FUNDAMENTAL_AMPLITUDE",
				"desc": "基波有效值"
			},
			{
				"code": "THIRD_HARMONIC_AMPLITUDE",
				"desc": "三次谐波有效值"
			},
			{
				"code": "FIFTH_HARMONIC_AMPLITUDE",
				"desc": "五次谐波有效值"
			},
			{
				"code": "FUNDAMENTAL_PHASE",
				"desc": "基波相位"
			},
			{
				"code": "THIRD_HARMONIC_PHASE",
				"desc": "三次谐波相位"
			},
			{
				"code": "FIFTH_HARMONIC_PHASE",
				"desc": "五次谐波相位"
			},
			{
				"code": "ZERO_SEQUENCE_VOLTAGE_IMBALANC",
				"desc": "零序电压不平衡度"
			},
			{
				"code": "NEGATIVE_SEQUENCE_VOLTAGE_IMBA",
				"desc": "负序电压不平衡度"
			},
			{
				"code": "TEMPERATURE",
				"desc": "温度"
			},
			{
				"code": "HUMIDITY",
				"desc": "湿度"
			},
			{
				"code": "RATIO_DIFFERENCE_AVERAGE",
				"desc": "比差均值"
			},
			{
				"code": "RATIO_DIFFERENCE_VARIANCE",
				"desc": "比差方差"
			}
		]
	})
})
// 1.变电站周期评分表接口

// 2.变电站健康情况
app.post('/presentation/sysStation/healthInfo', function (req, res) {
	res.json({
		msg: 'ok',
		code: 200,
		data: {
			oneCount: 10,
			twoCOunt: 20,
			threeCount: 30,
			fourCount: 40,
			fiveCount: 30,
			sixCount: 20,
			sevenCount: 15,
			eightCount: 25,
			nineCount: 12,
			tenCount: 15
		}
	});
})

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
// 误差折线图
app.post('/presentation/transformer/data', function (req, res) {
	let data = [];
	for (let i = 0; i < 3; i++) {
		let o = {
			name: 'aa' + i,
			data: [{
				ydata: Math.random(),
				xtime: '2020-05-09 11:00:00'
			}, {
				ydata: Math.random(),
				xtime: '2020-05-09 11:00:15'
			}, {
				ydata: Math.random(),
				xtime: '2020-05-09 11:00:30'
			}]
		}
		data.push(o)
	}
	let everTime = ['2020-05-09 11:00:00', '2020-05-09 11:00:15', '2020-05-09 11:00:30']
	res.json({
		msg: 'ok',
		code: 200,
		data: {
			min: 0.00009395,
			max: 0.99999999,
			data: data,
			everTime
		}
	})
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
	title: '互感器监控信息', // 仪表总标题
	name: '正常状态统计', // 仪表数据对应标题
	value: 90, // 仪表数据
	startColor: 'yellow', // 仪表开始颜色
	endColor: 'blue', // 仪表开始颜色
}

app.get('/echarts/test/list1', (req, res) => {
	res.send(dataGauge0)
})

// 首页-互感器监控状态信息仪表图
let dataGauge1 = {
	name: '警告状态统计', // 仪表数据对应标题
	value: 7, // 仪表数据
	startColor: 'yellow', // 仪表开始颜色
	endColor: 'blue', // 仪表开始颜色
}

app.get('/echarts/test/list2', (req, res) => {
	res.send(dataGauge1)
})

// 首页-互感器监控状态信息仪表图
let dataGauge2 = {
	name: '异常状态统计', // 仪表数据对应标题
	value: 4, // 仪表数据
	startColor: 'yellow', // 仪表开始颜色
	endColor: 'blue', // 仪表开始颜色
}

app.get('/echarts/test/list3', (req, res) => {
	res.send(dataGauge2)
})

// 首页-互感器监控状态信息仪表图正常、异常、警告
let dataGauges = [{
		title: '互感器监控信息', // 仪表总标题
		name: '正常状态统计', // 仪表数据对应标题
		status: 0, //0 正常
		value: 90, // 仪表数据
		startColor: 'yellow', // 仪表开始颜色
		endColor: 'blue', // 仪表开始颜色
	},
	{
		name: '警告状态统计', // 仪表数据对应标题
		status: 1, //1 警告
		value: 7, // 仪表数据
		startColor: 'yellow', // 仪表开始颜色
		endColor: 'blue', // 仪表开始颜色
	},
	{
		name: '异常状态统计', // 仪表数据对应标题
		status: 2, //２ 异常
		value: 4, // 仪表数据
		startColor: 'yellow', // 仪表开始颜色
		endColor: 'blue', // 仪表开始颜色
	}

]
app.get('/echarts/test/listGauges', (req, res) => {
	res.send(dataGauges)
})




// 首页-互感器监控状态信息
let dataPie = [{
		value: 7,
		name: "未激活"
	},
	{
		value: 10,
		name: "建设中"
	},
	{
		value: 21,
		name: "已激活"
	}
]

app.get('/echarts/test/listPie', (req, res) => {
	res.send(dataPie)
})


// 首页-运维统计
let dataPieOpex = [{
		value: 17,
		name: "已审核"
	},
	{
		value: 18,
		name: "已派单"
	},
	{
		value: 21,
		name: "已完成"
	}, {
		value: 20,
		name: "已生成"
	}
]

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
	},
]

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
		"city": [{
			"name": "长沙市",
			"code": 430100
		}]
	},
	"stationInfo": {
		'active': [{
				'id': 301,
				'name': '0002-麻塘站'
			},
			{
				'id': 305,
				'name': '0001-真武站'
			}
		],
		'noActive': [{
				'id': 302,
				'name': '株洲站-0002'
			},
			{
				'id': 303,
				'name': '湘潭站-0003'
			}
		],
		'constructing': [{
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
let dataHealth = [{
		name: '1线',
		scode: 91
	},
	{
		name: '2线',
		scode: 78
	},
	{
		name: '3线',
		scode: 50
	},
	{
		name: '4线',
		scode: 100
	},
	{
		name: '5线',
		scode: 64
	},
	{
		name: '6线',
		scode: 23
	}
]

app.get('/echarts/test/listHealth', (req, res) => {
	res.send(dataHealth)
})

// 柱状折线图
let databars = {
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
		}
	]
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
	commonUrl: '/web/analysis/influence/data',
	prefix: '/analysis/deviationInfluenceFactor/',
	api: [
		'fundamentalFrequencyImpactData', // 基波频率影响
		'fundamentalAmplitudeImpactData', // 基波有效值影响
		'zeroSequenceVoltageImbalanceImpactData', // 零序电压不平衡度影响
		'negativeSequenceVoltageImbalanceImpactData', // 负序电压不平衡度影响
		'temperatureImpactData', // 温度影响
		'humidityImpactData', // 湿度影响
		'fundamentalPhaseImpactData', // 基波相位影响
		'threeHarmonicAmplitudeImpactData', // 三次谐波有效值影响
		'threeHarmonicPhaseImpactData', // 三次谐波相位
		'fiveHarmonicAmplitudeImpactData', // 五次谐波有效值影响
		'fiveHarmonicPhaseImpactData' // 五次谐波相位影响
	],
	prefix2: '/analysis/timeSeries/',
	api2: [
		'fundamentalFrequencyData', // 基波频率
		'fundamentalVoltageData', // 基波电压
		'harmonicVoltageData', // 谐波电压
		'sequenceVoltageImbalanceData', // 电压不平衡度
		'temperatureData', // 温湿度
		'humidityData' // 湿度
	],
	// 创建数据
	createData: function (min, max, count) {
		let datax_a = [],
			datax_b = [],
			datax_c = [],
			data = [];
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
app.post(wss.commonUrl, function (req, res) {
	console.log('req',req)
	let data = wss.createData(49, 50);
	res.json({
		msg: 'ok',
		code: 200,
		data: {
			yseries: {
				xmin: 49.96019,
				xmax: 50.05042,
				ymin: 0.10005,
				ymax: 0.21344,
				// data: data
				data: []
			}
		}
	});
})
// 1.基波有效值影响
app.post(wss.commonUrl, function (req, res) {

	data = wss.createData(131, 132);

	res.json({
		msg: 'ok',
		code: 200,
		data: {
			yseries: {
				xmin: 129.5713,
				xmax: 132.3113,
				ymin: 0.10005,
				ymax: 0.21344,
				data: data
			}
		}

	});
})

// 2.零序电压不平衡度影响
app.post(wss.commonUrl, function (req, res) {
	let data = wss.createData(0, 0);
	res.json({
		msg: 'ok',
		code: 200,
		data: {
			yseries: {
				xmin: 0,
				xmax: 0,
				ymin: 0.10005,
				ymax: 0.21344,
				data: data
			}
		}

	});
})
// 3.负序电压不平衡度影响
app.post(wss.commonUrl, function (req, res) {
	let data = wss.createData(0, 0);
	res.json({
		msg: 'ok',
		code: 200,
		data: {
			yseries: {
				xmin: 0,
				xmax: 0,
				ymin: 0.10005,
				ymax: 0.21344,
				data: data
			}
		}
	});
})

// 4.温度影响
app.post(wss.commonUrl, function (req, res) {
	let data = wss.createData(15, 15);
	res.json({
		msg: 'ok',
		code: 200,
		data: {
			yseries: {
				xmin: 15,
				xmax: 30,
				ymin: -3,
				ymax: 1,
				data: data
			}
		}
	});
})

// 5.湿度影响
app.post(wss.commonUrl, function (req, res) {
	let data = wss.createData(15, 15);
	res.json({
		msg: 'ok',
		code: 200,
		data: {
			yseries: {
				xmin: 15,
				xmax: 30,
				ymin: -3,
				ymax: 1,
				data: data
			}
		}
	});
})

// 6.基波相位影响
app.post(wss.commonUrl, function (req, res) {
	let data = wss.createData(-10000, 10000, 2);
	res.json({
		msg: 'ok',
		code: 200,
		data: {
			yseries: {
				xmin: -10769.58,
				xmax: 10796.43,
				ymin: 0.10005,
				ymax: 0.21344,
				data: data
			}
		}
	});
})

// 7.三次谐波有效值影响
app.post(wss.commonUrl, function (req, res) {
	let data = wss.createData(0, 1);
	res.json({
		msg: 'ok',
		code: 200,
		data: {
			yseries: {
				xmin: 0.00515,
				xmax: 0.03635,
				ymin: 0.10005,
				ymax: 0.21344,
				data: data
			}
		}
	});
})

// 8.三次谐波相位影响
app.post(wss.commonUrl, function (req, res) {
	let data = wss.createData(-10000, 10000, 2);
	res.json({
		msg: 'ok',
		code: 200,
		data: {
			yseries: {
				xmin: -10789.57,
				xmax: 10780.5,
				ymin: 0.10005,
				ymax: 0.21344,
				data: data
			}
		}
	});
})

// 9.五次谐波有效值影响
app.post(wss.commonUrl, function (req, res) {
	let data = wss.createData(0, 1);
	res.json({
		msg: 'ok',
		code: 200,
		data: {
			yseries: {
				xmin: 0.00037,
				xmax: 0.03549,
				ymin: 0.10005,
				ymax: 0.21344,
				data: data
			}
		}
	});
})

// 10.五次谐波相位影响
app.post(wss.commonUrl, function (req, res) {
	let data = wss.createData(-10000, 10000, 2);
	res.json({
		msg: 'ok',
		code: 200,
		data: {
			yseries: {
				xmin: -10797.59,
				xmax: 10792.26,
				ymin: 0.10005,
				ymax: 0.21344,
				data: data
			}
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
		yseries: [{
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
		yseries: [{
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
		yseries: [{
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
		yseries: [{
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
		yseries: [{
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
		yseries: [{
			min: 25.9999,
			max: 100,
			data: data,
			everTime: everTime
		}]
	})
})

// 26.变电站信息:展示变电站排名，综合评分，健康评分，运维评分
app.post('/presentation/sysStation/stationRank', function (req, res) {
	let list = [{
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
		code: 200,
		data: {
			list,
			ranking: 67
		}
	})
})
// 分支演示用的
app.post('/stationScore', function (req, res) {
	let data = [{
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
// 27.变电站周期评分表
app.post('/presentation/sysStation/cycleScore', function (req, res) {
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
		code: 200,
		data: data
	})
})
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
	data.push({
		name: 'I母线',
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
	})
	data.push({
		name: 'II母线',
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
	})
	res.json({
		msk: 'ok',
		code: 0,
		data: data
	});
})

app.post('/presentation/sysStation/electricalParameter', function (req, res) {
	let data = []
	for (let i = 0; i < 21; i++) {
		let phaseSequence = i % 3 === 0 ? 'a' : (i % 3 === 1 ? 'b' : 'c');
		let o = {
			measuringTime: '2020-05-05', // 测量时间
			positionId: i % 7 + 1, // 线路id(1,2,3,4,5,6,7)
			phaseSequence: phaseSequence, // 相序(a,b,c)
			fundamentalFrequency: 50.03148, // 基波频率
			fundamentalAmplitude: 5.98354, // 基波有效值
			thirdHarmonicAmplitude: 0.02572, // 三次谐波有效值
			fifthHarmonicAmplitude: 0.02446, // 五次谐波有效值
			fundamentalPhase: 2133.04, // 基波相位
			thirdHarmonicPhase: 6947.2, // 三次谐波相位
			fifthHarmonicPhase: -8459.07, // 五次谐波相位
			zeroSequenceVoltageImbalanc: 0.00192, // 零序电压不平衡度
			negativeSequenceVoltageImba: 0.001, // 负序电压不平衡度
			temperature: 35, // 温度
			humidity: 20, // 湿度
			transformerName: '衡阳-1线', // 线路名称
		}
		data.push(o)
	}
	res.json({
		msg: 'ok',
		code: 200,
		data
	})
})

// 24.接线图-线路的相线误差数据
// 每条线的abc3个相线的误差值
app.post('/lineError2', function (req, res) {
	// 数据结构
	let json = {
		positionName: '石长线', // 线路名称
		a: {
			val: 0.8, // 相线误差值
			status: 2 // 0：正常 1:警告 2:异常
		},
		b: {
			val: 1, // 相线误差值
			status: 1 // 0：正常 1:警告 2:异常
		},
		c: {
			val: 0.4, // 相线误差值
			status: 2 // 0：正常 1:警告 2:异常
		},
		isBus: 1, // 0:表示母线 1：表示不是母线
	};
	// 母线I
	let json2 = {
		positionId: 7,
		positionName: 'I母线', // 线路名称
		a: {
			val: 0.8, // 相线误差值
			status: 2 // 0：正常 1:警告 2:异常
		},
		b: {
			val: 1, // 相线误差值
			status: 1 // 0：正常 1:警告 2:异常
		},
		c: {
			val: 0.4, // 相线误差值
			status: 2 // 0：正常 1:警告 2:异常
		},
		isBus: 0, // 0:表示母线 1：表示不是母线
	}
	// 母线II
	let json3 = {
		positionId: 8,
		positionName: 'II母线', // 线路名称
		a: {
			val: 0.8, // 相线误差值
			status: 2 // 0：正常 1:警告 2:异常
		},
		b: {
			val: 1, // 相线误差值
			status: 1 // 0：正常 1:警告 2:异常
		},
		c: {
			val: 0.4, // 相线误差值
			status: 2 // 0：正常 1:警告 2:异常
		},
		isBus: 1, // 0:表示不是母线 1：表示是母线
	}
	let data = [];
	// 有几条数据就返回几个，我这里模拟返回5条数据
	for (let i = 1; i <= 5; i++) {
		let t = JSON.parse(JSON.stringify(json));
		t['positionName'] += i;
		t['positionId'] = i;
		data.push(t);
	}
	data.push(json2, json3);
	res.json({
		msg: 'ok',
		code: 0,
		data: data
	})
})
// 展示用的
app.post('/lineError', function (req, res) {
	// 数据结构
	let json = {
		name: '石长线', // 线路名称
		a: {
			val: 0.8, // 相线误差值
			status: 2 // 0：正常 1:警告 2:异常
		},
		b: {
			val: 1, // 相线误差值
			status: 1 // 0：正常 1:警告 2:异常
		},
		c: {
			val: 0.4, // 相线误差值
			status: 2 // 0：正常 1:警告 2:异常
		},
		isBus: 0, // 0:表示母线 1： 表示竖线
	};
	// 母线I
	let json2 = {
		id: 7,
		name: 'I母线', // 线路名称
		a: {
			val: 0.8, // 相线误差值
			status: 2 // 0：正常 1:警告 2:异常
		},
		b: {
			val: 1, // 相线误差值
			status: 1 // 0：正常 1:警告 2:异常
		},
		c: {
			val: 0.4, // 相线误差值
			status: 2 // 0：正常 1:警告 2:异常
		},
		isBus: 1, // 0:表示不是母线 1：表示是母线
	}
	// 母线II
	let json3 = {
		id: 8,
		name: 'II母线', // 线路名称
		a: {
			val: 0.8, // 相线误差值
			status: 2 // 0：正常 1:警告 2:异常
		},
		b: {
			val: 1, // 相线误差值
			status: 1 // 0：正常 1:警告 2:异常
		},
		c: {
			val: 0.4, // 相线误差值
			status: 2 // 0：正常 1:警告 2:异常
		},
		isBus: 1, // 0:表示不是母线 1：表示是母线
	}
	let data = [];
	// 有几条数据就返回几个，我这里模拟返回5条数据
	for (let i = 1; i <= 5; i++) {
		let t = JSON.parse(JSON.stringify(json));
		t['name'] += i;
		t['id'] = i;
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
// 分支演示用的
app.post('/pictureInfo', function (req, res) {
	let data = [];
	let json = {
		name: '使用年限', // 名称
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
app.post('/presentation/transformer/transformerBasicInfoAge', function (req, res) {
	let data = [];
	let json = {
		name: '使用年限', // 名称
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
		code: 200,
		data: data
	})
})
// 29.互感器画像
app.post('/pictureStatus', function (req, res) {
	let data = [];
	data = [{
			name: 'a相',
			type: '220', // 取值:110 | 220 | 500
			status: 0, // 0:正常 1: 警告 2: 异常
		},
		{
			name: 'b相',
			type: '220',
			status: 1
		},
		{
			name: 'c相',
			type: '220',
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
// 分支演示用的
app.post('/pictureBaseInfo', function (req, res) {
	let data = {};
	data = {
		type: '变电站', // 类型
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

app.post('/presentation/transformer/transformerBasicInfo', function (req, res) {
	let data = {};
	data = {
		stationType: '变电站', // 类型
		fixeInspectionTime: '2018年11月11日', // 定检时间
		voltageLevel: '500KV', // 电压等级
		weeklyInspectionTime: '2019年12月11日', // 周检时间
		factoryName: '海尔', // 厂家
		lastMaintenanceTime: '2020年12月12日' // 上次检修时间
	}
	res.json({
		msg: 'ok',
		code: 200,
		data: data
	})
})

// 31.最近一次的互感器运维信息
app.post('/latelyOperation', function (req, res) {
	let data = [];
	let a = {
		phaseSequence: 'a', // 相序名称
		orderId: '11111111111111', // 工单编号
		regionName: '长沙市-岳麓区', // 所在地区
		monitiorState: 0, // 互感器状态 0:正常 1:警告 2: 异常  
		orderStatus: 0, // 运维状态 0:已审核 1：未派单 2：已派单 3: 待确认 4：已确认 5：已完成
		startTime: '2020-03-22', // 开始时间
		finishTime: '2020-11-22', // 结束时间
		evaluationValue: 19, // 评估值
		appraisalValue: 20, // 检定值
	}
	let b = {
		phaseSequence: 'b',
		orderId: '11111111111111', // 工单编号
		regionName: '长沙市-岳麓区', // 所在地区
		monitiorState: 1, // 互感器状态 0:正常 1:警告 2: 异常  
		orderStatus: 1, // 运维状态 0:已审核 1：未派单 2：已派单 3: 待确认 4：已确认 5：已完成
		startTime: '2020-03-22', // 开始时间
		finishTime: '2020-11-22', // 结束时间
		evaluationValue: 19, // 评估值
		appraisalValue: 20, // 检定值
	}
	let c = {
		phaseSequence: 'b',
		orderId: '11111111111111', // 工单编号
		regionName: '长沙市-岳麓区', // 所在地区
		monitiorState: 2, // 互感器状态 0:正常 1:警告 2: 异常  
		orderStatus: 2, // 运维状态 0:已审核 1：未派单 2：已派单 3: 待确认 4：已确认 5：已完成
		startTime: '2020-03-22', // 开始时间
		finishTime: '2020-11-22', // 结束时间
		evaluationValue: 19, // 评估值
		appraisalValue: 20, // 检定值
	}
	data.push(a, b, c);
	res.json({
		msg: 'ok',
		code: 0,
		data: data
	})
})

app.post('/presentation/transformer/PositionMaintenance', function (req, res) {
	let data = [];
	let a = {
		phaseSequence: 'a', // 相序名称
		orderId: '11111111111111', // 工单编号
		regionName: '长沙市-岳麓区', // 所在地区
		monitiorState: 0, // 互感器状态 0:正常 1:警告 2: 异常  
		orderStatus: 0, // 运维状态 0:已审核 1：未派单 2：已派单 3: 待确认 4：已确认 5：已完成
		startTime: '2020-03-22', // 开始时间
		finishTime: '2020-11-22', // 结束时间
		evaluationValue: 19, // 评估值
		appraisalValue: 20, // 检定值
	}
	let b = {
		phaseSequence: 'b',
		orderId: '11111111111111', // 工单编号
		regionName: '长沙市-岳麓区', // 所在地区
		monitiorState: 1, // 互感器状态 0:正常 1:警告 2: 异常  
		orderStatus: 1, // 运维状态 0:已审核 1：未派单 2：已派单 3: 待确认 4：已确认 5：已完成
		startTime: '2020-03-22', // 开始时间
		finishTime: '2020-11-22', // 结束时间
		evaluationValue: 19, // 评估值
		appraisalValue: 20, // 检定值
	}
	let c = {
		phaseSequence: 'b',
		orderId: '11111111111111', // 工单编号
		regionName: '长沙市-岳麓区', // 所在地区
		monitiorState: 2, // 互感器状态 0:正常 1:警告 2: 异常  
		orderStatus: 2, // 运维状态 0:已审核 1：未派单 2：已派单 3: 待确认 4：已确认 5：已完成
		startTime: '2020-03-22', // 开始时间
		finishTime: '2020-11-22', // 结束时间
		evaluationValue: 19, // 评估值
		appraisalValue: 20, // 检定值
	}
	data.push(a, b, c);
	res.json({
		msg: 'ok',
		code: 200,
		data: data
	})
})

// 32.运维历史情况表
app.post('/presentation/maintenanceOrder/maintenanceHistory', function (req, res) {
	let data = [];
	for (var i = 1; i <= 10; i++) {
		let obj = {
			orderId: i * 1000, // 工单id
			regionName: '长沙市-天心区' + i, // 所在地区
			monitiorState: 0, // 互感器状态 0:正常 1:警告 2: 异常  
			orderStatus: 0, // 运维状态 0:已审核 1：未派单 2：已派单 3: 待确认 4：已确认 5：已完成
			companyName: '海尔', // 运维公司
			userName: '张三', // 运维人员
			startTime: '2020-02-22', // 开始时间
			endTime: '2020-02-29', // 结束时间
			evaluationValue: '45', // 评估值
			appraisalValue: '43', // 检定值
			remark: '好好哦xxix ' // 说明/备注
		}
		data.push(obj);
	}
	res.json({
		msg: 'ok',
		code: 200,
		data: data
	})
})

// 33. 互感器主干接线图数据
app.post('/presentation/transformer/transformerData/', function (req, res) {
	let data = [];
	for (let i = 1; i <= 6; i++) {
		let json = {
			positionId: i, // 线路位置编号
			monitorStateA: 0,
			monitorStateB: 1,
			monitorStateC: 2,
			ratioDifferenceAverageA: 0.00058,
			ratioDifferenceAverageB: 0.00393,
			ratioDifferenceAverageC: 0.00358
		}
		data.push(json);
	}
	res.json({
		msg: 'ok',
		code: 200,
		data: data
	});
})

// 34.互感器主干接线图
app.get('/presentation/transformer/selectWiringDiagram/', function (req, res) {
	let data = [];
	// 竖线
	for (let i = 1; i <= 4; i++) {
		let json = {
			positionId: i,
			busId: 101 + i,
			isBus: 1, // 不是母线
			positionName: '线' + i,
			positionNum: '1110111fffxxx'
		}
		data.push(json);
	}
	// 母线
	for (let i = 1; i <= 2; i++) {
		let json = {
			positionId: i,
			busId: 101 + i,
			isBus: 0, // 母线
			positionName: '线' + i,
			positionNum: '1110111fffxxx'
		}
		data.push(json);
	}
	res.json({
		msg: 'ok',
		code: 200,
		data: data
	});
})

// 35.变电站基础信息表
app.post('/presentation/sysStation/basicsInfo', function (req, res) {
	let data = {
		mergerName: '株洲', // 所属地区
		commissionDate: '', // 投运时间
		stationType: 0, // 变电站类型
		voltageLevel: 380, // 变电站电压等级
		bustransformer220kV: 1, // 220KV计量母线互感器组数
		bustransformer110kV: 1, // 110KV计量母线互感器组数
		lineTransformer220kV: 1, // 220KV计量线路互感器组数
		lineTransformer110kV: 1 // 110KV计量线路互感器组数
	};
	res.json({
		msg: 'ok',
		code: 200,
		data: data
	});
})

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
// 36.运维历史情况表
app.post('/presentation/maintenanceOrder/maintenanceHistory', function (req, res) {
	let data = [];
	for (let i = 1; i <= 10; i++) {
		let o = {
			orderId: i,
			address: '武汉', // 所在地区
			monitorState: 0, // 互感器状态
			orderStatus: 0, // 工单状态
			companyName: '海尔',
			userName: '老曾',
			startTime: '2020-11-30',
			endTime: '2020-12-23',
			evaluationValue: 20,
			appraisalValue: 39,
			remark: '好好学习 天天向上'
		}
	}
	res.json({
		msg: 'ok',
		code: 200,
		data: data
	})
})
/*****************************************************8*/
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
// 健康诊断
// 健康诊断-温度

app.post("/analysis/HealthDiagnosis/temperature", (req, res) => {
	let temperatureDatas = {
		code: 0,
		data: {
			max: 0.1091,
			min: 0.10939,
			yseries: [
				[{
					name: "误差均值",
					type: "line",
					xaxisIndex: 0,
					data: [{
							xtime: "2020年04月",
							ydata: 0.10915
						},
						{
							xtime: "2020年05月",
							ydata: 0.10912
						},
					],
				}, ],
				[{
						name: "低温段1(-10℃以下)",
						type: "scatter",
						xaxisIndex: 1,
						data: [{
								xtime: "2020年04月07日 09:45:11",
								ydata: 0.10911
							},
							{
								xtime: "2020年04月07日 10:00:11",
								ydata: 0.10912
							},
							{
								xtime: "2020年04月07日 10:15:11",
								ydata: 0.10913
							},
							{
								xtime: "2020年04月07日 10:30:11",
								ydata: 0.10914
							},
						],
					},
					{
						name: "低温段2(-10-0℃)",
						type: "scatter",
						xaxisIndex: 1,
						data: [{
								xtime: "2020年04月07日 09:45:11",
								ydata: 0.10915
							},
							{
								xtime: "2020年04月07日 10:00:11",
								ydata: 0.10915
							},
							{
								xtime: "2020年04月07日 10:15:11",
								ydata: 0.10917
							},
							{
								xtime: "2020年04月07日 10:30:11",
								ydata: 0.10918
							},
						],
					},
					{
						name: "常温度1(0-10℃)",
						type: "scatter",
						xaxisIndex: 1,
						data: [{
								xtime: "2020年04月07日 09:45:11",
								ydata: 0.10919
							},
							{
								xtime: "2020年04月07日 10:00:11",
								ydata: 0.1092
							},
							{
								xtime: "2020年04月07日 10:15:11",
								ydata: 0.10921
							},
							{
								xtime: "2020年04月07日 10:30:11",
								ydata: 0.10922
							},
						],
					},
					{
						name: "常温度2(10-20℃】",
						type: "scatter",
						xaxisIndex: 1,
						data: [{
								xtime: "2020年04月07日 09:45:11",
								ydata: 0.10923
							},
							{
								xtime: "2020年04月07日 10:00:11",
								ydata: 0.10924
							},
							{
								xtime: "2020年04月07日 10:15:11",
								ydata: 0.10925
							},
							{
								xtime: "2020年04月07日 10:30:11",
								ydata: 0.10926
							},
						],
					},
					{
						name: "常温度3(20-30℃】",
						type: "scatter",
						xaxisIndex: 1,

						data: [{
								xtime: "2020年04月07日 09:45:11",
								ydata: 0.10927
							},
							{
								xtime: "2020年04月07日 10:00:11",
								ydata: 0.10928
							},
							{
								xtime: "2020年04月07日 10:15:11",
								ydata: 0.10929
							},
							{
								xtime: "2020年04月07日 10:30:11",
								ydata: 0.1093
							},
						],
					},
					{
						name: "高温段1(30-40℃】",
						type: "scatter",
						xaxisIndex: 1,
						data: [{
								xtime: "2020年04月07日 09:45:11",
								ydata: 0.10931
							},
							{
								xtime: "2020年04月07日 10:00:11",
								ydata: 0.10932
							},
							{
								xtime: "2020年04月07日 10:15:11",
								ydata: 0.10933
							},
							{
								xtime: "2020年04月07日 10:30:11",
								ydata: 0.10934
							},
						],
					},
					{
						name: "高温段2(40℃以上)",
						type: "scatter",
						xaxisIndex: 1,
						data: [{
								xtime: "2020年04月07日 09:45:11",
								ydata: 0.10935
							},
							{
								xtime: "2020年04月07日 10:00:11",
								ydata: 0.10936
							},
							{
								xtime: "2020年04月07日 10:15:11",
								ydata: 0.10937
							},
							{
								xtime: "2020年04月07日 10:30:11",
								ydata: 0.10938
							},
						],
					},
				],
			],
		},
	};
	res.send(temperatureDatas);
});
// 健康诊断-湿度

app.post("/analysis/HealthDiagnosis/humidity", (req, res) => {
	let humidityDatas = {
		code: 0,
		data: {
			max: 0.10909,
			min: 0.1092,
			yseries: [
				[{
					name: "误差均值",
					type: "line",
					xaxisIndex: 0,
					data: [{
							xtime: "2020年04月",
							ydata: 0.10914
						},
						{
							xtime: "2020年05月",
							ydata: 0.10912
						},
					],
				}, ],
				[{
						name: "正常(90%RH以下)",
						type: "scatter",
						xaxisIndex: 1,
						data: [{
								xtime: "2020年04月07日 09:45:11",
								ydata: 0.10911
							},
							{
								xtime: "2020年04月07日 10:00:11",
								ydata: 0.10912
							},
							{
								xtime: "2020年04月07日 10:15:11",
								ydata: 0.10913
							},
							{
								xtime: "2020年04月07日 10:30:11",
								ydata: 0.10914
							},
						],
					},
					{
						name: "高湿(90%RH以上)",
						type: "scatter",
						xaxisIndex: 1,
						data: [{
								xtime: "2020年04月07日 09:45:11",
								ydata: 0.10915
							},
							{
								xtime: "2020年04月07日 10:00:11",
								ydata: 0.10915
							},
							{
								xtime: "2020年04月07日 10:15:11",
								ydata: 0.10917
							},
							{
								xtime: "2020年04月07日 10:30:11",
								ydata: 0.10918
							},
						],
					},
				],
			],
		},
	};
	res.send(humidityDatas);
});
// 健康诊断-基波频率

app.post("/analysis/HealthDiagnosis/fundamentalFrequency", (req, res) => {
	let fundamentalFrequencyDatas = {
		code: 0,
		data: {
			max: 0.1091,
			min: 0.10939,
			yseries: [
				[{
					name: "误差均值",
					type: "line",
					xaxisIndex: 0,
					data: [{
							xtime: "2020年04月",
							ydata: 0.10915
						},
						{
							xtime: "2020年05月",
							ydata: 0.10912
						},
					],
				}, ],
				[{
						name: "低频段1[49.95Hz,49.97Hz]",
						type: "scatter",
						xaxisIndex: 1,
						data: [{
								xtime: "2020年04月07日 09:45:11",
								ydata: 0.10911
							},
							{
								xtime: "2020年04月07日 10:00:11",
								ydata: 0.10912
							},
							{
								xtime: "2020年04月07日 10:15:11",
								ydata: 0.10913
							},
							{
								xtime: "2020年04月07日 10:30:11",
								ydata: 0.10914
							},
						],
					},
					{
						name: "低频段2[49.97Hz,49.99Hz]",
						type: "scatter",
						xaxisIndex: 1,
						data: [{
								xtime: "2020年04月07日 09:45:11",
								ydata: 0.10915
							},
							{
								xtime: "2020年04月07日 10:00:11",
								ydata: 0.10915
							},
							{
								xtime: "2020年04月07日 10:15:11",
								ydata: 0.10917
							},
							{
								xtime: "2020年04月07日 10:30:11",
								ydata: 0.10918
							},
						],
					},
					{
						name: "低频段3[49.99Hz,50.01Hz]",
						type: "scatter",
						xaxisIndex: 1,
						data: [{
								xtime: "2020年04月07日 09:45:11",
								ydata: 0.10919
							},
							{
								xtime: "2020年04月07日 10:00:11",
								ydata: 0.1092
							},
							{
								xtime: "2020年04月07日 10:15:11",
								ydata: 0.10921
							},
							{
								xtime: "2020年04月07日 10:30:11",
								ydata: 0.10922
							},
						],
					},
					{
						name: "未知频率",
						type: "scatter",
						xaxisIndex: 1,
						data: [{
								xtime: "2020年04月07日 09:45:11",
								ydata: 0.10923
							},
							{
								xtime: "2020年04月07日 10:00:11",
								ydata: 0.10924
							},
							{
								xtime: "2020年04月07日 10:15:11",
								ydata: 0.10925
							},
							{
								xtime: "2020年04月07日 10:30:11",
								ydata: 0.10926
							},
						],
					},
					{
						name: "高频段1[50.01Hz,50.03Hz]",
						type: "scatter",
						xaxisIndex: 1,

						data: [{
								xtime: "2020年04月07日 09:45:11",
								ydata: 0.10927
							},
							{
								xtime: "2020年04月07日 10:00:11",
								ydata: 0.10928
							},
							{
								xtime: "2020年04月07日 10:15:11",
								ydata: 0.10929
							},
							{
								xtime: "2020年04月07日 10:30:11",
								ydata: 0.1093
							},
						],
					},
					{
						name: "高频段2[50.03Hz,50.05Hz]",
						type: "scatter",
						xaxisIndex: 1,
						data: [{
								xtime: "2020年04月07日 09:45:11",
								ydata: 0.10931
							},
							{
								xtime: "2020年04月07日 10:00:11",
								ydata: 0.10932
							},
							{
								xtime: "2020年04月07日 10:15:11",
								ydata: 0.10933
							},
							{
								xtime: "2020年04月07日 10:30:11",
								ydata: 0.10934
							},
						],
					},
				],
			],
		},
	};
	res.send(fundamentalFrequencyDatas);
});
// 健康诊断-基波有效值

app.post("/analysis/HealthDiagnosis/fundamentalEffectiveValue", (req, res) => {
	let fundamentalEffectiveValueDatas = {
		code: 0,
		data: {
			max: 0.1091,
			min: 0.10939,
			yseries: [
				[{
					name: "误差均值",
					type: "line",
					xaxisIndex: 0,
					data: [{
							xtime: "2020年04月",
							ydata: 0.10915
						},
						{
							xtime: "2020年05月",
							ydata: 0.10912
						},
					],
				}, ],
				[{
						name: "(90%-100%)额定电压",
						type: "scatter",
						xaxisIndex: 1,
						data: [{
								xtime: "2020年04月07日 09:45:11",
								ydata: 0.10911
							},
							{
								xtime: "2020年04月07日 10:00:11",
								ydata: 0.10912
							},
							{
								xtime: "2020年04月07日 10:15:11",
								ydata: 0.10913
							},
							{
								xtime: "2020年04月07日 10:30:11",
								ydata: 0.10914
							},
						],
					},
					{
						name: "(100%-110%)额定电压",
						type: "scatter",
						xaxisIndex: 1,
						data: [{
								xtime: "2020年04月07日 09:45:11",
								ydata: 0.10915
							},
							{
								xtime: "2020年04月07日 10:00:11",
								ydata: 0.10915
							},
							{
								xtime: "2020年04月07日 10:15:11",
								ydata: 0.10917
							},
							{
								xtime: "2020年04月07日 10:30:11",
								ydata: 0.10918
							},
						],
					},
					{
						name: "(110%-120%)额定电压",
						type: "scatter",
						xaxisIndex: 1,
						data: [{
								xtime: "2020年04月07日 09:45:11",
								ydata: 0.10919
							},
							{
								xtime: "2020年04月07日 10:00:11",
								ydata: 0.1092
							},
							{
								xtime: "2020年04月07日 10:15:11",
								ydata: 0.10921
							},
							{
								xtime: "2020年04月07日 10:30:11",
								ydata: 0.10922
							},
						],
					},
					{
						name: "未知额定电压",
						type: "scatter",
						xaxisIndex: 1,
						data: [{
								xtime: "2020年04月07日 09:45:11",
								ydata: 0.10923
							},
							{
								xtime: "2020年04月07日 10:00:11",
								ydata: 0.10924
							},
							{
								xtime: "2020年04月07日 10:15:11",
								ydata: 0.10925
							},
							{
								xtime: "2020年04月07日 10:30:11",
								ydata: 0.10926
							},
						],
					},
				],
			],
		},
	};
	res.send(fundamentalEffectiveValueDatas);
});
// 新增2*****************************

app.get("/presentation/map/selectRegionJson", (req, res) => {
	let selectRegionJson = {
		code: 200,
		data: "test",
	};
	res.send(selectRegionJson);
});


app.post("/presentation/sysStation/stationMap", (req, res) => {
	let stationDatas = {
		code: 200,
		data: [{
				name: "站点0",
				id: 0,
				value: [112.982279, 28.19409],
			},
			{
				name: "站点1",
				id: 1,
				value: [113.032067, 25.793589],
			},
			{
				name: "站点2",
				id: 2,
				value: [112.944052, 27.82973],
			},
		],
	};
	res.send(stationDatas);
});

// 首页-地图-3省的城市字典
app.post("/presentation/sysStation/cityInfo", (req, res) => {
	var cityInfo = [];
	for (let i = 0; i < 20; i++) {
		let obj = {};
		obj["name"] = "长沙市" + i;
		obj["id"] = i;
		cityInfo.push(obj);
	}
	let cityInfos = {
		code: 200,
		data: cityInfo,
	};
	res.send(cityInfos);
});

// 本地读取压力大，测试时在页面中引入

app.get("/presentation/map/selectRegionInfo", (req, res) => {
	var selectRegionInfo = [];
	for (var i = 0; i < 10; i++) {
		let obj = {};
		(obj["regionName"] = "长沙市" + i), (obj["regionId"] = i);
		selectRegionInfo.push(obj);
	}
	let selectRegionInfos = {
		code: 200,
		data: selectRegionInfo,
	};
	res.send(selectRegionJsons);
});
// 首页-互感器热力地图
// 1地理数据,与站点地图同一个接口

// 2.互感器异常数据-每个区域互感器的异常数据接口
app.get("/presentation/transformer/transformerAbnormal", (req, res) => {
	var transformerAbnormal = [{
			name: "常德市",
			abnormalCount: 10,
		},
		{
			name: "张家界市",
			value: 20,
		},
		{
			name: "岳阳市",
			value: 15,
		},
		{
			name: "益阳市",
			value: 20,
		},
		{
			name: "湘西土家族苗族自治州市",
			value: 13,
		},
		{
			name: "长沙市",
			value: 2,
		},
		{
			name: "娄底市",
			value: 50,
		},
		{
			name: "湘潭市",
			value: 40,
		},
		{
			name: "株洲市",
			value: 10,
		},
		{
			name: "怀化市",
			value: 10,
		},
		{
			name: "邵阳市",
			value: 6,
		},
		{
			name: "衡阳市",
			value: 23,
		},
		{
			name: "永州市",
			value: 30,
		},
	];
	let transformerAbnormals = {
		code: 200,
		data: transformerAbnormal,
	};
	res.send(transformerAbnormals);
});
// 首页-运维统计-省


app.get("/presentation/maintenanceOrder/statisti", (req, res) => {
	let dataPieOpex = {
		code: 200,
		msg: "操作成功",
		data: {
			auditauditedCount: 10, // 已审核
			generatedCount: 20, // 已生成
			sendedCount: 15, // 已派单
			completedCount: 18, // 已完成
		},
		//   data: [
		//     { value: 17, name: "已审核" },
		//     { value: 18, name: "已派单" },
		//     { value: 21, name: "已完成" },
		//     { value: 20, name: "已生成" },
		//   ],
	};
	res.send(dataPieOpex);
});

// 首页-运维统计-市
app.get("/echarts/test/listCityPieOpex", (req, res) => {
	let dataCityPieOpex = [{
			value: 10,
			name: "已审核"
		},
		{
			value: 8,
			name: "已派单"
		},
		{
			value: 11,
			name: "已完成"
		},
		{
			value: 15,
			name: "已生成"
		},
	];
	res.send(dataCityPieOpex);
});

// 首页-运维完成率

app.get("/presentation/maintenanceOrder/completionRate", (req, res) => {
	let dataProgress = {
		code: 200,
		data: [{
				city: "张家界站",
				completionRate: 90,
			},
			{
				city: "张家界站",
				completionRate: 80,
			},
			{
				city: "张家界站",
				completionRate: 90,
			},
			{
				city: "张家界站",
				completionRate: 40,
			},
			{
				city: "张家界站",
				completionRate: 80,
			},
			{
				city: "张家界站",
				completionRate: 90,
			},
			{
				city: "张家界站",
				completionRate: 40,
			},
			{
				city: "张家界站",
				completionRate: 90,
			},
			{
				city: "张家界站",
				completionRate: 30,
			},
			{
				city: "张家界站",
				completionRate: 60,
			},
			{
				city: "张家界站",
				completionRate: 90,
			},
			{
				city: "张家界站",
				completionRate: 80,
			},
			{
				city: "张家界站",
				completionRate: 60,
			},
			{
				city: "张家界站",
				completionRate: 10,
			},
		],
	};
	res.send(dataProgress);
});

// 首页-运维完成率
app.get("/presentation/maintenanceOrder/maintenanceInfo", (req, res) => {
	var haveSentList = [];
	for (var i = 0; i < 50; i++) {
		let obj = {};
		obj["transformerName"] = "石长I线a相";
		obj["transformerId"] = i++;
		obj["orderId"] = i * 1000;
		obj["address"] = "长沙市-天心区" + i;
		obj["monitorState"] = 0; //0正常,1警告，2异常
		haveSentList.push(obj);
	}
	var completedList = [];
	for (var i = 0; i < 20; i++) {
		let obj = {};
		obj["positionName"] = "石长I线b相";
		obj["positionId"] = i++;
		obj["orderId"] = i * 1000;
		obj["address"] = "长沙市-天心区" + i;
		obj["monitorState"] = 1;
		completedList.push(obj);
	}
	var generatedList = [];
	for (var i = 0; i < 30; i++) {
		let obj = {};
		obj["transformerName"] = "石长I线c相";
		obj["transformerId"] = i++;
		obj["orderId"] = i * 1000;
		obj["address"] = "长沙市-天心区" + i;
		obj["monitorState"] = 2;
		generatedList.push(obj);
	}
	var auditauditedList = [];
	for (var i = 0; i < 40; i++) {
		let obj = {};
		obj["transformerName"] = "石长I线a相";
		obj["transformerId"] = i++;
		obj["orderId"] = i * 1000;
		obj["address"] = "长沙市-天心区" + i;
		obj["monitorState"] = 0;
		auditauditedList.push(obj);
	}

	var operationDatas = {
		code: 200,
		msg: "操作成功",
		data: {
			haveSentList: haveSentList, // 已派单
			completedList: completedList, // 已完成
			generatedList: generatedList, // 已生成
			auditauditedList: auditauditedList, // 已审核
		},
	};
	res.send(operationDatas);
});

// 首页-运维历史弹窗完成率
app.get("/presentation/maintenanceOrder/maintenanceHistory", (req, res) => {
	var operationDialogData = [];
	for (var i = 0; i < 30; i++) {
		let obj = {};
		obj["orderId"] = i * 1000;
		obj["address"] = "长沙市-天心区" + i;
		obj["monitorState"] = 0; // 0=正常,1=警告,2=异常
		obj["orderStatus"] = 0; // 工单状态0已审核，1未派单、2已派单、3待确认、4已确认、5已完成
		obj["companyShortName"] = "运维公司";
		obj["userName"] = "张三";
		obj["startTime"] = "2020-02-22";
		obj["endTime"] = "2020-02-29";
		obj["evaluationValue"] = "0.3"; // 评估值
		obj["appraisalValue"] = "0.5"; // 鉴定值
		obj["remark"] = "这是备注";
		operationDialogData.push(obj);
	}
	res.send(operationDialogData);
});
// 首页-系统介绍
app.get("/presentation/introduce", (req, res) => {

	let dataText = {
		code: 200,
		data: `123456110电站为四类变电站110kV及以下所有变电站电站为四类变电站110kV及以下所有变电站为四类变电站,110kV及以下所有变电站为四类变电站110kV及以下所有变电站为四类变电站,110kV及以下所有变电站为四类变电站110kV及以下所有变电站为四类变电站,110kV及以下所有变电站为四类变电站110kV及以下所有变电站为四类变电站,110kV及以下所有变电站为四类变电站110kV及以下所有变电站为四类变电站,110kV及以下所有变电站为四类变电站110kV及以下所有变电站为四类变电站,110kV及以下所有变电站为四类变电站110kV及以下所有变电站为四类变电站,110kV及以下所有变电站为四类变电站110kV及以下所有变电站为四类变电站,110kV及以下所有变电站为四类变电站110kV及以下所有变电站为四类变电站,110kV及以下所有变
	  `,
	};
	res.send(dataText);
});

// 首页-系统信息
app.get("/echarts/test/listDataSystem", (req, res) => {
	let dataSystem = {
		code: 0,
		data: `234`,
	};
	res.send(dataSystem);
});

// 首页-系统柱状图

app.get("/presentation/conditionMonitoring", (req, res) => {
	let datalistBars = {
		code: 200,

		data: {
			sysCollectionOfAnomalies: 12,
			sysNonFailureOperationTime: 360,
			list: [{
					name: "站点1",
					collectionOfAnomalies: 100,
					nonFailureOperationTime: 20,
				},
				{
					name: "站点2",
					collectionOfAnomalies: 50,
					nonFailureOperationTime: 23,
				},
				{
					name: "站点3",
					collectionOfAnomalies: 60,
					nonFailureOperationTime: 10,
				},
				{
					name: "站点4",
					collectionOfAnomalies: 60,
					nonFailureOperationTime: 28,
				},
				{
					name: "站点5",
					collectionOfAnomalies: 15,
					nonFailureOperationTime: 10,
				},
				{
					name: "站点6",
					collectionOfAnomalies: 35,
					nonFailureOperationTime: 6,
				},
				{
					name: "站点7",
					collectionOfAnomalies: 73,
					nonFailureOperationTime: 16,
				},
				{
					name: "站点8",
					collectionOfAnomalies: 100,
					nonFailureOperationTime: 90,
				},
			],
		},
	};
	res.send(datalistBars);
});
app.listen(3001, function () {
	console.log('端口号3001 服务启动成功');
});