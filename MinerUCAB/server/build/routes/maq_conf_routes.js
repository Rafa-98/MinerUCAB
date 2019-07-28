const express = require('express');
const router = express.Router();
const mcCtrl = require('../controllers/maq_conf_controller');

router.post('/', mcCtrl.createMaqConf);
router.delete('/:id',mcCtrl.deleteMaqConf);
router.get('/',mcCtrl.getMaqConfs);
router.get('/:id',mcCtrl.getMaqConf);
router.get('/Maquina/:id',mcCtrl.getMaqConfM);
router.get('/Fase/:id',mcCtrl.getMaqConfF);
router.get('/tipomaquinas/:id',mcCtrl.getMaqConfig);

module.exports = router;