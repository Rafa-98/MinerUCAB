const reportCtrl = {};
const client = require('../database/connectiondb');
const request = require('request');

function redata (rep, tem, res){
    const data = {
        template: {
            "shortid": tem
        },
        data : {
            rep
        },
        options:{
            preview: true
        }
    }
    const options = {
        url: 'http://localhost:8001/api/report',
        method: 'POST',
        json: data
    }
    request(options).pipe(res)
}

reportCtrl.getReporte1 = async (req, res) => {
    await client.query('SELECT ali_nombre AS Aliado, count(fk_ali_id) AS Compras FROM Orden_Compra, Aliado WHERE ali_id = fk_ali_id GROUP BY fk_ali_id, ali_nombre ORDER BY Compras DESC LIMIT 1;')
        .then(response => {
            console.log('Generando Reporte 1');
            redata(response.rows,'IR5BFXe',res);
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

reportCtrl.getReporte2 = async (req, res) => { //por agregar periodo de tiempo
    const rep = req.params.fecha;
    const fecha = rep.split('+');
    const inicio = fecha[0];
    const fin = fecha[1];
    await client.query("SELECT ex_id AS exp, f_numero AS numero,f_fecha_inicio AS inicio,f_fecha_fin AS fin , f_fecha_fin_real AS final  FROM Fase, Fase_Conf, Etapa, Explotacion WHERE fk_fc_clave = fc_clave AND f_fecha_fin < f_fecha_fin_real AND ( f_fecha_inicio BETWEEN '"+inicio+"' AND '"+fin+"' OR f_fecha_fin BETWEEN '"+inicio+"' AND '"+fin+"' OR '"+inicio+"' BETWEEN f_fecha_inicio AND f_fecha_fin OR '"+fin+"' BETWEEN f_fecha_inicio AND f_fecha_fin ) AND fk_eta_id = eta_id AND fk_ex_id = ex_id;")
        .then(response => {
            console.log('Generando Reporte 2');
            redata(response.rows,'fB3jAw8',res);
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

reportCtrl.getReporte3 = async (req, res) => { //por agregar periodo de tiempo
    const rep = req.params.mes;
    await client.query("SELECT ex.ex_id codigo, SUM(fm_costo)+SUM(ef_costo) AS costo, '"+rep+"' AS mes FROM Explotacion ex, Etapa, Fase, Fase_Maq fm, Emp_Fase ef WHERE '"+rep+"-01' >= ex_fecha AND '"+rep+"-01' <= (SELECT f_fecha_fin FROM Explotacion q, Etapa, Fase WHERE q.ex_id = ex.ex_id AND q.ex_id = fk_ex_id AND eta_id = fk_eta_id ORDER BY f_fecha_fin DESC LIMIT 1) AND ex.ex_id = fk_ex_id AND eta_id = fk_eta_id AND f_id = ef.fk_f_id AND f_id = fm.fk_f_id GROUP BY ex.ex_id ORDER BY costo DESC LIMIT 1;")
        .then(response => {
            console.log('Generando Reporte 3');
            redata(response.rows,'iLfQy06',res);
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

reportCtrl.getReporte4 = async (req, res) => {
    await client.query('SELECT cl_id,cl_nombre AS nombre, cl_apellido AS apellido, sum(ov_total) AS total FROM Cliente, Orden_Venta WHERE cl_id = fk_cl_id GROUP BY fk_cl_id, cl_apellido, cl_nombre, cl_id ORDER BY total LIMIT 10;')
        .then(response => {
            console.log('Generando Reporte 4');
            redata(response.rows,'rkJTnK2ce',res);
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

reportCtrl.getReporte5 = async (req, res) => {
    const rep = req.params.fecha;
    const fecha = rep.split('+');
    const inicio = fecha[0];
    const fin = fecha[1];
    await client.query("SELECT fc_nombre AS nombre, est_nombre AS estatus, ex_id AS proyecto FROM Fase f, Fase_Conf, Estatus, Etapa et, Explotacion ex WHERE f.fk_est_clave = est_clave AND f.fk_fc_clave = fc_clave AND f.fk_eta_id = et.eta_id AND et.fk_ex_id = ex.ex_id AND f.fk_est_clave = 1 AND ( f_fecha_inicio BETWEEN '"+inicio+"' AND '"+fin+"' OR f_fecha_fin BETWEEN '"+inicio+"' AND '"+fin+"' OR '"+inicio+"' BETWEEN f_fecha_inicio AND f_fecha_fin OR '"+fin+"' BETWEEN f_fecha_inicio AND f_fecha_fin)")
        .then(response => {
            console.log('Generando Reporte 5');
            redata(response.rows,'qHmjstz',res);
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

reportCtrl.getReporte6 = async (req, res) => {
    const rep = req.params.mes;
    await client.query("SELECT em_nombre AS nombre, em_apellido AS apellido, em_salario AS salario, count(fk_em_id) FROM Empleado, Emp_Fase, Fase WHERE em_id = fk_em_id AND fk_f_id = f_id AND '"+rep+"-01'  BETWEEN f_fecha_inicio AND f_fecha_fin GROUP BY fk_em_id, em_nombre, em_apellido, em_salario HAVING count(fk_em_id) > 2")
        .then(response => {
            console.log('Generando Reporte 6');
            redata(response.rows,'vNKPD40',res);
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

reportCtrl.getReporte7 = async (req, res) => {
    const rep = req.params.empfecha;
    const obj = rep.split('+');
    const emp = obj[0];
    const inicio = obj[1];
    const fin = obj[2];
    await client.query("SELECT em_nombre AS nombre, em_apellido AS apellido, y_nombre AS yacimiento, mi_nombre AS mineral FROM Yacimiento,Yac_Min,Explotacion,Etapa,Fase,Emp_Fase,Empleado, Mineral WHERE em_id = "+emp+" AND fk_em_id = em_id AND fk_f_id = f_id AND fk_eta_id = eta_id AND fk_ex_id = ex_id AND fk_ym_id = ym_id AND fk_mi_id = mi_id AND fk_y_id = y_id AND ( f_fecha_inicio BETWEEN '"+inicio+"' AND '"+fin+"' OR f_fecha_fin BETWEEN '"+inicio+"' AND '"+fin+"' OR '"+inicio+"' BETWEEN f_fecha_inicio AND f_fecha_fin OR '"+fin+"' BETWEEN f_fecha_inicio AND f_fecha_fin)")
        .then(response => {
            console.log('Generando Reporte 7');
            redata(response.rows,'anjH~Ox',res);
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

reportCtrl.getReporte8 = async (req, res) => {
    const rep = req.params.year;
    await client.query("SELECT pre_tipo AS tipo, pre_cantidad AS cantidad, mp_costo AS costo, mi_nombre AS mineral, sum(fm_cantidad) AS total FROM Presentacion, Mineral, Min_Pre, Fact_Mineral, Orden_Venta WHERE pre_clave = fk_pre_clave AND mi_id = fk_mi_id AND mp_id = fk_mp_id AND fk_ov_numero = ov_numero AND ov_fecha >= '"+rep+"-01-01' AND ov_fecha <= '"+rep+"-12-31' GROUP BY fk_mp_id, pre_tipo, pre_cantidad, mi_nombre, mp_costo ORDER BY total DESC LIMIT 1;")
        .then(response => {
            console.log('Generando Reporte 8');
            redata(response.rows,'K~Rfcif',res);
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

reportCtrl.getReporte9 = async (req, res) => {
    const rep = req.params.fecha;
    const fecha = rep.split('+');
    const inicio = fecha[0];
    const fin = fecha[1];
    await client.query("SELECT maq_id AS numero, tm_nombre AS nombre, maq_costo AS costo, count(fm_costo) AS usos FROM Maquina, Fase_Maq, Tipo_Maquina, Fase WHERE maq_id = fk_maq_id AND fk_tm_id = tm_id AND fk_f_id = f_id AND ( f_fecha_inicio BETWEEN '"+inicio+"' AND '"+fin+"' OR f_fecha_fin BETWEEN '"+inicio+"' AND '"+fin+"' OR '"+inicio+"' BETWEEN f_fecha_inicio AND f_fecha_fin OR '"+fin+"' BETWEEN f_fecha_inicio AND f_fecha_fin ) GROUP BY fk_maq_id, maq_id, maq_costo, tm_nombre ORDER BY usos DESC LIMIT 1;")
        .then(response => {
            console.log('Generando Reporte 9');
            redata(response.rows,'RYfkNbj',res);
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

reportCtrl.getReporte10 = async (req, res) => {
    const rep = req.params.fecha;
    const fecha = rep.split('+');
    const inicio = fecha[0];
    const fin = fecha[1];
    await client.query("SELECT tp_tipo AS tipo, count(pag_monto) AS usos FROM Tipo_Pago, Pago WHERE tp_numero = fk_tp_numero AND pag_fecha >= '"+inicio+"' AND pag_fecha <= '"+fin+"' GROUP BY tp_tipo ORDER BY usos ASC LIMIT 1;")
        .then(response => {
            console.log('Generando Reporte 10');
            redata(response.rows,'fvOZrtP',res);
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

module.exports = reportCtrl;