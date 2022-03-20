"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_MATERIAS = void 0;
exports.SQL_MATERIAS = {
    TODO: 'SELECT m.cod_materia, m.nombre_materia, m.referencia_materia \
            FROM materias m',
    CREAR: 'INSERT INTO materias(nombre_materia, referencia_materia) VALUES($1, $2) RETURNING cod_materia',
    CONFIRMAR: 'SELECT COUNT(m.cod_materia) AS cantidad \
                FROM materias m \
                WHERE lower(nombre_materia) = lower($1)'
};
