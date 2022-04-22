"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_MATERIAS_CONFIRMAR = void 0;
exports.SQL_MATERIAS_CONFIRMAR = {
    CONFIRMAR: 'SELECT COUNT(m.cod_materia) AS cantidad \
    FROM materias m \
    WHERE lower(m.nombre_materia) = lower($1)',
};
