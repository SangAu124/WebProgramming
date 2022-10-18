var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const messages = ['Hello', 'World'];
  const users=[
    {id:1, name: 'user1'},
    {id:2, name: 'user2'}
  ];
  res.json('users', {messages: messages, users:users});
});

router.get('/:userId', (req, res)=>{
  const userId = req.params.userId;
  res.send(`Hello ${userId}`);
});

module.exports = router;
