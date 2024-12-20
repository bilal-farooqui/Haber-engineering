const UserModel = require('../models/userModel');

// Get all data
const getAllUserData = async (req, res) => {
    try {
        const data = await UserModel.find();
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Add new data
const addUserData = async (req, res) => {
    

    const newData = new UserModel(req.body);

    try {
        const savedData = await newData.save();
        res.status(201).json(savedData);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};



module.exports = {
    getAllUserData,
    addUserData
};
