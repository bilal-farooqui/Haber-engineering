const express = require('express');
const { getAllIntroData, addIntroData } = require('../controller/introDataController');

const router = express.Router();

router.get('/', getAllIntroData);
router.post('/', addIntroData);

module.exports = router;
