const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bodyParser = require('body-parser');
const { Patient } = require('../models/UserModel');
const jsonParser = express.json();

const updateById = () =>{};
const allUsers = () =>{};
const infoById = () =>{};


module.exports = {
    updateDoctorInfo: updateById,
    takeInfoAboutAllDoctors: allUsers,
    infoAboutDoctor : infoById,

};