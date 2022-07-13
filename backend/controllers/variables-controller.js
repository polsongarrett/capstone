const asyncHandler = require('express-async-handler'); // for express.js error handling

const Variables = require('../models/variables-model');

const getVariables = asyncHandler(async (req, res) => {
  const paramStrings = req.params[0].split('/');
  const paramObjects = paramStrings.map(string => {return { variableType: string } });
  const paramObject = paramObjects.length > 1 ? null : paramObjects[0];
  const params = paramObject != null ? paramObject : { $or: paramObjects };
  
  const variables = await Variables.find(params);
  res.status(200).json(variables);
});

module.exports = { getVariables }