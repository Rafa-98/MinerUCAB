const lCtrl = {};
const client = require('../database/connectiondb');

lCtrl.getEstados = async (req, res) => {
    await client.query("SELECT * FROM Lugar WHERE l_tipo = 'Estado'")
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

lCtrl.getMunicipios = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT * FROM Lugar WHERE l_tipo = 'Municipio' AND fk_l_clave ="+id)
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

lCtrl.getParroquias = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT * FROM Lugar WHERE l_tipo = 'Parroquia' AND fk_l_clave ="+id)
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

lCtrl.getDireccion = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT e.l_nombre AS Estado, e.l_clave AS E_clave, b.l_nombre AS Municipio, b.l_clave AS m_clave, f.l_nombre AS Parroquia, f.l_clave AS p_clave FROM Lugar E, Lugar B, Lugar F WHERE "+id+" = f.l_clave AND f.fk_l_clave = b.l_clave AND b.fk_l_clave = e.l_clave;")
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

module.exports = lCtrl;