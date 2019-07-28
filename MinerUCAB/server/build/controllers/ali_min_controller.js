const aliMinCtrl = {};
const client = require('../database/connectiondb');

aliMinCtrl.getAliMinerales = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT am_id AS id, mi_id AS mineral, mi_nombre AS nombre, fk_ali_id AS aliado FROM Ali_Min, Mineral WHERE mi_id = fk_mi_id AND fk_ali_id = "+id)
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

aliMinCtrl.createAliMineral = async (req, res) => {
    const am = req.body;
    await client.query("INSERT INTO Ali_Min (fk_ali_id, fk_mi_id) VALUES ("+am.aliado+","+am.mineral+")")
        .then(response => {
            res.json('Insertado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

aliMinCtrl.deleteAliMin = async (req, res) => {
    const id = req.params.id;
    await client.query("DELETE FROM Ali_Min WHERE am_id = "+id)
        .then(response => {
            res.json('AliMin Eliminado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

module.exports = aliMinCtrl;