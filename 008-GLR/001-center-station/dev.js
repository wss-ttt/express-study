var express = require('express');
var app = express();
const fs = require('fs');

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
app.get('/presentation/sysStation/basicsInfo', function (req, res) {
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
})
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
app.get("/presentation/map/selectRegionJson", (req, res) => {
    let selectRegionJson = {
        code: 200,
        data: "test",
    };
    res.send(selectRegionJson);
});
// 互感器异常数据-每个区域互感器的异常数据接口
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
})
// 首页-运维历史弹窗完成
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
app.get("/presentation/maintenanceOrder/statisti", (req, res) => {
    let dataPieOpex = {
        code: 200,
        msg: "操作成功",
        data: {
            auditauditedCount: 10, // 已审核
            generatedCount: 20, // 已生成
            sendedCount: 15, // 已派单
            completedCount: 18, // 已完成
        }
    };
    res.send(dataPieOpex);
});
app.listen(3001, function () {
    console.log('端口号3001 服务启动成功');
})