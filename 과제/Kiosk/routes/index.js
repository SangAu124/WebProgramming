var express = require('express');
var router = express.Router();
const sqlite = require('../models/sqlite-db');
const db = require('../models/sqlite-db');
const menuSql = require('../models/menu-sql');

/* GET home page. */
router.get('/menu', function(req, res, next) {
  res.render('index');
});

router.get('/', async (req, res) => {
  const menuData = await db.executeQuery(menuSql.selectAllMenuSql());
  return res.render('index', { menu: menuData });
})

module.exports = router;
