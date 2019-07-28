const admCtrl = {};
const client  = require('../database/connectiondb');


admCtrl.getAdministrador = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT ad_id AS id, fk_ex_id AS explotacion, fk_em_id AS empleado FROM Administrador WHERE ad_id = "+id)
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

admCtrl.getAdministradores = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT ad_id AS id, fk_ex_id AS explotacion, fk_em_id AS empleado FROM Administrador WHERE fk_ex_id = "+id)
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

admCtrl.createAdministrador = async (req, res) => {
    const adm = req.body;
    await client.query("INSERT INTO Administrador (fk_ex_id ,fk_em_id) VALUES ("+adm.explotacion+","+adm.empleado+")")
        .then(response => {
            res.json('Insertado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

admCtrl.inicioAdministrador = async (req, res) => {
    const id = req.params.id;
    await client.query("UPDATE Administrador SET fk_est_clave = 2 WHERE ad_id = "+id+" AND fk_est_clave = 4")
        .then(response => {
            if(response.rowCount)
                res.json('Iniciada');
            else
                res.json('Sin resultados');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

admCtrl.finalizarAdministrador = async (req, res) => {
    const id = req.params.id;
    await client.query("UPDATE Administrador SET fk_est_clave = 3 WHERE ad_id = "+id+" AND fk_est_clave = 2")
        .then(response => {
            if(response.rowCount)
                res.json('Finalizada');
            else
                res.json('Sin resultados');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

module.exports = admCtrl;