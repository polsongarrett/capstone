const express = require('express');
const router = express.Router();
const { getLocales } = require('../controllers/locales-controller');

router.get('/', getLocales);

module.exports = router;
