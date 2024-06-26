const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const Account = new Schema({
    username: String,
    password: String, 
    role: String,
    profile: Schema.Types.ObjectId,
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('accounts', Account);