const express = require('express');
const router = express.Router();
const minAlmCtrl = require('../controllers/min_alm_controller');

router.get('/', minAlmCtrl.getMinAlm);
router.get('/mineral/:id', minAlmCtrl.getMinAlmCantidad);
router.put('/disminuir', minAlmCtrl.disminuirMinAlm);
router.put('/aumentar', minAlmCtrl.aumentarMinAlm);
router.get('/:id',minAlmCtrl.getMinAlmByMineral);

module.exports = router;