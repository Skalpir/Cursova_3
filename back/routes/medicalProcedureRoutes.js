// medicalProcedureRoutes.js

const express = require('express');
const router = express.Router();
const MedProcedure = require("../services/medicalProcedure")

// Маршрут для создания новой медицинской процедуры
//router.post('/', (req, res) => {
    // Логика создания новой медицинской процедуры
//});

// Маршрут для получения списка всех медицинских процедур
router.get('/', (req, res) => {
    // Логика получения списка всех медицинских процедур
});

router.get('/:id', (req, res) => {
    let = id = req.params.id;
    let = id = id.slice(1);
    //console.log(id)

    MedProcedure.infoById(id,req.body,res)
    // Логика обновления информации о приеме
});

// Маршрут для обновления информации о медицинской процедуре
router.put('/:id', (req, res) => {

    // Логика обновления информации о медицинской процедуре
});

// Маршрут для удаления медицинской процедуры
//router.delete('/:id', (req, res) => {
    // Логика удаления медицинской процедуры
//});

module.exports = router;
