const express = require('express');
const router = express.Router();
const ccCtrl = require('../controllers/conf_car_controller');

router.get('/', ccCtrl.getConfCargos);
router.get('/:id',ccCtrl.getConfCargo);
router.get('/cargo/:id',ccCtrl.getConfCargoC);
router.get('/fase/:id',ccCtrl.getConfCargoF);
router.post('/',ccCtrl.createConfCar);
router.delete('/:id',ccCtrl.deleteMaqConf);

module.exports = router;