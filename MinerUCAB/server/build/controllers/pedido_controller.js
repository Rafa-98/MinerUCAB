const pedCtrl = {};
const client = require('../database/connectiondb');

pedCtrl.getPedidosOC = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT ped_id AS id, ped_cantidad as cantidad, fk_oc_numero AS compra, fk_am_id AS alimin, mi_nombre AS mineral FROM Pedido, Ali_Min, Mineral WHERE fk_oc_numero = "+id+" AND fk_am_id = am_id AND fk_mi_id = Mi_id")
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

pedCtrl.createPedido = async (req, res) => {
    const ped = req.body;
    await client.query("INSERT INTO Pedido (ped_cantidad,fk_oc_numero,fk_am_id) VALUES ("+ped.cantidad+","+ped.compra+","+ped.alimin+") RETURNING ped_id AS id")
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

pedCtrl.obtenerMinAlm = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT b.ma_id AS id FROM Pedido, Ali_Min a, Mineral, Min_Alm b WHERE ped_id = "+id+" AND fk_am_id = am_id AND a.fk_mi_id = mi_id AND mi_id = b.fk_mi_id")
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

module.exports = pedCtrl;