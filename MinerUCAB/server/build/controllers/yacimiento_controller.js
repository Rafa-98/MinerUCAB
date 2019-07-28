const yacCtrl = {};
const client  = require('../database/connectiondb');

yacCtrl.getYacimientos = async (req, res) => {
    await client.query("SELECT y_id AS ID, y_nombre AS Nombre, y_tamaño AS Size,y_tipo AS Tipo, y_origen AS Origen, y_tipo_transporte AS tipo_transporte FROM Yacimiento")
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

yacCtrl.getYacimiento = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT y_id AS ID, y_nombre AS Nombre, y_tamaño AS Size,y_tipo AS Tipo, y_origen AS Origen, y_tipo_transporte AS tipo_transporte, fk_l_clave AS lugar FROM Yacimiento WHERE y_id = "+id)
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

yacCtrl.getAutoctonos = async (req, res) => {
    await client.query("SELECT y_id AS ID, y_nombre AS Nombre, y_tamaño AS Tamaño, y_origen AS Origen, fk_l_clave AS Lugar FROM Yacimiento WHERE y_tipo = 'Autoctono'")
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

yacCtrl.getAloctonos = async (req, res) => {
    await client.query("SELECT y_id AS ID, y_nombre AS Nombre, y_tamaño AS Tamaño, y_tipo_transporte AS Tipo_transporte, fk_l_clave AS Lugar FROM Yacimiento WHERE y_tipo = 'Aloctono'")
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

yacCtrl.createAutoctono = async (req, res) => {
    const yac = req.body;
    await client.query("INSERT INTO Yacimiento (y_nombre, y_tamaño, y_tipo, y_origen, fk_l_clave) VALUES ('"+yac.nombre+"',"+yac.size+",'Autoctono','"+yac.origen+"',"+yac.lugar+")")
        .then(response => {
            res.json('Insertado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

yacCtrl.createAloctono = async (req, res) => {
    const yac = req.body;
    await client.query("INSERT INTO Yacimiento (y_nombre, y_tamaño, y_tipo, y_tipo_transporte, fk_l_clave) VALUES ('"+yac.nombre+"',"+yac.size+",'Aloctono','"+yac.tipo_transporte+"',"+yac.lugar+")")
        .then(response => {
            res.json('Insertado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

yacCtrl.editAutoctono = async (req, res) => {
    const yac = req.body;
    const id = req.params.id;
    await client.query("UPDATE Yacimiento SET y_nombre ='"+yac.nombre+"', y_tamaño ="+yac.size+", y_origen = '"+yac.origen+"', fk_l_clave ="+yac.lugar+" WHERE y_id ="+id)
        .then(response => {
            res.json('Actualizado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

yacCtrl.editAloctono = async (req, res) => {
    const yac = req.body;
    const id = req.params.id;
    await client.query("UPDATE Yacimiento SET y_nombre ='"+yac.nombre+"', y_tamaño ="+yac.size+", y_tipo_transporte = '"+yac.tipo_transporte+"', fk_l_clave ="+yac.lugar+" WHERE y_id ="+id)
        .then(response => {
            res.json('Actualizado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

yacCtrl.deleteYacimiento = async (req, res) => {
    const id = req.params.id;
    await client.query("DELETE FROM Yacimiento WHERE y_id = "+id+";")
        .then(response => {
            res.json('Yacimiento eliminado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

module.exports = yacCtrl;