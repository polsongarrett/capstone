const express = require('express');
const router = express.Router();
const { getVariables } = require('../controllers/variables-controller');

router.get('/*', getVariables);

module.exports = router;
