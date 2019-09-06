const express = require('express');
const app = express();

const indexRouter = require('./routes/index');
const userRouter = require('./routes/users');
 
app.use('/', indexRouter);
app.use('/users', userRouter);

app.get('/list/:name',function(req,res){
    let name = req.params.name
    res.json({
        status:200,
        data: name
    })
})

app.use('/all',function(req,res){
    res.send('all')
})
app.use('/all/:name',function(req,res){
    let name = req.params.name
    res.send(name)
})
app.use('/all/users',function(req,res){
    res.send('/all/users')
})
app.use('/all/admin',function(req,res){
    res.send('/all/admin')
})
 
app.listen(4000,function(){
    console.log('服务启动 4000');
});