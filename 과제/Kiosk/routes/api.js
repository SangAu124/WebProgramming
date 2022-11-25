const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
// const authMiddleware = require('../middleware/auth');
// const db = require('../models/sqlite-db');
// const sql = require('../models/user-sql');

router.post('/login', function(req, res, next) {
    const {userid, password} = req.body;
    const secret = req.app.get('jwt-secret');

    if(!userid || !password) {
        return res.status(400).json({
            error: 'Invalid parameters'
        });
    }

    async function login() {
        if(userid == "admin" && password == "1234") {
            console.log("성공");
            const token = jwt.sign(
                {
                id: 'admin',
            },
            'kiosk',
            {
                expiresIn: "5d",
                issuer: 'kiosk'
            }
            );

            res.cookie('token', token);
            res.redirect('/admin')
        } else {
            console.log("실패");
        }
    }
    
    const onError = (error) => {
        console.log('auth-done with error')
        res.status(403).json({
            error: error.message
        })
    }

    login()
      .catch(onError)
});

module.exports = router