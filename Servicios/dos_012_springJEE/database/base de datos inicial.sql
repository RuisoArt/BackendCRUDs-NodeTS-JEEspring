--..............................
--Base de datos inicial
--...............................

--> Se crea una base de datos llamada "test_spring" cuyo usuario es el recien creado "user_spring"

CREATE TABLE facultades(
	cod_facultad SERIAL NOT NULL,
	nombre_facultad VARCHAR(200) NOT NULL,
	CONSTRAINT PK_FACULTAD PRIMARY KEY (cod_facultad)
);
ALTER TABLE facultades OWNER TO user_spring;
--CREATE UNIQUE INDEX indice_facultades ON facultades(nombre_facultad);

CREATE TABLE docentes(
	cod_docente SERIAL NOT NULL,
	cod_facultad int4 NOT NULL,
	documento_docente VARCHAR(200) NOT NULL,
	apellido_docente VARCHAR(200) NOT NULL,
	nombre_docente VARCHAR(200) NOT NULL,
	CONSTRAINT PK_DOCENTES PRIMARY KEY (cod_docente)
);
ALTER TABLE docentes OWNER TO user_spring;

ALTER TABLE docentes ADD CONSTRAINT FK_FACU_2_DOCE FOREIGN KEY (cod_facultad)
	REFERENCES facultades (cod_facultad)
	ON DELETE RESTRICT
	ON UPDATE CASCADE;


INSERT INTO facultades (nombre_facultad) VALUES ('Ingenieria Electronica');
INSERT INTO facultades (nombre_facultad) VALUES ('Ingenieria de Sistemas');
INSERT INTO facultades (nombre_facultad) VALUES ('Ingenieria Mecanica');
INSERT INTO facultades (nombre_facultad) VALUES ('Ingenieria Civil');
INSERT INTO facultades (nombre_facultad) VALUES ('Ingenieria Industrial');

INSERT INTO docentes (cod_facultad,	documento_docente, apellido_docente, nombre_docente)
	VALUES('1','104901','apellido1','nombre1');
INSERT INTO docentes (cod_facultad,	documento_docente, apellido_docente, nombre_docente)
	VALUES('2','104902','apellido2','nombre2');	
INSERT INTO docentes (cod_facultad,	documento_docente, apellido_docente, nombre_docente)
	VALUES('3','104903','apellido3','nombre3');
INSERT INTO docentes (cod_facultad,	documento_docente, apellido_docente, nombre_docente)
	VALUES('4','104904','apellido4','nombre4');
INSERT INTO docentes (cod_facultad,	documento_docente, apellido_docente, nombre_docente)
	VALUES('5','104905','apellido5','nombre5');