"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_ACCESO_CREAR = void 0;
exports.SQL_ACCESO_CREAR = {
    CREAR: 'INSERT INTO accesos(correo_acceso, clave_acceso) VALUES ($1, $2) RETURNING cod_acceso',
};
