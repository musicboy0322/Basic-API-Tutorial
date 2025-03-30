const mongoose = require('mongoose');

const schema = mongoose.Schema({
    starsign: {
        type: String,
        required: true
    },
    property: String,
    startDate: {
        type: String,
        required: true
    },
    endDate: {
        type: String,
        required: true
    }
});

const DataSchema = new mongoose.model('DataSchema', schema);

module.exports = DataSchema;