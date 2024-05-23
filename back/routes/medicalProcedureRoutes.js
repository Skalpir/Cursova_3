const express = require('express');
const router = express.Router();
const MedProcedure = require("../services/medicalProcedure")
//example
router.get('/', (req, res) => {

});

router.get('/:id', (req, res) => {
    let = id = req.params.id;
    let = id = id.slice(1);
    //console.log(id)

    MedProcedure.infoById(id,res)
});

// update procedure by _id
router.patch('/:id', (req, res) => {

    let = id = req.params.id;
    let = id = id.slice(1);
    //console.log(id)

    MedProcedure.UpdateById(id,req.body,res)
});

module.exports = router;
