var express = require('express')
var app = express()
var homeRouter = require('./routes/home')

// 挂载子路由到/home上
app.use('/home',homeRouter)

app.listen('5000',function(){
    console.log('服务启动成功 5000')
})