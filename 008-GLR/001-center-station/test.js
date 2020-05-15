var express = require('express');
var app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json());

/**
 *  公共
 * **/
// 1.传参用的数据字典接口
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

// 2.创造数据
let wss = {
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

/**
 * (一)变电站相关接口
 * **/
// 1.变电站排名评分
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
// 2.变电站基础信息表
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

// 3.变电站健康情况
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

// 4.变电站周期评分表
app.post('/presentation/sysStation/cycleScore', function (req, res) {
    let data = [];
    for (let i = 1; i <= 11; i++) {
        data.push({
            name: '石长' + i + '线',
            last: Math.ceil(Math.random() * 100),
            current: Math.ceil(Math.random() * 100)
        })
    }
    res.json({
        msg: 'ok',
        code: 200,
        data: data
    })
})
/**
 * (二)互感器画像相关接口
 * **/
// 1.互感器基础信息（使用年限等）
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
// 2.互感器基础信息（基础档案）
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

// 3.计量线路历史运维信息
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

// 4.运维历史情况表
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

// 5.互感器电参量数据
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

// 6.所有误差折线图
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

// 7.主干接线图接口
app.post('/presentation/transformer/transformerData', function (req, res) {
    let data = []
    // 竖线
    for (let i = 1; i <= 6; i++) {
        let o = {
            positionId: i,
            positionName: '竖线' + i,
            isBus: 1, // 0: 表示母线 1: 竖线
            map: {
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
                }
            }
        }
        data.push(o)
    }
    // 母线
    for (let i = 1; i <= 2; i++) {
        let o = {
            positionId: i,
            positionName: '母线' + i,
            isBus: 0, // 0: 表示母线 1: 竖线
            map: {
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
                }
            }
        }
        data.push(o);
    }
    res.json({
        msg: 'ok',
        code: 200,
        data: data
    });
})
/**
 * (三)健康图表相关接口
 * **/
// 1.健康影响因素接口
app.post('/web/analysis/influence/data', function (req, res) {
    let columnType = req.body.columnType
    let data;
    switch (columnType) {
            // 基波频率
        case 'FUNDAMENTAL_FREQUENCY':
            data = wss.createData(49, 50);
            res.json({
                msg: 'ok',
                code: 200,
                data: {
                    yseries: {
                        xmin: 49.96019,
                        xmax: 50.05042,
                        ymin: 0.10005,
                        ymax: 0.21344,
                        data: data
                    }
                }
            });
            break;
            // 基波有效值
        case 'FUNDAMENTAL_AMPLITUDE':
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
            break;
            // 零序电压不平衡度
        case 'ZERO_SEQUENCE_VOLTAGE_IMBALANC':
            data = wss.createData(0, 0);
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
            break;
            // 负序电压不平衡度
        case 'NEGATIVE_SEQUENCE_VOLTAGE_IMBA':
            data = wss.createData(0, 0);
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
            break;
            // 温度
        case 'TEMPERATURE':
            data = wss.createData(15, 15);
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
            break;
            // 湿度
        case 'HUMIDITY':
            data = wss.createData(15, 15);
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
            break;
            // 基波相位
        case 'FUNDAMENTAL_PHASE':
            data = wss.createData(-10000, 10000, 2);
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
            break;
            // 三次谐波有效值
        case 'THIRD_HARMONIC_AMPLITUDE':
            data = wss.createData(0, 1);
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
            break;
            // 三次谐波相位
        case 'THIRD_HARMONIC_PHASE':
            data = wss.createData(-10000, 10000, 2);
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
            break;
            // 五次谐波有效值
        case 'FIFTH_HARMONIC_AMPLITUDE':
            data = wss.createData(0, 1);
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
            break;
            // 五次谐波相位
        case 'FIFTH_HARMONIC_PHASE':
            data = wss.createData(-10000, 10000, 2);
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
            break;
    }
})

/***************************************老曾*****************************************/


// 01.互感器总数统计
app.post("/presentation/transformer/selectTransformerCount", (req, res) => {
    let dataGauges = {
        code: 200,
        msg: "操作成功",
        data: {
            abnormalCount: 5,
            normalCount: 41,
            warnCount: 1,
        },
    };
    res.send(dataGauges);
});

