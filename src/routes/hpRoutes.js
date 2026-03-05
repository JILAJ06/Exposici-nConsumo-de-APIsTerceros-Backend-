const express = require('express');
const router = express.Router();
const hpController = require('../controllers/hpController');

router.get('/characters', hpController.fetchCharacters);

module.exports = router;