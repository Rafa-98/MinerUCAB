const express = require('express');
const router = express.Router();
const rolCtrl = require('../controllers/rol_controller');

router.get('/', rolCtrl.getRoles);
router.get('/:id', rolCtrl.getRol);
router.post('/', rolCtrl.createRol);
router.put('/:id', rolCtrl.editRol);
router.delete('/:id', rolCtrl.deleteRol);

module.exports = router;