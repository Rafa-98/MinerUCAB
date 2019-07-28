const minAlmCtrl = {};
const client  = require('../database/connectiondb');

minAlmCtrl.getMinAlm = async (req, res) => {
    await client.query("SELECT ma_id as id, ma_cantidad AS cantidad, mi_nombre AS mineral FROM Min_Alm, Mineral WHERE fk_mi_id = mi_id")
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

minAlmCtrl.getMinAlmCantidad = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT ma_cantidad AS cantidad FROM Min_Alm WHERE fk_mi_id = "+id)
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

minAlmCtrl.getMinAlmByMineral = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT ma_id AS id FROM Min_Alm WHERE fk_mi_id = "+id)
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
}

minAlmCtrl.disminuirMinAlm = async (req, res) => {
    const ma = req.body;
    await client.query("UPDATE Min_Alm SET ma_cantidad = ma_cantidad - "+ma.cantidad+" WHERE ma_id = "+ma.almacen)
        .then(response => {
            if(response.rowCount)
                res.json('Almacen Disminuido');
            else
                res.json('Sin resultados');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

minAlmCtrl.aumentarMinAlm = async (req, res) => {
    const ma = req.body;
    await client.query("UPDATE Min_Alm SET ma_cantidad = ma_cantidad + "+ma.cantidad+" WHERE ma_id = "+ma.almacen)
        .then(response => {
            if(response.rowCount)
                res.json('Almacen Aumentado');
            else
                res.json('Sin resultados');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

module.exports = minAlmCtrl;