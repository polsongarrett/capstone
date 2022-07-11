const asyncHandler = require('express-async-handler'); // for express.js error handling

const Competitions = require('../models/competitions-model');

const getCompetitions = asyncHandler(async (req, res) => {
  const competitions = await Competitions.find({});
  res.status(200).json(competitions);
});

module.exports = { getCompetitions }