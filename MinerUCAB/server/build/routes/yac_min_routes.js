const express = require('express');
const router = express.Router();
const yacMinCtrl = require('../controllers/yac_min_controller');

router.get('/', yacMinCtrl.getYacMinerales);
router.get('/sinexplotar', yacMinCtrl.getYacMinSE);
router.get('/mineral/:id', yacMinCtrl.getMinYac);
router.get('/yacimiento/:id', yacMinCtrl.getYacMin);
router.post('/', yacMinCtrl.createYacMin);
router.put('/:id', yacMinCtrl.editYacMin);
router.delete('/:id', yacMinCtrl.deleteYacMin);

module.exports = router;