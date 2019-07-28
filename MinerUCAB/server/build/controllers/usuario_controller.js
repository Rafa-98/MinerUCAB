const userCtrl = {};
const client = require('../database/connectiondb');

userCtrl.getUsuarios = async (req, res) => {
    await client.query("SELECT u_clave AS Id, u_nombre AS login, u_password AS password, em_nombre AS nombre, em_apellido AS apellido, r_nombre AS Rol FROM Usuario, Empleado, Rol WHERE fk_em_id = em_id AND fk_r_clave = r_clave")
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

userCtrl.getUsuario = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT u_clave AS id, u_nombre AS login, u_password AS password, fk_em_id AS Empleado, fk_r_clave AS Rol FROM Usuario WHERE u_clave = "+id)
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

userCtrl.getUsuariosRol = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT u_nombre AS login, u_password AS password, fk_em_id AS Empleado, fk_r_clave AS Rol FROM Usuario WHERE fk_r_clave = "+id)
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

userCtrl.getUsuariosEmpleado = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT u_nombre AS login, u_password AS password, fk_em_id AS Empleado, fk_r_clave AS Rol FROM Usuario WHERE fk_em_id = "+id)
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

userCtrl.createUsuario = async (req, res) => {
    const user = req.body;
    await client.query("INSERT INTO Usuario (u_nombre,u_password,fk_em_id,fk_r_clave) VALUES ('"+user.login+"','"+user.password+"',"+user.empleado+","+user.rol+")")
        .then(response => {
            res.json('Insertado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

userCtrl.IngresoUsuario = async (req, res) => {
    const user = req.body;
    await client.query("SELECT u_nombre AS login, u_password AS password, fk_em_id AS Empleado, fk_r_clave AS rol FROM Usuario WHERE u_nombre = '"+user.login+"' AND u_password = '"+user.password+"'")
        .then(response => {
            if(response.rowCount)
                res.json(response.rows);                
            else
                res.json({ login: 'Usuario y/o contraseña incorrecto' });                
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

userCtrl.editUsuario = async (req, res) => {
    const id = req.params.id;
    const user = req.body;
    await client.query("UPDATE Usuario SET u_nombre = '"+user.login+"', u_password = '"+user.password+"', fk_em_id = "+user.empleado+", fk_r_clave = "+user.rol+" WHERE u_clave = "+id)
        .then(response => {
            res.json('Actualizado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

userCtrl.deleteUsuario = async (req, res) => {
    const id = req.params.id;
    await client.query("DELETE FROM Usuario WHERE u_clave = "+id)
        .then(response => {
            res.json('Usuario Eliminado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

module.exports = userCtrl;