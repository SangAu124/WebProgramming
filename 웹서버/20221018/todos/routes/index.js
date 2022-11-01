var express = require('express');

// const tododb = require('../models/mariadb/todo');
const Todo = require('../models/sequelize/todoModel');

var router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next)=>{
  // const rows = await tododb.selectTodos();
  const rows = await Todo.findAll();
  res.render('index', {todos:rows});
});

module.exports = router;
