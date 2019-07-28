const express = require('express');
const router = express.Router();
const clCtrl = require('../controllers/cliente_controller');

router.get('/', clCtrl.getClientes);
router.get('/:id', clCtrl.getCliente);
router.post('/', clCtrl.createCliente);
router.put('/:id', clCtrl.editCliente);
router.delete('/:id', clCtrl.deleteCliente);

module.exports = router;