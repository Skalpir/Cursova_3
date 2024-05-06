const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
var passport = require('passport');
const bodyParser = require('body-parser');

const newUser = () => {
    Account.register(new Account({ username : req.body.username }), req.body.password, (err, account) => {
        if (err) {
            res.send(err);
            return;
        }
        try {
          const User_ID = Math.floor(Math.random() * 1000000);
          //const newUser = new User(req.body);
          //const newCart = new ShopCartModel(req.body);
          //newUser.username = req.body.username;
          newUser.User_ID = User_ID;
          //newCart.username = req.body.username;
          //newCart.User_ID = User_ID;
          newUser.save();
          //newCart.save();
          //res.status(201).json(savedUser);
        } catch (error) {
          res.status(404).json({ error: error.message });
        }
  
        //passport.authenticate('local')(req, res, () => {
        //    req.session.save((err) => {
        //        if (err) {
        //            return next(err);
        //        }
                //res.status(201).json(savedUser);
        //        res.send('User created');
                //res.redirect('/');
        //    });
        //});
    });
    // Логика функции 1
}

const function2 = () => {
    // Логика функции 2
}
