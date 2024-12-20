const express = require('express');
const { getOrderData, addOrderData ,updateOrderData} = require('../controller/orderController');

const router = express.Router();

router.get('/', getOrderData);
router.post('/', addOrderData);
router.put('/:id', updateOrderData);

module.exports = router;
