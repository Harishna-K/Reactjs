const mongoose = require('mongoose');

// Define the schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    }
});

// Create a model
const User = mongoose.model('User', userSchema);

// Export the model
module.exports = User;
