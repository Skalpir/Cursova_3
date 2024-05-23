//маршруты приемов и записи на них
// appointmentRoutes.js

const express = require('express');
const router = express.Router();
const Appointments = require("../services/appointment")

// create new appoiment
router.post('/', (req, res) => {
    patient_id =req.body.patient_id
    doctor_id = req.body.doctor_id
    time=req.body.dateTime
    procedures = req.body.procedures
    Appointments.createNewAppoiment(patient_id,doctor_id,time,procedures, res)

});

// get all appoiment for current doctor
router.post('/doctor', (req, res) => {
    some_id=req.body.some_id
    Appointments.infoAboutAppoimentDoctor(some_id,res)
});

// get all patient appoiment
router.post('/patient', (req, res) => {
    some_id=req.body.some_id
    Appointments.infoAboutAppoimentPatient(some_id,res)
});

// update appoiment fields
router.patch('/:id', (req, res) => {
    let = id = req.params.id;
    let = id = id.slice(1);
    //console.log(id)

    Appointments.updateByObjectid(id,req.body,res)
});


module.exports = router;
