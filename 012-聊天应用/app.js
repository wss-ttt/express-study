const ws = require("nodejs-websocket");
console.log("开始建立连接...")

let [user1, user2, user1Ready, user2Ready] = [null, null, false, false];

ws.createServer(function (conn) {
	conn.on("text", function (str) {
		str = JSON.parse(str)
		let {
			name,
			count,
			msg
		} = str
		count = +count // 转换成数字类型数据
		if (name === "user1") {
			user1 = conn;
			user1Ready = true;
		}
		if (name === "user2") {
			user2 = conn;
			user2Ready = true;
		}
		// 如果是首次发送的消息
		if (!count) {
			str = JSON.stringify(str)
			console.log('首次;', '第', count, '次接受到的数据:', str)
			return conn.sendText(str)
		} else {
			console.log('非首次;', '第' ,count, '次接受到的数据:', str)
			// 如果不是首次
			// 获取服务器当前系统时间
			const myDate = new Date();
			time = myDate.toLocaleTimeString()
			str.time = time
			str = JSON.stringify(str)

			if (user1Ready) {
				user1.sendText(str);
			}
			if (user2Ready) {
				user2.sendText(str);
			}
		}
	})
	conn.on("close", function (code, reason) {
		console.log("关闭连接")
	});
	conn.on("error", function (code, reason) {
		console.log("异常关闭")
	});
}).listen(8001, function () {
	console.log("WebSocket建立完毕")
})