const express = require('express');
const router = express.Router();
const tCtrl = require('../controllers/turno_controller');

router.get('/', tCtrl.getTurnos);
router.get('/:id', tCtrl.getTurno);
router.get('/dia/:dia', tCtrl.getTurnoDia);
router.get('/horainicio/:hora', tCtrl.getTurnoHoraInicio);
router.get('/horafin/:hora', tCtrl.getTurnoHoraFin);
router.post('/', tCtrl.createTurno);
router.put('/:id', tCtrl.editTurno);
router.delete('/:id', tCtrl.deleteTurno);

module.exports = router;