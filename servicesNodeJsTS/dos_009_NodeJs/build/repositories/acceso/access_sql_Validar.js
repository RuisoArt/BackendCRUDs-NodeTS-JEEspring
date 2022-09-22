"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_ACESSO_VALIDAR = void 0;
exports.SQL_ACESSO_VALIDAR = {
    VALIDAR: 'SELECT ac.cod_acceso,  r.nombre_rol\
    FROM accesos ac \
    INNER JOIN roles r \
    ON ac.cod_rol = r.cod_rol \
    WHERE correo_acceso = $1 and clave_acceso = $2',
};
