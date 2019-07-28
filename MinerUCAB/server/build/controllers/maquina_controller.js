const maqCtrl = {};
const client  = require('../database/connectiondb');

maqCtrl.getMaquinas = async (req, res) => {
    await client.query("SELECT maq_id AS id, maq_costo AS costo, fk_tm_id as tipo, tm_nombre AS nombre FROM Maquina, Tipo_Maquina WHERE fk_tm_id = tm_id")
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

maqCtrl.getMaquinasTipo = async (req, res) => {  //obtiene maquinas segun un id de tipo maquina dado
    const id = req.params.id;
    await client.query("SELECT maq_id AS id, tm_nombre AS tipo_maquina, maq_costo AS costo FROM maquina, tipo_maquina WHERE tm_id = "+id+" AND tm_id = fk_tm_id")
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
}

maqCtrl.createMaquina = async (req, res) => {
    const maq = req.body;
    await client.query("INSERT INTO Maquina (maq_costo,fk_tm_id) VALUES ("+maq.costo+","+maq.tipo+")")
        .then(response => {
            res.json('Insertado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

maqCtrl.editCostoMaquina = async (req, res) => {
    const id = req.params.id;
    const maq = req.body;
    await client.query("UPDATE Maquina SET maq_costo = "+maq.costo+" WHERE maq_id = "+id)
        .then(response => {
            res.json('Actualizado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

maqCtrl.deleteMaquina = async (req, res) => {
    const id = req.params.id;
    await client.query("DELETE FROM Maquina WHERE maq_id = "+id)
        .then(response => {
            res.json('Maquina Eliminada');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

module.exports = maqCtrl;