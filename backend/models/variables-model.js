const mongoose = require('mongoose');

const variablesSchema = mongoose.Schema({ 
  name: {
    type: String,
    required: true
  },
  genres: {
    fantasy: {
      type: Boolean,
      required: true
    },
    scifi: {
      type: Boolean,
      required: true
    },
    western: {
      type: Boolean,
      required: true
    }
  },
  location: {
    wilderness: {
      type: Boolean,
      required: true
    },
    urban: {
      type: Boolean,
      required: true
    }
  },
  variableType: {
    type: String,
    required: true
  }
 });

module.exports = mongoose.model('Variables', variablesSchema, 'variables');