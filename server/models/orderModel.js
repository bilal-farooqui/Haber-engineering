const mongoose = require('mongoose');

const orderModel = new mongoose.Schema({
    title: { type: String, required: false },
    type: { type: String, required: false },
    status: { type: String, required: false },
    customer: { type: Object, required: false },
    price: { type: Number, required: false },
    quantity: { type: Number, required: false }
    
});

const OrderModel = mongoose.model('Order', orderModel);

module.exports = OrderModel;
