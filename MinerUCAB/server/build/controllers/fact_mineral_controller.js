const factMinCtrl = {};
const client = require('../database/connectiondb');

factMinCtrl.getFactMinOV = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT fm_id AS id, mi_nombre AS nombreM, fm_cantidad AS cantidad, pre_cantidad AS kg, pre_tipo AS tipo, fk_mi_id AS mineral, fm_costo AS costo, fm_cantidad * pre_cantidad AS total FROM Fact_Mineral, Mineral, Min_Pre, Presentacion WHERE fk_ov_numero = "+id+" AND fk_mp_id = mp_id AND fk_pre_clave = pre_clave AND mi_id = fk_mi_id")
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

factMinCtrl.createFactMin = async (req, res) => {
    const factmin = req.body;
    await client.query("INSERT INTO Fact_Mineral (fm_cantidad,fk_ov_numero,fk_mp_id,fm_costo) VALUES ("+factmin.cantidad+","+factmin.venta+","+factmin.minpre+","+factmin.costo+") RETURNING (SELECT fk_mi_id FROM Min_Pre WHERE mp_id = "+factmin.minpre+") AS mineral")
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

module.exports = factMinCtrl;