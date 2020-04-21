const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
    //  res.send('hello, express')
    res.json({
        status:200,
        data:'请求成功'
    })
})
router.get('/data',function(req,res){
    res.json({
        status:200,
        data:[1,3,5,7,9]
    })
})
// 导出路由对象
module.exports = router