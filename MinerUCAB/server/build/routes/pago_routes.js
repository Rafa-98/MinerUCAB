const express = require('express');
const router = express.Router();
const pagoCtrl = require('../controllers/pago_controller');

router.get('/ordenventa/:id', pagoCtrl.getPagosOV);
router.post('/', pagoCtrl.createPago);

module.exports = router;