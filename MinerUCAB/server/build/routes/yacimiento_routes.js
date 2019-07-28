const express = require('express');
const router = express.Router();
const yacCtrl = require('../controllers/yacimiento_controller');

router.get('/', yacCtrl.getYacimientos);
router.get('/:id', yacCtrl.getYacimiento);
router.get('/autoctono', yacCtrl.getAutoctonos);
router.get('/aloctono', yacCtrl.getAloctonos);
router.post('/autoctono', yacCtrl.createAutoctono);
router.post('/aloctono', yacCtrl.createAloctono);
router.put('/autoctono/:id', yacCtrl.editAutoctono);
router.put('/aloctono/:id', yacCtrl.editAloctono);
router.delete('/:id', yacCtrl.deleteYacimiento);

module.exports = router;