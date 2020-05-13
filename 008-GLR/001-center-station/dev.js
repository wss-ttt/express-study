var express = require('express');
var app = express();
const fs = require('fs');

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