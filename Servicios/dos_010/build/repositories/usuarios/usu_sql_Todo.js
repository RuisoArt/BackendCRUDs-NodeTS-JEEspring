"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_USUARIOS_TODO = void 0;
exports.SQL_USUARIOS_TODO = {
    TODO: "SELECT usu.cod_usuario, usu.cod_rol, usu.documento_usuario, usu.tipodocumento_usuario \
    ,usu.nombres_usuario, usu.apellidos_usuario, usu.telefono_usuario, usu.estado_usuario \
    FROM usuarios usu",
};
