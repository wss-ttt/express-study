var express = require('express')
var router = express.Router()

router.get('/',function(req,res){
    res.send('/')
})
router.get('/one',function(req,res){
    res.send('/one')
})
router.get('/second',function(req,res){
    res.send('/second')
})
router.get('/third',function(req,res){
    res.send('/third')
})

module.exports = router
