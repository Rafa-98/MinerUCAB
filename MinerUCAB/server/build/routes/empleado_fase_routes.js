const express = require('express');
const router = express.Router();
const efCtrl = require('../controllers/empleado_fase_controller');

router.get('/', efCtrl.getEmpleadosfases);
router.get('/:id', efCtrl.getEmpleadosFase);
router.post('/', efCtrl.createEmpleadoFase);
router.put('/iniciar/:id', efCtrl.IniciarEmpleadoFase);
router.put('/finalizar/:id', efCtrl.FinalizarEmpleadoFase);
router.delete('/:id', efCtrl.deleteEmpleadoFase);

module.exports = router;