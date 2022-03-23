"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_USUARIOS_BUSCAR = void 0;
exports.SQL_USUARIOS_BUSCAR = {
    CARGAR: "SELECT usu.cod_usuario, usu.nombres_usuario, usu.apellidos_usuario \
    FROM usuarios usu \
    WHERE usu.cod_usuario = $1",
};
