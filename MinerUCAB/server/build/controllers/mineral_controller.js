const mineralCtrl = {};
const client  = require('../database/connectiondb');

mineralCtrl.getMinerales = async (req, res) => {
    await client.query("SELECT mi_id AS Id, mi_nombre AS Nombre, mi_tipo AS Tipo , mi_descripcion AS Descripcion, mi_conductividad AS Conductividad, mi_estado AS Estado, mi_costo AS costo FROM Mineral ORDER BY mi_nombre")
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

mineralCtrl.getMineral = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT mi_id AS Id, mi_nombre AS Nombre, mi_tipo AS Tipo, mi_descripcion AS Descripcion, mi_conductividad AS Conductividad, mi_estado AS Estado, mi_costo AS costo FROM Mineral WHERE mi_id = "+id+";")
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

mineralCtrl.getMetales = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT mi_id AS Id, mi_nombre AS Nombre, mi_tipo AS Tipo, mi_descripcion AS Descripcion, mi_conductividad AS Conductividad, mi_costo AS costo FROM Mineral WHERE mi_tipo = 'Metal' ORDER BY mi_nombre")
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

mineralCtrl.getNoMetales = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT mi_id AS Id, mi_nombre AS Nombre, mi_tipo AS Tipo, mi_descripcion AS Descripcion, mi_estado AS Estado, mi_costo AS costo FROM Mineral WHERE mi_tipo = 'No Metal' ORDER BY mi_nombre")
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

mineralCtrl.createMetal = async (req, res) => {
    const min = req.body;
    await client.query("INSERT INTO Mineral (mi_nombre, mi_tipo, mi_descripcion, mi_conductividad,mi_costo) VALUES ('"+min.nombre+"','Metal','"+min.descripcion+"','"+min.conductividad+"',"+min.costo+")")
        .then(response => {
            res.json('Insertado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

mineralCtrl.createNoMetal = async (req, res) => {
    const min = req.body;
    await client.query("INSERT INTO Mineral (mi_nombre, mi_tipo, mi_descripcion, mi_estado, mi_costo) VALUES ('"+min.nombre+"','No Metal','"+min.descripcion+"','"+min.estado+"',"+min.costo+")")
        .then(response => {
            res.json('Insertado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

mineralCtrl.editMetal = async (req, res) => {
    const id = req.params.id;
    const min = req.body;
    await client.query("UPDATE Mineral SET mi_nombre ='"+min.nombre+"', mi_descripcion = '"+min.descripcion+"', mi_conductividad = '"+min.conductividad+"', mi_costo = '"+min.costo+"' WHERE mi_id = "+id+";")
        .then(response => {
            res.json('Actualizado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

mineralCtrl.editNoMetal = async (req, res) => {
    const id = req.params.id;
    const min = req.body;
    await client.query("UPDATE Mineral SET mi_nombre ='"+min.nombre+"', mi_descripcion = '"+min.descripcion+"', mi_estado = '"+min.estado+"', mi_costo = "+min.costo+" WHERE mi_id = "+id+";")
        .then(response => {
            res.json('Actualizado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

mineralCtrl.deleteMineral = async (req, res) => {
    const id = req.params.id;
    await client.query("DELETE FROM Mineral WHERE mi_id = "+id+";")
        .then(response => {
            res.json('Mineral eliminado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

module.exports = mineralCtrl;