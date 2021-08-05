var ws = require('nodejs-websocket');
var server = ws.createServer(function (socket) {
  // 事件名称为text(读取字符串时，就叫做text)，读取客户端传来的字符串
	var count = 1;
	var timer = null
  socket.on('text', function (str) {
		// 在控制台输出前端传来的消息　　
		console.log(str);
		// 定时向服务器发送消息
		timer = setInterval(() => {
			//向前端回复消息
			socket.sendText('服务器端收到客户端端发来的消息了！' + count++);
		}, 1000)
	});
	

  socket.on('error', error => {
		// 清除定时器
		clearInterval(timer)
    console.log('error', error)
  })
}).listen(5000, function() {
  console.log('服务启动成功')
});