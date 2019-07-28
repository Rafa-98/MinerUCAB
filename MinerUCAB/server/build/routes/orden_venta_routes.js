const express = require('express');
const router = express.Router();
const ovCtrl = require('../controllers/orden_venta_controller');

router.get('/espera', ovCtrl.getOrdenVentaPorRecibir);
router.get('/efectuadas', ovCtrl.getOrdenVentaRecibidas);
router.get('/', ovCtrl.getOrdenesVenta);
router.get('/:id', ovCtrl.getOrdenVenta);
router.get('/cliente/:id', ovCtrl.getOrdenesVentaCliente);
router.post('/', ovCtrl.createOrdenVenta);
router.put('/despachar/:id', ovCtrl.despacharVenta);

module.exports = router;