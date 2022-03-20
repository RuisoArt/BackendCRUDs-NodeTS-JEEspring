"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_ACESSO_VALIDAR = void 0;
exports.SQL_ACESSO_VALIDAR = {
    VALIDAR: 'SELECT cod_acceso \
    FROM accesos \
    WHERE correo_acceso = $1 and clave_acceso = $2',
};
