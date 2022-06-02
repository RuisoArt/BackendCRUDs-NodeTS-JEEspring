"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_EDIT_CONFIRMAR = void 0;
exports.SQL_EDIT_CONFIRMAR = {
    CONFIRMAR: "SELECT COUNT(edi.id_editorial) AS cantidad \
    FROM editoriales edi \
    WHERE lower(edi.nombre) = lower($1);",
};
