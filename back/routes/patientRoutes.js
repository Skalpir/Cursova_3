// patientRoutes.js

const express = require('express');
const router = express.Router();
const Patient = require("../services/user")

// Маршрут для создания нового пациента ( пациент создаеться при аккаунте  ЭТО уже не надо)
router.post('/', (req, res) => {
    // Логика создания нового пациента
});

// Маршрут для получения списка всех пациентов
router.get('/', (req, res) => {
    Patient.takeInfoAboutAllPatient(res);

    // Логика получения списка всех пациентов
});

// Маршрут для получения информации о конкретном пациенте
router.get('/:id', (req, res) => {
    Patient.infoAboutPatient(req.params.id, res);
    
    // Логика получения информации о конкретном пациенте
});

// Маршрут для обновления информации о пациенте
router.patch('/:id', (req, res) => {
    //console.log(req.params)
    //console.log(req.body)
    Patient.updatePatientInfo(req.params.id,req.body,res) // короче передавать рес, рек нельзя. Надо передавать конкретные части в выделеные ячейки и принять их там, тогда будет работать иначе андефаинд
    //res.send("ok")


    // Логика обновления информации о пациенте
});

// Маршрут для удаления пациента

//Этим явно не стиот заниматься тут
router.delete('/:id', (req, res) => {

    // Логика удаления пациента
});

module.exports = router;
