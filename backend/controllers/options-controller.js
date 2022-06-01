const asyncHandler = require('express-async-handler'); // for letting express.js error handling

const getOptions = asyncHandler(async (req, res) => {
  res.status(200).json({message: 'get options'});
});

module.exports = {
  getOptions,
}