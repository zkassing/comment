var express = require('express');
var router = express.Router();

router.get('/',function (req, res, next) {
    if(req.cookies.name){
        res.send({exist:1});
    }else{
        res.send({exist:0});
    }
})


module.exports = router;