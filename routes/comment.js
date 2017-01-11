var express = require('express');
var router = express.Router();
var db = require('../db/db');
var contentMap = require('../db/contentMap');
/* GET home page. */
router.post('/', function (req, res, next) {
    var content = req.body.content;//传递content
    var name = req.cookies.name;
    // var name = res.cookies.name;
    db.query(contentMap.insert,[name,content],function(err,rows){
        if(err) {
            res.send({'status':"error"})
        }else{
            res.send({"status":"success"})
        }
    })
});


module.exports = router;
