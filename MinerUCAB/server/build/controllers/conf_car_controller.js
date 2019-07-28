const ccCtrl = {};
const client = require('../database/connectiondb');

ccCtrl.getConfCargos = async (req,res) => {
    await client.query("SELECT cc_clave AS id, cc_cantidad AS Cantidad, fk_ca_clave AS Cargo, fk_fc_clave AS Fase_Configuracion FROM Conf_car")
        .then(response => {
            if(response.rowCount)
                res.json(response.rows);
            else
                res.json('Sin resultados');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
}// muestra todas las configuraciones de los cargos de todas las fases por clave

ccCtrl.getConfCargo = async (req,res) => {
    const id = req.params.id;
    await client.query("SELECT cc_clave AS id, cc_cantidad AS Cantidad, fk_ca_clave AS Cargo, fk_fc_clave AS Fase_Configuracion FROM Conf_car WHERE cc_clave = "+id)
        .then(response => {
            if(response.rowCount)
                res.json(response.rows);
            else
                res.json('Sin resultados');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
}// muestra una configuracion de cargo especifica por clave

ccCtrl.getConfCargoC = async (req,res) => {
    const id = req.params.id;
    await client.query("SELECT cc_clave AS id, cc_cantidad AS Cantidad, fk_ca_clave AS Cargo, fk_fc_clave AS Fase_Configuracion FROM Conf_car WHERE fk_ca_clave = "+id)
        .then(response => {
            if(response.rowCount)
                res.json(response.rows);
            else
                res.json('Sin resultados');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
}// muestra la configuracion de fase que tienen un tipo de cargo en especifico

ccCtrl.getConfCargoF = async (req,res) => {
    console.log("llego a getConfCargoF");
    const id = req.params.id;
    await client.query("SELECT ca_clave AS id, ca_nombre AS cargo, cc_cantidad AS cantidad FROM conf_car, cargo WHERE fk_fc_clave = "+id+" AND fk_ca_clave = ca_clave")
        .then(response => {
            if(response.rowCount)
                res.json(response.rows);
            else
                res.json('Sin resultados');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
}// muestra los cargos que estan en una conf_fase en especifico por la clave de la fase

ccCtrl.createConfCar = async (req,res) => {
    const cc = req.body;
    await client.query("INSERT INTO Conf_Car (cc_cantidad, fk_ca_clave, fk_fc_clave) VALUES ("+cc.cantidad+","+cc.cargo+","+cc.faseconf+")")
        .then(response => {
            res.json('Insertado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
} // Crea una nuevo cargo a una conf fase

ccCtrl.deleteMaqConf = async (req,res) => {
    const id = req.params.id;
    await client.query("DELETE FROM Conf_Car WHERE cc_clave = "+id)
        .then(response => {
            res.json('Configuracion eliminada');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
}// borra la la conf de los cargos
module.exports = ccCtrl;