const express = require('express');
const router = express.Router();
const { getVariableOptions } = require('../controllers/variable-options-controller');

router.get('/:variable', getVariableOptions);

module.exports = router;
