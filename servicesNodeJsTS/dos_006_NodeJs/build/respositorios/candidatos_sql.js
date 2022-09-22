"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_CANDIDATOS = void 0;
exports.SQL_CANDIDATOS = {
    CANDIDATO: " SELECT c.id_candidato AS cod, c.nombre_candidato AS nombre, \
    c.fecha_nacimiento AS nacimiento, c.eval_candidato AS evaluacion, \
    p.nombre_partido AS nombrePartido \
    FROM candidatos c \
    INNER JOIN partidos p \
    ON c.id_partido = p.id_partido \
    ORDER BY c.nombre_candidato ASC",
    CREAR: 'INSERT INTO candidatos (nombre_candidato, fecha_nacimiento, eval_candidato, id_partido) \
          VALUES ($1, $2, $3, $4) ',
    CONFIRMAR: 'SELECT COUNT(c.id_candidato) AS cantidad \
              FROM candidatos c \
              WHERE lower(c.nombre_candidato) = lower($1) '
};
