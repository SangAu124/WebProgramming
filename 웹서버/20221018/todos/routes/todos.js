const express = require('express');
const router = express.Router();


router.get('/', (req, res)=>{
    const todos=[
        {todoId:1, job:'JS Study'},
        {todoId:2, job:'Workout'}
    ];
    res.json(todos);
})


router.post('/', (req, res)=>{
    const {job} = req.body;
    res.json({result:'ok'});
})


router.delete('/:todoId', (req, res)=>{
    const todoId = req.params.todoId;
    res.json({result:'oh'});
})
module.exports=router;