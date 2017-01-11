var express = require('express');
var router = express.Router();
var db = require('../db/db');
var contentMap = require('../db/contentMap');
/* GET home page. */


function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
        + " " + date.getHours() + seperator2 + date.getMinutes()
        + seperator2 + date.getSeconds();
    return currentdate;
}
router.post('/', function (req, res, next) {
    var content = req.body.content;//传递content
    var name = req.cookies.name;
    var date = getNowFormatDate();
    // var name = res.cookies.name;
    db.query(contentMap.insert,[name,date,content],function(err,rows){
        console.log(rows);
        if(err) {
            res.send({'status':"error"})
        }else{
            res.send({"status":"success",result:{name:name,content:content,time:date}});
        }
    })
});


module.exports = router;
