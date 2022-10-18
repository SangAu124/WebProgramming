var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('info', { title: 'Express' });
});

router.post('/update', (req, res)=> {
  const title = req.body.title;
  res.send(`Title is ${title}`);
})

module.exports = router;
