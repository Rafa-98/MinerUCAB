const express = require('express');
const router = express.Router();
const faseconfCtrl = require('../controllers/fase_conf_controller');

router.post('/',faseconfCtrl.createConfigFase);
router.get('/', faseconfCtrl.getConfigFases);
router.get('/:id',faseconfCtrl.getConfigFase);
router.put('/:id',faseconfCtrl.editConfigFase);
router.delete('/:id',faseconfCtrl.deleteConfigFase);

module.exports = router;