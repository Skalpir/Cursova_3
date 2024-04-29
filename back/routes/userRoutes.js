const express = require('express');
const router = express.Router();

// Определение маршрутов
router.get('/', (req, res) => {
    res.send("meow")
});

module.exports = router;