const express = require('express');
const router = express.Router();
const lCtrl = require('../controllers/lugar_controller');

router.get('/estado', lCtrl.getEstados);
router.get('/municipio/:id', lCtrl.getMunicipios);
router.get('/parroquia/:id', lCtrl.getParroquias);
router.get('/direccion/:id', lCtrl.getDireccion);

module.exports = router;
