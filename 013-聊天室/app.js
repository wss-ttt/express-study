var ws = require("nodejs-websocket");
// 这里用到了moment，请大家自行安装
var moment = require('moment');


console.log("开始建立连接...")

let users = [];

// 向所有连接的客户端广播
function boardcast(obj) {
	server.connections.forEach(function (conn) {
		conn.sendText(JSON.stringify(obj));
	})
}

function getDate() {
	return moment().format('YYYY-MM-DD HH:mm:ss')
}

var server = ws.createServer(function (conn) {
	conn.on("text", function (obj) {
		console.log('消息:', obj)
	})
	conn.on("close", function (code, reason) {
		console.log("关闭连接")
	});
	conn.on("error", function (code, reason) {
		console.log("异常关闭")
	});
}).listen(8989, function () {
	console.log("WebSocket服务启动")
})