const relMinCtrl = {};
const client  = require('../database/connectiondb');

relMinCtrl.getRelMinerales = async (req, res) => {
    await client.query("SELECT rm_id AS id, rm_cantidad AS rm_cantidad, fk_mi_id_1 AS Extraedor, fk_mi_id_2 AS Extraido FROM Relacion_Min;")
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

relMinCtrl.getRelMineralesExtraidos = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT rm_id AS id, rm_cantidad AS rm_cantidad, fk_mi_id_1 AS Extraedor, fk_mi_id_2 AS Extraido FROM Relacion_Min WHERE fk_mi_id_1 ="+id)
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

relMinCtrl.getRelMineralesExtraedores = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT rm_id AS id, rm_cantidad AS rm_cantidad, fk_mi_id_1 AS Extraedor, fk_mi_id_2 AS Extraido FROM Relacion_Min WHERE fk_mi_id_2 ="+id)
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

relMinCtrl.createRelMin = async (req, res) => {
    const rel = req.body;
    await client.query("INSERT INTO Relacion_Min (rm_cantidad, fk_mi_id_1, fk_mi_id_2) VALUES ("+rel.cantidad+","+rel.extraedor+","+rel.extraido+")")
        .then(response => {
            res.json('Insertado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

relMinCtrl.editRelMin = async (req, res) => {
    const id = req.params.id;
    const min = req.body;
    await client.query("UPDATE Relacion_Min SET rm_cantidad ="+min.cantidad+", fk_mi_id_1 ="+min.extraedor+", fk_mi_id_2 ="+min.extraido+" WHERE rm_id ="+id)
        .then(response => {
            res.json('Actualizado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

relMinCtrl.deleteRelMin = async (req, res) => {
    const id = req.params.id;
    await client.query("DELETE FROM Relacion_Min WHERE rm_id = "+id+";")
        .then(response => {
            res.json('Relacion eliminada');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

module.exports = relMinCtrl;