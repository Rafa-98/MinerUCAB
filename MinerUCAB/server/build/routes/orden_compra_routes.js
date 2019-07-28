const express = require('express');
const router = express.Router();
const ocCtrl = require('../controllers/orden_compra_controller');

router.get('/recibir', ocCtrl.getOrdenCompraPorRecibir);
router.post('/recibir/:id', ocCtrl.recibirCompra);
router.get('/recibida', ocCtrl.getOrdenCompraRecibidas);
router.get('/', ocCtrl.getOrdenesCompra);
router.get('/:id', ocCtrl.getOrdenCompra);
router.get('/aliado/:id', ocCtrl.getOrdenesCompraAliado);
router.post('/', ocCtrl.createOrdenCompra);

module.exports = router;