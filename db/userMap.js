var user = {
    insert:"insert into t_user(id,name,password) values(0,?,?)",
    queryById: 'select * from t_user where id=?',
    queryByName: 'select * from t_user where name=?'
}
module.exports = user;