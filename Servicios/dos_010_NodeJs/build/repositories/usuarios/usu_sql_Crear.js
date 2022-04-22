"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_USUARIOS_CREAR = void 0;
exports.SQL_USUARIOS_CREAR = {
    CREAR: "INSERT INTO usuarios(cod_rol, documento_usuario, tipodocumento_usuario \
        , nombres_usuario, apellidos_usuario, telefono_usuario, estado_usuario) \
    VALUES($1, $2, $3, $4, $5, $6, $7) \
    RETURNING cod_usuario",
};
