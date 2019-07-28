const almCtrl = {};
const client = require('../database/connectiondb');

almCtrl.getAlmacenes = async (req, res) => {
    await client.query("SELECT alm_nombre AS Nombre FROM Almacen")
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

almCtrl.getAlmacen = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT alm_nombre AS Nombre FROM Almacen WHERE alm_clave = "+id)
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

module.exports = almCtrl;