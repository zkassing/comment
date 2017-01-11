var express = require('express');
var router = express.Router();
var db = require('../db/db');
var userMap = require('../db/userMap');
router.post('/login',function (req, res, next) {
    var name = req.body.user;
    db.query(userMap.queryByName,[name],function(err,rows){
        if(err){
            res.send("登录失败");
        }else{
            if(rows.length>0){
                res.cookie('name',name);
                if(rows[0].name == name){
                    res.redirect('/');
                }
                
            }else{
                res.send("用户名不存在")
            }
            
        }
    })
})


module.exports = router;