const mongoose = require('mongoose');

const templateSchema = mongoose.Schema({
  advType: String,
  description: String,
  name: String
});

module.exports = mongoose.model('Template', templateSchema);