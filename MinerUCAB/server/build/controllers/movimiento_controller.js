const movCtrl = {};
const client  = require('../database/connectiondb');

movCtrl.getMovimientosOC = async (req, res) => {
    await client.query("SELECT mov_id AS id, mov_cantidad AS cantidad, fk_ma_id AS minalm, fk_oc_numero AS compra, fk_est_clave AS estatus FROM Movimiento WHERE fk_oc_numero IS NOT NULL")
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

movCtrl.getMovimientosOV = async (req, res) => {
    await client.query("SELECT mov_id AS id, mov_cantidad AS cantidad, fk_ma_id AS minalm, fk_ov_numero AS venta, fk_est_clave AS estatus FROM Movimiento WHERE fk_ov_numero IS NOT NULL")
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

movCtrl.getMovimientosEX = async (req, res) => {
    await client.query("SELECT mov_id AS id, mov_cantidad AS cantidad, fk_ma_id AS minalm, fk_ex_id AS explotacion, fk_est_clave AS estatus FROM Movimiento WHERE fk_ex_id IS NOT NULL")
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

movCtrl.getMovimientoOC = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT mov_id AS id, mov_cantidad AS cantidad, fk_ma_id AS minalm, fk_oc_numero AS compra, fk_est_clave AS estatus FROM Movimiento WHERE fk_oc_numero IS NOT NULL AND fk_oc_numero = "+id)
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

movCtrl.createMovimientoOC = async (req, res) => {
    const mov = req.body;
    await client.query("INSERT INTO Movimiento (mov_cantidad,fk_ma_id,fk_oc_numero) VALUES ("+mov.cantidad+","+mov.minalm+","+mov.compra+")")
        .then(response => {
            res.json('Insertado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

movCtrl.cambiarEstatusOC = async (req, res) => {
    const id = req.params.id;
    await client.query("UPDATE Movimiento SET fk_est_clave = 6 WHERE fk_oc_numero = "+id+" AND fk_est_clave <> 6 RETURNING fk_ma_id AS almacen, mov_cantidad AS cantidad")
        .then(response => {
            res.json(response.rows);
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

movCtrl.getMovimientoOV = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT mov_id AS id, mov_cantidad AS cantidad, fk_ma_id AS minalm, fk_ov_numero AS venta, fk_est_clave AS estatus FROM Movimiento WHERE fk_ov_numero IS NOT NULL AND fk_ov_numero = "+id)
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

movCtrl.getCantidades = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT mov_id AS id, mov_cantidad AS movCant, fk_ma_id AS minalm, ma_cantidad AS minalmCant FROM Movimiento, Min_Alm WHERE fk_ov_numero = "+id+"  AND fk_ma_id = ma_id")
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

movCtrl.createMovimientoOV = async (req, res) => {
    const mov = req.body;
    console.log(mov);
    await client.query("INSERT INTO Movimiento (mov_cantidad,fk_ma_id,fk_ov_numero) VALUES ("+mov.cantidad+","+mov.minalm+","+mov.venta+")")
        .then(response => {
            res.json('Insertado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

movCtrl.cambiarEstatusOV = async (req, res) => {
    const id = req.params.id;
    await client.query("UPDATE Movimiento SET fk_est_clave = 6 WHERE fk_ov_numero = "+id+" AND fk_est_clave <> 6 RETURNING fk_ma_id AS almacen, mov_cantidad AS cantidad")
        .then(response => {
            res.json(response.rows);
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};
//---------------
movCtrl.getMovimientoEX = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT mov_id AS id, mov_cantidad AS cantidad, fk_ma_id AS minalm, fk_ex_id AS explotacion, fk_est_clave AS estatus FROM Movimiento WHERE fk_ex_id IS NOT NULL AND fk_ex_id = "+id)
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

movCtrl.createMovimientoEX = async (req, res) => {
    const mov = req.body;
    await client.query("INSERT INTO Movimiento (mov_cantidad,fk_ma_id,fk_ex_id) VALUES ("+mov.cantidad+","+mov.minalm+","+mov.explotacion+")")
        .then(response => {
            res.json('Insertado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

movCtrl.cambiarEstatusEX = async (req, res) => {
    const id = req.params.id;
    await client.query("UPDATE Movimiento SET fk_est_clave = 6 WHERE fk_ex_id = "+id+" AND fk_est_clave <> 6 RETURNING fk_ma_id AS almacen, mov_cantidad AS cantidad")
        .then(response => {
            res.json(response.rows);
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

module.exports = movCtrl;