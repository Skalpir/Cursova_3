const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bodyParser = require('body-parser');
const jsonParser = express.json();
const {Prescription, Patient, Doctor} = require("../models/UserModel");

const create = async (patient_id,doctor_id,body,res) => 
    {
        try {
        const newPrescription = new Prescription()
        const Pat = await Patient.findOne({ "account_id": patient_id});
        const Doc = await Doctor.findOne({ "doctor_id": doctor_id});

        newPrescription.doctor = Doc._id
        newPrescription.patient = Pat._id
        newPrescription.medication = body.medication
        newPrescription.dosage = body.dosage
        newPrescription.duration = body.duration

        newPrescription.save()
        res.send("Prescription created")


        } catch (error) {
             res.send(error)
        }    }
const update = async (id,body,res) => 
    {
        try {
            
            const updatedUser = await Prescription.findByIdAndUpdate(
                id,
              { $set: body },
              { new: true }
            );
        
            if (!updatedUser) {
              return res.status(404).json({ error: 'not found' });
            }
        
            res.json(updatedUser);
          } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error updating' });
          }
    }

const find = async (patient_id,res) => 
    {
        try {
        const Pat = await Patient.findOne({ "account_id": patient_id});
        const Prescriptions = await Prescription.find({"patient" : Pat._id})
        res.send(Prescriptions)
        } 
        
        catch (error) {
            res.send(error)
        }
    }

module.exports = {
    createNewAPrescrioption: create,
    infoAboutPrescriptionPatient : find,
    updateByObjectid : update
  };