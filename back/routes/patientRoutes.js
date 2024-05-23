const express = require('express');
const router = express.Router();
const Patient = require("../services/user")


router.post('/', (req, res) => {

});


router.get('/', (req, res) => {
    Patient.takeInfoAboutAllPatient(res);

});


router.get('/:id', (req, res) => {
    Patient.infoAboutPatient(req.params.id, res);
    

});

// update patient info
router.patch('/:id', (req, res) => {
    Patient.updatePatientInfo(req.params.id,req.body,res) 
});

module.exports = router;
