-- 03-03-2022

----------------------------------------------- tabla programas
CREATE TABLE programas(
    cod_programa serial NOT NULL,
    nombre_programa varchar(200) NOT NULL,
    CONSTRAINT PK_PROGRAMA PRIMARY KEY (cod_programa)
);
CREATE UNIQUE INDEX indice_progra ON programas (nombre_programa);
ALTER TABLE programas OWNER TO user_node;

----------------------------------------------- tabla pensums
CREATE TABLE pensums(
    cod_pensum serial NOT NULL,
    cod_programa int4 NOT NULL,
    nombre_pensum varchar(250) NOT NULL,
    CONSTRAINT PK_PENSUM PRIMARY KEY (cod_pensum)
);
ALTER TABLE pensums OWNER TO user_node;
ALTER TABLE pensums ADD CONSTRAINT FK_COD_PROGRAMA FOREIGN KEY (cod_programa)
    REFERENCES programas(cod_programa)
    ON DELETE RESTRICT
    ON UPDATE CASCADE;

-----------------------------------------------  tabla semestres
CREATE TABLE semestres(
    cod_semestre serial NOT NULL,
    nombre_semestre varchar(200) NOT NULL,
    CONSTRAINT PK_SEMESTRE PRIMARY KEY(cod_semestre)
);
ALTER TABLE semestres OWNER TO user_node;

----------------------------------------------- tabla materias
CREATE TABLE materias(
    cod_materia serial NOT NULL,
    nombre_materia varchar(200) NOT NULL,
    referencia_materia varchar(200) NOT NULL,
    CONSTRAINT PK_MATERIA PRIMARY KEY (cod_materia)
);
ALTER TABLE materias OWNER TO user_node;

----------------------------------------------- materia_pensum
CREATE TABLE materia_pensum(
    cod_pensum int4 NOT NULL,
    cod_materia int4 NOT NULL,
    cod_semestre int4 NOT NULL,
    CONSTRAINT PK_MATERIA_PENSUM PRIMARY KEY (cod_pensum, cod_materia)
);
ALTER TABLE materia_pensum OWNER TO user_node;
ALTER TABLE materia_pensum ADD CONSTRAINT FK_COD_MATERIA FOREIGN KEY (cod_materia)
    REFERENCES materias(cod_materia)
    ON DELETE RESTRICT
    ON UPDATE CASCADE;
ALTER TABLE materia_pensum ADD CONSTRAINT FK_COD_SEMESTRE FOREIGN KEY (cod_semestre)
    REFERENCES semestres(cod_semestre)
    ON DELETE RESTRICT
    ON UPDATE CASCADE;
ALTER TABLE materia_pensum ADD CONSTRAINT FK_COD_PENSUM FOREIGN KEY (cod_pensum)
    REFERENCES pensums(cod_pensum)
    ON DELETE RESTRICT
    ON UPDATE CASCADE;
