const mongoose = require('mongoose');

const pressureSchema = new mongoose.Schema({
    identification: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    kpa: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('pressures', pressureSchema);