const express = require('express');
const router = express.Router();
const { getPrizes } = require('../controllers/prizes-controller');

router.get('/', getPrizes);

module.exports = router;
