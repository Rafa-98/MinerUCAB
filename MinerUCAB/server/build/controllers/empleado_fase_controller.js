const efCtrl = {};
const client = require('../database/connectiondb');

efCtrl.getEmpleadosfases = async (req, res) => {
    await client.query("SELECT ef_id AS Id, ef_costo AS Costo, fk_f_id AS Fase, fk_em_id AS Empleado, fk_est_clave AS Estatus FROM Emp_Fase")
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
}; // obtener todos los empleados de todas las fases

efCtrl.getEmpleadosFase = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT ef_id AS Id, ef_costo AS Costo, fk_f_id AS Fase, fk_em_id AS Empleado, fk_est_clave AS Estatus FROM Emp_Fase WHERE fk_f_id ="+id)
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
}; // obtiene todos los empleados de una fase en especifico

efCtrl.createEmpleadoFase = async (req, res) => {
    const emp = req.body;
    await client.query("INSERT INTO Emp_Fase (ef_costo, fk_f_id, fk_em_id) VALUES ("+emp.costo+","+emp.fase+","+emp.empleado+")")
        .then(response => {
            res.json('Insertado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
}; // Asigna un empleado a una fase

efCtrl.IniciarEmpleadoFase = async (req, res) => {
    const id = req.params.id;
    await client.query("UPDATE Emp_Fase SET fk_est_clave = 2 WHERE ef_id = "+id+" AND fk_est_clave = 4")
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
};// inicia el empleado en la fase

efCtrl.FinalizarEmpleadoFase = async (req, res) => {
    const id = req.params.id;
    await client.query("UPDATE Emp_Fase SET fk_est_clave = 3 WHERE ef_id = "+id+" AND fk_est_clave = 2")
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
};// finaliza el estatus del empleado en la fase

efCtrl.deleteEmpleadoFase = async (req, res) => {
    const id = req.params.id;
    await client.query("DELETE FROM Emp_Fase WHERE ef_id = "+id)
        .then(response => {
            res.json('Empleado fase Eliminado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
}; // borra un empleado de una fase

module.exports = efCtrl;