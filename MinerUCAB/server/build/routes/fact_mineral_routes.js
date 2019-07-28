const express = require('express');
const router = express.Router();
const factMinCtrl = require('../controllers/fact_mineral_controller');

router.get('/ordenventa/:id', factMinCtrl.getFactMinOV);
router.post('/', factMinCtrl.createFactMin);

module.exports = router;