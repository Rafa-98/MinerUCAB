const rolpriCtrl = {};
const client = require('../database/connectiondb');

rolpriCtrl.getRolesPri = async (req,res) => {
    await client.query("select rp_clave as Clave, fk_pri_clave as Privilegio, fk_r_clave as Rol from Rol_Pri")
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
}; //Te devuelve todos los roles con sus privilegios

rolpriCtrl.getRolPri = async (req,res) => {
    const id = req.params.id;
    await client.query("select rp_clave as Clave, fk_pri_clave as Privilegio, fk_r_clave as Rol from Rol_Pri where rp_clave = "+id)
        .then(response=>{
            if(response.rowCount)
                res.json(response.rows);
            else
                res.json('Sin resultados');
        })
        .catch(err =>{
            console.log(err);
            res.json(' Ha ocurrido un error');
        })
}// Te devuelve un rol y su privilegio en especifico con la clave del rol_pri

rolpriCtrl.getRolPriR = async (req,res) => {
    const id = req.params.id;
    await client.query("select rp_clave as Clave, fk_pri_clave as Privilegio, fk_r_clave as Rol from Rol_Pri where fk_r_clave = "+id)
        .then(response=>{
            if(response.rowCount)
                res.json(response.rows);
            else
                res.json('Sin resultados');
        })
        .catch(err =>{
            console.log(err);
            res.json(' Ha ocurrido un error');
        })
}// Te devuelve los privilegios que tiene un rol en especifico

rolpriCtrl.getRolPriP = async (req,res) => {
    const id = req.params.id;
    await client.query("select rp_clave as Clave, fk_pri_clave as Privilegio, fk_r_clave as Rol from Rol_Pri where fk_pri_clave = "+id)
        .then(response=>{
            if(response.rowCount)
                res.json(response.rows);
            else
                res.json('Sin resultados');
        })
        .catch(err =>{
            console.log(err);
            res.json(' Ha ocurrido un error');
        })
}// Te devuelve un privilegio en especifico, con todos los roles en donde está asignado 

rolpriCtrl.createRolPri = async (req, res) => {
    const rolpri = req.body;
    await client.query("Insert into Rol_pri (fk_r_clave, fk_pri_clave) Values ("+rolpri.rol+","+rolpri.privilegio+")")
        .then(response => {
            res.json('Insertado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};// Asignas un privilegio con un rol

rolpriCtrl.deleteRolPri = async (req, res) => {
    const id = req.params.id;
    const id2 = req.params.id2;
    await client.query("DELETE FROM Rol_Pri WHERE fk_r_clave = "+id2+" and fk_pri_clave = "+id)
        .then(response =>{
            if(response.rowCount)
                res.json('Eliminado');
            else
                res.json('Sin Resultados');
        })
        .catch(err=>{
            console.log(err);
            res.json('Ha ocurrido un error');
        })
}// Eliminas la relacion del rol y el privilegio por la clave

module.exports = rolpriCtrl;