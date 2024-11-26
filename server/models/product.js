

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: { type: String, required: false },
    price: { type: Number, required: false },
    description: { type: String, required: false },
    ButtonText: { type: String, required: false },
    image: { type: String, required: false },
    
});

const ProductModel = mongoose.model('Product', productSchema);

module.exports = ProductModel;
