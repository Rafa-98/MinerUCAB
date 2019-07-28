const express = require('express');
const router = express.Router();
const fCtrl = require('../controllers/fase_controller');

router.get('/etapa/:id', fCtrl.getFasesEtapa);
router.get('/etapa/conf/:id', fCtrl.getFasesEtapaConf);
router.get('/etapa/proceso/:id', fCtrl.getFasesEtapaPro);
router.get('/etapa/terminado/:id', fCtrl.getFasesEtapaTer);
router.get('/explotacion/:id', fCtrl.getFasesExplotacion);
router.get('/etapa/pt/:id', fCtrl.getFasesEtapaPorTerminar);
router.get('/explotacion/pt/:id', fCtrl.getFasesExplotacionPorTerminar);
router.post('/', fCtrl.createFase);
router.put('/iniciar/:id', fCtrl.iniciarFase);
router.put('/finalizar/:id', fCtrl.finalizarFase);
router.delete('/:id',fCtrl.deleteFase);

module.exports = router;