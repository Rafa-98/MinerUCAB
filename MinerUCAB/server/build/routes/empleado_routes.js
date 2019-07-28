const express = require('express');
const router = express.Router();
const empCtrl = require('../controllers/empleado_controller');

router.get('/', empCtrl.getEmpleados);
router.get('/:id', empCtrl.getEmpleado);
router.get('/cargo/:id', empCtrl.getEmpleadoCargo);
router.get('/empcar/:id',empCtrl.getEmpleadosCargo);
router.post('/', empCtrl.createEmpleado);
router.put('/:id', empCtrl.editEmpleado);
router.delete('/:id', empCtrl.deleteEmpleado);

module.exports = router;