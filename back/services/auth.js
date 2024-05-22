const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
var passport = require('passport');
const bodyParser = require('body-parser');
const { Patient } = require('../models/UserModel');
const { Doctor } = require('../models/UserModel');
const Account = require('../models/account');

const jsonParser = express.json();

const newUser = (req,res) => {

  role = req.body.role;
  username = req.body.username;
  password = req.body.password;
  let obj = {};
  if (role === 'doctor') {
    const newDoctor = new Doctor
    newDoctor.firstName = "";
    newDoctor.lastName = "";
    newDoctor.specialization = "";
    newDoctor.workSchedule = "";
    newDoctor.contactInfo = "";
    newDoctor.dayOnDuty = 0;
    obj = newDoctor;
  }
  else
  {
    const newClient = new Patient
    newClient.nickname = username;
    newClient.dateOfBirth = "1990-01-01";
    newClient.firstName = "";
    newClient.lastName = "";
    newClient.gender = "male";
    newClient.contactInfo = "";
    newClient.medicalHistory = {
        pastIllnesses: [],
        surgeries: [],
        medications: [],
        allergies: []
    };
    obj = newClient;
  }
    Account.register(new Account({ username : username, role: role, profile: obj }), password, (err, account) => {
        if (err) {
            res.send(err);
            return;
        }
        try {
          obj.save();
        } catch (error) {
          res.status(404).json({ error: error.message });
        }
        res.json({ success: true, error: null });
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