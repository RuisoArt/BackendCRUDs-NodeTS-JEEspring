"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_SEMESTRES_CONFIRMAR = void 0;
exports.SQL_SEMESTRES_CONFIRMAR = {
    CONFIRMAR: 'SELECT COUNT(cod_semestre) AS cantidad \
    FROM semestres \
    WHERE lower(nombre_semestre) = lower($1)',
};
