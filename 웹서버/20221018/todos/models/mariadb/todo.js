const db = require('./db');

exports.selectTodos = async ()=>{
    const sql = 'select * from test.todo';
    return await db.executeQuery(sql);
};

exports.insertTodo = async(job)=>{
    const sql = `insert into test.todo(job) values(?)`;
    return await db.executeQuery(sql, [job]);
};

exports.deleteTodo = async(todoId)=>{
    const sql = `delete from test.todo where todoId=?`;
    return await db.executeQuery(sql, [todoId]);
};