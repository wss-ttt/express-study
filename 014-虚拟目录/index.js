var express=require('express');
var app=express();


// 托管静态资源
app.use(express.static('public'));

// app.use('/shandong',express.static('public/pro'));



var server=app.listen(9010,function(){
	console.log('服务启动成功')
});