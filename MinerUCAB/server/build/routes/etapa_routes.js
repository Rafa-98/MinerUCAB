const express = require('express');
const router = express.Router();
const etaCtrl = require('../controllers/etapa_controller');

router.get('/:id', etaCtrl.getEtapas);
router.get('/conf/:id', etaCtrl.getEtapasConf);
router.get('/proceso/:id', etaCtrl.getEtapasPro);
router.get('/terminado/:id', etaCtrl.getEtapasTer);
router.post('/', etaCtrl.createEtapa);
router.put('/iniciar/:id', etaCtrl.iniciarEtapa);
router.put('/finalizar/:id', etaCtrl.finalizarEtapa);
router.put('/:id',etaCtrl.editEtapa);
router.delete('/:id',etaCtrl.deleteEtapa);

module.exports = router;