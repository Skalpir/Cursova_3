// doctorRoutes.js

const express = require('express');
const router = express.Router();
const Doctor = require("../services/doctor")

// Маршрут для создания нового врача
//этим займеться бекенд созавая разные аккаунты
router.post('/', (req, res) => {
    // Логика создания нового врача
});



// Маршрут для получения списка всех врачей
router.get('/', (req, res) => {
    Doctor.takeInfoAboutAllDoctors(res)
    // Логика получения списка всех врачей
});

// Маршрут для получения информации о конкретном враче
router.get('/:id', (req, res) => {
    Doctor.infoAboutDoctor(res,req)
    // Логика получения информации о конкретном враче
});

// Маршрут для обновления информации о враче
router.put('/:id', (req, res) => {
    Doctor.updateDoctorInfo(req.params.id,req.body,res)
    // Логика обновления информации о враче
});

//Это будет делать мидлвеир паспорта
// Маршрут для удаления врача
router.delete('/:id', (req, res) => {
    // Логика удаления врача
});

module.exports = router;
