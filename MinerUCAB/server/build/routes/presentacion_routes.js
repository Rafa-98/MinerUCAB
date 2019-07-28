const express = require('express');
const router = express.Router();
const preCtrl = require('../controllers/presentacion_controller');

router.get('/', preCtrl.getPresentaciones);
router.get('/:id', preCtrl.getPresentacion);

module.exports = router;
