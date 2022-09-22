"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_PENSUMS_CREAR = void 0;
exports.SQL_PENSUMS_CREAR = {
    CREAR: 'INSERT INTO pensums(cod_programa, nombre_pensum) VALUES($1,$2) RETURNING cod_pensum',
};
