const express = require('express');
const router = express.Router();
const prescription = require('../services/prescription');
 
router.post('/', (req, res) => {
    patient_id =req.body.patient_id
    doctor_id = req.body.doctor_id
    prescription.createNewAPrescrioption(patient_id,doctor_id,req.body,res)

});

router.get('/', (req, res) => {
    patient_id =req.body.patient_id

    prescription.infoAboutPrescriptionPatient(patient_id,res)
});

router.patch('/:id', (req, res) => {

    let = id = req.params.id;
    let = id = id.slice(1);
    prescription.updateByObjectid(id,req.body,res)

    
});


module.exports = router;
