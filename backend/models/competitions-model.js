const mongoose = require('mongoose');

const competitionsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  genres: [{
    type: String,
    required: true
  }]
});

module.exports = mongoose.model('Competitions', competitionsSchema, 'competitions');