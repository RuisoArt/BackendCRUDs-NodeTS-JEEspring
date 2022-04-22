-- 01-03-2022

CREATE TABLE partidos(
    id_partido serial NOT NULL,
    nombre_partido varchar(200) NOT NULL,
    CONSTRAINT PK_PARTIDO PRIMARY KEY (id_partido)
);

ALTER TABLE partidos OWNER TO user_node;

CREATE TABLE candidatos(
    id_candidato serial NOT NULL,
    nombre_candidato varchar(200) NOT NULL,
    fecha_nacimiento date NOT NULL,
    eval_candidato numeric(12,2) NOT NULL,
    id_partido int4 NOT NULL,
    CONSTRAINT PK_CANDIDATO PRIMARY KEY (id_candidato)
);

ALTER TABLE candidatos OWNER TO user_node;

ALTER TABLE candidatos
    ADD CONSTRAINT FK_ID_PARTIDO
    FOREIGN KEY (id_partido)
    REFERENCES partidos(id_partido)
    ON DELETE RESTRICT
    ON UPDATE CASCADE;
