const express = require('express');
const router = express.Router();
const { getCompetitions } = require('../controllers/competitions-controller');

router.get('/', getCompetitions);

module.exports = router;
