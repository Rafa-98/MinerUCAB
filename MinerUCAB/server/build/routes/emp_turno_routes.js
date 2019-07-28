const express = require('express');
const router = express.Router();
const empturCtrl = require('../controllers/emp_turno_controller');

router.get('/', empturCtrl.getEmpTurnos);
router.get('/empleado/:id', empturCtrl.getEmpTurnosEmpleado);
router.get('/empleado/na/:id', empturCtrl.getEmpTurnosNoEmpleado);
router.post('/', empturCtrl.createEmpTurno);
router.delete('/:id', empturCtrl.deleteEmpTurno);
module.exports = router;