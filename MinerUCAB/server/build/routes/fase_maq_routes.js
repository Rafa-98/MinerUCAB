const express = require('express');
const router = express.Router();
const fmCtrl = require('../controllers/fase_maq_controller');

router.get('/', fmCtrl.getFaseMaqs);
router.get('/:id', fmCtrl.getFaseMaq);
router.get('/fase/:id', fmCtrl.getFaseMaqF);
router.get('/maquina/:id', fmCtrl.getFaseMaqM);
router.post('/',fmCtrl.createFaseMaq);
router.delete('/:id', fmCtrl.deleteFaseMaq);
router.put('/iniciar/:id', fmCtrl.iniciarFaseMaq);
router.put('/finalizar/:id', fmCtrl.finalizarFaseMaq);

module.exports = router;