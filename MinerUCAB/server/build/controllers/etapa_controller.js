const etaCtrl = {};
const client  = require('../database/connectiondb');

etaCtrl.getEtapas = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT eta_id AS id, eta_numero AS numero, eta_nombre AS nombre, eta_fecha_inicio AS inicio, fk_est_clave AS estatus FROM Etapa WHERE fk_ex_id = "+id)
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

etaCtrl.getEtapasConf = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT eta_id AS id, eta_numero AS numero, eta_nombre AS nombre, eta_fecha_inicio AS inicio, fk_est_clave AS estatus FROM Etapa WHERE fk_est_clave = 1 AND fk_ex_id = "+id)
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

etaCtrl.getEtapasPro = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT eta_id AS id, eta_numero AS numero, eta_nombre AS nombre, eta_fecha_inicio AS inicio, fk_est_clave AS estatus FROM Etapa WHERE fk_est_clave = 2 AND fk_ex_id = "+id)
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

etaCtrl.getEtapasTer = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT eta_id AS id, eta_numero AS numero, eta_nombre AS nombre, eta_fecha_inicio AS inicio, fk_est_clave AS estatus FROM Etapa WHERE fk_est_clave = 3 AND fk_ex_id = "+id)
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

etaCtrl.createEtapa = async (req, res) => {
    const eta = req.body;
    await client.query("INSERT INTO Etapa (eta_numero,eta_nombre,fk_ex_id) VALUES ("+eta.numero+",'"+eta.nombre+"',"+eta.explotacion+") RETURNING eta_id AS id")
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

etaCtrl.editEtapa = async (req, res) => {
    const id = req.params.id;
    const emp = req.body;
    await client.query("UPDATE Etapa SET eta_nombre = '"+emp.nombre+" WHERE eta_id = "+id)
        .then(response => {
            res.json('Actualizado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

etaCtrl.iniciarEtapa = async (req, res) => {
    const eta = req.body;
    const id = req.params.id;
    await client.query("UPDATE Etapa SET fk_est_clave = 2 WHERE eta_id = "+id+" AND fk_est_clave = 1")
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

etaCtrl.finalizarEtapa = async (req, res) => {
    const id = req.params.id;
    await client.query("UPDATE Etapa SET fk_est_clave = 3 WHERE eta_id = "+id+" AND fk_est_clave = 2")
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

etaCtrl.deleteEtapa = async (req,res) =>{
    const id = req.params.id;
    await client.query("DELETE FROM Etapa WHERE eta_id = "+id)
        .then(response => {
            res.json('Eliminado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
}

module.exports = etaCtrl;