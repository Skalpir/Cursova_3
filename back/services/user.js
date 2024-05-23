const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bodyParser = require("body-parser");
const { Patient } = require("../models/UserModel");
const jsonParser = express.json();

const updateById = async (req, body, res) => {
  let account_id = req;
  const updatedFields = body;
  const updatedUser = await Patient.findByIdAndUpdate(
    account_id,
    { $set: updatedFields },
    { new: true }
  );
  if (!updatedUser) {
    return res.status(404).json({ error: "User not found" });
  }
  res.json(updatedUser);
};

const allUsers = async (res) => {
  try {
    const users = await Patient.find({});
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const infoById = async (req, res) => {
  let = account_id = req;
  let = account_id = account_id.slice(1);
  let ObjectUserId;
  try {
    const Object = await Patient.find({ account_id: account_id });
    res.json(Object);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
//not need in project
const deleteById = async (res, req) => {};

module.exports = {
  updatePatientInfo: updateById,
  takeInfoAboutAllPatient: allUsers,
  infoAboutPatient: infoById,
};
