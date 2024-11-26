const ProductModel = require('../models/product');

// Get all data
const getAllProduct = async (req, res) => {
    try {
        const data = await ProductModel.find();
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Add new data
const addProduct = async (req, res) => {
    const { name, age } = req.body;

    const newData = new ProductModel({ name, age });

    try {
        const savedData = await newData.save();
        res.status(201).json(savedData);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = {
    getAllProduct,
    addProduct,
};
