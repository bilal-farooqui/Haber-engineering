const express = require('express');
const { getAllIntroData, addIntroData ,updateIntroData} = require('../controller/introDataController');

const router = express.Router();

router.get('/', getAllIntroData);
router.post('/', addIntroData);
router.put('/:id', updateIntroData);

module.exports = router;
