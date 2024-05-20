// то ради чего затевалась возня ПРИВИВКИ!!!

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bodyParser = require('body-parser');
const { Procedure } = require('../models/UserModel');
const jsonParser = express.json();

//найти процедуру по id
const info = async (id, res) => {

try {
const NeObjectId = id;
const objectId = new mongoose.Types.ObjectId(NeObjectId);
const Proced = await Procedure.findOne({ "_id": objectId});
res.send(Proced)
    
} catch (error) {
    res.send(error)
}

}

module.exports = {
    infoById: info,
  };