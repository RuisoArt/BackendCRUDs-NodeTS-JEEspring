"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_PRESTAMO_ACT = void 0;
exports.SQL_PRESTAMO_ACT = {
    F5: "UPDATE prestamos_biblio \
    SET fecha_inicio=$2, descripcion=$3, id_cliente=$4 \
    WHERE id_prestamo = $1;"
};