// 02.互感器监控列表
app.post("/presentation/transformer/transformerMonitorInfo", (req, res) => {
    //   let transformerTable = [];
    //   let regionName = ["衡阳市"];
    //   for (let i = 0; i < 20; i++) {
    //     let obj = {};
    //     obj["regionName"] = "长沙市" + i;
    //     obj["regionId"] = i;
    //     obj["normalCount"] = i * 4;
    //     obj["warnCount"] = i * 3;
    //     obj["abnormalCount"] = i * 8;
    //     obj["needRepair"] = i * 5;
    //     obj["completed"] = i * 10;
    //     transformerTable.push(obj);
    //   }
    let transformerTables = {
        code: 200,
        data: [{
            abnormalCount: 1,
            completed: 4,
            needRepair: 3,
            normalCount: 22,
            regionId: 430400,
            regionName: "衡阳市",
            warnCount: 1,
        }, ],
        msg: "操作成功",
    };
    res.send(transformerTables);
});

// 03.站点监控饼状图
app.post("/presentation/sysStation/stationStatis", (req, res) => {
    let dataPie = {
        code: 200,
        data: {
            constructing: 10,
            active: 100,
            noActive: 20,
        },
        msg: "操作成功",
    };
    res.send(dataPie);
});

// 04.站点监控列表
app.post("/presentation/sysStation/stationMonitor", (req, res) => {
    let stationTable = [{
            address: "衡阳市麻塘",
            commissionDate: null,
            stationId: 1,
            stationName: "衡阳站",
            status: 2,
            transformerCount: 24,
        },
        {
            address: "株洲",
            commissionDate: null,
            stationId: 302,
            stationName: "株洲站",
            status: 2,
            transformerCount: 0,
        },
    ];
    //   for (var i = 0; i < 10; i++) {
    //     let obj = {};
    //     obj["stationName"] = "站点" + i;
    //     obj["stationId"] = i;
    //     obj["status"] = 0;
    //     obj["address"] = "湖南省某地" + i;
    //     obj["commissionDate"] = i * 5;
    //     obj["transformerCount"] = i * 10;
    //     stationTable.push(obj);
    //   }
    let stationTables = {
        code: 200,
        data: stationTable,
    };
    res.send(stationTables);
});

// 05.站点地图-地理数据(测试时用给本地引入的)
app.post("/presentation/map/selectRegionJson", (req, res) => {
    let selectRegionJson = {
        code: 200,
        data: "test",
    };
    res.send(selectRegionJson);
});

// 06.站点地图-站点信息
app.post("/presentation/sysStation/stationMap", (req, res) => {
    let stationDatas = {
        code: 200,
        data: [{
                id: 1,
                name: "衡阳站",
                value: [112.3037, 26.5223],
                status: 2
            },
            {
                id: 302,
                name: "株洲站",
                value: [113.151737, 27.835806],
                status: 2
            },
        ],
        msg: "操作成功",
    };
    res.send(stationDatas);
});

