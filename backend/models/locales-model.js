const mongoose = require('mongoose');

const localesSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  genres: [{
    type: String,
    required: true
  }],
  population: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Locales', localesSchema, 'locales');