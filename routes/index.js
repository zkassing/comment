var express = require('express');
var router = express.Router();
var db = require('../db/db');
var con = require('../db/contentMap');

/* GET home page. */
router.get('/', function (req, res, next) {
    db.query(con.queryAll,[],function(err,rows){
        if(err)throw err;
        else{
            res.render('index', {title: '评论',datas:rows,length:rows.length});
        }
    });
    
});

module.exports = router;
