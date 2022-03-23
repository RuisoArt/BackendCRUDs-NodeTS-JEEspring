-- 16/03/2022
----------------------------------------------- Roles

CREATE TABLE roles(
    cod_rol serial NOT NULL,
    nombre_rol varchar(200) NOT NULL,
    estado_rol int2 NOT NULL,
    CONSTRAINT PK_ROL PRIMARY KEY (cod_rol)
);
ALTER TABLE roles OWNER TO user_node;
CREATE UNIQUE INDEX indice_roles ON roles (cod_rol);

----------------------------------------------- Usuarios
CREATE TABLE usuarios(
    cod_usuario serial NOT NULL,
    cod_rol int4 NOT NULL,
    documento_usuario varchar(50) NOT NULL,
    tipodocumento_usuario int2 NOT NULL,
    nombres_usuario varchar(60) NOT NULL,
    apellidos_usuario varchar(80) NOT NULL,
    telefono_usuario varchar(50) NOT NULL,
    estado_usuario int2 NOT NULL,
    CONSTRAINT PK_USUARIOS PRIMARY KEY (cod_usuario)
);
CREATE UNIQUE INDEX indice_usuarios ON usuarios(cod_usuario);
ALTER TABLE usuarios OWNER TO user_node;
ALTER TABLE usuarios ADD CONSTRAINT FK_ROL_2_USU FOREIGN KEY (cod_rol)
    REFERENCES roles (cod_rol)
    ON DELETE RESTRICT
    ON UPDATE CASCADE;

----------------------------------------------- Accesos
CREATE TABLE accesos(
    cod_usuario int4 NOT NULL,
    correo_acceso varchar(100) NOT NULL,
    clave_acceso varchar(150) NOT NULL,
    CONSTRAINT PK_ACCESO PRIMARY KEY (cod_usuario)
);
ALTER TABLE accesos OWNER TO user_node;
ALTER TABLE accesos ADD CONSTRAINT FK_USU_2_ACCE FOREIGN KEY (cod_usuario)
    REFERENCES usuarios(cod_usuario)
    ON DELETE RESTRICT
    ON UPDATE CASCADE;

----------------------------------------------- tabla alertas
CREATE TABLE alertas(
    cod_alerta serial NOT NULL,
    cod_usuario int4 NOT NULL,
    dias_alerta int2 NOT NULL,
    meses_alerta int2 NOT NULL,
    titulo_alerta varchar(500) NOT NULL, 
    detalle_alerta text NOT NULL,
    estado_alerta int2 NOT NULL,
    fecha_alerta date NOT NULL,
    CONSTRAINT PK_ALERTA PRIMARY KEY (cod_alerta)
);
CREATE UNIQUE INDEX indice_alertas ON alertas (cod_alerta);
ALTER TABLE alertas OWNER TO user_node;
ALTER TABLE alertas ADD CONSTRAINT FK_USU_2_ALE FOREIGN KEY (cod_usuario)
    REFERENCES usuarios(cod_usuario)
    ON DELETE RESTRICT
    ON UPDATE CASCADE;

----------------------------------------------- tabla Imagenes
CREATE TABLE imagenes(
    cod_imagen serial NOT NULL,
    cod_usuario int4 NOT NULL,
    nombrepublico_imagen varchar(200) NOT NULL,
    nombreprivado_imagen varchar(200) NOT NULL,
    tipo_imagen  varchar(50) NOT NULL,
    tamaño_imagen varchar(50) NOT NULL,
    favorita_imagen int2 NOT NULL,
    CONSTRAINT PK_IMAGENES PRIMARY KEY (cod_imagen)
);
ALTER TABLE imagenes OWNER TO user_node;
CREATE UNIQUE INDEX indice_imagenes ON imagenes(cod_imagen);
ALTER TABLE imagenes ADD CONSTRAINT FK_USU_2_IMA FOREIGN KEY (cod_usuario)
    REFERENCES usuarios(cod_usuario)
    ON DELETE RESTRICT
    ON UPDATE CASCADE;

----------------------------------------------- Ingresos
CREATE TABLE ingresos(
    cod_ingreso serial NOT NULL, 
    cod_usuario int4  NOT NULL,
    fecha_ingreso date NOT NULL,
    hora_ingreso time  NOT NULL,
    CONSTRAINT PK_INGRESOS PRIMARY KEY (cod_ingreso)
);
ALTER TABLE ingresos OWNER TO user_node;
CREATE UNIQUE INDEX indice_ingresos ON ingresos(cod_ingreso);
ALTER TABLE ingresos ADD CONSTRAINT FK_USU_2_ING FOREIGN KEY (cod_usuario)
    REFERENCES usuarios (cod_usuario)
    ON DELETE RESTRICT
    ON UPDATE CASCADE;
