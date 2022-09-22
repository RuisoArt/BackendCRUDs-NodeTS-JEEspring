"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_USUARIOS_CONFIRMAR = void 0;
exports.SQL_USUARIOS_CONFIRMAR = {
    CONFIRMAR: "SELECT COUNT(usu.cod_usuario) AS cantidad \
    FROM usuarios usu \
    WHERE lower(usu.nombres_usuario) = lower($1)",
};
