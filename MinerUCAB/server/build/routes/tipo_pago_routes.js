const express = require('express');
const router = express.Router();
const tipoPagoCtrl = require('../controllers/tipo_pago_controller');

router.get('/', tipoPagoCtrl.getTipoPagos);
router.get('/transferencia', tipoPagoCtrl.getTransferencias);
router.get('/transferencia/:id', tipoPagoCtrl.getTransferencia);
router.get('/tarcre', tipoPagoCtrl.getTarsCredito);
router.get('/tarcre/:id', tipoPagoCtrl.getTarCredito);
router.get('/cheque', tipoPagoCtrl.getCheques);
router.get('/cheque/:id', tipoPagoCtrl.getCheque);
router.get('/tardeb', tipoPagoCtrl.getTarsDebito);
router.get('/tardeb/:id', tipoPagoCtrl.getTarDebito);
router.post('/transferencia', tipoPagoCtrl.createTransferencia);
router.post('/tarcre', tipoPagoCtrl.createTarCredito);
router.post('/cheque', tipoPagoCtrl.createCheque);
router.post('/tardeb', tipoPagoCtrl.createTarDebito);

module.exports = router;