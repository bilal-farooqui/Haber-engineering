const OrderModel = require('../models/orderModel');

// Get all data
const getOrderData = async (req, res) => {
    try {
        const data = await OrderModel.find();
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Add new data
const addOrderData = async (req, res) => {
    

    const newData = new OrderModel(req.body);

    try {
        const savedData = await newData.save();
        res.status(201).json(savedData);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const updateOrderData = async (req, res) => {
    const { id } = req.params;

    try {
        const updatedData = await OrderModel.findByIdAndUpdate(
            id,                     // ID to find the document
            req.body,               // Data to update
            { new: true, upsert: true } // Return the updated document, create if not found
        );

        res.json(updatedData);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = {
    getOrderData,
    addOrderData,
    updateOrderData
};
