const preCtrl = {};
const client = require('../database/connectiondb');

preCtrl.getPresentaciones = async (req, res) => {
    await client.query("SELECT pre_clave AS id,pre_tipo AS Tipo, pre_cantidad AS cantidad, pre_descripcion AS Descripcion FROM Presentacion")
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
};

preCtrl.getPresentacion = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT pre_clave AS id,pre_tipo AS Tipo, pre_cantidad AS cantidad, pre_descripcion AS Descripcion FROM Presentacion WHERE pre_clave = "+id)
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
};

module.exports = preCtrl;