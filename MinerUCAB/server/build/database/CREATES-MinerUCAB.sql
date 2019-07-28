---------------DATABASE CREATES MINERUCAB-------------------------------
CREATE TABLE Mineral(
    mi_id               SERIAL,
    mi_nombre           VARCHAR(10) NOT NULL,
    mi_tipo             VARCHAR(15) NOT NULL CHECK (mi_tipo IN ('Metal','No Metal')),
    mi_descripcion      VARCHAR(30), 
    mi_conductividad    VARCHAR(12),
    mi_estado           VARCHAR(8),   
    CONSTRAINT PK_Mineral PRIMARY KEY (mi_id)
);

CREATE TABLE Relacion_Min(
	rm_id		SERIAL,
    rm_cantidad NUMERIC(5) NOT NULL,
	fk_mi_id_1	INTEGER	NOT NULL,
	fk_mi_id_2	INTEGER	NOT NULL,
	CONSTRAINT PK_rel_min PRIMARY KEY (rm_id),
	CONSTRAINT FK_rm_min_1 FOREIGN KEY (fk_mi_id_1)
	REFERENCES Mineral (mi_id),
	CONSTRAINT FK_rm_min_2 FOREIGN KEY (fk_mi_id_2)
	REFERENCES Mineral (mi_id)
);

CREATE TABLE Lugar(
	l_clave		SERIAL,
	l_nombre	VARCHAR(30)	NOT NULL,
	l_tipo		VARCHAR(10)	NOT NULL CHECK (l_tipo = 'Estado' OR l_tipo = 'Municipio' OR l_tipo = 'Parroquia'),
	fk_l_clave	INTEGER,
	CONSTRAINT PK_lugar PRIMARY KEY (l_clave),
	CONSTRAINT FK_l_lugar FOREIGN KEY (fk_l_clave)
	REFERENCES Lugar (l_clave)
);

CREATE TABLE Yacimiento(
    y_id        SERIAL,
    y_nombre    VARCHAR(15) NOT NULL,
    y_tamaño    NUMERIC(5)  NOT NULL,
    y_tipo      VARCHAR(9)  NOT NULL CHECK (y_tipo = 'Aloctono' OR y_tipo = 'Autoctono'),
    y_origen    VARCHAR(30) CHECK (y_origen IN ('Terrestre','Acuatico')),
    Y_tipo_transporte   VARCHAR(30) CHECK (y_tipo_transporte IN ('Viento','Agua','Deslizamientos')),
    fk_l_clave  INTEGER NOT NULL,
    CONSTRAINT PK_Yacimiento PRIMARY KEY (y_id),
    CONSTRAINT FK_y_l_clave FOREIGN KEY (fk_l_clave)
    REFERENCES Lugar (l_clave)  
);

CREATE  TABLE Aliado(
    ali_id                  SERIAL,
    ali_nombre              VARCHAR(20) NOT NULL,
    ali_fecha_creacion      DATE    NOT NULL,
    ali_fecha_inaguracion   DATE    NOT NULL,
    ali_descripcion         VARCHAR(30),
    fk_l_clave              INTEGER NOT NULL,
    CONSTRAINT PK_Aliado PRIMARY KEY (ali_id),
    CONSTRAINT FK_ali_l_clave FOREIGN KEY (fk_l_clave)
    REFERENCES Lugar (l_clave)
);

CREATE TABLE Almacen(
    alm_clave       SERIAL,
    alm_nombre      VARCHAR(12) NOT NULL,
    CONSTRAINT PK_Almacen PRIMARY KEY (alm_clave)
);

CREATE TABLE Presentacion(
    pre_clave       SERIAL,
    pre_tipo        VARCHAR(20) NOT NULL,
    pre_descripcion VARCHAR(30),
    CONSTRAINT PK_Presentacion PRIMARY KEY (pre_clave)
);

CREATE TABLE Cliente(
    cl_id       SERIAL,
    cl_nombre   VARCHAR(12) NOT NULL,
    cl_apellido VARCHAR(15) NOT NULL,
    cl_telefono VARCHAR(15) NOT NULL,
    fk_l_clave  INTEGER  NOT NULL,
    CONSTRAINT PK_Cliente PRIMARY KEY (cl_id),
    CONSTRAINT FK_cl_l_clave FOREIGN KEY (fk_l_clave)
    REFERENCES Lugar (l_clave)
);

