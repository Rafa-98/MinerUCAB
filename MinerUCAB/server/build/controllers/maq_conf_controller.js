const mcCtrl = {};
const client = require('../database/connectiondb');

mcCtrl.createMaqConf = async (req,res) => {
    const mc = req.body;
    await client.query("INSERT INTO Maq_Conf (mc_cantidad, fk_tm_clave, fk_fc_clave) VALUES ("+mc.cantidad+","+mc.tipomaquina+","+mc.faseconf+")")
        .then(response => {
            res.json('Insertado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
} // Crea una nueva conf para las maquinas

mcCtrl.deleteMaqConf = async (req,res) => {
    const id = req.params.id;
    await client.query("DELETE FROM Maq_Conf WHERE mc_clave = "+id)
        .then(response => {
            res.json('Configuracion eliminada');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
}// borra la configuracion de la maquina

mcCtrl.getMaqConfs = async (req,res) => {
    await client.query("SELECT mc_clave AS id, mc_cantidad AS Cantidad, fk_tm_clave AS Tipo_Maquina, fk_fc_clave AS Fase_Configuracion FROM Maq_conf")
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
}// muestra todas las configuraciones de la maquina por clave

mcCtrl.getMaqConf = async (req,res) => {
    const id = req.params.id;
    await client.query("SELECT mc_clave AS id, mc_cantidad AS Cantidad, fk_tm_clave AS Tipo_Maquina, fk_fc_clave AS Fase_Configuracion FROM MAq_Conf WHERE mc_clave = "+id)
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
}// muestra una configuracion de maquina especifica por clave

mcCtrl.getMaqConfM = async (req,res) => {
    const id = req.params.id;
    await client.query("SELECT mc_clave AS id, mc_cantidad AS Cantidad, fk_tm_clave AS Tipo_Maquina, fk_fc_clave AS Fase_Configuracion FROM MAq_Conf WHERE fk_tm_clave = "+id)
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
}// muestra una configuracion que tienen un tipo de maquina en especifico

mcCtrl.getMaqConfF = async (req,res) => {
    const id = req.params.id;
    await client.query("SELECT mc_clave AS id, mc_cantidad AS Cantidad, fk_tm_clave AS Tipo_Maquina, fk_fc_clave AS Fase_Configuracion FROM MAq_Conf WHERE fk_fc_clave = "+id)
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
}// muestra una configuracion de las maquinas que estan en una conf_fase en especifico por la clave de la fase

mcCtrl.getMaqConfig = async (req,res) => {
    const id = req.params.id;
    await client.query("select tm_id AS id, tm_nombre AS nombre, mc_cantidad AS cantidad FROM tipo_maquina, maq_conf WHERE fk_fc_clave = "+id+" AND fk_tm_clave = tm_id")
        .then(response => {
            if(response.rowCount)
                res.json(response.rows);
            else
                res.json({resp:'Sin resultados'});
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
}

module.exports =  mcCtrl;
