const asyncHandler = require('express-async-handler'); // for express.js error handling

const Locales = require('../models/locales-model');

const getLocales = asyncHandler(async (req, res) => {
  const locales = await Locales.find({});
  res.status(200).json(locales);
});

module.exports = { getLocales }