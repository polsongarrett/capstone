const express = require('express');
const router = express.Router();
const { getOptions } = require('../controllers/options-controller');

router.get('/', getOptions);

module.exports = router;
