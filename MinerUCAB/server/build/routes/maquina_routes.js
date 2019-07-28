const express = require('express');
const router = express.Router();
const maqCtrl = require('../controllers/maquina_controller');

router.get('/', maqCtrl.getMaquinas);
router.post('/', maqCtrl.createMaquina);
router.put('/costo/:id', maqCtrl.editCostoMaquina);
router.delete('/:id', maqCtrl.deleteMaquina);
router.get('/maqtipo/:id', maqCtrl.getMaquinasTipo);

module.exports = router;