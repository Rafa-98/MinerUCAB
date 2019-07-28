const ocCtrl = {};
const client = require('../database/connectiondb');

ocCtrl.getOrdenesCompra = async (req, res) => {
    await client.query("SELECT oc_numero AS id, oc_fecha AS Fecha, fk_ali_id AS Aliado FROM Orden_Compra")
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

ocCtrl.getOrdenCompra = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT oc_numero AS id, oc_fecha AS Fecha, fk_ali_id AS Aliado FROM Orden_Compra WHERE oc_numero = "+id)
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

ocCtrl.getOrdenesCompraAliado = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT oc_numero AS id,oc_fecha AS Fecha, fk_ali_id AS Aliado FROM Orden_Compra WHERE fk_ali_id = "+id)
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

ocCtrl.createOrdenCompra = async (req, res) => {
    const oc = req.body;
    await client.query("INSERT INTO Orden_Compra (oc_fecha,fk_ali_id) VALUES ('"+oc.fecha+"',"+oc.aliado+") RETURNING oc_numero AS id")
        .then(response => {
            res.json(response.rows);
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

ocCtrl.getOrdenCompraPorRecibir = async (req, res) => {
    await client.query("SELECT oc_numero AS id,oc_fecha AS Fecha, fk_ali_id AS Aliado FROM Orden_Compra WHERE fk_est_clave = 5")
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

ocCtrl.getOrdenCompraRecibidas = async (req, res) => {
    await client.query("SELECT oc_numero AS id,oc_fecha AS Fecha, fk_ali_id AS Aliado FROM Orden_Compra WHERE fk_est_clave = 6")
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

ocCtrl.recibirCompra = async (req, res) => {
    const id = req.params.id;
    await client.query("UPDATE Orden_Compra SET fk_est_clave = 6 WHERE oc_numero = "+id+" AND fk_est_clave <> 6")
        .then(response => {
            if(response.rowCount)
                res.json('Recibida');
            else
                res.json('Sin resultados');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

module.exports = ocCtrl;