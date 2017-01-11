var express = require('express');
var router = express.Router();
var db = require('../db/db');
var con = require('../db/contentMap');
 
/* GET home page. */
router.get('/', function (req, res, next) {
    var name = req.cookies.name;
    db.query(con.queryAll,[],function(err,rows){
        if(err)throw err;
        else{
            var rows = rows.sort(function(a,b){return b.id-a.id})
            res.render('index', {title: '评论',datas:rows,length:rows.length,name:name});
        }
    });
    
});

module.exports = router;
