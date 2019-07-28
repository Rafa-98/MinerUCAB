const express = require('express');
const router = express.Router();
const empCtrl = require('../controllers/explotacion_controller');

router.get('/', empCtrl.getExplotaciones);
router.get('/conf', empCtrl.getExplotacionesConf);
router.get('/proceso', empCtrl.getExplotacionesPro);
router.get('/terminado', empCtrl.getExplotacionesTer);
router.get('/:id', empCtrl.getExplotacion);
router.get('/ordenventa/:id', empCtrl.getExplotacionOV);
router.get('/yacmin/:id', empCtrl.getExplotacionYM);
router.post('/', empCtrl.createExplotacion);
router.put('/:id', empCtrl.editExplotacion);
router.put('/iniciar/:id', empCtrl.iniciarExplotacion);
router.put('/finalizar/:id', empCtrl.finalizarExplotacion);
router.delete('/:id', empCtrl.deleteExplotacion);

module.exports = router;