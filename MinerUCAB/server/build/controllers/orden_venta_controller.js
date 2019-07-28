const ovCtrl = {};
const client = require('../database/connectiondb');

ovCtrl.getOrdenesVenta = async (req, res) => {
    await client.query("SELECT ov_fecha AS Fecha, fk_cl_id AS Cliente, ov_total AS Total FROM Orden_Venta")
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

ovCtrl.getOrdenVenta = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT ov_numero AS id, ov_fecha AS Fecha, fk_cl_id AS Cliente, ov_total AS Total FROM Orden_Venta WHERE ov_numero = "+id)
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

ovCtrl.getOrdenesVentaCliente = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT ov_numero AS id,ov_fecha AS Fecha, fk_cl_id AS Cliente, ov_total AS Total FROM Orden_Venta WHERE fk_cl_id = "+id)
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

ovCtrl.createOrdenVenta = async (req, res) => {
    const ov = req.body;
    await client.query("INSERT INTO Orden_Venta (ov_fecha,fk_cl_id,ov_total) VALUES ('"+ov.fecha+"',"+ov.cliente+","+ov.total+") RETURNING ov_numero AS id")
        .then(response => {
            res.json(response.rows);
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

ovCtrl.getOrdenVentaPorRecibir = async (req, res) => {
    await client.query("SELECT ov_numero AS id,ov_fecha AS Fecha, fk_cl_id AS Cliente FROM Orden_Venta WHERE fk_est_clave = 5")
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

ovCtrl.getOrdenVentaRecibidas = async (req, res) => {
    await client.query("SELECT ov_numero AS id,ov_fecha AS Fecha, fk_cl_id AS Cliente FROM Orden_Venta WHERE fk_est_clave = 6")
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

ovCtrl.despacharVenta = async (req, res) => {
    const id = req.params.id;
    await client.query("UPDATE Orden_Venta SET fk_est_clave = 6 WHERE ov_numero = "+id+" AND fk_est_clave <> 6")
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

module.exports = ovCtrl;