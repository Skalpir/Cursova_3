//маршруты приемов и записи на них
// appointmentRoutes.js

const express = require('express');
const router = express.Router();
const Appointments = require("../services/appointment")

// Маршрут для создания нового приема
router.post('/', (req, res) => {
    //console.log("ti kotik")


    patient_id =req.body.patient_id
    doctor_id = req.body.doctor_id
    time=req.body.dataTime
    procedures = req.body.procedures
    Appointments.createNewAppoiment(patient_id,doctor_id,time,procedures, res)
    //console.log("ya kotik")
    // Логика создания нового приема
});

// Маршрут для получения списка всех приемов для конкретног врача
router.get('/doctor', (req, res) => {
    some_id=req.body.id
    Appointments.infoAboutAppuiments(some_id,res)


    // Логика получения списка всех приемов
});

// Маршрут для получения информации о приемах пациента
router.get('/patient', (req, res) => {
    some_id=req.body.some_id
    Appointments.infoAboutAppuiments(some_id,res)

    // Логика получения информации о конкретном приеме
});

// Маршрут для обновления информации о приеме
router.put('/:id', (req, res) => {
    // Логика обновления информации о приеме
});


module.exports = router;
