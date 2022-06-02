"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_LIBRO_CONFIRMAR = void 0;
exports.SQL_LIBRO_CONFIRMAR = {
    CONFIRMAR: "SELECT COUNT(li.id_libro) AS cantidad \
    FROM libros li \
    WHERE lower(li.titulo) = lower($1);",
};
