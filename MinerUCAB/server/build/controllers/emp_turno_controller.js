const empturCtrl = {};
const client = require('../database/connectiondb');

empturCtrl.getEmpTurnos = async (req, res) => {
    await client.query("SELECT et_id AS id, t_id AS turno t_hora_inicio AS inicio, t_hora_fin as fin, t_dia as dia, fk_em_id as empleado FROM Turno, Emp_Turno WHERE t_id = fk_t_id")
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

empturCtrl.getEmpTurnosEmpleado = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT et_id AS id,t_id AS turno, t_hora_inicio AS inicio, t_hora_fin as fin, t_dia as dia, fk_em_id as empleado FROM Turno, Emp_Turno WHERE t_id = fk_t_id AND fk_em_id ="+id)
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

empturCtrl.getEmpTurnosNoEmpleado = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT t_id, t_hora_inicio, t_hora_fin, t_dia FROM Turno WHERE t_id NOT IN (SELECT t_id FROM Turno, Emp_Turno WHERE t_id = fk_t_id AND fk_em_id = "+id+")")
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

empturCtrl.createEmpTurno = async (req, res) => {
    const et = req.body;
    await client.query("INSERT INTO Emp_Turno (fk_em_id, fk_t_id) VALUES ("+et.empleado+","+et.turno+")")
        .then(response => {
            res.json('Insertado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

empturCtrl.deleteEmpTurno = async (req, res) => {
    const id = req.params.id;
    await client.query("DELETE FROM Emp_Turno WHERE et_id = "+id)
        .then(response => {
            res.json('Emp_Turno Eliminado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

module.exports = empturCtrl;