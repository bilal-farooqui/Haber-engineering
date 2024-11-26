const mongoose = require('mongoose');

const introDataModel = new mongoose.Schema({
    title: { type: String, required: true },
    homeScreenProductDisplay: { type: Number, required: true },
    description: { type: String, required: false },
    ButtonText: { type: String, required: true },
    image: { type: String, required: true },
    homeScreenServiceDisplay: { type: Number, required: true },
    
});

const IntroDataModel = mongoose.model('IntroData', introDataModel);

module.exports = IntroDataModel;
