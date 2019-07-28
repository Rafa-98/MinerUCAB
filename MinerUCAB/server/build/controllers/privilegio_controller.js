const priCtrl = {};
const client = require('../database/connectiondb');

priCtrl.getPrivilegios = async (req,res) => {
    await client.query("SELECT pri_clave AS id, pri_nombre AS Nombre FROM Privilegio")
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

priCtrl.getPrivilegio = async (req,res) => {
    const id = req.params.id;
    await client.query("SELECT pri_nombre AS Nombre FROM Privilegio WHERE pri_clave = "+id)
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

priCtrl.getrolPri = async (req,res) => {
    const id = req.params.id;
    await client.query("SELECT pri_clave AS id, pri_nombre AS Nombre FROM Privilegio, Rol_Pri WHERE fk_r_clave = "+id+" AND pri_clave = fk_pri_clave")
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
}; // Trae todos los privilegios que pertenecen a un mismo rol

priCtrl.getrolPriNo = async (req,res) => {
    const id = req.params.id;
    await client.query("SELECT pri_clave AS id, pri_nombre AS nombre FROM Privilegio WHERE pri_clave NOT IN ( SELECT fk_pri_clave  FROM Rol_Pri WHERE fk_r_clave = "+id+")")
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

module.exports = priCtrl;