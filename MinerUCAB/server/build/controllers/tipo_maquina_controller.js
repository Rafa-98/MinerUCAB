const tmCtrl = {};
const client = require('../database/connectiondb');

tmCtrl.getTipoMaquinas = async (req,res) => {
    await client.query("SELECT tm_id AS id, tm_nombre as nombre FROM Tipo_Maquina")
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

module.exports = tmCtrl;