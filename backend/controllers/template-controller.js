const asyncHandler = require('express-async-handler'); // for express.js error handling

const Template = require('../models/template-model');

const getTemplates = asyncHandler(async (req, res) => {
  const templates = await Template.find({advType: req.params.advType});
  res.status(200).json(templates);
});

module.exports = {
  getTemplates,
}