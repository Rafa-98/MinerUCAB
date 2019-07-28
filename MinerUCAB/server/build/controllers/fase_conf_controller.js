const faseconfCtrl = {};
const client = require('../database/connectiondb');

faseconfCtrl.createConfigFase = async (req, res) => {
    const cf = req.body;
    await client.query("INSERT INTO Fase_Conf (fc_nombre, fc_dias_duracion) VALUES ('"+cf.nombre+"',"+cf.duracion+")")
        .then(response => {
            res.json('Insertado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
}; // crea una nueva configuracion

faseconfCtrl.getConfigFases = async (req, res) => {
    await client.query("SELECT fc_clave AS Clave, fc_nombre AS nombre, fc_dias_duracion AS Duracion FROM Fase_Conf ")
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
}; // Obtienes todas las configuraciones

faseconfCtrl.getConfigFase = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT fc_clave AS Clave, fc_nombre AS nombre, fc_dias_duracion AS Duracion FROM Fase_Conf WHERE fc_clave ="+id)
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
}; // obtienes una conf especifica

faseconfCtrl.editConfigFase = async (req, res) => {
    const id = req.params.id;
    const cf = req.body;
    await client.query("UPDATE Fase_conf SET fc_dias_duracion ="+cf.duracion+" WHERE fc_clave = "+id)
        .then(response => {
            res.json('Actualizado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
}; // editas la duracion de la configuracion

faseconfCtrl.deleteConfigFase = async (req,res) => {
    const id = req.params.id;
    await client.query("DELETE FROM Fase_Conf WHERE fc_clave = "+id)
        .then(response => {
            res.json('Configuracion eliminada');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
}// elimina una configuracion
module.exports = faseconfCtrl;