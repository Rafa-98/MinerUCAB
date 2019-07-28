const express = require('express');
const router = express.Router();
const tmCtrl = require('../controllers/tipo_maquina_controller');

router.get('/', tmCtrl.getTipoMaquinas);

module.exports = router;