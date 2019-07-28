const express = require('express');
const router = express.Router();
const pedCtrl = require('../controllers/pedido_controller');

router.get('/ordencompra/:id', pedCtrl.getPedidosOC);
router.get('/minalm/:id', pedCtrl.obtenerMinAlm);
router.post('/', pedCtrl.createPedido);
module.exports = router;