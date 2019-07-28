const tipoPagoCtrl = {};
const client  = require('../database/connectiondb');

tipoPagoCtrl.getTipoPagos = async (req, res) => {
    await client.query("SELECT * FROM Tipo_Pago")
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

tipoPagoCtrl.getTransferencias = async (req, res) => {
    await client.query("SELECT tp_numero AS id, tp_banco AS Banco, tp_fecha AS Fecha FROM Tipo_Pago WHERE tp_tipo = 'Transferencia'")
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

tipoPagoCtrl.getTransferencia = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT tp_numero AS id, tp_banco AS Banco, tp_fecha AS Fecha FROM Tipo_Pago WHERE tp_tipo = 'Transferencia' AND tp_numero ="+id)
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

tipoPagoCtrl.getTarsCredito = async (req, res) => {
    await client.query("SELECT tp_numero AS id, tp_banco AS Banco, tp_tipo_tar_cre AS Tipo, tp_fecha_vencimiento AS Vencimiento FROM Tipo_Pago WHERE tp_tipo = 'Tar_credito'")
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

tipoPagoCtrl.getTarCredito = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT tp_numero AS id, tp_banco AS Banco, tp_tipo_tar_cre AS Tipo, tp_fecha_vencimiento AS Vencimiento FROM Tipo_Pago WHERE tp_tipo = 'Tar_credito' AND tp_numero ="+id)
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

tipoPagoCtrl.getCheques = async (req, res) => {
    await client.query("SELECT tp_numero AS id, tp_banco AS Banco, tp_numero_cuenta AS \"Nro. Cuenta\" FROM Tipo_Pago WHERE tp_tipo = 'Cheque'")
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

tipoPagoCtrl.getCheque = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT tp_numero AS id, tp_banco AS Banco, tp_numero_cuenta AS \"Nro. Cuenta\" FROM Tipo_Pago WHERE tp_tipo = 'Cheque' AND tp_numero ="+id)
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

tipoPagoCtrl.getTarsDebito = async (req, res) => {
    await client.query("SELECT tp_numero AS id, tp_banco AS Banco, tp_tipo_tar_deb AS Tipo FROM Tipo_Pago WHERE tp_tipo = 'Tar_debito'")
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

tipoPagoCtrl.getTarDebito = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT tp_numero AS id, tp_banco AS Banco, tp_tipo_tar_deb AS Tipo FROM Tipo_Pago WHERE tp_tipo = 'Tar_debito' AND tp_numero ="+id)
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

tipoPagoCtrl.createTransferencia = async (req,res) => {
    const tp = req.body;
    await client.query("INSERT INTO Tipo_Pago (tp_tipo,tp_banco,tp_fecha) VALUES ('Transferencia','"+tp.banco+"','"+tp.fecha+"') RETURNING tp_numero AS id")
        .then(response => {
            res.json(response.rows);
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

tipoPagoCtrl.createTarCredito = async (req,res) => {
    const tp = req.body;
    await client.query("INSERT INTO Tipo_Pago (tp_tipo,tp_banco,tp_tipo_tar_cre,tp_fecha_vencimiento) VALUES ('Tar_credito','"+tp.banco+"','"+tp.tipo+"','"+tp.vencimiento+"') RETURNING tp_numero AS id")
        .then(response => {
            res.json(response.rows);
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

tipoPagoCtrl.createCheque = async (req,res) => {
    const tp = req.body;
    await client.query("INSERT INTO Tipo_Pago (tp_tipo,tp_banco,tp_numero_cuenta) VALUES ('Cheque','"+tp.banco+"','"+tp.nrocuenta+"') RETURNING tp_numero AS id")
        .then(response => {
            res.json(response.rows);
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

/*tipoPagoCtrl.createCheque = async (req,res) => {
    const tp = req.body;
    await client.query("INSERT INTO Tipo_Pago (tp_tipo,tp_banco,tp_numero_cuenta) VALUES ('Cheque','"+tp.banco+"','"+tp.nrocuenta+"')")
        .then(response => {
            res.json('Insertado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};*/

tipoPagoCtrl.createTarDebito = async (req,res) => {
    const tp = req.body;
    await client.query("INSERT INTO Tipo_Pago (tp_tipo,tp_banco,tp_tipo_tar_deb) VALUES ('Tar_debito','"+tp.banco+"','"+tp.tipo+"') RETURNING tp_numero AS id")
        .then(response => {
            res.json(response.rows);
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

module.exports = tipoPagoCtrl;