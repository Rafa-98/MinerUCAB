const fmCtrl = {};
const client = require('../database/connectiondb');

fmCtrl.getFaseMaqs = async (req,res) => {
    await client.query("SELECT fm_id AS id, fm_costo AS Costo, fk_f_id AS Fase, fk_maq_id AS Maquina, fk_est_clave AS Estatus FROM fase_maq")
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
}// muestra todas las fases con todas las maquinas por clave fase_maq

fmCtrl.getFaseMaq = async (req,res) => {
    const id = req.params.id;
    await client.query("SELECT fm_id AS id, fm_costo AS Costo, fk_f_id AS Fase, fk_maq_id AS Maquina, fk_est_clave AS Estatus FROM fase_maq WHERE fm_id = "+id)
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
}// muestra una fase_maq especifica por su clave

fmCtrl.getFaseMaqF = async (req,res) => {
    const id = req.params.id;
    await client.query("SELECT fm_id AS id, fm_costo AS Costo, fk_f_id AS Fase, fk_maq_id AS Maquina, fk_est_clave AS Estatus FROM fase_maq WHERE fk_f_id = "+id)
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
}// muestra todas las maquinas de una fase especifica

fmCtrl.getFaseMaqM = async (req,res) => {
    const id = req.params.id;
    await client.query("SELECT fm_id AS id, fm_costo AS Costo, fk_f_id AS Fase, fk_maq_id AS Maquina, fk_est_clave AS Estatus FROM fase_maq WHERE fk_maq_id = "+id)
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
}// muestra las fases en donde hay una maquina en especifico

fmCtrl.createFaseMaq = async (req,res) => {
    const fm = req.body;
    await client.query("INSERT INTO Fase_Maq (fm_costo, fk_f_id, fk_maq_id) VALUES ("+fm.costo+","+fm.fase+","+fm.maquina+")")
        .then(response => {
            res.json('Insertado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
} // Asigna una nueva Fase_Maq

fmCtrl.deleteFaseMaq = async (req,res) => {
    const id = req.params.id;
    await client.query("DELETE FROM Fase_Maq WHERE fm_id = "+id)
        .then(response => {
            res.json('eliminado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
}// borra la la conf de los cargos

fmCtrl.iniciarFaseMaq = async (req, res) => {
    const id = req.params.id;
    await client.query("UPDATE Fase_Maq SET fk_est_clave = 2 WHERE fm_id = "+id+" AND fk_est_clave = 4")
        .then(response => {
            if(response.rowCount)
                res.json('Fase_Maq iniciada');
            else
                res.json('Sin resultados');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
}; // cambia el estatus de por iniciar a en proceso

fmCtrl.finalizarFaseMaq = async (req, res) => {
    const id = req.params.id;
    await client.query("UPDATE Fase_Maq SET fk_est_clave = 3 WHERE fm_id = "+id+" AND fk_est_clave = 2")
        .then(response => {
            if(response.rowCount)
                res.json('FaseMaq Finalizada');
            else
                res.json('Sin resultados');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
}; // cambia el estatus de en proceso a finalizada
module.exports = fmCtrl;