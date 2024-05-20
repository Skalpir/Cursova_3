//рецепты на таблтеки я полагаю, это можно реализовать. Дают ли таблетки после прививки? или рецепт на что либо на прививку рецепт
// prescriptionRoutes.js

const express = require('express');
const router = express.Router();
const prescription = require('../services/prescription');

// Маршрут для создания нового рецепта 
router.post('/', (req, res) => {
    patient_id =req.body.patient_id
    doctor_id = req.body.doctor_id
    prescription.createNewAPrescrioption(patient_id,doctor_id,req.body,res)

});

// Маршрут для получения списка всех рецептов этого пациента
router.get('/', (req, res) => {
    patient_id =req.body.patient_id

    prescription.infoAboutPrescriptionPatient(patient_id,res)
});

// Маршрут для обновления информации о рецепте
router.patch('/:id', (req, res) => {

    let = id = req.params.id;
    let = id = id.slice(1);
    prescription.updateByObjectid(id,req.body,res)

    
});


module.exports = router;
