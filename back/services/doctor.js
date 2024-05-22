const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bodyParser = require("body-parser");
const { Doctor } = require("../models/UserModel");
const { sendEmail } = require("../mailjet/mailjet");
const jsonParser = express.json();

/*
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
};*/

const updateById = async (req, body, res) => {
  let account_id = req;
  const updatedFields = body;
  console.log(updatedFields);
  console.log(account_id);
  const updatedUser = await Doctor.findByIdAndUpdate(
    account_id,
    { $set: updatedFields },
    { new: true }
  );
  if (!updatedUser) {
    return res.status(404).json({ error: "User not found" });
  }
  res.json(updatedUser);
};

const infoByField = async (params, res) => {
  let = account_id = req;
  //console.log(req);
  let = account_id = account_id.slice(1);
  //console.log(updatedFields)

  const fieldName = "customFieldName"; // Значение поля, по которому вы хотите искать
  const value = "значение_поля_для_поиска"; // Значение, по которому вы хотите выполнить поиск
  const query = {};
  query[fieldName] = value;

  let ObjectUserId;
  try {
    //console.log(account_id)
    const result = await Doctor.find(query);
    //console.log(Object)
    //ObjectUserId = Object[0]._id;
    res.json(result);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const infoById = async (id, res) => {
  {
    let = account_id = id;
    //console.log(req);
    let = account_id = account_id.slice(1);
    //console.log(updatedFields)
    let ObjectUserId;
    try {
      //console.log(account_id)
      const Object = await Doctor.findOne({ doctor_id: account_id });
      //console.log(Object)
      //ObjectUserId = Object[0]._id;
      res.json(Object);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
};

const allUsers = async (res) => {
  Myname = "Андрій";
  email = "andryxa1049@gmail.com";
  sendEmail(Myname, email);
  try {
    const users = await Doctor.find({});
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

async function insertDoctors() {
  const doctors = [
    {
      firstName: "John",
      lastName: "Doe",
      specialization: "Cardiology",
      workSchedule: "9am - 5pm",
      contactInfo: "john.doe@example.com",
      doctor_id: "DOC1",
      dayOnDuty: 1,
    }, // Понедельник
    {
      firstName: "Jane",
      lastName: "Smith",
      specialization: "Neurology",
      workSchedule: "9am - 5pm",
      contactInfo: "jane.smith@example.com",
      doctor_id: "DOC2",
      dayOnDuty: 2,
    }, // Вторник
    {
      firstName: "Jim",
      lastName: "Brown",
      specialization: "Pediatrics",
      workSchedule: "9am - 5pm",
      contactInfo: "jim.brown@example.com",
      doctor_id: "DOC3",
      dayOnDuty: 3,
    }, // Среда
    {
      firstName: "Jake",
      lastName: "White",
      specialization: "Orthopedics",
      workSchedule: "9am - 5pm",
      contactInfo: "jake.white@example.com",
      doctor_id: "DOC4",
      dayOnDuty: 4,
    }, // Четверг
    {
      firstName: "Julie",
      lastName: "Black",
      specialization: "Dermatology",
      workSchedule: "9am - 5pm",
      contactInfo: "julie.black@example.com",
      doctor_id: "DOC5",
      dayOnDuty: 5,
    }, // Пятница
    {
      firstName: "Jack",
      lastName: "Green",
      specialization: "Oncology",
      workSchedule: "9am - 5pm",
      contactInfo: "jack.green@example.com",
      doctor_id: "DOC6",
      dayOnDuty: 6,
    }, // Суббота
    {
      firstName: "Jill",
      lastName: "Blue",
      specialization: "Radiology",
      workSchedule: "9am - 5pm",
      contactInfo: "jill.blue@example.com",
      doctor_id: "DOC7",
      dayOnDuty: 0,
    }, // Воскресенье
  ];

  try {
    await Doctor.insertMany(doctors);
    console.log("Doctors inserted successfully");
  } catch (error) {
    console.error("Error inserting doctors:", error);
  }
}

async function DoctorToday(res) {
  try {
    const dayOfWeek = new Date().getDay();
    const Object = await Doctor.findOne({ dayOnDuty: dayOfWeek });
    res.send(Object);
  } catch (error) {}
}

module.exports = {
  updateDoctorInfo: updateById,
  takeInfoAboutAllDoctors: allUsers,
  infoAboutDoctor: infoById,
  add: insertDoctors,
  getCurrentDoctor: DoctorToday,
};
