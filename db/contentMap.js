var content = {
    insert:"insert into t_comment(id,name,time,content) values(0,?,?,?)",
    queryById: 'select * from t_comment where id=?',
    queryAll:"select * from t_comment",
    queryByName: 'select * from t_user where name=?'
}

module.exports = content;