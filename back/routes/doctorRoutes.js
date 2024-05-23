const express = require('express');
const router = express.Router();
const Doctor = require("../services/doctor")

//crate new doctor, but its do other fuction right now
router.post('/', (req, res) => {
});


//take doctor on duty today
router.get("/getCurrentDoctor",(req,res) => 
    {
        Doctor.getCurrentDoctor(res)

    })

// take list of all doctors in BD
router.get('/', (req, res) => {
    Doctor.takeInfoAboutAllDoctors(res)
});

//take info about doctor by id
router.get('/:id', (req, res) => {
    Doctor.infoAboutDoctor(req.params.id,res)
});


// update doctor info 
router.patch('/:id', (req, res) => {
    Doctor.updateDoctorInfo(req.params.id,req.body,res)
});

//deleting its make passport middleware
router.delete('/:id', (req, res) => {
});

module.exports = router;
