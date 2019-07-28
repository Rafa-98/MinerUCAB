const carCtrl = {};
const client = require('../database/connectiondb');

carCtrl.getCargos = async (req,res) => {
    await client.query("SELECT ca_clave AS id,ca_nombre AS nombre, ca_descripcion AS descripcion FROM Cargo")
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

carCtrl.getCargo = async (req,res) => {
    const id = req.params.id;
    await client.query("SELECT ca_nombre AS nombre, ca_descripcion AS descripcion FROM Cargo WHERE ca_clave = "+id)
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

module.exports = carCtrl;