const pagoCtrl = {};
const client = require('../database/connectiondb');

pagoCtrl.getPagosOV = async (req,res) => {
    const id = req.params.id;
    await client.query("SELECT pag_monto AS monto, pag_fecha AS fecha,fk_ov_numero AS Venta, fk_tp_numero AS tipo FROM Pago WHERE fk_ov_numero = "+id)
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

pagoCtrl.createPago = async (req,res) => {
    const pago = req.body;
    console.log("llego aqui");
    await client.query("INSERT INTO Pago (pag_monto,pag_fecha,fk_ov_numero,fk_tp_numero) VALUES ("+pago.monto+",'"+pago.fecha+"',"+pago.venta+","+pago.tipo+")")
        .then(response => {
            console.log("Paso el query");
            if(response.rowCount)
                res.json('Insertado');
            else
                res.json('Sin resultados');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

module.exports = pagoCtrl;