// 07.站点地图-地区信息
app.post("/presentation/map/selectRegionInfo", (req, res) => {
    let selectRegionInfos = {
        code: 200,
        data: [{
                regionId: 430100,
                regionName: "长沙市",
                value: [112.982279, 28.19409],
                activeCount: 0,
            },
            {
                regionId: 430200,
                regionName: "株洲市",
                value: [113.151737, 27.835806],
                activeCount: 1,
            },
            {
                regionId: 430300,
                regionName: "湘潭市",
                value: [112.944052, 27.82973],
                activeCount: 0,
            },
            {
                regionId: 430400,
                regionName: "衡阳市",
                value: [112.607693, 26.900358],
                activeCount: 1,
            },
            {
                regionId: 430500,
                regionName: "邵阳市",
                value: [111.46923, 27.237842],
                activeCount: 0,
            },
            {
                regionId: 430600,
                regionName: "岳阳市",
                value: [113.132855, 29.37029],
                activeCount: 0,
            },
            {
                regionId: 430700,
                regionName: "常德市",
                value: [111.691347, 29.040225],
                activeCount: 0,
            },
            {
                regionId: 430800,
                regionName: "张家界市",
                value: [110.479921, 29.127401],
                activeCount: 0,
            },
            {
                regionId: 430900,
                regionName: "益阳市",
                value: [112.355042, 28.570066],
                activeCount: 0,
            },
            {
                regionId: 431000,
                regionName: "郴州市",
                value: [113.032067, 25.793589],
                activeCount: 0,
            },
            {
                regionId: 431100,
                regionName: "永州市",
                value: [111.608019, 26.434516],
                activeCount: 0,
            },
            {
                regionId: 431200,
                regionName: "怀化市",
                value: [109.97824, 27.550082],
                activeCount: 0,
            },
            {
                regionId: 431300,
                regionName: "娄底市",
                value: [112.008497, 27.728136],
                activeCount: 0,
            },
            {
                regionId: 433100,
                regionName: "湘西土家族苗族自治州",
                value: [109.739735, 28.314296],
                activeCount: 0,
            },
        ],
        msg: "操作成功",
    };
    res.send(selectRegionInfos);
});

// 08.互感器热力地图-异常信息
app.post("/presentation/transformer/transformerAbnormal", (req, res) => {
    let transformerAbnormal = [{
            regionName: "长沙市",
            regionId: 430100,
            count: 0,
            latitude: 28.19409,
            longitude: 112.982279,
        },
        {
            regionName: "株洲市",
            regionId: 430200,
            count: 0,
            latitude: 27.835806,
            longitude: 113.151737,
        },
        {
            regionName: "湘潭市",
            regionId: 430300,
            count: 0,
            latitude: 27.82973,
            longitude: 112.944052,
        },
        {
            regionName: "衡阳市",
            regionId: 430400,
            count: 1,
            latitude: 26.900358,
            longitude: 112.607693,
        },
        {
            regionName: "邵阳市",
            regionId: 430500,
            count: 1,
            latitude: 27.237842,
            longitude: 111.46923,
        },
        {
            regionName: "岳阳市",
            regionId: 430600,
            count: 0,
            latitude: 29.37029,
            longitude: 113.132855,
        },
        {
            regionName: "常德市",
            regionId: 430700,
            count: 1,
            latitude: 29.040225,
            longitude: 111.691347,
        },
        {
            regionName: "张家界市",
            regionId: 430800,
            count: 0,
            latitude: 29.127401,
            longitude: 110.479921,
        },
        {
            regionName: "益阳市",
            regionId: 430900,
            count: 1,
            latitude: 28.570066,
            longitude: 112.355042,
        },
        {
            regionName: "郴州市",
            regionId: 431000,
            count: 1,
            latitude: 25.793589,
            longitude: 113.032067,
        },
        {
            regionName: "永州市",
            regionId: 431100,
            count: 0,
            latitude: 26.434516,
            longitude: 111.608019,
        },
        {
            regionName: "怀化市",
            regionId: 431200,
            count: 0,
            latitude: 27.550082,
            longitude: 109.97824,
        },
        {
            regionName: "娄底市",
            regionId: 431300,
            count: 1,
            latitude: 27.728136,
            longitude: 112.008497,
        },
        {
            regionName: "湘西土家族苗族自治州",
            regionId: 433100,
            count: 0,
            latitude: 28.314296,
            longitude: 109.739735,
        },
    ];

    let transformerAbnormals = {
        code: 200,
        data: transformerAbnormal,
    };
    res.send(transformerAbnormals);
});

// 09.运维统计图
app.post("/presentation/maintenanceOrder/statisti", (req, res) => {
    let dataPieOpex = {
        code: 200,
        msg: "操作成功",
        data: {
            auditauditedCount: 10, // 已审核
            generatedCount: 20, // 已生成
            sendedCount: 15, // 已派单
            completedCount: 18, // 已完成
        },
        msg: "操作成功",
    };
    res.send(dataPieOpex);
});

