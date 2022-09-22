-- ....................................................Tabla Universidad
CREATE TABLE universidad (
	id_universidad SERIAL NOT NULL,
	nombre_universidad VARCHAR(200) NOT NULL,
	nit_universidad VARCHAR(200) NOT NULL,
	CONSTRAINT PK_UNIVERSIDAD PRIMARY KEY (id_universidad)
);
ALTER TABLE universidad OWNER TO user_spring;

-- ....................................................Tabla Seccional
CREATE TABLE seccional(
	id_seccional SERIAL NOT NULL,
	direccion_seccional VARCHAR(200) NOT NULL,
	nombre_seccional VARCHAR(200) NOT NULL,
	id_universidad INT4  NOT NULL,
	CONSTRAINT PK_SECCIONAL PRIMARY KEY (id_seccional)
);
ALTER TABLE seccional OWNER TO user_spring;
ALTER TABLE seccional ADD CONSTRAINT FK_UNI_SECC 
	FOREIGN KEY (id_universidad)
	REFERENCES universidad (id_universidad)
	ON DELETE RESTRICT ON UPDATE CASCADE;
-- ....................................................Tabla Facultad
CREATE TABLE facultad(
	cod_facultad SERIAL NOT NULL,
	nombre_facultad VARCHAR(200) NOT NULL,
	id_seccional INT4 NOT NULL,
	CONSTRAINT PK_FACULTAD PRIMARY KEY (cod_facultad)
);
ALTER TABLE facultad OWNER TO user_spring;
ALTER TABLE facultad ADD CONSTRAINT FK_SECC_FACU
	FOREIGN KEY (id_seccional)
	REFERENCES seccional (id_seccional)
	ON DELETE RESTRICT ON UPDATE CASCADE;

-- .................................................... Tabla Docente
CREATE TABLE docente(
	cod_docente SERIAL NOT NULL,
	documento_docente VARCHAR(200) NOT NULL,
	nombres_docente VARCHAR(200) NOT NULL,
	apellidos_docente VARCHAR(200) NOT NULL,
	tipo_docente INT NOT NULL,
	cod_facultad INT4 NOT NULL,
	CONSTRAINT PK_DOCENTE PRIMARY KEY (cod_docente)
);
ALTER TABLE docente OWNER TO user_spring;
ALTER TABLE docente ADD CONSTRAINT FK_FACU_DOCE
	FOREIGN KEY (cod_facultad)
	REFERENCES facultad (cod_facultad)
	ON DELETE RESTRICT ON UPDATE CASCADE;

-- .................................................... Tabla Asignaturas
CREATE TABLE asignaturas(
	id_asignatura SERIAL NOT NULL,
	semestre_asignatura INT NOT NULL,
	nombre_asignatura VARCHAR(200) NOT NULL,
	codigo_asignatura INT NOT NULL,
	tipo_asignatura VARCHAR(200) NOT NULL,
	cod_docente INT4 NOT NULL,
	CONSTRAINT PK_ASIGNATURA PRIMARY KEY (id_asignatura)
);
ALTER TABLE asignaturas OWNER TO user_spring;
ALTER TABLE asignaturas ADD CONSTRAINT FK_DOCE_ASIG
	FOREIGN KEY (cod_docente)
	REFERENCES docente (cod_docente)
	ON DELETE RESTRICT ON UPDATE CASCADE;