const mongoose = require('mongoose');

const twistsSchema = mongoose.Schema({ name: String });

module.exports = mongoose.model('Twists', twistsSchema, 'twists');