CREATE TABLE Yac_Min(
    ym_id       SERIAL,
    fk_mi_id    INTEGER NOT NULL,
    fk_y_id     INTEGER NOT NULL,
    CONSTRAINT PK_Yac_Min PRIMARY KEY (ym_id),
    CONSTRAINT FK_ym_mi_id FOREIGN KEY (fk_mi_id)
    REFERENCES Mineral (mi_id),
    CONSTRAINT FK_ym_y_id FOREIGN KEY (fk_y_id)
    REFERENCES Yacimiento (y_id)
);

CREATE TABLE Privilegio(
    pri_clave   SERIAL,
    pri_nombre  VARCHAR(30) NOT NULL,
    CONSTRAINT PK_Privilegio PRIMARY KEY (pri_clave)
);

CREATE TABLE Rol(
    r_clave     SERIAL,
    r_nombre    VARCHAR(15) NOT NULL,
    CONSTRAINT PK_Rol PRIMARY KEY (r_clave)
);

CREATE TABLE Rol_Pri(
    rp_clave    SERIAL,
    fk_pri_clave  INTEGER NOT NULL,
    fk_r_clave  INTEGER NOT NULL,
    CONSTRAINT PK_Rol_Pri PRIMARY KEY (rp_clave),
    CONSTRAINT FK_rp_pri_clave FOREIGN KEY (fk_pri_clave)
    REFERENCES Privilegio (pri_clave),
    CONSTRAINT FK_rp_r_clave FOREIGN KEY (fk_r_clave)
    REFERENCES Rol (r_clave)
);

CREATE TABLE Cargo(
    ca_clave        SERIAL,
    ca_nombre       VARCHAR(20) NOT NULL,
    ca_descripcion  VARCHAR(20) NOT NULL,
    CONSTRAINT PK_Cargo PRIMARY KEY (ca_clave)
);

CREATE TABLE Empleado(
    em_id       SERIAL,
    em_nombre   VARCHAR(12) NOT NULL,
    em_apellido VARCHAR(15) NOT NULL,
    em_salario  NUMERIC(10) NOT NULL,
    fk_l_clave  INTEGER NOT NULL,
    fk_ca_clave INTEGER NOT NULL,
    CONSTRAINT PK_Empleado PRIMARY KEY (em_id),
    CONSTRAINT FK_em_l_clave FOREIGN KEY (fk_l_clave)
    REFERENCES Lugar (l_clave),
    CONSTRAINT FK_em_ca_clave FOREIGN KEY (fk_ca_clave)
    REFERENCES Cargo (ca_clave)
);

CREATE TABLE Usuario(
    u_clave     SERIAL,
    u_nombre    VARCHAR(12) NOT NULL UNIQUE,
    u_password  VARCHAR(30) NOT NULL,
    fk_em_id    INTEGER NOT NULL,
    fk_r_clave  INTEGER NOT NULL,
    CONSTRAINT PK_Usuario PRIMARY KEY (u_clave),
    CONSTRAINT FK_u_em_id FOREIGN KEY (fk_em_id)
    REFERENCES Empleado (em_id),
    CONSTRAINT FK_u_r_clave FOREIGN KEY (fk_r_clave)
    REFERENCES Rol (r_clave)
);

CREATE TABLE Turno(
    t_id            SERIAL,
    t_hora_inicio   TIME NOT NULL,
    t_hora_fin      TIME NOT NULL,
    t_dia           VARCHAR(10) NOT NULL CHECK (t_dia IN ('Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo')),
    CONSTRAINT PK_Turno PRIMARY KEY (t_id)
);

CREATE TABLE Emp_Turno(
    et_id       SERIAL,
    fk_em_id    INTEGER NOT NULL,
    fk_t_id     INTEGER NOT NULL,
    CONSTRAINT PK_Emp_Turno PRIMARY KEY (et_id),
    CONSTRAINT FK_et_em_id  FOREIGN KEY (fk_em_id)
    REFERENCES Empleado (em_id),
    CONSTRAINT FK_et_t_id FOREIGN KEY (fk_t_id)
    REFERENCES Turno (t_id)
);

