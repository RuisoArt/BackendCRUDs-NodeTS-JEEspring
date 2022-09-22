"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_SEMESTRES_CREAR = void 0;
exports.SQL_SEMESTRES_CREAR = {
    CREAR: 'INSERT INTO semestres(nombre_semestre) VALUES($1) RETURNING cod_semestre',
};
