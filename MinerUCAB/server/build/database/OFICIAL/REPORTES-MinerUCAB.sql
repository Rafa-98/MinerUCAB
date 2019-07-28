---------------Empresa aliada a la que se le realizaron más compras----------------------------------
SELECT ali_nombre AS Aliado, count(fk_ali_id) AS Compras FROM Orden_Compra, Aliado
WHERE ali_id = fk_ali_id
GROUP BY fk_ali_id, ali_nombre
ORDER BY Compras DESC
LIMIT 1;
------------------Fases que presentan retrasos----------------------------------------------------------
SELECT ex_id AS exp, f_numero AS numero,f_fecha_inicio AS inicio,f_fecha_fin AS fin 
FROM Fase, Fase_Conf, Etapa, Explotacion
WHERE fk_fc_clave = fc_clave
AND f_fecha_fin < f_fecha_fin_real
AND (
f_fecha_inicio BETWEEN '2001-01-01' AND '2012-01-01'
OR f_fecha_fin BETWEEN '2001-01-01' AND '2012-01-01'
OR '2001-01-01' BETWEEN f_fecha_inicio AND f_fecha_fin
OR '2012-01-01' BETWEEN f_fecha_inicio AND f_fecha_fin
)
AND fk_eta_id = eta_id
AND fk_ex_id = ex_id;
-----------------Proyecto más costoso por mes----------------------------------------------------------
SELECT ex.ex_id, SUM(fm_costo)+SUM(ef_costo) AS costo, '1922.05-01' AS mes
FROM Explotacion ex, Etapa, Fase, Fase_Maq fm, Emp_Fase ef
WHERE '1922-05-01' >= ex_fecha
AND '1922-05-01' <= (
SELECT f_fecha_fin
FROM Explotacion q, Etapa, Fase
WHERE q.ex_id = ex.ex_id
AND q.ex_id = fk_ex_id
AND eta_id = fk_eta_id
ORDER BY f_fecha_fin DESC
LIMIT 1
)
AND ex.ex_id = fk_ex_id
AND eta_id = fk_eta_id
AND f_id = ef.fk_f_id
AND f_id = fm.fk_f_id
GROUP BY ex.ex_id
ORDER BY costo DESC
LIMIT 1;
-----------------------TOP 10 peores clientes---------------------------------------------------------
SELECT cl_id,cl_nombre AS nombre, cl_apellido AS apellido, sum(ov_total) AS total FROM Cliente, Orden_Venta
WHERE cl_id = fk_cl_id
GROUP BY fk_cl_id, cl_apellido, cl_nombre, cl_id
ORDER BY total
LIMIT 10;
------------------------Etapas y fases por iniciar en un periodo de tiempo-----------------------------
SELECT fc_nombre AS nombre, est_nombre AS estatus, ex_id AS proyecto
FROM Fase f, Fase_Conf, Estatus, Etapa et, Explotacion ex
WHERE f.fk_est_clave = est_clave
AND f.fk_fc_clave = fc_clave
AND f.fk_eta_id = et.eta_id
AND et.fk_ex_id = ex.ex_id
AND f.fk_est_clave = 1
AND (
f_fecha_inicio BETWEEN '2001-01-01' AND '2012-01-01'
OR f_fecha_fin BETWEEN '2001-01-01' AND '2012-01-01'
OR '2001-01-01' BETWEEN f_fecha_inicio AND f_fecha_fin
OR '2012-01-01' BETWEEN f_fecha_inicio AND f_fecha_fin
)
---------------------Empleados que han trabajado más de 2 veces en proyectos en un mismo mes------------------
SELECT em_nombre AS nombre, em_apellido AS apellido, em_salario AS salario
FROM Empleado, Emp_Fase, Fase
WHERE em_id = fk_em_id
AND fk_f_id = f_id
AND '1921-06-01'  BETWEEN f_fecha_inicio AND f_fecha_fin
GROUP BY fk_em_id, em_nombre, em_apellido, em_salario
HAVING count(fk_em_id) > 2
--------------Total de yacimientos en los que trabajó un empleado por periodo de tiempo---------------------
SELECT em_nombre AS nombre, em_apellido AS apellido, y_nombre AS yacimiento, mi_nombre AS mineral FROM Yacimiento,Yac_Min,Explotacion,Etapa,Fase,Emp_Fase,Empleado, Mineral
WHERE em_id = 1
AND fk_em_id = em_id
AND fk_f_id = f_id
AND fk_eta_id = eta_id
AND fk_ex_id = ex_id
AND fk_ym_id = ym_id
AND fk_mi_id = mi_id
AND fk_y_id = y_id
AND (
f_fecha_inicio BETWEEN '2001-01-01' AND '2012-01-01'
OR f_fecha_fin BETWEEN '2001-01-01' AND '2012-01-01'
OR '2001-01-01' BETWEEN f_fecha_inicio AND f_fecha_fin
OR '2012-01-01' BETWEEN f_fecha_inicio AND f_fecha_fin
)
---------------------Presentación del mineral más solicitada por los clientes por año-------------------------
SELECT pre_tipo AS tipo, pre_cantidad AS cantidad, mp_costo AS costo, mi_nombre AS mineral, sum(fm_cantidad) AS total
FROM Presentacion, Mineral, Min_Pre, Fact_Mineral, Orden_Venta
WHERE pre_clave = fk_pre_clave
AND mi_id = fk_mi_id
AND mp_id = fk_mp_id
AND fk_ov_numero = ov_numero
AND ov_fecha >= '2001-01-01'
AND ov_fecha <= '2001-12-31'
GROUP BY fk_mp_id, pre_tipo, pre_cantidad, mi_nombre, mp_costo
ORDER BY total DESC
LIMIT 1;
----------------------------Maquinaria más utilizada en los proyectos por periodo de tiempo--------------------
SELECT maq_id AS numero, tm_nombre AS nombre, maq_costo AS costo, count(fm_costo) AS usos
FROM Maquina, Fase_Maq, Tipo_Maquina, Fase
WHERE maq_id = fk_maq_id
AND fk_tm_id = tm_id
AND fk_f_id = f_id
AND (
f_fecha_inicio BETWEEN '2001-01-01' AND '2012-01-01'
OR f_fecha_fin BETWEEN '2001-01-01' AND '2012-01-01'
OR '2001-01-01' BETWEEN f_fecha_inicio AND f_fecha_fin
OR '2012-01-01' BETWEEN f_fecha_inicio AND f_fecha_fin
)
GROUP BY fk_maq_id, maq_id, maq_costo, tm_nombre
ORDER BY usos DESC
LIMIT 1;
-----------------Tipo de pago menos utilizado en las compras de nuestros clientes por periodo de tiempo----------
SELECT tp_tipo AS tipo, count(pag_monto) AS usos FROM Tipo_Pago, Pago
WHERE tp_numero = fk_tp_numero
AND pag_fecha >= '1922-01-01'
AND pag_fecha <= '1922-12-31'
GROUP BY tp_tipo
ORDER BY usos DESC
LIMIT 1;