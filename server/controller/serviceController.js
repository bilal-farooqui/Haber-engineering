const ServiceModel = require('../models/service');

// Get all data
const getAllService = async (req, res) => {
    try {
        // Parse 'limit' and 'start' query parameters (default: limit=10, start=0)
        const limit = parseInt(req.query.limit) || 10;
        const start = parseInt(req.query.start) || 0;

        // Fetch data with limit and skip
        const totalCount = await ServiceModel.countDocuments();
        const data = await ServiceModel.find().skip(start).limit(limit);
    
        res.json({ data, totalCount });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Add new data
const addService = async (req, res) => {
    // Extract fields from the request body and handle file upload for image
    const { title, description, buttonText, price, customer } = req.body;
    const image = req.file ? req.file.path : ''; // Store image path from multer

    // Create new service object using the data from req.body
    const newService = new ServiceModel({
        title,
        description,
        buttonText,
        price,
        customer,
        image // Store image path in the DB
    });

    try {
        // Save the new service to the database
        const savedService = await newService.save();
        res.status(201).json(savedService); // Return saved data with status 201
    } catch (err) {
        res.status(400).json({ message: err.message }); // Return error if something fails
    }
};


const updateService = async (req, res) => {
    const { id } = req.params;

    try {
        const updatedData = await ServiceModel.findByIdAndUpdate(
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
    getAllService,
    addService,
    updateService
};
