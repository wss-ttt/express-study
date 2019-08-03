var express=require('express');
var app=express();
app.get('/',function(req,res){
	console.log(req);
	res.send('好好学习');
});
var server=app.listen(9090,function(){
	var host=server.address().address;
	var port=server.address().port;
	console.log('地址：',host);
	console.log('端口号:',port);
});