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

const updateIntroData = async (req, res) => {
    const { id } = req.params;

    try {
        const updatedData = await IntroDataModel.findByIdAndUpdate(
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
    getAllIntroData,
    addIntroData,
    updateIntroData
};
