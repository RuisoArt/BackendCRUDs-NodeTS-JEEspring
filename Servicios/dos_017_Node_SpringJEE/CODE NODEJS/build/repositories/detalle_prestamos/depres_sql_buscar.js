"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_DEPRES_BUSCAR = void 0;
exports.SQL_DEPRES_BUSCAR = {
    BUSCAR: "SELECT id_detalle_prestamos, fecha_devolucion, dias_mora, descripcion, fecha_entrega, id_prestamo, id_libro \
    FROM detalle_prestamos \
    WHERE id_detalle_prestamos=$1;"
};
