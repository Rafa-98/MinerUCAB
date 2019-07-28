const rolCtrl = {};
const client = require('../database/connectiondb');

rolCtrl.getRoles = async (req,res) => {
    await client.query("SELECT r_clave AS id, r_nombre AS nombre FROM Rol")
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

rolCtrl.getRol = async (req,res) => {
    const id = req.params.id;
    await client.query("SELECT r_clave AS id, r_nombre AS nombre FROM Rol WHERE r_clave = "+id)
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

rolCtrl.createRol = async (req,res) => {
    const rol = req.body;
    await client.query("INSERT INTO Rol (r_nombre) VALUES ('"+rol.nombre+"')")
        .then(response => {
            if(response.rowCount)
                res.json('Rol Insertado');
            else
                res.json('Sin resultados');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

rolCtrl.editRol = async (req,res) => {
    const id = req.params.id;
    const rol = req.body;
    await client.query("UPDATE Rol SET r_nombre = '"+rol.nombre+"' WHERE r_clave = "+id)
        .then(response => {
            if(response.rowCount)
                res.json('Rol Actualizado');
            else
                res.json('Sin resultados');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

rolCtrl.deleteRol = async (req,res) => {
    const id = req.params.id;
    await client.query("DELETE FROM Rol WHERE r_clave ="+id)
        .then(response => {
            if(response.rowCount)
                res.json('Rol Eliminado');
            else
                res.json('Sin resultados');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};



module.exports = rolCtrl;