var mysql = require('mysql');
var pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'root',
    database:"db_comment",
    port:"3306"
});
function query(sql,data,callback){
    pool.getConnection(function(err,connection){
        connection.query(sql,data,function(err,rows){
            callback(err,rows);
            connection.release();
        })
    })
}
exports.query = query;