"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_MATERIAS_CREAR = void 0;
exports.SQL_MATERIAS_CREAR = {
    CREAR: 'INSERT INTO materias(nombre_materia, referencia_materia) VALUES($1,$2) RETURNING cod_materia',
};
