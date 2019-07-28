const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/usuario_controller');

router.post('/ingreso', userCtrl.IngresoUsuario);
router.get('/', userCtrl.getUsuarios);
router.get('/:id', userCtrl.getUsuario);
router.get('/rol/:id', userCtrl.getUsuariosRol);
router.get('/empleado/:id', userCtrl.getUsuariosEmpleado);
router.post('/', userCtrl.createUsuario);
router.put('/:id', userCtrl.editUsuario);
router.delete('/:id', userCtrl.deleteUsuario);

module.exports = router;