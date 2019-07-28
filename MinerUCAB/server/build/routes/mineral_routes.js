const express = require('express');
const router = express.Router();
const mineralCtrl = require('../controllers/mineral_controller');

router.get('/', mineralCtrl.getMinerales);
router.get('/metal',mineralCtrl.getMetales);
router.get('/nometal',mineralCtrl.getNoMetales);
router.post('/metal', mineralCtrl.createMetal);
router.post('/nometal', mineralCtrl.createNoMetal);
router.get('/:id', mineralCtrl.getMineral);
router.put('/metal/:id', mineralCtrl.editMetal);
router.put('/nometal/:id', mineralCtrl.editNoMetal);
router.delete('/:id', mineralCtrl.deleteMineral);

module.exports = router;