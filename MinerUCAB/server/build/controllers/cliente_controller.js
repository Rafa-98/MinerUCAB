const clCtrl = {};
const client = require('../database/connectiondb');

clCtrl.getClientes = async (req,res) => {
    await client.query("SELECT cl_id AS id, cl_nombre AS Nombre, cl_apellido AS Apellido, cl_telefono AS Telefono, fk_l_clave AS Lugar FROM Cliente")
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

clCtrl.getCliente = async (req,res) => {
    const id = req.params.id;
    await client.query("SELECT cl_id AS id, cl_nombre AS Nombre, cl_apellido AS Apellido, cl_telefono AS Telefono, fk_l_clave AS Lugar FROM Cliente WHERE cl_id = "+id)
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

clCtrl.createCliente = async (req,res) => {
    const cli = req.body;
    await client.query("INSERT INTO Cliente (cl_nombre, cl_apellido, cl_telefono, fk_l_clave) VALUES ('"+cli.nombre+"','"+cli.apellido+"','"+cli.telefono+"',"+cli.lugar+")")
        .then(response => {
            res.json('Insertado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
}

clCtrl.editCliente = async (req,res) => {
    const id = req.params.id;
    const cli = req.body;
    await client.query("UPDATE Cliente SET cl_nombre = '"+cli.nombre+"', cl_apellido = '"+cli.apellido+"', cl_telefono = '"+cli.telefono+"', fk_l_clave = "+cli.lugar+" WHERE cl_id ="+id)
        .then(response => {
            res.json('Actualizado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
}

clCtrl.deleteCliente = async (req,res) => {
    const id = req.params.id;
    await client.query("DELETE FROM Cliente WHERE cl_id = "+id)
        .then(response => {
            res.json('Cliente eliminado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
}

module.exports = clCtrl;