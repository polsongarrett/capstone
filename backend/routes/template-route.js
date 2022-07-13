const express = require('express');
const router = express.Router();
const { getTemplates } = require('../controllers/template-controller');

router.get('/:advType', getTemplates);

module.exports = router;