const express = require('express');
const router = express.Router();
const carCtrl = require('../controllers/cargo_controller');

router.get('/', carCtrl.getCargos);
router.get('/:id', carCtrl.getCargo);

module.exports = router;