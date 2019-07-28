const express = require('express');
const router = express.Router();
const aliMinCtrl = require('../controllers/ali_min_controller');

router.get('/:id', aliMinCtrl.getAliMinerales);
router.post('/', aliMinCtrl.createAliMineral);
router.delete('/:id', aliMinCtrl.deleteAliMin);

module.exports = router;