CREATE TABLE Min_Pre(
    mp_id           SERIAL,
    mp_costo        NUMERIC(7) NOT NULL,
    fk_mi_id        INTEGER NOT NULL,
    fk_pre_clave    INTEGER NOT NULL,
    CONSTRAINT PK_Min_Pre PRIMARY KEY (mp_id),
    CONSTRAINT FK_mp_mi_id FOREIGN KEY (fk_mi_id)
    REFERENCES Mineral (mi_id),
    CONSTRAINT FK_mp_pre_clave FOREIGN KEY (fk_pre_clave)
    REFERENCES Presentacion (pre_clave)
);

CREATE TABLE Orden_Venta(
    ov_numero       SERIAL,
    ov_fecha        DATE NOT NULL,
    ov_total        NUMERIC(10,2) NOT NULL,
    fk_cl_id        INTEGER NOT NULL,
    CONSTRAINT PK_Orden_Venta PRIMARY KEY (ov_numero),
    CONSTRAINT FK_ov_cl_id FOREIGN KEY (fk_cl_id)
    REFERENCES Cliente (cl_id)
);

CREATE TABLE Orden_Compra(
    oc_numero       SERIAL,
    oc_fecha        DATE NOT NULL,
    oc_total        NUMERIC(10,2) NOT NULL,
    fk_ali_id        INTEGER NOT NULL,
    CONSTRAINT PK_Orden_Compra PRIMARY KEY (oc_numero),
    CONSTRAINT FK_oc_ali_id FOREIGN KEY (fk_ali_id)
    REFERENCES Aliado (ali_id)
);

CREATE TABLE Min_Pre_Ali(
    mpa_id          SERIAL,
    fk_mp_id        INTEGER NOT NULL,
    fk_oc_numero    INTEGER NOT NULL,
    mpa_costo       NUMERIC(10,2) NOT NULL,
    mpa_cantidad    INTEGER NOT NULL,
    CONSTRAINT PK_Min_Pre_Ali PRIMARY KEY (mpa_id),
    CONSTRAINT FK_mpa_mp_id FOREIGN KEY (fk_mp_id)
    REFERENCES Min_Pre (mp_id),
    CONSTRAINT FK_mpa_oc_numero FOREIGN KEY (fk_oc_numero)
    REFERENCES Orden_Compra (oc_numero)
);

CREATE TABLE Estatus(
    es_clave        SERIAL,
    es_nombre       VARCHAR(12) NOT NULL,
    CONSTRAINT PK_Estatus PRIMARY KEY (es_clave)
);

CREATE TABLE Min_Alm(
    ma_id           SERIAL,
    ma_cantidad     INTEGER NOT NULL,
    fk_mp_id        INTEGER NOT NULL,
    fk_alm_clave    INTEGER NOT NULL,
    fk_oc_numero    INTEGER,
    fk_ov_numero    INTEGER,
    CONSTRAINT PK_Min_Alm PRIMARY KEY (ma_id),
    CONSTRAINT FK_ma_mp_id FOREIGN KEY (fk_mp_id)
    REFERENCES Min_Pre (mp_id),
    CONSTRAINT FK_ma_alm_clave FOREIGN KEY (fk_alm_clave)
    REFERENCES Almacen (alm_clave),
    CONSTRAINT FK_ma_oc_numero FOREIGN KEY (fk_oc_numero)
    REFERENCES Orden_Compra (oc_numero),
    CONSTRAINT FK_ma_ov_numero FOREIGN KEY (fk_ov_numero)
    REFERENCES Orden_Venta (ov_numero)
);

CREATE TABLE Fact_Mineral(
    fm_id           SERIAL,
    fm_cantidad     INTEGER NOT NULL,
    fm_costo        NUMERIC(10,2) NOT NULL,
    fk_ov_numero    INTEGER NOT NULL,
    fk_mp_id        INTEGER NOT NULL,
    CONSTRAINT PK_Fact_Mineral PRIMARY KEY (fm_id),
    CONSTRAINT FK_fm_ov_numero FOREIGN KEY (fk_ov_numero)
    REFERENCES Orden_Venta (ov_numero),
    CONSTRAINT FK_fm_mp_id FOREIGN KEY (fk_mp_id)
    REFERENCES Min_Pre (mp_id)
);

