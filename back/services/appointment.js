const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bodyParser = require("body-parser");
const { Appointment } = require("../models/UserModel");
const jsonParser = express.json();
const { Procedure, Patient, Doctor } = require("../models/UserModel");

const create = async (patient_id, doctor_id, time, procedures, res) => {
  try {
    const Pat = await Patient.findById(patient_id);
    const Doc = await Doctor.findById(doctor_id);

    // creating new object in backend memory with data from req.body
    const newAppointment = new Appointment();
    newAppointment.dateTime = time;
    console.log(procedures);
    newAppointment.patient = Pat._id;
    newAppointment.doctor = Doc._id;
    newAppointment.status = "Awaited";

    if (procedures != []) {
      procedures.forEach(async (procedure) => {
        //console.log(procedure)

        const newProcedure = new Procedure();
        newProcedure.name = procedure.name;
        newProcedure.duration = procedure.duration;
        newProcedure.cost = procedure.cost;
        newProcedure.description = procedure.description;
        newProcedure.patient_id = Pat._id;
        newProcedure.doctor_id = Doc._id;

        newAppointment.procedures.push(newProcedure._id);
        await newProcedure.save();
      });
    }

    // saving in bd
    await newAppointment.save();

    res.status(201).json(newAppointment);
  } catch (error) {
    console.error(error);
    res.status(404).json({ error: error.message });
  }
};

const update = async (id, body, res) => {
  //console.log(req);
  const updatedFields = body;
  //console.log(updatedFields)
  let ObjectId = new mongoose.Types.ObjectId(id);
  try {
    //console.log(account_id)
    const Object = await Appointment.find({ _id: ObjectId }); 
    ObjectUserId = Object[0]._id;
  } catch (error) {
    console.log(error);
  }
  //console.log(ObjectUserId)
  try {
    const updatedUser = await Appointment.findByIdAndUpdate(
      ObjectUserId,
      { $set: updatedFields },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "Appointment not found" });
    }

    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error updating Appointment" });
  }
};
const remove = async (req, res) => {};
const report = async (req, res) => {};

const infoPat = async (some_id, res) => {
  try {
    const Pat = await Patient.findById(some_id);
    const currentDateTime = new Date();
    const active = await Appointment.find({ patient: new mongoose.Types.ObjectId(some_id) }).where("dateTime").gt(currentDateTime).populate("procedures").populate("doctor");
    res.send(active);
  } catch (error) {
    res.send([]);
  }
};

const infoDoc = async (some_id, res) => {
  try {
    const Doc = await Doctor.findById(some_id);
    const currentDateTime = new Date();
    const active = await Appointment.find({ doctor: new mongoose.Types.ObjectId(some_id) }).where("dateTime").gt(currentDateTime).populate("procedures").populate("patient");
    res.send(active);
  } catch (error) {
    res.send([]);
  }
};

module.exports = {
  createNewAppoiment: create,
  infoAboutAppoimentPatient: infoPat,
  infoAboutAppoimentDoctor: infoDoc,
  updateByObjectid: update,
};
