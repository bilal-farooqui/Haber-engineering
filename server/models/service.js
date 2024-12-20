

const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    title: { type: String, required: false },
    description: { type: String, required: false },
    buttonText: { type: String, required: false },
    image: { type: String, required: false },
    price: {type: Number, required: false},
    customer: {type: Number, required: false}
    
});

const ServiceModel = mongoose.model('Service', serviceSchema);

module.exports = ServiceModel;
