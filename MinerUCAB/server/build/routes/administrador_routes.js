const express = require('express');
const router = express.Router();
const admCtrl = require('../controllers/administrador_controller');


router.get('/:id', admCtrl.getAdministrador);
router.get('/explotacion/:id', admCtrl.getAdministradores);
router.post('/', admCtrl.createAdministrador);
router.put('/inicio/:id', admCtrl.inicioAdministrador);
router.put('/finalizar/:id', admCtrl.finalizarAdministrador);

module.exports = router;