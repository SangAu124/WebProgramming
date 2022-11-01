const express = require('express');
const router = express.Router();
const tododb = require('../../todos/models/mariadb/todo');


router.get('/', async (req, res)=>{
    const rows = await tododb.selectTodos();
    res.json(rows);
})


router.post('/', async (req, res)=>{
    const {job} = req.body;
    const result = await tododb.insertTodo(job);
    console.log(result);
    if(result && result.affectedRowos==1) res.json({result:'ok'});
    else res.json({result:'ng'});
})


router.delete('/:todoId', async (req, res)=>{
    const todoId = req.params.todoId;
    const result = await tododb.deleteTodo(todoId);
    console.log(result);
    if(result && result.affectedRowos==1) res.json({result:'ok'});
    else res.json({result:'ng'});
})
module.exports=router;