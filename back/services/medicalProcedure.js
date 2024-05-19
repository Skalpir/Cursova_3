// то ради чего затевалась возня ПРИВИВКИ!!!

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bodyParser = require('body-parser');
const { Procedure } = require('../models/UserModel');
const jsonParser = express.json();
