const asyncHandler = require('express-async-handler'); // for express.js error handling

const Twists = require('../models/twists-model');

const getTwists = asyncHandler(async (req, res) => {
  const twists = await Twists.find({});
  res.status(200).json(twists);
});

module.exports = { getTwists }