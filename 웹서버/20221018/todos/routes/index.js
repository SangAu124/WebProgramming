var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const todos=[
    {todoId:1, job:'JS Study'},
    {todoId:2, job:'Workout'}
  ];
  res.render('index', { title: 'Express' });
});

module.exports = router;