// 10.运维进度条
app.post("/presentation/maintenanceOrder/completionRate", (req, res) => {
    let dataProgress = {
        code: 200,
        data: [{
                city: "长沙市",
                completionCount: 0,
                orderCount: 0,
                completionRate: 100,
                abnormalCount: null,
            },
            {
                city: "株洲市",
                completionCount: 0,
                orderCount: 0,
                completionRate: 100,
                abnormalCount: null,
            },
            {
                city: "湘潭市",
                completionCount: 0,
                orderCount: 0,
                completionRate: 100,
                abnormalCount: null,
            },
            {
                city: "衡阳市",
                completionCount: 4,
                orderCount: 7,
                completionRate: 57,
                abnormalCount: null,
            },
            {
                city: "邵阳市",
                completionCount: 0,
                orderCount: 0,
                completionRate: 100,
                abnormalCount: null,
            },
            {
                city: "岳阳市",
                completionCount: 0,
                orderCount: 0,
                completionRate: 100,
                abnormalCount: null,
            },
            {
                city: "常德市",
                completionCount: 0,
                orderCount: 0,
                completionRate: 100,
                abnormalCount: null,
            },
            {
                city: "张家界市",
                completionCount: 0,
                orderCount: 0,
                completionRate: 100,
                abnormalCount: null,
            },
            {
                city: "益阳市",
                completionCount: 0,
                orderCount: 0,
                completionRate: 100,
                abnormalCount: null,
            },
            {
                city: "郴州市",
                completionCount: 0,
                orderCount: 0,
                completionRate: 100,
                abnormalCount: null,
            },

            {
                city: "永州市",
                completionCount: 0,
                orderCount: 0,
                completionRate: 100,
                abnormalCount: null,
            },
            {
                city: "怀化市",
                completionCount: 0,
                orderCount: 0,
                completionRate: 100,
                abnormalCount: null,
            },
            {
                city: "娄底市",
                completionCount: 0,
                orderCount: 0,
                completionRate: 100,
                abnormalCount: null,
            },
            {
                city: "湘西土家族苗族自治州",
                completionCount: 0,
                orderCount: 0,
                completionRate: 100,
                abnormalCount: null,
            },
        ],
        msg: "操作成功",
    };
    res.send(dataProgress);
});

// 11.运维信息表
app.post("/presentation/maintenanceOrder/maintenanceInfo", (req, res) => {
    // var haveSentList = [];
    // for (var i = 0; i < 50; i++) {
    //   let obj = {};
    //   obj["transformerName"] = "石长I线a相";
    //   obj["transformerId"] = i++;
    //   obj["orderId"] = i * 1000;
    //   obj["address"] = "长沙市-天心区" + i;
    //   obj["monitorState"] = 0; //0正常,1警告，2异常
    //   haveSentList.push(obj);
    // }
    // var completedList = [];
    // for (var i = 0; i < 20; i++) {
    //   let obj = {};
    //   obj["positionName"] = "石长I线b相";
    //   obj["positionId"] = i++;
    //   obj["orderId"] = i * 1000;
    //   obj["address"] = "长沙市-天心区" + i;
    //   obj["monitorState"] = 1;
    //   completedList.push(obj);
    // }
    // var generatedList = [];
    // for (var i = 0; i < 30; i++) {
    //   let obj = {};
    //   obj["transformerName"] = "石长I线c相";
    //   obj["transformerId"] = i++;
    //   obj["orderId"] = i * 1000;
    //   obj["address"] = "长沙市-天心区" + i;
    //   obj["monitorState"] = 2;
    //   generatedList.push(obj);
    // }
    // var auditauditedList = [];
    // for (var i = 0; i < 40; i++) {
    //   let obj = {};
    //   obj["transformerName"] = "石长I线a相";
    //   obj["transformerId"] = i++;
    //   obj["orderId"] = i * 1000;
    //   obj["address"] = "长沙市-天心区" + i;
    //   obj["monitorState"] = 0;
    //   auditauditedList.push(obj);
    // }

    let operationDatas = {
        code: 200,
        msg: "操作成功",
        data: {
            sendedCount: [], // 已派单
            completedCount: [{
                    orderId: 4,
                    transformerName: "衡阳-1线1",
                    transformerId: 0,
                    address: "中国,湖南省,衡阳市",
                    monitorState: 0,
                },
                {
                    orderId: 5,
                    transformerName: "衡阳-1线2",
                    transformerId: 1,
                    address: "中国,湖南省,衡阳市",
                    monitorState: 0,
                },
                {
                    orderId: 6,
                    transformerName: "衡阳-1线3",
                    transformerId: 2,
                    address: "中国,湖南省,衡阳市",
                    monitorState: 0,
                },
                {
                    orderId: 7,
                    transformerName: "衡阳-1线4",
                    transformerId: 3,
                    address: "中国,湖南省,衡阳市",
                    monitorState: 0,
                },
            ], // 已完成
            generatedCount: [{
                orderId: 1,
                transformerName: "衡阳-1线1",
                address: "中国,湖南省,衡阳市",
                transformerId: 1,
                monitorState: 0,
            }, ], // 已生成
            auditauditedCount: [{
                orderId: 3,
                transformerName: "衡阳-1线3",
                transformerId: 3,
                address: "中国,湖南省,衡阳市",
                monitorState: 0,
            }, ], // 已审核
        },
    };
    res.send(operationDatas);
});

