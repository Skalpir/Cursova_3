//маршруты приемов и записи на них
// appointmentRoutes.js

const express = require('express');
const router = express.Router();
const Appointments = require("../services/appointment")

// Маршрут для создания нового приема
router.post('/', (req, res) => {
    patient_id =req.body.patient_id
    doctor_id = req.body.doctor_id
    time=req.body.dateTime
    procedures = req.body.procedures
    Appointments.createNewAppoiment(patient_id,doctor_id,time,procedures, res)
    //console.log("ya kotik")
    // Логика создания нового приема
});

// Маршрут для получения списка всех приемов для конкретног врача
router.post('/doctor', (req, res) => {
    some_id=req.body.some_id
    Appointments.infoAboutAppoimentDoctor(some_id,res)
    // Логика получения списка всех приемов
});

// Маршрут для получения информации о приемах пациента
router.post('/patient', (req, res) => {
    some_id=req.body.some_id
    Appointments.infoAboutAppoimentPatient(some_id,res)
    // Логика получения информации о конкретном приеме
});

// Маршрут для обновления информации о приеме
router.patch('/:id', (req, res) => {
    let = id = req.params.id;
    let = id = id.slice(1);
    //console.log(id)

    Appointments.updateByObjectid(id,req.body,res)
    // Логика обновления информации о приеме
});


module.exports = router;
