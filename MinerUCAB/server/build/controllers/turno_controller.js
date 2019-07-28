const tCtrl = {};
const client = require('../database/connectiondb');

tCtrl.getTurnos = async (req, res) => {
    await client.query("SELECT t_id AS id, t_dia AS Dia,t_hora_inicio AS inicio,t_hora_fin AS Fin FROM Turno")
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

tCtrl.getTurno = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT t_id AS id, t_dia AS Dia,t_hora_inicio AS inicio,t_hora_fin AS Fin FROM Turno WHERE t_id = "+id)
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

tCtrl.getTurnoDia = async (req, res) => {
    const dia = req.params.dia;
    await client.query("SELECT t_id AS id, t_dia AS Dia,t_hora_inicio AS inicio,t_hora_fin AS Fin FROM Turno WHERE t_dia = '"+dia+"'")
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

tCtrl.getTurnoHoraInicio = async (req, res) => {
    const hora = req.params.hora;
    await client.query("SELECT t_id AS id, t_dia AS Dia,t_hora_inicio AS inicio,t_hora_fin AS Fin FROM Turno WHERE t_hora_inicio = '"+hora+":00'")
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

tCtrl.getTurnoHoraFin = async (req, res) => {
    const hora = req.params.hora;
    await client.query("SELECT t_id AS id, t_dia AS Dia,t_hora_inicio AS inicio,t_hora_fin AS Fin FROM Turno WHERE t_hora_fin = '"+hora+":00'")
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

tCtrl.createTurno = async (req, res) => {
    const tur = req.body;
    await client.query("INSERT INTO Turno (t_dia,t_hora_inicio,t_hora_fin) VALUES ('"+tur.dia+"','"+tur.inicio+"','"+tur.fin+"')")
        .then(response => {
            res.json('Insertado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

tCtrl.editTurno = async (req, res) => {
    const id = req.params.id;
    const tur = req.body;
    await client.query("UPDATE Turno SET t_dia = '"+tur.dia+"', t_hora_inicio = '"+tur.inicio+"', t_hora_fin = '"+tur.fin+"' WHERE t_id = "+id)
        .then(response => {
            res.json('Actualizado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

tCtrl.deleteTurno = async (req, res) => {
    const id = req.params.id;
    await client.query("DELETE FROM Turno WHERE t_id = "+id)
        .then(response => {
            res.json('Turno Eliminado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

module.exports = tCtrl;