CREATE TABLE Tipo_Pago(
    tp_numero               SERIAL,
    tp_banco                VARCHAR(30) NOT NULL,
    tp_tipo                 VARCHAR(20) NOT NULL CHECK (tp_tipo = 'Transferencia' OR tp_tipo = 'Tar_credito' OR tp_tipo = 'Cheque' OR tp_tipo = 'Tar_debito'),
    tp_fecha                DATE,
    tp_tipo_tar_cre         VARCHAR(30),
    tp_fecha_vencimiento    DATE,
    tp_numero_cuenta        VARCHAR(30),
    tp_tipo_tar_deb         VARCHAR(30),
    CONSTRAINT PK_Tipo_Pago PRIMARY KEY (tp_numero)
);

CREATE TABLE Pago(
    pag_id          SERIAL,
    pag_monto       NUMERIC(10,2) NOT NULL,
    pag_fecha       DATE NOT NULL,
    fk_tp_numero    INTEGER NOT NULL,
    fk_ov_numero    INTEGER NOT NULL,
    CONSTRAINT PK_Pago PRIMARY KEY (pag_id),
    CONSTRAINT FK_pag_tp_numero FOREIGN KEY (fk_tp_numero)
    REFERENCES Tipo_Pago (tp_numero),
    CONSTRAINT FK_pag_ov_numero FOREIGN KEY (fk_ov_numero)
    REFERENCES Orden_Venta (ov_numero)
);

CREATE TABLE Explotacion(
    ex_id           SERIAL,
    ex_cantidad     NUMERIC(10,2) NOT NULL,
    ex_fecha        DATE,
    fk_ym_id        INTEGER NOT NULL UNIQUE,
    fk_ov_numero    INTEGER,
    CONSTRAINT PK_Explotacion PRIMARY KEY (ex_id),
    CONSTRAINT FK_ex_ym_id FOREIGN KEY (fk_ym_id)
    REFERENCES Yac_Min (ym_id),
    CONSTRAINT FK_ex_ov_numero FOREIGN KEY (fk_ov_numero)
    REFERENCES Orden_Venta (ov_numero)  
);

CREATE TABLE Etapa(
    eta_id          SERIAL,
    eta_numero      INTEGER,
    eta_nombre      VARCHAR(15),
    fk_ex_id        INTEGER,
    CONSTRAINT PK_Etapa PRIMARY KEY (eta_id),
    CONSTRAINT FK_eta_ex_id FOREIGN KEY (fk_ex_id)
    REFERENCES Explotacion (ex_id)
);

CREATE TABLE Fase_Conf(
    fc_clave            SERIAL,
    fc_nombre           VARCHAR(10) NOT NULL,
    fc_dias_duracion    INTEGER NOT NULL,
    CONSTRAINT PK_Fase_Conf PRIMARY KEY (fc_clave)
);

CREATE TABLE Fase(
    f_id            SERIAL,
    eta_id          INTEGER NOT NULL,
    f_numero        INTEGER NOT NULL,
    f_nombre        VARCHAR(15) NOT NULL,
    f_fecha_inicio  DATE NOT NULL,
    f_fecha_fin     DATE NOT NULL,
    fk_fc_clave     INTEGER NOT NULL,
    CONSTRAINT PK_Fase PRIMARY KEY (f_id),
    CONSTRAINT FK_f_fc_clave FOREIGN KEY (fk_fc_clave)
    REFERENCES Fase_Conf (fc_clave)
);

CREATE TABLE Emp_Fase(
    ef_id       SERIAL,
    ef_costo    NUMERIC(10,2) NOT NULL,
    fk_f_id     INTEGER NOT NULL,
    fk_em_id   INTEGER NOT NULL,
    CONSTRAINT PK_Emp_Fase PRIMARY KEY (ef_id),
    CONSTRAINT FK_ef_f_id FOREIGN KEY (fk_f_id)
    REFERENCES Fase (f_id),
    CONSTRAINT FK_ef_emp_id FOREIGN KEY (fk_em_id)
    REFERENCES Empleado (em_id)
);

