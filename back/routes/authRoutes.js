const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
var passport = require('passport');
const bodyParser = require('body-parser');
const auth = require('../services/auth');



router.post('/register', (req, res, next) => {
    console.log(req.body);
    auth.newUser(req,res)
  });

  router.post('/login', passport.authenticate('local'), (req, res) => {
    req.session.save((err) => {
        if (err) {
            return next(err);
        }
        res.send('LogIn');
        //res.redirect('/');
    });
  })
  
  router.post('/logout', (req, res) => {
    req.logout((err) => {
      if (err) {
        // Обработка ошибок, если они возникли при завершении сеанса
        return res.status(500).json({ error: err.message });
      }
      res.send('logOut');
    });
  });

// Определение маршрутов
router.get('/', (req, res) => {
    res.send("meow")
});



module.exports = router;