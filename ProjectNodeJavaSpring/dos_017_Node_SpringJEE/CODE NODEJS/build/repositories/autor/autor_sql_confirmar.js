"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_AUTOR_CONFIRMAR = void 0;
exports.SQL_AUTOR_CONFIRMAR = {
    CONFIRMAR: "SELECT COUNT(au.id_autor) AS cantidad \
    FROM autores au \
    WHERE lower(au.nombre)=lower($1);"
};
