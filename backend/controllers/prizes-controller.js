const asyncHandler = require('express-async-handler'); // for express.js error handling

const Prizes = require('../models/prizes-model');

const getPrizes = asyncHandler(async (req, res) => {
  const prizes = await Prizes.find({});
  res.status(200).json(prizes);
});

module.exports = { getPrizes }