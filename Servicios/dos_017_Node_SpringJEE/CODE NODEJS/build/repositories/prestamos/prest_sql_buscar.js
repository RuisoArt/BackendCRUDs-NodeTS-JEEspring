"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_PRESTAMO_BUSCAR = void 0;
exports.SQL_PRESTAMO_BUSCAR = {
    BUSCAR: "SELECT id_prestamo, fecha_inicio, descripcion, id_cliente \
    FROM prestamos_biblio \
    WHERE id_prestamo = $1;"
};
