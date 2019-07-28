const aliCtrl = {};
const client = require('../database/connectiondb');

aliCtrl.getAliados = async (req, res) => {
    await client.query("SELECT ali_id AS id, ali_nombre AS nombre, ali_fecha_creacion AS creacion, ali_fecha_inaguracion AS inauguracion, fk_l_clave AS lugar FROM Aliado")
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

aliCtrl.getAliado = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT SELECT ali_id AS id, ali_nombre AS nombre, ali_fecha_creacion AS creacion, ali_fecha_inaguracion AS inaguracion, fk_l_clave AS lugar FROM Aliado WHERE ali_id ="+id)
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

aliCtrl.createAliado = async (req, res) => {
    const ali = req.body;
    await client.query("INSERT INTO Aliado (ali_nombre, ali_fecha_creacion, ali_fecha_inaguracion, fk_l_clave) VALUES ('"+ali.nombre+"','"+ali.creacion+"','"+ali.inaguracion+"',"+ali.lugar+")")
        .then(response => {
            res.json('Insertado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

aliCtrl.editAliado = async (req, res) => {
    const id = req.params.id;
    const ali = req.body;
    await client.query("UPDATE Aliado SET ali_nombre = '"+ali.nombre+"', ali_fecha_creacion = '"+ali.creacion+"', ali_fecha_inaguracion = '"+ali.inaguracion+"', fk_l_clave = "+ali.lugar+" WHERE ali_id = "+id)
        .then(response => {
            res.json('Actualizado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

aliCtrl.deleteAliado = async (req, res) => {
    const id = req.params.id;
    await client.query("DELETE FROM ALIADO WHERE ali_id = "+id)
        .then(response => {
            res.json('Aliado Eliminado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

module.exports = aliCtrl;