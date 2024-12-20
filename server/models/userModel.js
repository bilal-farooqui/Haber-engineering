const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
    email: { type: String, required: false },
    password: { type: String, required: false },
    address: { type: String, required: false },
    postalCode: { type: Number, required: false },
    phoneNo: { type: Number, required: false }
    
});

const UserModel = mongoose.model('Users', userModel);

module.exports = UserModel;
