"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_LIBRO_CREAR = void 0;
exports.SQL_LIBRO_CREAR = {
    CREAR: "INSERT INTO libros (titulo, fecha_publicacion, codigo, isbn, id_editorial) VALUES ($1,$2,$3,$4,$5) RETURNING id_libro;",
};