CREATE TABLE Tipo_Maquina(
    tm_id       SERIAL,
    tm_nombre   VARCHAR(10) NOT NULL,
    CONSTRAINT PK_Tipo_Maquina PRIMARY KEY (tm_id)
);

CREATE TABLE Maquina(
    maq_id      SERIAL,
    maq_costo   NUMERIC(10,2) NOT NULL,
    fk_tm_id    INTEGER NOT NULL,
    CONSTRAINT PK_Maquina PRIMARY KEY (maq_id),
    CONSTRAINT FK_maq_tm_id FOREIGN KEY (fk_tm_id)
    REFERENCES Tipo_Maquina (tm_id)
);

CREATE TABLE Fase_Maq(
    fm_id       SERIAL,
    fm_costo    NUMERIC(10,2) NOT NULL,
    fk_f_id     INTEGER NOT NULL,
    fk_maq_id   INTEGER NOT NULL,
    CONSTRAINT PK_Fase_Maq PRIMARY KEY (fm_id),
    CONSTRAINT FK_fm_f_id FOREIGN KEY (fk_f_id)
    REFERENCES Fase (f_id),
    CONSTRAINT FK_fm_maq_id FOREIGN KEY (fk_maq_id)
    REFERENCES Maquina (maq_id)
);

CREATE TABLE Maq_Conf(
    mc_clave        SERIAL,
    mc_cantidad     INTEGER NOT NULL,
    fk_tm_clave     INTEGER NOT NULL,
    fk_fc_clave     INTEGER NOT NULL,
    CONSTRAINT PK_Maq_Conf PRIMARY KEY (mc_clave),
    CONSTRAINT FK_mc_tm_clave FOREIGN KEY (fk_tm_clave)
    REFERENCES Tipo_Maquina (tm_id),
    CONSTRAINT FK_mc_fc_clave FOREIGN KEY (fk_fc_clave)
    REFERENCES Fase_Conf (fc_clave)
);

CREATE TABLE Conf_Car(
    cc_clave        SERIAL,
    cc_cantidad     INTEGER NOT NULL,
    fk_fc_clave     INTEGER NOT NULL,
    fk_ca_clave     INTEGER NOT NULL,
    CONSTRAINT PK_Conf_Car PRIMARY KEY (cc_clave),
    CONSTRAINT FK_cc_fc_clave FOREIGN KEY (fk_fc_clave)
    REFERENCES Fase_Conf (fc_clave),
    CONSTRAINT FK_cc_ca_clave FOREIGN KEY (fk_ca_clave)
    REFERENCES Cargo (ca_clave)
);

CREATE TABLE Est_Historico(
    eh_clave        SERIAL,
    eh_fecha        DATE NOT NULL,
    es_clave        INTEGER NOT NULL,
    fk_ov_numero    INTEGER,
    fk_ma_id        INTEGER,
    fk_oc_numero    INTEGER,
    fk_fm_id        INTEGER,
    fk_ex_id        INTEGER,
    fk_eta_id       INTEGER,
    fk_f_id         INTEGER,
    fk_ef_id        INTEGER,
    CONSTRAINT PK_Est_Historico PRIMARY KEY (eh_clave),
    CONSTRAINT FK_eh_ov_numero FOREIGN KEY (fk_ov_numero)
    REFERENCES Orden_Venta (ov_numero),
    CONSTRAINT FK_eh_ma_id FOREIGN KEY (fk_ma_id)
    REFERENCES Min_Alm (ma_id),
    CONSTRAINT FK_eh_oc_numero FOREIGN KEY (fk_oc_numero)
    REFERENCES Orden_Compra (oc_numero),
    CONSTRAINT FK_eh_fm_id FOREIGN KEY (fk_fm_id)
    REFERENCES Fase_Maq (fm_id),
    CONSTRAINT FK_eh_ex_id FOREIGN KEY (fk_ex_id)
    REFERENCES Explotacion (ex_id),
    CONSTRAINT FK_eh_eta_id FOREIGN KEY (fk_eta_id)
    REFERENCES Etapa (eta_id),
    CONSTRAINT FK_eh_f_id FOREIGN KEY (fk_f_id)
    REFERENCES Fase (f_id),
    CONSTRAINT FK_eh_ef_id FOREIGN KEY (fk_ef_id)
    REFERENCES Emp_Fase (ef_id)
);