// 12.运维历史信息表TODO
app.post("/presentation/maintenanceOrder/maintenanceHistory", (req, res) => {
    let operationDialogData = [];
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

// 07.站点地图-地区信息
app.post("/presentation/map/selectRegionInfo", (req, res) => {
    let selectRegionInfos = {
        code: 200,
        data: [{
                regionId: 430100,
                regionName: "长沙市",
                value: [112.982279, 28.19409],
                activeCount: 0,
            },
            {
                regionId: 430200,
                regionName: "株洲市",
                value: [113.151737, 27.835806],
                activeCount: 1,
            },
            {
                regionId: 430300,
                regionName: "湘潭市",
                value: [112.944052, 27.82973],
                activeCount: 0,
            },
            {
                regionId: 430400,
                regionName: "衡阳市",
                value: [112.607693, 26.900358],
                activeCount: 1,
            },
            {
                regionId: 430500,
                regionName: "邵阳市",
                value: [111.46923, 27.237842],
                activeCount: 0,
            },
            {
                regionId: 430600,
                regionName: "岳阳市",
                value: [113.132855, 29.37029],
                activeCount: 0,
            },
            {
                regionId: 430700,
                regionName: "常德市",
                value: [111.691347, 29.040225],
                activeCount: 0,
            },
            {
                regionId: 430800,
                regionName: "张家界市",
                value: [110.479921, 29.127401],
                activeCount: 0,
            },
            {
                regionId: 430900,
                regionName: "益阳市",
                value: [112.355042, 28.570066],
                activeCount: 0,
            },
            {
                regionId: 431000,
                regionName: "郴州市",
                value: [113.032067, 25.793589],
                activeCount: 0,
            },
            {
                regionId: 431100,
                regionName: "永州市",
                value: [111.608019, 26.434516],
                activeCount: 0,
            },
            {
                regionId: 431200,
                regionName: "怀化市",
                value: [109.97824, 27.550082],
                activeCount: 0,
            },
            {
                regionId: 431300,
                regionName: "娄底市",
                value: [112.008497, 27.728136],
                activeCount: 0,
            },
            {
                regionId: 433100,
                regionName: "湘西土家族苗族自治州",
                value: [109.739735, 28.314296],
                activeCount: 0,
            },
        ],
        msg: "操作成功",
    };
    res.send(selectRegionInfos);
});

// 08.互感器热力地图-异常信息
app.post("/presentation/transformer/transformerAbnormal", (req, res) => {
    let transformerAbnormal = [{
            regionName: "长沙市",
            regionId: 430100,
            count: 0,
            latitude: 28.19409,
            longitude: 112.982279,
        },
        {
            regionName: "株洲市",
            regionId: 430200,
            count: 0,
            latitude: 27.835806,
            longitude: 113.151737,
        },
        {
            regionName: "湘潭市",
            regionId: 430300,
            count: 0,
            latitude: 27.82973,
            longitude: 112.944052,
        },
        {
            regionName: "衡阳市",
            regionId: 430400,
            count: 1,
            latitude: 26.900358,
            longitude: 112.607693,
        },
        {
            regionName: "邵阳市",
            regionId: 430500,
            count: 1,
            latitude: 27.237842,
            longitude: 111.46923,
        },
        {
            regionName: "岳阳市",
            regionId: 430600,
            count: 0,
            latitude: 29.37029,
            longitude: 113.132855,
        },
        {
            regionName: "常德市",
            regionId: 430700,
            count: 1,
            latitude: 29.040225,
            longitude: 111.691347,
        },
        {
            regionName: "张家界市",
            regionId: 430800,
            count: 0,
            latitude: 29.127401,
            longitude: 110.479921,
        },
        {
            regionName: "益阳市",
            regionId: 430900,
            count: 1,
            latitude: 28.570066,
            longitude: 112.355042,
        },
        {
            regionName: "郴州市",
            regionId: 431000,
            count: 1,
            latitude: 25.793589,
            longitude: 113.032067,
        },
        {
            regionName: "永州市",
            regionId: 431100,
            count: 0,
            latitude: 26.434516,
            longitude: 111.608019,
        },
        {
            regionName: "怀化市",
            regionId: 431200,
            count: 0,
            latitude: 27.550082,
            longitude: 109.97824,
        },
        {
            regionName: "娄底市",
            regionId: 431300,
            count: 1,
            latitude: 27.728136,
            longitude: 112.008497,
        },
        {
            regionName: "湘西土家族苗族自治州",
            regionId: 433100,
            count: 0,
            latitude: 28.314296,
            longitude: 109.739735,
        },
    ];

    let transformerAbnormals = {
        code: 200,
        data: transformerAbnormal,
    };
    res.send(transformerAbnormals);
});

// 09.运维统计图
app.post("/presentation/maintenanceOrder/statisti", (req, res) => {
    let dataPieOpex = {
        code: 200,
        msg: "操作成功",
        data: {
            auditauditedCount: 10, // 已审核
            generatedCount: 20, // 已生成
            sendedCount: 15, // 已派单
            completedCount: 18, // 已完成
        },
        msg: "操作成功",
    };
    res.send(dataPieOpex);
});

// 10.运维进度条
app.post("/presentation/maintenanceOrder/completionRate", (req, res) => {
    let dataProgress = {
        code: 200,
        data: [{
                city: "长沙市",
                completionCount: 0,
                orderCount: 0,
                completionRate: 100,
                abnormalCount: null,
            },
            {
                city: "株洲市",
                completionCount: 0,
                orderCount: 0,
                completionRate: 100,
                abnormalCount: null,
            },
            {
                city: "湘潭市",
                completionCount: 0,
                orderCount: 0,
                completionRate: 100,
                abnormalCount: null,
            },
            {
                city: "衡阳市",
                completionCount: 4,
                orderCount: 7,
                completionRate: 57,
                abnormalCount: null,
            },
            {
                city: "邵阳市",
                completionCount: 0,
                orderCount: 0,
                completionRate: 100,
                abnormalCount: null,
            },
            {
                city: "岳阳市",
                completionCount: 0,
                orderCount: 0,
                completionRate: 100,
                abnormalCount: null,
            },
            {
                city: "常德市",
                completionCount: 0,
                orderCount: 0,
                completionRate: 100,
                abnormalCount: null,
            },
            {
                city: "张家界市",
                completionCount: 0,
                orderCount: 0,
                completionRate: 100,
                abnormalCount: null,
            },
            {
                city: "益阳市",
                completionCount: 0,
                orderCount: 0,
                completionRate: 100,
                abnormalCount: null,
            },
            {
                city: "郴州市",
                completionCount: 0,
                orderCount: 0,
                completionRate: 100,
                abnormalCount: null,
            },

            {
                city: "永州市",
                completionCount: 0,
                orderCount: 0,
                completionRate: 100,
                abnormalCount: null,
            },
            {
                city: "怀化市",
                completionCount: 0,
                orderCount: 0,
                completionRate: 100,
                abnormalCount: null,
            },
            {
                city: "娄底市",
                completionCount: 0,
                orderCount: 0,
                completionRate: 100,
                abnormalCount: null,
            },
            {
                city: "湘西土家族苗族自治州",
                completionCount: 0,
                orderCount: 0,
                completionRate: 100,
                abnormalCount: null,
            },
        ],
        msg: "操作成功",
    };
    res.send(dataProgress);
});

// 11.运维信息表
app.post("/presentation/maintenanceOrder/maintenanceInfo", (req, res) => {
    // var haveSentList = [];
    // for (var i = 0; i < 50; i++) {
    //   let obj = {};
    //   obj["transformerName"] = "石长I线a相";
    //   obj["transformerId"] = i++;
    //   obj["orderId"] = i * 1000;
    //   obj["address"] = "长沙市-天心区" + i;
    //   obj["monitorState"] = 0; //0正常,1警告，2异常
    //   haveSentList.push(obj);
    // }
    // var completedList = [];
    // for (var i = 0; i < 20; i++) {
    //   let obj = {};
    //   obj["positionName"] = "石长I线b相";
    //   obj["positionId"] = i++;
    //   obj["orderId"] = i * 1000;
    //   obj["address"] = "长沙市-天心区" + i;
    //   obj["monitorState"] = 1;
    //   completedList.push(obj);
    // }
    // var generatedList = [];
    // for (var i = 0; i < 30; i++) {
    //   let obj = {};
    //   obj["transformerName"] = "石长I线c相";
    //   obj["transformerId"] = i++;
    //   obj["orderId"] = i * 1000;
    //   obj["address"] = "长沙市-天心区" + i;
    //   obj["monitorState"] = 2;
    //   generatedList.push(obj);
    // }
    // var auditauditedList = [];
    // for (var i = 0; i < 40; i++) {
    //   let obj = {};
    //   obj["transformerName"] = "石长I线a相";
    //   obj["transformerId"] = i++;
    //   obj["orderId"] = i * 1000;
    //   obj["address"] = "长沙市-天心区" + i;
    //   obj["monitorState"] = 0;
    //   auditauditedList.push(obj);
    // }

    let operationDatas = {
        code: 200,
        msg: "操作成功",
        data: {
            sendedCount: [], // 已派单
            completedCount: [{
                    orderId: 4,
                    transformerName: "衡阳-1线1",
                    transformerId: 0,
                    address: "中国,湖南省,衡阳市",
                    monitorState: 0,
                },
                {
                    orderId: 5,
                    transformerName: "衡阳-1线2",
                    transformerId: 1,
                    address: "中国,湖南省,衡阳市",
                    monitorState: 0,
                },
                {
                    orderId: 6,
                    transformerName: "衡阳-1线3",
                    transformerId: 2,
                    address: "中国,湖南省,衡阳市",
                    monitorState: 0,
                },
                {
                    orderId: 7,
                    transformerName: "衡阳-1线4",
                    transformerId: 3,
                    address: "中国,湖南省,衡阳市",
                    monitorState: 0,
                },
            ], // 已完成
            generatedCount: [{
                orderId: 1,
                transformerName: "衡阳-1线1",
                address: "中国,湖南省,衡阳市",
                transformerId: 1,
                monitorState: 0,
            }, ], // 已生成
            auditauditedCount: [{
                orderId: 3,
                transformerName: "衡阳-1线3",
                transformerId: 3,
                address: "中国,湖南省,衡阳市",
                monitorState: 0,
            }, ], // 已审核
        },
    };
    res.send(operationDatas);
});

// 12.运维历史信息表TODO
app.post("/presentation/maintenanceOrder/maintenanceHistory", (req, res) => {
    let operationDialogData = [];
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

app.listen(3001, function () {
    console.log('端口号3001 服务启动成功 哈哈');
})