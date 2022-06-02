"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_PRESTAMO_CREAR = void 0;
exports.SQL_PRESTAMO_CREAR = {
    CREAR: "INSERT INTO prestamos_biblio (fecha_inicio, descripcion, id_cliente) \
    VALUES ($1, $2, $3) RETURNING id_prestamo;"
};
