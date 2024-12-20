const express = require('express');
const { getAllUserData, addUserData} = require('../controller/userController');

const router = express.Router();

router.get('/', getAllUserData);
router.post('/', addUserData);


module.exports = router;
