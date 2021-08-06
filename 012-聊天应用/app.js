var ws = require("nodejs-websocket");
console.log("开始建立连接...")

var [user1, user2, user1Ready, user2Ready] = [null, null, false, false];

ws.createServer(function (conn) {
	conn.on("text", function (str) {
		console.log("收到的信息为:" + str)
		console.log('类型', typeof str)
		var myDate = new Date();
		var time = myDate.toLocaleTimeString()
		// var msg = JSON.parse(str)
		// msg.time = time
		// console.log('msg', msg)
		if (str === "user1") {
			user1 = conn;
			user1Ready = true;
		}
		if (str === "user2") {
			user2 = conn;
			user2Ready = true;
		}
		if (user2Ready) {
			// user2.sendText(JSON.stringify(msg));
			user2.sendText(str);
		}
		if (user1Ready) {
			// user1.sendText(JSON.stringify(msg));
			user1.sendText(str);
		}
	})
	conn.on("close", function (code, reason) {
		console.log("关闭连接")
	});
	conn.on("error", function (code, reason) {
		console.log("异常关闭", reason, code)
	});
}).listen(8001, function() {
	console.log("WebSocket建立完毕")
})