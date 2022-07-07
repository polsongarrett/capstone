const mongoose = require('mongoose');

const variableOptionSchema = mongoose.Schema({
  name: String,
  genres: {
    type: String,
    required: false
  },
  population: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('VariableOptions', variableOptionSchema);