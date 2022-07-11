const express = require('express');
const router = express.Router();
const { getTwists } = require('../controllers/twists-controller');

router.get('/', getTwists);

module.exports = router;
