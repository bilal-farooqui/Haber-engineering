const IntroDataModel = require('../models/introData');

// Get all data
const getAllIntroData = async (req, res) => {
    try {
        const data = await IntroDataModel.find();
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Add new data
const addIntroData = async (req, res) => {
    

    const newData = new IntroDataModel(req.body);

    try {
        const savedData = await newData.save();
        res.status(201).json(savedData);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = {
    getAllIntroData,
    addIntroData,
};
