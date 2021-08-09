const ws = require('nodejs-websocket') //引入nodejs-websocket
const server = ws
	.createServer((conn) => {
		console.log('ok')
		conn.on('text', (str) => { //接受客户端传来的消息
			broadcast(str)
		})
		conn.on('error', (err) => { //判断错误，假如不判断的话 会断开连接
			console.log(err)
		})
	})
	.listen(3000, function() {
		console.log('服务启动成功')
	})

function broadcast(data) {
	//所有的窗口都储存在connections里面，所以用循环把消息发给所有的窗口 
	server.connections.forEach((conn) => {
		conn.sendText(data) //sendText 服务端发送给客户端方法
	})
}