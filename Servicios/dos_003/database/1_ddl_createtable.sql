-- 22-02-2022

-- Este Modelo de sintaxis SQL esta orientado para PostgreSQL

-- La pequeña base de datos contiene dos tablas ,facultades y docentes, 
-- donde la relaciones que (una facultad TIENE muchos docentes) y en la tabla docentes se tiene la llave foranea

CREATE TABLE facultades(
    cod_facultad serial NOT NULL,
    nombre_facultad varchar(200) NOT NULL,
    CONSTRAINT PK_FACULTADES PRIMARY KEY (cod_facultad)
);

ALTER TABLE facultades OWNER TO user_node;

CREATE TABLE docentes (
    cod_docente serial NOT NULL,
    cod_facultad int4 NOT NULL,
    documento_docente varchar(200) NOT NULL,
    nombres_docente varchar(200) NOT NULL,
    apellidos_docente varchar(200) NOT NULL,
    tipo_docente int2 NOT NULL CONSTRAINT CK_TIPODOCENTE CHECK(tipo_docente IN(1,2,3,4,5,6)),
    CONSTRAINT PK_DOCENTES PRIMARY KEY (cod_docente)
);

ALTER TABLE docentes OWNER TO user_node;

ALTER TABLE docentes
    ADD CONSTRAINT FK_FACU_DOCE
    FOREIGN KEY (cod_facultad)
    REFERENCES facultades(cod_facultad)
    ON DELETE RESTRICT
    ON UPDATE CASCADE;