const yacMinCtrl = {};
const client  = require('../database/connectiondb');

yacMinCtrl.getYacMinerales = async (req, res) => {
    await client.query("SELECT ym_id AS id, fk_mi_id AS Mineral, fk_y_id AS Yacimiento FROM Yac_Min")
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

yacMinCtrl.getMinYac = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT ym_id AS id, fk_mi_id AS Mineral, fk_y_id AS Yacimiento FROM Yac_Min WHERE fk_mi_id = "+id)
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

yacMinCtrl.getYacMinSE = async (req, res) => {
    await client.query("SELECT ym_id AS id_yac_min, y_nombre AS nombre, y_tamaño AS size, y_tipo AS tipo FROM Yac_Min, Yacimiento WHERE fk_y_id = y_id AND ym_id NOT IN (SELECT DISTINCT fk_ym_id FROM Explotacion)")
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

yacMinCtrl.getYacMin = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT ym_id AS id, fk_mi_id AS Mineral, fk_y_id AS Yacimiento FROM Yac_Min WHERE fk_y_id = "+id)
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

yacMinCtrl.createYacMin = async (req, res) => {
    const my = req.body;
    await client.query("INSERT INTO Yac_Min (fk_mi_id, fk_y_id) VALUES ("+my.mineral+","+my.yacimiento+")")
        .then(response => {
            res.json('Insertado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

yacMinCtrl.editYacMin = async (req, res) => {
    const id = req.params.id;
    const ym = req.body;
    await client.query("UPDATE Yac_Min SET fk_mi_id ="+ym.mineral+", fk_y_id ="+ym.yacimiento+" WHERE ym_id ="+id)
        .then(response => {
            res.json('Actualizado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

yacMinCtrl.deleteYacMin = async (req, res) => {
    const id = req.params.id;
    await client.query("DELETE FROM Yac_Min WHERE ym_id = "+id)
        .then(response => {
            res.json('Yac_Min eliminado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

module.exports = yacMinCtrl;