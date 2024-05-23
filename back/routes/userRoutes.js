const express = require('express');
const { sendEmail } = require('../mailjet/mailjet');
const router = express.Router();

//test
router.get('/', (req, res) => {
    //sendEmail()
    res.send("meow")
});

module.exports = router;