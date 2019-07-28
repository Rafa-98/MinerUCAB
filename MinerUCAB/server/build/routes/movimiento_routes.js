const express = require('express');
const router = express.Router();
const movCtrl = require('../controllers/movimiento_controller');

router.get('/ordencompra', movCtrl.getMovimientosOC);
router.get('/ordenventa', movCtrl.getMovimientosOV);
router.get('/explotacion', movCtrl.getMovimientosEX);
router.get('/ordencompra/:id', movCtrl.getMovimientoOC);
router.get('/cantidades/:id', movCtrl.getCantidades);
router.post('/ordencompra', movCtrl.createMovimientoOC);
router.put('/ordencompra/:id', movCtrl.cambiarEstatusOC);
router.get('/ordenventa/:id', movCtrl.getMovimientoOV);
router.post('/ordenventa', movCtrl.createMovimientoOV);
router.put('/ordenventa/:id', movCtrl.cambiarEstatusOV);
router.get('/explotacion/:id', movCtrl.getMovimientoEX);
router.post('/explotacion', movCtrl.createMovimientoEX);
router.put('/explotacion/:id', movCtrl.cambiarEstatusEX);

module.exports = router;