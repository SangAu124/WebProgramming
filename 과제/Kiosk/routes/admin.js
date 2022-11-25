const express = require('express');
const router = express.Router();
const db = require('../models/sqlite-db')
const menuSql = require('../models/menu-sql')
// const authMiddleware = require('../middleware/auth');
const multer = require('multer');
const parser = require('body-parser')

const storage  = multer.diskStorage({
    destination(req, file, cb) {
      cb(null, 'public/uploads');
    },
    filename(req, file, cb) {
      cb(null, `${Date.now()}_${file.originalname}`);
    },
});
  
const upload = multer({ storage: storage });

router.get('/menu', (req, res)=>{
    res.render('admin');
});

router.get('/', (req, res) => {
    res.render('admin');
});

router.get('/menu-all', (req, res) => {
    let menu = [];
    db.executeQuery(menuSql.selectAllMenuSql()).then(data => {
        res.status(200).json(data)
        console.log(data);
    }).catch(err => 
        res.status(500).json()    
     );
});

router.get('/insert', (req, res) => {
    res.render('insert');
});

router.post('/insert',upload.single("file"), (req, res) => {
    const { name, price } = req.body;

    db.executeQuery(menuSql.insertMenuSql(name, price, `uploads/${req.file.filename}`));
    
    return res.redirect('/admin');
});

router.get('/update/:id', (req, res) => {
    res.render('update');
});

router.post('/update/:id',upload.single("file"), (req, res) => {
    const { name, price } = req.body;
    const { id } = req.params;

    db.executeQuery(menuSql.updateMenuSql(id, name, price, `uploads/${req.file.filename}`));
    
    return res.redirect('/admin');
});

router.post('/delete/:id', (req, res) => {
    const { id } = req.params;
    db.executeQuery(menuSql.deleteMenuSql(id));

    return res.redirect('/admin');
});

module.exports = router;
