const mongoose = require('mongoose');

const prizesSchema = mongoose.Schema({ name: String });

module.exports = mongoose.model('Prizes', prizesSchema, 'prizes');