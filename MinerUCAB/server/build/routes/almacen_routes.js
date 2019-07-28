const express = require('express');
const router = express.Router();
const almCtrl = require('../controllers/almacen_controller');

router.get('/', almCtrl.getAlmacenes);
router.get('/:id', almCtrl.getAlmacen);

module.exports = router;
