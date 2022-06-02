"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_LIBRO_BUSCAR = void 0;
exports.SQL_LIBRO_BUSCAR = {
    BUSCAR: 'SELECT l.id_libro, l.titulo, l.fecha_publicacion, l.codigo, l.isbn, l.id_editorial, dp.id_detalle_prestamos, dp.descripcion \
    FROM libros l \
    INNER JOIN detalle_prestamos dp \
    ON l.id_libro = dp.id_detalle_prestamos \
    WHERE dp.id_detalle_prestamos=$1;'
};
