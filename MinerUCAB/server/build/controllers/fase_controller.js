const fCtrl = {};
const client  = require('../database/connectiondb');

fCtrl.getFasesEtapa = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT f.f_id AS id, f.f_numero AS numero, f.f_fecha_inicio AS inicio, f.f_fecha_fin AS fin, f.fk_eta_id AS etapa, fk_ex_id AS explotacion, f.fk_est_clave AS estatus FROM Fase f, Etapa WHERE fk_eta_id = "+id+" AND fk_eta_id = eta_id")
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

fCtrl.getFasesEtapaConf = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT f.f_id AS id, f.f_numero AS numero, f.f_fecha_inicio AS inicio, f.f_fecha_fin AS fin, f.fk_eta_id AS etapa, fk_ex_id AS explotacion, f.fk_est_clave AS estatus, est_nombre AS nombre FROM Fase f, Etapa, Estatus WHERE fk_eta_id = "+id+" AND fk_eta_id = eta_id AND f.fk_est_clave = 1 AND f.fk_est_clave = est_clave")
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

fCtrl.getFasesEtapaPro = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT f.f_id AS id, f.f_numero AS numero, f.f_fecha_inicio AS inicio, f.f_fecha_fin AS fin, f.fk_eta_id AS etapa, fk_ex_id AS explotacion, f.fk_est_clave AS estatus FROM Fase f, Etapa WHERE fk_eta_id = "+id+" AND fk_eta_id = eta_id AND f.fk_est_clave = 2")
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

fCtrl.getFasesEtapaTer = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT f.f_id AS id, f.f_numero AS numero, f.f_fecha_inicio AS inicio, f.f_fecha_fin AS fin, f.fk_eta_id AS etapa, fk_ex_id AS explotacion, f.fk_est_clave AS estatus FROM Fase f, Etapa WHERE fk_eta_id = "+id+" AND fk_eta_id = eta_id AND f.fk_est_clave = 3")
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

fCtrl.getFasesExplotacion = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT f.f_id AS id, f.f_numero AS numero, f.f_fecha_inicio AS inicio, f.f_fecha_fin AS fin, f.fk_eta_id AS etapa, fk_ex_id AS explotacion, f.fk_est_clave AS estatus FROM Fase f, Etapa WHERE fk_ex_id = "+id+" AND fk_eta_id = eta_id")
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

fCtrl.getFasesEtapaPorTerminar = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT f.f_id AS id, f.f_numero AS numero, f.f_fecha_inicio AS inicio, f.f_fecha_fin AS fin, f.fk_eta_id AS etapa, e.fk_ex_id AS explotacion, f.fk_est_clave AS estatus FROM Fase f, Etapa e WHERE f.fk_eta_id = "+id+" AND f.fk_eta_id = e.eta_id AND f.fk_est_clave <> 3")
        .then(response => {
            res.json(response.rowCount);
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

fCtrl.getFasesExplotacionPorTerminar = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT f.f_id AS id, f.f_numero AS numero, f.f_fecha_inicio AS inicio, f.f_fecha_fin AS fin, f.fk_eta_id AS etapa, e.fk_ex_id AS explotacion, f.fk_est_clave AS estatus FROM Fase f, Etapa e WHERE e.fk_ex_id = "+id+" AND f.fk_eta_id = e.eta_id AND f.fk_est_clave <> 3")
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

fCtrl.createFase = async (req, res) => {
    const fase = req.body;
    await client.query("INSERT INTO Fase (f_numero,f_fecha_inicio,f_fecha_fin,fk_eta_id,fk_fc_clave) VALUES ("+fase.numero+",'"+fase.inicio+"','"+fase.fin+"',"+fase.etapa+","+fase.conf+") RETURNING f_id AS id")
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

fCtrl.iniciarFase = async (req, res) => {
    const id = req.params.id;
    await client.query("UPDATE Fase SET fk_est_clave = 2 WHERE f_id = "+id+" AND fk_est_clave = 1")
        .then(response => {
            if(response.rowCount)
                res.json('Fase iniciada');
            else
                res.json('Sin resultados');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

fCtrl.finalizarFase = async (req, res) => {
    const id = req.params.id;
    await client.query("UPDATE Fase SET fk_est_clave = 3 WHERE f_id = "+id+" AND fk_est_clave = 2")
        .then(response => {
            if(response.rowCount)
                res.json('Fase Finalizada');
            else
                res.json('Sin resultados');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

fCtrl.deleteFase = async (req,res) =>{
    const id = req.params.id;
    await client.query("DELETE FROM Fase WHERE f_id = "+id)
        .then(response => {
            res.json('Eliminado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
}
module.exports = fCtrl;