const express = require('express');
const router = express.Router();
const hpController = require('../controllers/hpController');

router.get('/characters', hpController.fetchCharacters);
router.get('/spells', hpController.fetchSpells);
router.get('/students', hpController.fetchStudents);
router.get('/staff', hpController.fetchStaff);

module.exports = router;