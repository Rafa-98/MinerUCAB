const express = require('express');
const router = express.Router();
const reportCtrl = require('../controllers/reporte_controller');

router.get('/1', reportCtrl.getReporte1);
router.get('/2/:fecha', reportCtrl.getReporte2);
router.get('/3/:mes', reportCtrl.getReporte3);
router.get('/4', reportCtrl.getReporte4);
router.get('/5/:fecha', reportCtrl.getReporte5);
router.get('/6/:mes', reportCtrl.getReporte6);
router.get('/7/:empfecha', reportCtrl.getReporte7);
router.get('/8/:year', reportCtrl.getReporte8);
router.get('/9/:fecha', reportCtrl.getReporte9);
router.get('/10/:fecha', reportCtrl.getReporte10);

module.exports = router;