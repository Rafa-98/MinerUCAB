const express = require('express');
const router = express.Router();
const relMinCtrl = require('../controllers/rel_min_controller');

router.get('/', relMinCtrl.getRelMinerales);
router.get('/extraido/:id', relMinCtrl.getRelMineralesExtraidos);
router.get('/extraedor/:id', relMinCtrl.getRelMineralesExtraedores);
router.post('/', relMinCtrl.createRelMin);
router.put('/:id', relMinCtrl.editRelMin);
router.delete('/:id', relMinCtrl.deleteRelMin);

module.exports = router;