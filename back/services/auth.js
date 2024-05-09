const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
var passport = require('passport');
const bodyParser = require('body-parser');
const { Patient } = require('../models/UserModel');
const jsonParser = express.json();

const newUser = (req,res) => {
    Account.register(new Account({ username : req.body.username }), req.body.password, (err, account) => {
        if (err) {
            res.send(err);
            return;
        }
        try {
          const User_ID = Math.floor(Math.random() * 1000000);
          const newClient = new Patient
          newClient.account_id = User_ID;
          newClient.nickname = User_ID;
          newClient.save();
          //res.status(201).json(savedUser);
        } catch (error) {
          res.status(404).json({ error: error.message });
        }
        res.send('User created');
  
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

const auth = (res,req) => {
        passport.authenticate('local')(req, res, () => {
            req.session.save((err) => {
                if (err) {
                    return next(err);
                }
                res.status(201).json(savedUser);
                res.send('auth sucses');
                res.redirect('/');
            });
        });
    // Логика функции 2
}

const login = (res,req) => {}
const logout = (res,req) => {}
const deleteOne = async (res,req) => 
{
    try {
        // Проверяем, есть ли пользователь
        if (!req.user) {
          res.send('User not found');
          return;
        }
    
        // Удаляем пользователя
        await Account.deleteOne({ username: req.user.username });
    
        // Разлогиниваем пользователя
        req.logout();
    
        // Сохраняем сессию (если используется сессионное хранилище)
        await req.session.save();
    
        // Если используется Passport, разлогиниваем пользователя
        passport.authenticate('local')(req, res, () => {
          res.send('User deleted');
        });
      } catch (error) {
        res.send(error);
      }
}

module.exports = {
    newUser: newUser,
    auth: auth,
    login: login,
    logout: logout,
    deleteOne : deleteOne
};